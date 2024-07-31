import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { quests } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type props = {
  points: number;
};
export const Quests = ({ points }: props) => {
  return (
    <div className=" border-2 rounded-xl p-4 space-y-4">
      <div className=" flex items-center justify-between w-full space-y-2">
        <h3 className=" font-bold text-lg">Quests</h3>
        <Link href={"/quests"}>
          <Button size={"sm"} variant={"primaryOutline"}>
            View All
          </Button>
        </Link>
      </div>
      <ul className=" w-full space-y-4">
        {quests.map((quest) => {
          const progress = (points / quest.value) * 100;

          return (
            <div
              key={quest.title}
              className=" flex items-center w-full p-4 border-t-2 gap-x-4"
            >
              <Image src={"/points.png"} alt="points" width={40} height={40} />
              <div className=" flex flex-col gap-y-2 w-full">
                <p className=" text-neutral-700  text-sm font-bold">
                  {quest.title}
                </p>
                <Progress value={progress} className=" h-3" />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
