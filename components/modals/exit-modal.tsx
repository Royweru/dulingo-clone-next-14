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
import { useExitModal } from "@/store/use-exit-modal";
import Image from "next/image";

export const ExitModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useExitModal();

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <div>
            <Image
              src={"/mascot_sad.jpg"}
              alt="Masscot"
              height={80}
              width={80}
            />
          </div>
          <DialogTitle className=" text-center font-bold text-2xl">
            Wait don&#39;t go
          </DialogTitle>
          <DialogDescription className=" text-center">
            You &#39;re about to leave the lesson are you sure?
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
              Keep Learning
            </Button>
            <Button
              variant={"dangerOutline"}
              size={"lg"}
              className=" w-full"
              onClick={() => {
                close();
                router.push("/learn");
              }}
            >
              End session
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
