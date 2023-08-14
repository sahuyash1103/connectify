'use client';
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { typographySidebar } from "@/utils/consts";


export default function SidebarTabs() {
    const [activeTab, setActiveTab] = useState("/");
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        setActiveTab(pathname);
        console.log(pathname)
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
                <Image
                    className="mx-3 py-4 "
                    priority
                    width={15}
                    height={15}
                    alt="bullet arrow"
                    src="/assets/svgs/chevron-right-3.svg"
                />
                <Image
                    className="mx-3 py-4"
                    priority
                    width={15}
                    height={15}
                    alt="bullet arrow"
                    src="/assets/svgs/chevron-right-3.svg"
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
                <div
                    className="flex justify-center items-center py-3 px-16 cursor-pointer"
                    style={{
                        border: "1px solid transparent",
                        boxShadow: "0px 1.8px 1.8px 0px transparent",
                        ...(activeTab === "/" && activeTabStyle)
                    }}
                    onClick={() => navigateTo("/")}
                >
                    <span style={{ ...typographySidebar }}> My Profile</span>
                </div>
                <div
                    className="flex justify-center items-center py-3 px-16 cursor-pointer"
                    style={{
                        border: "1px solid transparent",
                        boxShadow: "0px 1.8px 1.8px 0px transparent",
                        ...(activeTab === "/my-connections" && activeTabStyle)
                    }}
                    onClick={() => navigateTo("/my-connections")}
                >
                    <span style={{ ...typographySidebar }}>My Connections</span>
                </div>
            </div>
        </div >
    );
}
