"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/app/ide/_component/Header";
import ProblemInfo from "@/app/ide/_component/ProblemInfo";
import Editor from "@/app/ide/_component/Editor";
import SideBar from "@/app/ide/_component/Sidebar";
import InputOuputBox from "./_component/InputOuputBox";

export default function IDE() {
  return (
    <div className="bg-gray-900 text-white h-[100vh]">
      <div className="flex flex-row">
        <SideBar />
        <div className="flex flex-col">
          <Header />
          <div className="flex flex-row px-[2rem]">
            <ProblemInfo />
            <div className="flex flex-col w-[53vw]">
              <Editor />
              <InputOuputBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
