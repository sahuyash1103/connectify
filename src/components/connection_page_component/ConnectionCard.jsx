'use client'
import { Ellipse255Icon } from "@/svgs";
import CustomButton from "../CustomButton";
import { useState } from "react";

export default function ConnectionCard({ name, job, company, isConnected, onClick }) {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        onClick(setIsLoading);
    }
    return (
        <div className="flex flex-shrink-0 gap-2 p-2 justify-between px-6 items-center w-[320px] h-[150px] border border-solid rounded-md shadow-2 border-0-0-0 max-desktop:px-2 max-desktop:gap-1 max-laptop:px-2 max-laptop:py-1 max-laptop:gap-0 max-desktop:w-[260px] max-desktop:h-[130px] max-laptop:w-[240px] max-laptop:h-[120px] max-[800px]:w-[200px] max-[800px]:h-[105px] max-[450px]:w-[180px] max-[450px]:h-[85px] max-[400px]:w-[170px]" >
            <div className="flex flex-col gap-3 justify-center max-[800px]:gap-2 max-[450px]:gap-1">
                <span className="text-34-34-34 text-18 font-600 font-Outfit leading-normal not-italic max-desktop:text-14 max-laptop:text-14 max-[800px]:text-12 max-[450px]:text-[11px]"
                >
                    {name}
                </span>
                <div className="flex flex-col">
                    <span className="text-73-69-79 text-12 font-400 font-Outfit leading-normal not-italic lining-nums proportional-nums max-desktop:text-12 max-laptop:text-12 max-[800px]:text-10 max-[450px]:text-[9px]"
                    >
                        {job}
                    </span>
                    <span className="text-73-69-79 text-12 font-400 font-Outfit leading-normal not-italic lining-nums proportional-nums max-desktop:text-12 max-laptop:text-12 max-[800px]:text-10 max-[450px]:text-[9px]"
                    >
                        @ {company}
                    </span>
                </div>
                {
                    isConnected ?
                        <CustomButton
                            className="!bg-BAB6EB max-desktop:text-12 max-laptop:text-12 max-[800px]:text-10 max-[450px]:text-[9px]"
                            color="#BAB6EB"
                            text={isLoading ? "Loading..." : "Remove Connection"}
                            onClick={handleClick} />
                        :
                        <CustomButton
                            className="!bg-BAB6EB max-desktop:text-12 max-laptop:text-12 max-[800px]:text-10 max-[450px]:text-[9px]"
                            color="#BAB6EB"
                            text={isLoading ? "Loading..." : "Connect"}
                            onClick={handleClick} />
                }
            </div>
            <Ellipse255Icon className="flex-shrink-0 w-[97px] rounded-[50%] shadow-3 border border-solid border-F8F8FF max-desktop:w-[90px] max-laptop:w-[80px] max-[800px]:w-[65px] max-[450px]:w-[50px]" />
        </div>
    );
}