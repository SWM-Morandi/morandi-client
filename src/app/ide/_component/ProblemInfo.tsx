import ScrollStyle from "./ScrollStyle.module.css";

export default function ProblemInfo() {
  return (
    <div
      className={`flex flex-col w-[35vw] h-[90vh] mr-[1rem] bg-[#2E3642] rounded-2xl overflow-auto ${ScrollStyle.scroll}`}
    >
      <div className="p-[1.5rem]">
        <div className="text-[20px] mb-[1rem]">1번. 김상엽 문제</div>
        <hr className="text-gray-700"></hr>
        <div className="text-[18px] my-[1rem]">문제</div>
        <div className="bg-gray-900 px-[1rem] pt-[1rem] pb-[0.5rem] rounded-xl">
          문제 설명 ......... 문제 설명 ......... 문제 설명 ......... 문제 설명
          ......... 문제 설명 ......... 문제 설명 ......... 문제 설명 .........
          문제 설명 ......... 문제 설명 ......... 문제 설명 ......... 문제 설명
          ......... 문제 설명 ......... 문제 설명 ......... 문제 설명 .........
          문제 설명 ......... 문제 설명 ......... 문제 설명 ......... 문제 설명
          ......... 문제 설명 ......... 문제 설명 ......... 문제 설명 .........
          문제 설명 ......... 문제 설명 ......... 문제 설명 ......... 문제 설명
          ......... 문제 설명 ......... 문제 설명 ......... 문제 설명 .........
          문제 설명 ......... 문제 설명 .........
        </div>
        <div className="text-[20px] my-[1rem]">입력</div>
        <div className="bg-gray-900 px-[1rem] pt-[1rem] pb-[0.5rem] rounded-xl">
          첫째 줄에 어쩌구 저쩌구...
        </div>
        <div className="text-[20px] my-[1rem]">출력</div>
        <div className="bg-gray-900 px-[1rem] pt-[1rem] pb-[0.5rem] rounded-xl">
          최댓값 어쩌구 저쩌구..
        </div>
        <div className="flex flex-col my-[1rem]">
          {[
            { input: 3, output: 3 },
            { input: 3, output: 3 },
            { input: 3, output: 3 },
          ].map((sample, idx) => (
            <>
              <div
                className="flex flex-row justify-between w-[100%] mb-[1rem]"
                key={idx + 300}
              >
                <div className="w-[48%] h-[100%]">
                  <div className="flex flex-row">
                    <div className="mb-[1rem]">예제 입력 {idx + 1}</div>
                  </div>
                  <div className="bg-gray-900 w-[100%] p-[1rem] mb-[1rem] rounded-xl">
                    <div className="mb-[0.2rem]" key={idx + 400}>
                      {sample.input}
                    </div>
                  </div>
                </div>
                <div className="w-[48%] h-[100%]">
                  <div className="mb-[1rem]">예제 출력 {idx + 1}</div>
                  <div className="bg-gray-900 w-[100%] p-[1rem] mb-[1rem] rounded-xl">
                    {sample.output}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
