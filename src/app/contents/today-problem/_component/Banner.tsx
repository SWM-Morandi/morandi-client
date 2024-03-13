import Image from "next/image";

import BannerIcon from "@/app/contents/today-problem/_assets/BannerIcon.svg";

export default function Banner() {
  return (
    <div className="flex flex-col items-center justify-center w-[100vw] bg-[#E8E5AF] py-12">
      <Image src={BannerIcon} alt="Banner Icon" />
      <div className="text-black text-[4rem] font-semibold">오늘의 문제</div>
      <div className="text-black text-[1.2rem] font-semibold">
        오늘의 문제는 매일 업데이트 됩니다. 오늘의 문제를 꾸준히 풀어보면서
        실력을 늘려보세요!
      </div>
    </div>
  );
}
