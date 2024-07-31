import { auth } from "@clerk/nextjs/server";
import { Fascinate } from "next/font/google";

const whiteListed = [
  "user_2jK2Czag5dUPMBx5wSZe3Q0VvIQ",
  "user_2jGWfC0LvKSSdrwMcbmVUHeCTp9",
  "user_2j8Yvh7e1A5117b6JOTMGKFXPQY",
];
export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) return false;

  return whiteListed.indexOf(userId) !== -1;
};
