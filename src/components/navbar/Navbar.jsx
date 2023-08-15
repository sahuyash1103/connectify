'use client';
import Image from "next/image";
import { NotificationIcon, ArowDownIcon } from "@/svgs/index";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";

const typography = {
  color: "#373B5C",
  fontFamily: "Poppins",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "normal",
};

export default function Navbar() {
  const { userData, _ } = useContext(UserContext);

  return (
    <header
      className="inline-flex justify-end items-center px-2"
      style={{
        width: "75vw",
        height: "100px",
        background: "#FFF",
        borderBottom: "0.889px solid var(--dividers-and-borders-grey-light, #CECECE)",
      }}>
      <div className="flex justify-center items-center h-14 gap-2 mx-2">
        <NotificationIcon className="m-1.5 cursor-pointer w-6 h-6" />
        <div
          className="flex justify-center items-center h-14 gap-2 py-1 px-3 mx-2 my-1 cursor-pointer bg-white hover:bg-gray-100"
          style={{
            border: "1px solid #E8EFF7",
            borderRadius: "8px",
          }}
        >
          <div
            className="flex items-center justify-center w-8 h-8"
            style={{
              borderRadius: "7px",
              background: "#FFA78D",
            }}
          >
            <Image
              className="flex-shrink-0"
              priority
              width={34}
              height={34}
              alt="user"
              src="/assets/imgs/image-11.png"
            />
          </div>
          <div className="flex flex-col items-center justify-center mx-1 px-1" style={{
            flex: "1 0 0",
          }}>
            <span
              className="flex justify-center flex-col self-stretch"
              style={{ ...typography }}
            >
              Welcome back,
            </span>
            <span
              className="flex h-6 justify-center flex-col self-stretch"
              style={{
                ...typography,
                fontSize: "18px",
              }}
            >
              {userData?.name}
            </span>
          </div>
          <ArowDownIcon className="w-6 h-6 fill-transparent" />
        </div>
      </div>
      <div className="flex px-2 h-14" style={{ width: "5vw" }}>
      </div>
    </header>
  );
}
