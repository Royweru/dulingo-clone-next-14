import React from "react";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex flex-col min-h-screen w-full">
      <Header />
      <main className=" flex-1 flex flex-col items-center justify-center w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
