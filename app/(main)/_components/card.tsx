import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  id: number;
  imageSrc: string;
  onClick: (id: number) => void;
  disabled?: boolean;
  active?: boolean;
}
export const Card = ({
  title,
  id,
  imageSrc,
  onClick,
  disabled,
  active,
}: CardProps) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        " h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col p-3 pb-6  items-center justify-between min-h-[217px]  min-w-[200px]",
        active && "pointer-events-none opacity-50"
      )}
    >
      <div className=" min-[24px] w-full flex items-center justify-end ">
        {active && (
          <div className=" rounded-md bg-green-600 flex items-center justify-center p-[1.5]">
            <Check className=" w-4 h-4 stroke-[4]" />
          </div>
        )}
      </div>
      <Image
        src={imageSrc}
        alt={title}
        height={70}
        width={93.33}
        className=" border rounded-lg drop-shadow-md object-cover"
      />
      <p className=" text-neutral-700 text-center font-bold mt-3">{title}</p>
    </div>
  );
};
