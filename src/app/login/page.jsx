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

export default function Login() {
    const { _, setUserData } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const router = useRouter();

    const onLogin = async (e) => {
        e.preventDefault()
        const loginData = {
            email,
            password
        }
        const error = await validateLoginData(loginData);
        if (error) {
            console.log("[validator]: ", error);
            return;
        }
        const res = await verifyUser(loginData);
        if (res.status === 200) {
            setUserData(res?.data);
            router.push("/");
        }
        else
            console.log("[server]: ", res?.data);
    }

    return (
        <AuthRouteLayout title="LOGIN">
            <div className="flex flex-col justify-center items-center gap-5 px-4 py-5 h-full w-45/">
                <Image
                    width={600}
                    height={600}
                    alt="logo"
                    src="/assets/imgs/oru-phones.png"
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-5 px-4 py-5 h-full w-45/">
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
                    className="py-3 rounded-lg w-96 m-4 text-1E2875 text-24 font-600 font-Outfit leading-normal not-italic bg-F0EFFA"
                    onClick={onLogin}
                >
                    Login
                </button>
                <div className="flex gap-3">
                    {"Don't have account? "}

                    <Link
                        href="/signup"
                        className="flex justify-center text-center items-center hover:underline text-34-34-34 text-18 font-500 font-Outfit leading-normal not-italic"
                    >
                        Signup
                    </Link>
                </div>
            </div>
        </AuthRouteLayout >
    );
}