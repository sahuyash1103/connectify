'use client';
import { UserContext } from "@/context/userContext";
import SidebarTabs from "./SidebarTabs";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { removeAuthCookie } from "@/utils/cookies";

export default function Sidebar({ openSidebar, setOpenSidebar }) {
    const { _, setUserData } = useContext(UserContext);
    const router = useRouter();

    const onLogout = (e) => {
        e.preventDefault();
        removeAuthCookie();
        setUserData({});
        router.push("/login");
    }

    return (
        <section className={`fixed z-50 flex-shrink-0 w-[25vw] h-[99vh] duration-[500ms] max-[1900px]:w-[20vw] max-laptop:w-[250px] ${openSidebar || 'max-laptop:-translate-x-full'}`}>
            <div className="flex-shrink-0 w-95/ h-[99vh] bg-FFF shadow-4">
                <div className="flex flex-col justify-between gap-10 items-center pb-10 m-1 p-2 h-full">
                    <div
                        className="flex flex-col justify-between items-end py-5 px-3 m-2 h-[35vh] max-[1900px]:px-0 max-[1900px]:mx-1"
                    >
                        <div
                            className="inline-flex justify-end items-end px-8 py-2 m-2 border border-solid border-0-0-0 rounded-[9px] max-[1900px]:px-5 max-[1900px]:mx-10 max-desktop:m-1"
                        >
                            <span className="text-34-34-34 text-24 font-500 font-Outfit leading-normal not-italic max-[1900px]:text-20"
                            >
                                Dashboard
                            </span>
                        </div>
                        <SidebarTabs setOpenSidebar={setOpenSidebar} />
                    </div>
                    <button
                        className="py-1 px-5 text-34-34-34 text-18 font-500 font-Outfit leading-normal not-italic"
                        onClick={onLogout}
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </section>
    );
}
