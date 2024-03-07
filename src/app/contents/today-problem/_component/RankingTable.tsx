import { LuClock4 } from "react-icons/lu";

export default function RankingTable() {
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
      {[1, 2, 3, 4, 5].map((_, index) => (
        <>
          <hr className="w-full border" />
          <div className="flex flex-row items-center justify-center w-full py-4">
            <div className="flex flex-row items-center justify-center font-bold w-[10%]">
              {_}
            </div>
            <div className="flex flex-row items-center justify-center font-bold w-[20%]">
              HELLO
            </div>
            <div className="flex flex-col items-center justify-center w-[10%]">
              <div className=" text-mrd-color-green font-bold">Accept</div>
              <div className="font-bold">0:03</div>
            </div>
            <div className="flex flex-col items-center justify-center w-[10%]">
              <div className=" text-mrd-color-green font-bold">Accept</div>
              <div className="font-bold">0:23</div>
            </div>
            <div className="flex flex-col items-center justify-center w-[10%]">
              <div className=" text-mrd-color-green font-bold">Accept</div>
              <div className="font-bold">1:00</div>
            </div>
            <div className="flex flex-col items-center justify-center w-[10%]">
              <div className=" text-mrd-color-green font-bold">Accept</div>
              <div className="font-bold">1:38</div>
            </div>
            <div className="flex flex-row items-center justify-center w-[30%]">
              <div className="font-bold mr-3">4 Slove</div>
              <div className="font-bold mr-3 text-gray-300">|</div>
              <LuClock4 size={20} color="#ADB5BD" />
              <div className="font-bold ml-2">184min</div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
