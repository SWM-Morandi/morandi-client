import { McLaren } from "next/font/google";

import Lottie from "react-lottie-player";
import Problem1Icon from "@/app/contents/today-problem/_assets/Problem1Icon.json";

const mcLaren = McLaren({
  subsets: ["latin"],
  weight: "400",
});

type Props = {
  title: string;
};

export default function TodayProblemCard({ title }: Props) {
  return (
    <div className="flex flex-col justify-center items-center bg-white drop-shadow-main p-6 rounded-2xl mr-8 my-8">
      <div className="flex flex-row justify-center items-center">
        <div className="w-[9rem]">
          <Lottie loop animationData={Problem1Icon} play />
        </div>
        <div className={`${mcLaren.className} text-[1.5rem] mr-6`}>{title}</div>
      </div>
      <div className="flex flex-row justify-around items-center w-[20rem] bg-mrd-color-gray p-4 rounded-xl">
        <div className="flex flex-col justify-center items-center">
          <div>난이도</div>
          <div>초급</div>
        </div>
        <hr className="h-[3rem] border" />
        <div className="flex flex-col justify-center items-center">
          <div>제출자 수</div>
          <div>36</div>
        </div>
        <hr className="h-[3rem] border" />
        <div className="flex flex-col justify-center items-center">
          <div>정답자 수</div>
          <div>19</div>
        </div>
      </div>
    </div>
  );
}
