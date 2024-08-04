import Image from "next/image";
import React from "react";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const MarketingPage = () => {
  return (
    <div
      className=" max-w-[998px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center
     p-4 gap-2"
    >
      <div className=" relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image fill src={"/hero.svg"} alt="" />
      </div>
      <div className=" flex flex-col items-center gap-y-8">
        <h1
          className=" text-xl lg:text-3xl font-semibold tracking-wide
            text-neutral-600 max-w-[480px] text-center"
        >
          Learn,practice and master languages with lingo
        </h1>
        <div className=" space-y-4 flex flex-col w-full items-center max-w-[330px]">
          <ClerkLoading>
            <Loader className=" w-5 h-5 animate-spin text-muted-foreground" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal">
                <Button variant="secondary" className=" w-full">
                  Get started
                </Button>
              </SignUpButton>
              <SignInButton mode="modal">
                <Button variant={"primaryOutline"} className=" w-full">
                  Already have an account?
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button variant={"secondary"} asChild className="w-full">
                <Link href={"/learn"}>Continue learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;
