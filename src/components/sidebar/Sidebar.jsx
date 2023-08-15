'use client';
import SidebarTabs from "./SidebarTabs";
import { typographySidebar } from "@/utils/consts";
import { deleteCookie } from 'cookies-next';
import { useRouter } from "next/navigation";

export default function Sidebar() {
    const router = useRouter();

    const onLogout = (e) => {
        e.preventDefault();

        deleteCookie('x-auth-token');
        deleteCookie('user');

        router.push("/login");
    }
    return (
        <section className="flex-shrink-0" style={{
            width: "25vw",
            hight: "99vh",
        }}>
            <div className="flex-shrink-0" style={{
                width: "95%",
                height: "99vh",
                background: "#FFF",
                boxShadow: "0px 8.9px 53.3px 0px rgba(226, 236, 249, 0.50)",
            }}>
                <div className="flex flex-col justify-between gap-10 items-center pb-10 m-1 p-2 h-full">
                    <div
                        className="flex flex-col justify-between items-end py-5 px-3 m-2"
                        style={{
                            height: "35vh",
                        }}
                    >
                        <div
                            className="inline-flex justify-end items-end px-8 py-2 gap-12 m-2"
                            style={{
                                border: "0.889px solid var(--input-box-stroke-thin, rgba(0, 0, 0, 0.15))",
                                borderRadius: "8.889px",
                                boxShadow: "0px 1.8px 1.8px 0px rgba(0, 0, 0, 0.10)",
                            }}
                        >
                            <span style={{
                                ...typographySidebar,
                                color: "rgba(34, 34, 34, 0.90)",
                                fontFamily: "Outfit",
                                fontStyle: "normal",
                                fontWeight: 500,
                                fontSize: "24px",
                            }}
                            >
                                Dashboard
                            </span>
                        </div>
                        <SidebarTabs />
                    </div>
                    <button className="py-1 px-5"
                        onClick={onLogout}
                        style={{
                            ...typographySidebar,
                            color: "rgba(34, 34, 34, 0.90)",
                            fontFamily: "Outfit",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "18px",
                        }}>
                        Log Out
                    </button>
                </div>
            </div>
        </section>
    );
}
