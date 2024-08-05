import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Promo = () => {
  return (
    <div className=" border-2 rounded-xl p-4 space-y-4">
      <div className=" space-y-2">
        <div className=" flex items-center gap-x-2">
          <Image src={"/unlimited.svg"} alt="pro" height={26} width={26} />
          <h3 className=" font-bold text-lg">Upgrade to pro</h3>
        </div>
        <p className=" text-muted-foreground">Get unlimited hearts and more!</p>
      </div>

      <Button asChild variant={"super"} className=" w-full " size={"lg"}>
        <Link href={"/shop"}>Upgrade Today</Link>
      </Button>
    </div>
  );
};
