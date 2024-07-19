import { Progress } from "@/components/ui/progress";
import { InfinityIcon, X } from "lucide-react";
import Image from "next/image";
import React from "react";

interface HeaderProps {
  hearts: number;
  percentage: number;
  hasActiveSubscription: boolean;
}
export const Header = ({
  hearts,
  percentage,
  hasActiveSubscription,
}: HeaderProps) => {
  return (
    <header
      className=" lg:pt-[50px] pt-[20px] px-10 flex gap-x-7
     items-center justify-between max-w-[1140px] mx-auto w-full
    "
    >
      <X
        onClick={() => {}}
        className=" text-slate-500 hover:opacity-75 transition cursor-pointer"
      />
      <Progress value={percentage} />
      <div className=" text-rose-500 flex items-center font-bold">
        <Image
          src={"/heart.png"}
          height={28}
          width={28}
          alt="Heart"
          className=" mr-2"
        />
        {hasActiveSubscription ? (
          <InfinityIcon className=" w-6 h-6 stroje-[3]" />
        ) : (
          hearts
        )}
      </div>
    </header>
  );
};
