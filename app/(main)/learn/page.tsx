import React from "react";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import { Header } from "./_components/header";
import { UserProgress } from "@/components/user-progress";
const LearnPage = () => {
  return (
    <div className=" flex  gap-[48px] px-6">
      <FeedWrapper>
        <Header title="Cameroon" />
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "Cameroon", imageSrc: "/cm.svg" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
    </div>
  );
};

export default LearnPage;
