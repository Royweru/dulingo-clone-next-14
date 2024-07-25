"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useRouter } from "next/navigation";
import { useHeartModal } from "@/store/use-hearts-modal";
import Image from "next/image";

export const HeartsModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useHeartModal();
  const onClick = () => {
    close();
    router.push("/store");
  };
  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <div className=" flex items-center w-full justify-center mb-5">
            <Image
              src={"/mascot_bad.jpeg"}
              alt="Masscot"
              height={80}
              width={80}
            />
          </div>
          <DialogTitle className=" text-center font-bold text-2xl">
            You ran out of hearts!
          </DialogTitle>
          <DialogDescription className=" text-center">
            Get pro unlimited hearts, or purchase them in store.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className=" mb-4">
          <div className=" flex flex-col gap-y-4 w-full">
            <Button
              variant={"primary"}
              size={"lg"}
              className=" w-full"
              onClick={onClick}
            >
              Get unlimited hearts
            </Button>
            <Button
              variant={"primaryOutline"}
              size={"lg"}
              className=" w-full"
              onClick={close}
            >
              No thanks
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
