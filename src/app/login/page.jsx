'use client';
import Image from "next/image";
import Link from "next/link";
import LoginInputs from "@/components/login/LoginInputs";
import AuthRouteLayout from "@/components/AuhtRouteLayout";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { validateLoginData } from "@/utils/validators";
import { verifyUser } from "@/utils/http-service";
import { UserContext } from "@/context/userContext";
import Head from "next/head";
import { toast } from "react-toastify";

export default function Login() {
    const { setUserData } = useContext(UserContext);

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const router = useRouter();

    const onLogin = async (e) => {
        e.preventDefault()
        setIsLoading(true);
        const loginData = {
            email,
            password
        }
        const error = await validateLoginData(loginData);
        if (error) {
            console.log("[validator]: ", error);
            toast("[validator]: " + error, toast("[server]: " + res?.data, { hideProgressBar: true, autoClose: 2000, type: 'error' }));
            setIsLoading(false);
            return;
        }
        const res = await verifyUser(loginData);
        if (res?.status === 200) {
            setUserData(res?.data);
            setIsLoading(false);
            router.push("/");
        }
        else {
            setIsLoading(false);
            console.log("[server]: ", res?.data);
            toast("[server]: " + res?.data, { hideProgressBar: true, autoClose: 2000, type: 'error' });
        }
    }

    return (
        <AuthRouteLayout title="LOGIN">
            <Head>
                <title>Connectify | Login</title>
            </Head>
            <div className="flex flex-col justify-center items-center gap-5 px-4 py-5 h-full w-45/ max-[1500px]:w-50/ max-[900px]:hidden">
                <Image
                    width={600}
                    height={600}
                    alt="logo"
                    src="/assets/imgs/oru-phones.png"
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-5 px-4 py-5 h-full w-45/ max-[1500px]:w-50/ max-laptop:p-4 max-laptop:gap-3 max-[900px]:gap-2 max-[500px]:gap-1 max-[900px]:w-90/  max-[500px]:w-full max-[500px]:p-0 max-[900px]:p-2">
                <LoginInputs
                    className="p-5 w-90/"
                    email={email}
                    password={password}
                    rememberMe={rememberMe}
                    onChangeEmail={(e) => setEmail(e.target.value)}
                    onChangePassword={(e) => setPassword(e.target.value)}
                    onChangeRememberMe={(e) => setRememberMe(!rememberMe)}
                />
                <button
                    type="submit"
                    className="py-3 rounded-lg w-96 m-4 text-1E2875 text-24 font-600 font-Outfit leading-normal not-italic bg-F0EFFA max-laptop:w-[300px] max-laptop:text-20 max-laptop:m-2 max-[500px]:w-[200px]"
                    onClick={onLogin}
                >
                    {isLoading ? 'Loading...' : 'Login'}
                </button>
                <div className="flex gap-3 text-center items-center text-34-34-34 text-18 font-500 font-Outfit leading-normal not-italic max-[900px]:text-14">
                    {"Don't have account? "}
                    <Link
                        href="/signup"
                        className="hover:underline"
                    >
                        Signup
                    </Link>
                </div>
            </div>
        </AuthRouteLayout >
    );
}