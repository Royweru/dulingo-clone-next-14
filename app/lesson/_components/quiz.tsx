"use client";
import { Header } from "./header";
import { challengeOptions, challenges, userSubscription } from "@/db/schema";
import Confetti from "react-confetti";
import { QuestionBubble } from "./question-bubble";
import { Challenge } from "./challenge";
import React, { useState, useTransition } from "react";
import { Footer } from "./footer";
import { upsertChallengeProgress } from "@/actions/challenge-progress";
import { toast } from "sonner";
import { reduceHearts } from "@/actions/user-progress";
import { useAudio, useWindowSize, useMount } from "react-use";
import Image from "next/image";
import { ResultCard } from "./result-card";
import { useRouter } from "next/navigation";
import { useHeartModal } from "@/store/use-hearts-modal";
import { usePracticeModal } from "@/store/use-practice-modal";

interface QuizProps {
  initialPercentage: number;
  initialHearts: number;
  initialLessonId: number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challenge_options?: (typeof challengeOptions.$inferSelect)[];
  })[];
  userSubscription:
    | (typeof userSubscription.$inferSelect & {
        isActive: boolean;
      })
    | null;
}
export const Quiz = ({
  initialPercentage,
  initialHearts,
  initialLessonId,
  initialLessonChallenges,
  userSubscription,
}: QuizProps) => {
  const router = useRouter();

  const { open: openHeartsModal } = useHeartModal();
  const { open: openPracticeModal } = usePracticeModal();

  useMount(() => {
    if (initialPercentage === 100) {
      openPracticeModal();
    }
  });

  const { width, height } = useWindowSize();

  const [correctAudio, _c, correctControls] = useAudio({ src: "/correct.wav" });
  const [finishAudio] = useAudio({ src: "/finish.wav", autoPlay: true });
  const [incorrectAudio, _i, incorrectControls] = useAudio({
    src: "/incorrect.wav",
  });

  const [pending, startTransition] = useTransition();
  const [hearts, setHearts] = useState(initialHearts);
  const [lessonId, setLessonId] = useState(initialLessonId);
  const [percentage, setPercentage] = useState(() => {
    return initialPercentage === 100 ? 0 : initialPercentage;
  });
  const [challenges] = useState(initialLessonChallenges);
  const [activeIndex, setActiveIndex] = useState(() => {
    const uncompletedIndex = challenges.findIndex(
      (challenge) => !challenge.completed
    );
    return uncompletedIndex === -1 ? 0 : uncompletedIndex;
  });
  const [selectedOption, setSelectedOption] = useState<number>();
  const [status, setStatus] = useState<"correct" | "wrong" | "none">("none");
  const challenge = challenges[activeIndex];
  const options = challenge?.challenge_options ?? [];

  const onNext = () => {
    setActiveIndex((current) => current + 1);
  };
  const onContinue = () => {
    if (!selectedOption) return;

    if (status === "wrong") {
      setStatus("none");
      setSelectedOption(undefined);
      return;
    }
    if (status === "correct") {
      onNext();
      setStatus("none");
      setSelectedOption(undefined);
      return;
    }
    const correctOption = options.find((option) => option.correct);

    if (!correctOption) {
      return;
    }

    if (correctOption && correctOption.id === selectedOption) {
      startTransition(() => {
        upsertChallengeProgress(challenge.id)
          .then((respone) => {
            if (respone?.error === "hearts") {
              openHeartsModal();
              return;
            }

            setStatus("correct");
            correctControls.play();
            setPercentage((prev) => prev + 100 / challenges.length);
            if (initialPercentage === 100) {
              setHearts((prev) => Math.min(prev + 1, 5));
            }
          })
          .catch(() => toast.error("Something went wrong please try again"));
      });
    } else {
      startTransition(() => {
        reduceHearts(challenge.id)
          .then((res) => {
            if (res?.error === "hearts") {
              openHeartsModal();
              return;
            }
            setStatus("wrong");
            incorrectControls.play();
            if (!res?.error) {
              setHearts((prev) => Math.max(prev - 1, 0));
            }
          })
          .catch(() => toast.error("Something went wrong please try again!"));
      });
    }
  };

  const onSelect = (id: number) => {
    if (status !== "none") return;

    setSelectedOption(id);
  };

  if (!challenge) {
    return (
      <>
        {finishAudio}
        <Confetti
          recycle={false}
          numberOfPieces={500}
          tweenDuration={10000}
          width={width}
          height={height}
        />
        <div
          className=" flex flex-col gap-y-4 lg:gap-y-8 max-w-lg mx-auto
         text-center items-center justify-center h-full
        "
        >
          <Image
            src={"/finish.jpeg"}
            alt="finished"
            className=" hidden lg:block"
            height={100}
            width={100}
          />
          <Image
            src={"/finish.jpeg"}
            alt="finished"
            className=" block lg:hidden"
            height={50}
            width={50}
          />
          <h1 className=" text-xl lg:text-3xl font-bold text-neutral-700">
            Great job you completed the lesson
          </h1>
          <div className=" flex items-center gap-x-4 w-full">
            <ResultCard variant="points" value={challenges.length * 10} />
            <ResultCard variant="hearts" value={hearts} />
          </div>
        </div>
        <Footer
          lessonId={lessonId}
          status="completed"
          onCheck={() => {
            router.push("/learn");
          }}
        />
      </>
    );
  }
  const title =
    challenge.type === "ASSIST"
      ? "Select the correct meaning"
      : challenge.question;
  return (
    <>
      {correctAudio}
      {incorrectAudio}
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />
      <div className=" flex-1">
        <div className=" h-full flex items-center justify-center">
          <div
            className=" lg:min-h-[350px] lg:w-[600px] w-full px-6 lg:px-0 flex
             flex-col gap-y-12 
            "
          >
            <h1 className=" text-lg lg:text-3xl text-center lg:text-start font-bold text-neutral-700">
              {title}
            </h1>
            <div>
              {challenge.type === "ASSIST" && (
                <QuestionBubble question={challenge.question} />
              )}
              <Challenge
                options={options}
                onSelect={onSelect}
                status={status}
                selectedOption={selectedOption}
                disabled={pending}
                type={challenge.type}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer
        disabled={pending || !selectedOption}
        status={status}
        onCheck={onContinue}
      />
    </>
  );
};
