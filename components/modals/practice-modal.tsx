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
} from "../ui/dialog";

import Image from "next/image";
import { usePracticeModal } from "@/store/use-practice-modal";

export const PracticeModal = () => {
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = usePracticeModal();

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <div className=" flex items-center w-full justify-center mb-5">
            <Image src={"/heart.svg"} alt="Heart" height={100} width={100} />
          </div>
          <DialogTitle className=" text-center font-bold text-2xl">
            Practice lesson
          </DialogTitle>
          <DialogDescription className=" text-center">
            Use practice lessons to regain hearts and points. You cannot loose
            hearts or points in practice lessons.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className=" mb-4">
          <div className=" flex flex-col gap-y-4 w-full">
            <Button
              variant={"primary"}
              size={"lg"}
              className=" w-full"
              onClick={close}
            >
              I understand
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
