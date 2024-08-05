import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className=" hidden lg:block h-20 border-t-2 w-full p-2 border-slate-200 ">
      <div className=" lg:max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size={"lg"} variant={"ghost"} className=" w-full">
          <Image
            src={"/es.svg"}
            alt="Espanyol"
            height={32}
            width={40}
            className=" mr-4 rounded-md"
          />
          Spanyol
        </Button>
        <Button size={"lg"} variant={"ghost"} className=" w-full">
          <Image
            src={"/fr.svg"}
            alt="cameroon"
            height={32}
            width={40}
            className=" mr-4 rounded-md"
          />
          French
        </Button>
        <Button size={"lg"} variant={"ghost"} className=" w-full">
          <Image
            src={"/jp.svg"}
            alt="japanese"
            height={32}
            width={40}
            className=" mr-4 rounded-md"
          />
          Japanese
        </Button>
        <Button size={"lg"} variant={"ghost"} className=" w-full">
          <Image
            src={"/it.svg"}
            alt="Itlian"
            height={32}
            width={40}
            className=" mr-4 rounded-md"
          />
          Italian
        </Button>
        <Button size={"lg"} variant={"ghost"} className=" w-full">
          <Image
            src={"/hr.svg"}
            alt="english"
            height={32}
            width={40}
            className=" mr-4 rounded-md"
          />
          Colombia
        </Button>
      </div>
    </footer>
  );
};
