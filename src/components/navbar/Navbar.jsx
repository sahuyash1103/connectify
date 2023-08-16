'use client';
import Image from "next/image";
import { NotificationIcon, ArowDownIcon, MenuIcon } from "@/svgs/index";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";

export default function Navbar() {
  const { userData, _ } = useContext(UserContext);

  return (
    <header
      className="inline-flex justify-end items-center px-2 w-full h-24 bg-FFF border-b border-solid border-CECECE max-desktop:h-[60px] max-laptop:justify-between"
    >
      <MenuIcon className="hidden w-[38px] h-[38px] mx-5 cursor-pointer max-laptop:flex" />
      <div className="flex justify-center items-center h-14 gap-2 mx-2 max-desktop:h-8 max-laptop:mr-10">
        <NotificationIcon className="m-1.5 cursor-pointer w-[26px] h-[25px] max-desktop:h-[18px] max-desktop:w-[20px]" />
        <div
          className="flex justify-center items-center h-14 gap-2 py-1 px-3 mx-2 my-1 cursor-pointer bg-white hover:bg-gray-100 rounded-lg border border-solid border-E8EFF7 max-desktop:h-10 max-desktop:m-0 max-desktop:px-2"
        >
          <div
            className="flex items-center justify-center w-8 h-8 rounded-[7px] bg-FFA78D max-desktop:w-6 max-desktop:h-6"
          >
            <Image
              className="flex-shrink-0 max-desktop:w-[20px] max-desktop:h-[20px]"
              priority
              width={34}
              height={34}
              alt="user"
              src="/assets/imgs/image-11.png"
            />
          </div>
          <div className="flex flex-col items-center justify-center mx-1 px-1 flex-[1_0_0] max-desktop:hidden">
            <span
              className="flex justify-center flex-col self-stretch text-373B5C text-12 font-600 font-Poppins leading-normal not-italic"
            >
              Welcome back,
            </span>
            <span
              className="flex h-6 justify-center flex-col self-stretch text-373B5C text-18 font-600 font-Poppins leading-normal not-italic"
            >
              {userData?.name}
            </span>
          </div>
          <ArowDownIcon className="w-[26px] h-[25px] fill-transparent  max-desktop:h-[18px] max-desktop:w-[20px]" />
        </div>
      </div>
      <div className="flex px-2 h-14 w-[5vw] max-laptop:hidden">
      </div>
    </header>
  );
}
