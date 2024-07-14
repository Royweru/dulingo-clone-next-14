import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" pl-[256px] h-full">
      <div className="  bg-red-500 h-full">{children}</div>
    </main>
  );
};

export default MainLayout;
