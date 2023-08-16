'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronRight3Icon } from "@/svgs";


export default function SidebarTabs({ setOpenSidebar }) {
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState(pathname);

    useEffect(() => {
        setActiveTab(pathname);
    }, [pathname]);

    return (
        <div className="flex flex-row justify-start items-start m-2 p-5 gap-0 max-[1900px]:p-3 max-[1900px]:m-1 ">
            <div className="flex flex-col justify-between items-center h-full gap-5">
                <ChevronRight3Icon className="fill-transparent w-4 h-4 mx-3 my-4 max-[1900px]:mx-1 max-[1900px]:my-3" />
                <ChevronRight3Icon className="fill-transparent w-4 h-4 mx-3 my-4 max-[1900px]:mx-1 max-[1900px]:my-3" />
            </div>
            <div className="flex flex-col justify-between items-center gap-5">
                <Link
                    href="/"
                    onClick={() => setOpenSidebar(false)}
                    className={`flex justify-center items-center py-3 px-16 cursor-pointer border border-solid border-transparent shadow-5 text-1A1558 text-20 font-400 font-Palatino-Linotype leading-normal not-italic rounded-[9px] max-[1900px]:px-8 max-[1900px]:py-2 max-[1900px]:text-18 max-desktop:text-16 max-desktop::py-[5px] max-desktop:px-6: ${activeTab === "/" && '!border-413B89 !shadow-2'}`}
                >
                    My Profile
                </Link>
                <Link
                    href="/connections"
                    onClick={() => setOpenSidebar(false)}
                    className={`flex justify-center items-center py-3 px-16 cursor-pointer border border-solid border-transparent shadow-5 text-1A1558 text-20 font-400 font-Palatino-Linotype leading-normal not-italic rounded-[9px] max-[1900px]:px-8 max-[1900px]:py-2 max-[1900px]:text-18 max-desktop:text-16 max-desktop::py-[5px] max-desktop:px-6: ${activeTab === "/connections" && '!border-413B89 !shadow-2'}`}
                >
                    My Connections
                </Link>
            </div>
        </div >
    );
}
