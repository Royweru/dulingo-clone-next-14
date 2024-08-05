import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";
import { courses, userProgress } from "@/db/schema";
interface UserProgressProps {
  activeCourse: typeof courses.$inferInsert;
  hearts: typeof userProgress.$inferSelect.hearts;
  points: typeof userProgress.$inferSelect.points;
  hasActiveSubscription: boolean;
}
export const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription,
}: UserProgressProps) => {
  return (
    <div className=" flex items-center justify-between w-full gap-x-2">
      <Link href={"/courses"}>
        <Button variant={"ghost"}>
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            width={32}
            height={32}
            className=" rounded-md border"
          />
        </Button>
      </Link>
      <Link href={"/shop"}>
        <Button variant={"ghost"} className=" text-orange-500">
          <Image
            src={"/points.svg"}
            alt="points"
            width={28}
            height={28}
            className=" mr-2"
          />
          {points}
        </Button>
      </Link>
      <Link href={"/shop"}>
        <Button variant={"ghost"} className=" text-rose-500">
          <Image
            src={"/heart.svg"}
            alt="heart"
            height={22}
            width={22}
            className=" mr-2"
          />
          {hasActiveSubscription ? (
            <InfinityIcon className=" w-4 h-4 stroke-[3]" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  );
};
