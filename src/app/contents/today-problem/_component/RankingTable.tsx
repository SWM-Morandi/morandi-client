import { LuClock4 } from "react-icons/lu";

import { useQuery } from "@tanstack/react-query";
import { getTodayProblemsRanking } from "@/app/contents/today-problem/_apis/getTodayProblems";
import { TodayProblemRankingResponse } from "@/types/todayProblemResponse";

export default function RankingTable() {
  const { data } = useQuery<TodayProblemRankingResponse[]>({
    queryKey: ["today-problems", "ranking"],
    queryFn: getTodayProblemsRanking,
  });

  return (
    <div className="flex flex-col justify-center items-center bg-white drop-shadow-main rounded-2xl w-full border">
      <div className="flex flex-row items-center justify-center w-full py-4">
        <div className="flex flex-row items-center justify-center w-[10%]">
          순위
        </div>
        <div className="flex flex-row items-center justify-center w-[20%]">
          닉네임
        </div>
        <div className="flex flex-row items-center justify-center w-[10%]">
          1
        </div>
        <div className="flex flex-row items-center justify-center w-[10%]">
          2
        </div>
        <div className="flex flex-row items-center justify-center w-[10%]">
          3
        </div>
        <div className="flex flex-row items-center justify-center w-[10%]">
          4
        </div>
        <div className="flex flex-row items-center justify-center w-[30%]">
          맞은 문제 수/소요시간
        </div>
      </div>
      {data?.map((data, index) => (
        <div className="w-full" key={index}>
          <hr className="w-full border" />
          <div className="flex flex-row items-center justify-center w-full py-4">
            <div className="flex flex-row items-center justify-center font-bold w-[10%]">
              {data.rank}
            </div>
            <div className="flex flex-row items-center justify-center font-bold w-[20%]">
              {data.nickname}
            </div>
            {data.problemSolvedInfo.map((info, index) => (
              <div
                className="flex flex-col items-center justify-center w-[10%]"
                key={index}
              >
                <div className=" text-mrd-color-green font-bold">
                  {info.isCorrect ? "Accept" : "Wrong"}
                </div>
                <div className="font-bold">{info.solvedTime}</div>
              </div>
            ))}
            <div className="flex flex-row items-center justify-center w-[30%]">
              <div className="font-bold mr-3">
                {data.correctAllNumber} Slove
              </div>
              <div className="font-bold mr-3 text-gray-300">|</div>
              <LuClock4 size={20} color="#ADB5BD" />
              <div className="font-bold ml-2">{data.solvedAllTime}min</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
