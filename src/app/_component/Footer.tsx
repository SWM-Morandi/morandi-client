import Link from "next/link";
import Image from "next/image";

import MorandiLogo from "@/assets/MorandiLogo.svg";

import { IoMailOutline } from "react-icons/io5";
import { RiMapPinLine } from "react-icons/ri";
import { SiKakaotalk } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-row justify-center w-full bg-mrd-color-dark">
      <div className="flex flex-row justify-between items-center w-full max-w-[80rem] px-6 py-12 md:px-0">
        <div className="flex flex-col justify-center items-start">
          <Link href="/" className="flex flex-row justify-center items-center">
            <Image src={MorandiLogo} width={25} alt="Morandi Logo" />
            <div className="text-mrd-color-white text-[1.5rem] font-bold ml-2">
              모두의 랜덤 디펜스
            </div>
          </Link>
          <div className="flex flex-row justify-center items-center mt-2">
            <IoMailOutline color="white" />
            <div className="text-mrd-color-white ml-2">
              morandi.swm14@gmail.com
            </div>
          </div>
          <div className="flex flex-row justify-center items-center mt-1">
            <RiMapPinLine color="white" />
            <div className="text-mrd-color-white ml-2">
              테헤란로 311(역삼동) 아남타워빌딩 7층
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <SiKakaotalk className="mr-3" color="#999999" size={40} />
          <FaGithubSquare color="#999999" size={48} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
