import Image from "next/image";
import CodingSH from "@/app/ide/_asset/CodingSH.svg";

export default function SideBar({}: {}) {
  return (
    <div className="flex flex-col items-center w-[12vw] h-[100vh] bg-[#2E3642]">
      <Image src={CodingSH} alt="Icon" className="mt-6" />
      <hr className=" border-[1px] border-gray-500  w-[4rem] mt-6 mb-8" />

      {[1, 2, 3, 4].map((_, idx) => (
        <div
          className="flex flex-col items-center justify-center mb-[1rem] "
          key={idx + 100}
        >
          <div
            className={`flex flex-col items-center justify-center mb-1 h-[3.5rem] w-[4rem] text-[1.3rem] font-bold border border-gray-500 text-gray-100 rounded-xl  cursor-pointer`}
          >
            {idx + 1}
          </div>
          <div className={`text-[0.9rem] text-white text-opacity-30`}>
            미해결
          </div>
        </div>
      ))}
    </div>
  );
}
