"use client";
import React from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
interface SidebarItemProps {
  label: string;
  iconSrc: string;
  href: string;
}
export const SidebarItem = ({ label, iconSrc, href }: SidebarItemProps) => {
  const pathName = usePathname();
  const active = pathName === href;
  return (
    <Button
      variant={active ? "sidebarOutline" : "sidebar"}
      className=" justify-start h-[52px]"
      asChild
    >
      <Link href={href}>
        <Image
          src={iconSrc}
          alt={label}
          className=" mr-5"
          height={32}
          width={32}
        />
        {label}
      </Link>
    </Button>
  );
};
