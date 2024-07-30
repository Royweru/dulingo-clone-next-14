"use client";
import { refillHearts } from "@/actions/user-progress";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useTransition } from "react";
import { toast } from "sonner";

type ItemsProps = {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};
export const POINTS_TO_REFILL = 10;
export const Items = ({
  hearts,
  points,
  hasActiveSubscription,
}: ItemsProps) => {
  const [pending, startTransition] = useTransition();

  const onRefillHearts = () => {
    if (pending || hearts === 5 || points < POINTS_TO_REFILL) return;

    startTransition(() => {
      refillHearts().catch(() => toast.error("Something went wrong"));
    });
  };
  return (
    <ul className=" w-full">
      <div className=" flex items-center w-full p-4 gap-x-4 border-t-2">
        <Image src={"/heart.png"} alt="heart" height={60} width={60} />
        <div className=" flex-1">
          <p className=" text-neutral-700 text-base lg:text-xl">
            Refill hearts
          </p>
        </div>
        <Button onClick={onRefillHearts} disabled={hearts === 5}>
          {hearts === 5 ? (
            "Full"
          ) : (
            <div className=" flex items-center">
              <Image src={"/points.png"} alt="" height={20} width={20} />
              <p>{POINTS_TO_REFILL}</p>
            </div>
          )}
        </Button>
      </div>
    </ul>
  );
};
