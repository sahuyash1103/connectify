'use client';
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { typographySidebar } from "@/utils/consts";
import { ChevronRight3Icon, NotificationIcon } from "@/svgs";
import Link from "next/link";


export default function SidebarTabs() {
    const pathname = usePathname();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState(pathname);

    useEffect(() => {
        setActiveTab(pathname);
    }, [pathname]);

    const activeTabStyle = {
        borderRadius: "8.889px",
        border: "1px solid #413B89",
        boxShadow: "0px 1.8px 1.8px 0px rgba(0, 0, 0, 0.10)",
    };

    const navigateTo = (to) => {
        router.push(to);
    }

    return (
        <div className="flex flex-row justify-start items-start m-2 p-5 gap-2">
            <div className="flex flex-col justify-evenly items-center h-full gap-5">
                <ChevronRight3Icon className="fill-transparent w-4 h-4 mx-3 my-4" />
                <ChevronRight3Icon className="fill-transparent w-4 h-4 mx-3 my-4" />
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
                <Link
                    href="/"
                    className="flex justify-center items-center py-3 px-16 cursor-pointer"
                    style={{
                        border: "1px solid transparent",
                        boxShadow: "0px 1.8px 1.8px 0px transparent",
                        ...typographySidebar,
                        ...(activeTab === "/" && activeTabStyle)
                    }}
                >
                    My Profile
                </Link>
                <Link
                    href="/connections"
                    className="flex justify-center items-center py-3 px-16 cursor-pointer"
                    style={{
                        border: "1px solid transparent",
                        boxShadow: "0px 1.8px 1.8px 0px transparent",
                        ...typographySidebar,
                        ...(activeTab === "/my-connections" && activeTabStyle)
                    }}
                >
                    My Connections
                </Link>
            </div>
        </div >
    );
}
