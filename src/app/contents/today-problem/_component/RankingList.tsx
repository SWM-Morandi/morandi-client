"use client";

import RankingCard from "@/app/contents/today-problem/_component/RankingCard";
import RankingTable from "@/app/contents/today-problem/_component/RankingTable";

import { IoCalendarNumberOutline } from "react-icons/io5";

import { useQuery } from "@tanstack/react-query";
import { getTodayProblemsRanking } from "@/app/contents/today-problem/_apis/getTodayProblems";
import { TodayProblemRankingResponse } from "@/types/todayProblemResponse";

export default function RankingList() {
  const { data } = useQuery<TodayProblemRankingResponse[]>({
    queryKey: ["today-problems", "ranking"],
    queryFn: getTodayProblemsRanking,
  });

  return (
    <div className="flex flex-col justify-start items-start w-full max-w-[80rem] mb-20">
      <div className="flex flex-row justify-center items-center">
        <div className="text-[2rem] font-semibold mr-6">랭킹</div>
        <div className="flex flex-row justify-center items-center">
          <IoCalendarNumberOutline size={35} />
          <div className="ml-3 text-[1.2rem] font-bold">
            2024년 2월 9일 금요일
          </div>
        </div>
      </div>
      <div className="text-gray-500">
        오늘의 문제 기록 중 정답 개수가 많은 순, 풀이 시간이 짧은 순으로 랭킹이
        산정됩니다.
      </div>
      <div className="flex flex-row justify-between w-full max-w-[80rem]">
        {data?.map((data, index) => {
          if (index > 2) return null;
          return <RankingCard {...data} key={index} />;
        })}
      </div>
      <RankingTable />
    </div>
  );
}
