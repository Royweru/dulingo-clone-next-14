import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <header className=" h-20 w-full border-b-2 border-slate-200 px-4">
      <div className=" h-full mx-auto lg:max-w-screen-lg flex justify-between items-center">
        <div className=" pb-7 pl-4 pt-8 flex items-center gap-x-3">
          <Image src={"/logo.png"} width={40} height={40} alt="" />
          <h1 className=" text-2xl  font-extrabold text-green-600 tracking-wide">
            Lingo
          </h1>
        </div>
        <ClerkLoading>
          <Loader className=" w-5 h-5 animate-spin text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant={"ghost"}>Login</Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};
