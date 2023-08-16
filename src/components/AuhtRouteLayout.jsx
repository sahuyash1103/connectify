'use client'
import { getToken } from "@/utils/cookies";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthRouteLayout({ children, title }) {
    const router = useRouter();

    useEffect(() => {
        const token = getToken();
        if (token) {
            router.push("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main className='flex w-full justify-center items-start p-5 relative'>
            <div className="p-2 w-4/5 h-44 border border-solid border-FFF rounded-lg bg-1E2875" >
                <span className="m-2 p-2 text-FFF text-20 font-500 font-Outfit leading-normal not-italic">
                    {title}
                </span>
            </div>
            <form
                className="absolute flex justify-between items-end flex-shrink-0 z-10 p-4 px-16 gap-10 w-65/ h-[80vh] top-1/2 left-[18%] border border-solid border-EBEBEE rounded-[9px] bg-FFF shadow-1"
            >
                {children}
            </form>
        </main >
    );
}