import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className=" hidden lg:block h-20 border-t-2 w-full p-2 border-slate-200 ">
      <div className=" lg:max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size={"lg"} variant={"ghost"} className=" w-full">
          <Image
            src={"/KE.svg"}
            alt="Kenyan"
            height={32}
            width={40}
            className=" mr-4 rounded-md"
          />
          Kenian
        </Button>
        <Button size={"lg"} variant={"ghost"} className=" w-full">
          <Image
            src={"/cm.svg"}
            alt="cameroon"
            height={32}
            width={40}
            className=" mr-4 rounded-md"
          />
          Cameroon
        </Button>
        <Button size={"lg"} variant={"ghost"} className=" w-full">
          <Image
            src={"/JP.svg"}
            alt="japanese"
            height={32}
            width={40}
            className=" mr-4 rounded-md"
          />
          Japanese
        </Button>
        <Button size={"lg"} variant={"ghost"} className=" w-full">
          <Image
            src={"/IT.svg"}
            alt="Itlian"
            height={32}
            width={40}
            className=" mr-4 rounded-md"
          />
          Italian
        </Button>
        <Button size={"lg"} variant={"ghost"} className=" w-full">
          <Image
            src={"/ENG.svg"}
            alt="english"
            height={32}
            width={40}
            className=" mr-4 rounded-md"
          />
          English
        </Button>
      </div>
    </footer>
  );
};
