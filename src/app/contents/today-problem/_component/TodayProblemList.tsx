"use client";

import { useState } from "react";

import TodayProblemCard from "@/app/contents/today-problem/_component/TodayProblemCard";
import problemListStyle from "./todayProblemList.module.css";

export default function TodayProblemList() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const handleMouseDown = (e: any) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setStartY(e.pageY);
    setScrollLeft(e.currentTarget.scrollLeft);
    setScrollTop(e.currentTarget.scrollTop);
  };

  const handleMouseMove = (e: any) => {
    if (!isDragging) return;
    const x = e.pageX;
    const y = e.pageY;
    const distanceX = x - startX;
    const distanceY = y - startY;
    e.currentTarget.scrollLeft = scrollLeft - distanceX;
    e.currentTarget.scrollTop = scrollTop - distanceY;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="flex flex-col justify-center items-start my-20">
      <div className="ml-[calc((100vw-80rem)/2)] text-[2rem] font-semibold">
        오늘의 문제 목록
      </div>
      <div className="ml-[calc((100vw-80rem)/2)] text-gray-500">
        오늘의 문제는 매일 5문제씩 업데이트 됩니다. 오늘의 문제를 푼 기록은 랭킹
        및 스트릭에 반영됩니다.
      </div>
      <div
        className={`${problemListStyle.scroll} ${problemListStyle.draggdisable} flex flex-row justify-start w-[100vw] items-start overflow-x-scroll cursor-pointer`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className="mr-[calc((100vw-80rem)/2)]" />
        <TodayProblemCard title={"PROBLEM 1"} />
        <TodayProblemCard title={"PROBLEM 2"} />
        <TodayProblemCard title={"PROBLEM 3"} />
        <TodayProblemCard title={"PROBLEM 4"} />
        <div className="mr-[calc((100vw-80rem)/2)]" />
      </div>
    </div>
  );
}
