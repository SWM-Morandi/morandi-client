import Image from "next/image";

import { McLaren } from "next/font/google";

import Lottie from "react-lottie-player";
import FirstPlace from "@/app/contents/today-problem/_assets/FirstPlace.json";

const mcLaren = McLaren({
  subsets: ["latin"],
  weight: "400",
});

type Props = {
  title: string;
};

export default function RankingCard({ title }: Props) {
  return (
    <div className="flex flex-col justify-center items-center bg-white drop-shadow-main p-6 rounded-2xl my-8">
      <div className="flex flex-row justify-center items-center mt-4 mb-8">
        <div className="w-[5rem]">
          <Lottie loop animationData={FirstPlace} play />
        </div>
        <div
          className={`${mcLaren.className} flex flex-col justify-center items-center text-[2rem] ml-6`}
        >
          <div className="leading-7">{title}</div>
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