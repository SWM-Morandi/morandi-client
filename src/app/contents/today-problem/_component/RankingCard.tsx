"use client";

import { McLaren } from "next/font/google";
import dynamic from "next/dynamic";

import FirstPlace from "@/app/contents/today-problem/_assets/FirstPlace.json";
import SecondPlace from "@/app/contents/today-problem/_assets/SecondPlace.json";
import ThridPlace from "@/app/contents/today-problem/_assets/ThirdPlace.json";
import { TodayProblemRankingResponse } from "@/types/todayProblemResponse";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

const mcLaren = McLaren({
  subsets: ["latin"],
  weight: "400",
});

export default function RankingCard(props: TodayProblemRankingResponse) {
  return (
    <div className="flex flex-col justify-center items-center bg-white drop-shadow-main p-6 rounded-2xl my-8">
      <div className="flex flex-row justify-center items-center mt-4 mb-8">
        <div className="w-[5rem]">
          {(() => {
            switch (props.rank) {
              case 1:
                return <Lottie loop animationData={FirstPlace} play />;
              case 2:
                return <Lottie loop animationData={SecondPlace} play />;
              case 3:
                return <Lottie loop animationData={ThridPlace} play />;
              default:
                return null;
            }
          })()}
        </div>
        <div
          className={`${mcLaren.className} flex flex-col justify-center items-center text-[2rem] ml-6`}
        >
          {(() => {
            switch (props.rank) {
              case 1:
                return <div className="leading-7">1ST</div>;
              case 2:
                return <div className="leading-7">2ND</div>;
              case 3:
                return <div className="leading-7">3RD</div>;
              default:
                return null;
            }
          })()}
          <div className="leading-7">PLACE</div>
        </div>
      </div>
      <div className="flex flex-row justify-around items-center w-[20rem] bg-mrd-color-gray p-4 rounded-xl">
        <div className="flex flex-col justify-center items-center">
          <div>닉네임</div>
          <div>HELLO</div>
        </div>
        <hr className="h-[3rem] border" />
        <div className="flex flex-col justify-center items-center">
          <div>정답 개수</div>
          <div>4</div>
        </div>
        <hr className="h-[3rem] border" />
        <div className="flex flex-col justify-center items-center">
          <div>풀이 시간</div>
          <div>273분</div>
        </div>
      </div>
    </div>
  );
}
