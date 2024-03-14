"use client";

import { useState } from "react";

import ScrollStyle from "./ScrollStyle.module.css";

export default function InputOuputBox() {
  const [flag, setFlag] = useState(false);

  const [userInput, setUserInput] = useState("");

  return (
    <>
      <div className="flex flex-row ml-[0.5rem] mt-[1rem] mb-[0.5rem]">
        <button
          onClick={() => {
            setFlag(false);
          }}
          className={`${flag ? "text-[#FFFFFF]" : "text-[#12AC79]"} mr-3`}
        >
          입력하기
        </button>
        <button
          onClick={() => {
            setFlag(true);
          }}
          className={`${flag ? "text-[#12AC79]" : "text-[#FFFFFF]"}`}
        >
          출력결과
        </button>
      </div>
      <div
        className={`h-[24vh] w-full mb-[1rem] bg-[#2E3642] p-[1rem] rounded-xl overflow-y-auto overflow-x-hidden ${ScrollStyle.scroll}`}
      >
        {flag ? (
          <div className={`whitespace-pre-wrap w-full break-all`}>
            출력 테스트
          </div>
        ) : (
          <textarea
            id="code-inp"
            onChange={(e) => setUserInput(e.target.value)}
            className={`bg-[#2E3642] w-full h-[97%] text-white focus:outline-0 resize-none ${ScrollStyle.scroll}`}
          ></textarea>
        )}
      </div>
      <div className="flex flex-row justify-end items-center">
        <button className="h-[2rem] w-[6rem] border-2 border-white rounded-xl">
          실행하기
        </button>
        <div className="w-[1rem]" />
        <button className="h-[2rem] w-[6rem] bg-[#F04452] rounded-xl">
          예제결과
        </button>
        <div className="w-[1rem]" />
        <button className="h-[2rem] w-[6rem] bg-[#12AC79] rounded-xl">
          제출하기
        </button>
      </div>
    </>
  );
}
