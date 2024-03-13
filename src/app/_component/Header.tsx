import { Gugi } from "next/font/google";

import Link from "next/link";
import Image from "next/image";

import MorandiLogo from "@/assets/MorandiLogo.svg";

import { IoPersonSharp } from "react-icons/io5";

const gugi = Gugi({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  return (
    <div
      className={`${gugi.className} flex flex-row justify-center w-full bg-mrd-color-dark`}
    >
      <div className="flex flex-row justify-between items-center w-full max-w-[80rem] px-6 py-6 md:px-0">
        <div className="flex flex-row ">
          <Link href="/" className="flex flex-row justify-center items-center">
            <Image
              src={MorandiLogo}
              width={35}
              alt="Morandi Logo"
              className="mr-2"
            />
            <div className="text-[2rem] text-mrd-color-white">모랜디</div>
          </Link>
          <div className="flex flex-row justify-between items-center text-[1.3rem] font-bold w-[25rem] ml-16 text-mrd-color-white">
            <Link
              href="/"
              className="hover:text-mrd-color-pink transition-all duration-300 ease-in-out"
            >
              오늘의 문제
            </Link>
            <Link
              href="/"
              className="hover:text-mrd-color-pink  transition-all duration-300 ease-in-out"
            >
              랜덤 디펜스
            </Link>
            <Link
              href="/"
              className="hover:text-mrd-color-pink  transition-all duration-300 ease-in-out"
            >
              커스텀 디펜스
            </Link>
          </div>
        </div>
        <Link href="/">
          <IoPersonSharp size={35} color="white" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
