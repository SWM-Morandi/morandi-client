import dynamic from "next/dynamic";
import { McLaren } from "next/font/google";

import Problem1Icon from "@/app/contents/today-problem/_assets/Problem1Icon.json";
import Problem2Icon from "@/app/contents/today-problem/_assets/Problem2Icon.json";
import Problem3Icon from "@/app/contents/today-problem/_assets/Problem3Icon.json";
import Problem4Icon from "@/app/contents/today-problem/_assets/Problem4Icon.json";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

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
        <div className="h-[10rem] w-[9rem]">
          {(() => {
            switch (title) {
              case "PROBLEM 1":
                return <Lottie loop animationData={Problem1Icon} play />;
              case "PROBLEM 2":
                return <Lottie loop animationData={Problem2Icon} play />;
              case "PROBLEM 3":
                return <Lottie loop animationData={Problem3Icon} play />;
              case "PROBLEM 4":
                return <Lottie loop animationData={Problem4Icon} play />;
              default:
                return null;
            }
          })()}
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
