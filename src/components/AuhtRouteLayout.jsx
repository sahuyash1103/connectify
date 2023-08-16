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
            <div className="p-2 w-80/ h-44 border border-solid border-FFF rounded-lg bg-1E2875 max-[1500px]:w-90/ max-desktop:w-full" >
                <span className="m-2 p-2 text-FFF text-20 font-500 font-Outfit leading-normal not-italic">
                    {title}
                </span>
            </div>
            <form
                className="absolute flex justify-between items-center flex-shrink-0 z-10 py-4 px-16 gap-5 w-65/ h-[80vh] top-1/2 left-[18%] border border-solid border-EBEBEE rounded-[9px] bg-FFF shadow-1 max-[1500px]:w-75/ max-[1500px]:left-[12%] max-[1500px]:px-8 max-desktop:w-80/ max-desktop:h-auto max-desktop:px-4 max-desktop:left-[10%] max-[900px]:justify-center max-[900px]:p-2 max-[900px]:flex-col max-laptop:gap-3 max-[900px]:gap-2 max-[500px]:gap-1"
            >
                {children}
            </form>
        </main >
    );
}