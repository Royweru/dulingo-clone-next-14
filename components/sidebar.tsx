import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
type Props = {
  className?: string;
};
export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        " flex   h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href={"/learn"}>
        <div className=" pb-7 pl-4 pt-8 flex items-center gap-x-3">
          <Image src={"/logo.png"} width={40} height={40} alt="" />
          <h1 className=" text-2xl  font-extrabold text-green-600 tracking-wide">
            Lingo
          </h1>
        </div>
      </Link>
      <div className=" flex flex-col gap-y-2 flex-1 ">
        <SidebarItem label="Learn" href="/learn" iconSrc="/learn.png" />
        <SidebarItem
          label="Leaderboard"
          href="/leaderboard"
          iconSrc="/leaderboard.png"
        />
        <SidebarItem label="quests" href="/quests" iconSrc="/quests.png" />
        <SidebarItem label="shop" href="/shop" iconSrc="/shop.png" />
      </div>
      <div className=" p-4 ">
        <ClerkLoading>
          <Loader className=" h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
