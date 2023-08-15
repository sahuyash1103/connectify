'use client'
import { getToken } from "@/utils/cookies";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthRouteLayout({ children }) {
    const router = useRouter();

    useEffect(() => {
        const token = getToken();
        if (token) {
            router.push("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {children}
        </>
    );
}