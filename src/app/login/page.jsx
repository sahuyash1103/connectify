'use client';
import Image from "next/image";
import LoginInputs from "@/components/login/LoginInputs";
import httpRequest from "@/utils/http_request";
import { typographyTitle } from "@/utils/consts";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { validateLoginData } from "@/utils/validators";
import { setCookie } from "cookies-next";
import Link from "next/link";

export default function Login() {
    const [email, setEmail] = useState("sahuyash@gmail.com");
    const [password, setPassword] = useState("1103Yash@connectify");
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
            console.log(error);
            return;
        }

        const res = await httpRequest("auth/login/", 'POST', {
            body: loginData,
        })

        if (res.status === 200) {
            const expDate = new Date();
            expDate.setDate(expDate.getDate() + 1);

            const token = res.headers.get('x-auth-token');

            setCookie('x-auth-token', token, { expires: expDate });
            router.push("/");
        }
        else {
            console.log(res.data);
        }

    }

    return (
        <main className='flex w-full justify-center items-start p-5 relative'>
            <div className="p-2 w-4/5 h-44" style={{
                border: "0.889px solid #FFF",
                borderRadius: "8.889px",
                background: "#1E2875",
            }}>
                <span className="m-2 p-2" style={{
                    ...typographyTitle,
                    color: "#FFF",
                    fontSize: "20px",
                    fontWeight: 500,
                }}>LOGIN</span>
            </div>
            <form
                className="absolute flex justify-between items-end flex-shrink-0 z-10 p-4 px-16 gap-10"
                style={{
                    width: "65%",
                    height: "80vh",
                    top: "50%",
                    left: "18%",
                    border: "1px solid #EBEBEE",
                    borderRadius: "9px",
                    boxShadow: "0px 3.555555582046509px 5.333333492279053px 0px rgba(0, 0, 0, 0.15)",
                    background: "#FFF",
                }}>
                <div className="flex flex-col justify-center items-center gap-5 px-4 py-5 h-full" style={{ width: "45%" }}>
                    <Image
                        width={600}
                        height={600}
                        alt="logo"
                        src="/assets/imgs/oru-phones.png"
                    />
                </div>
                <div className="flex flex-col justify-center items-center gap-5 px-4 py-5 h-full" style={{ width: "45%" }}>
                    <LoginInputs
                        className="p-5"
                        style={{
                            width: "90%"
                        }}
                        email={email}
                        password={password}
                        rememberMe={rememberMe}
                        onChangeEmail={(e) => setEmail(e.target.value)}
                        onChangePassword={(e) => setPassword(e.target.value)}
                        onChangeRememberMe={(e) => setRememberMe(!rememberMe)}
                    />
                    <button type="submit" className="py-3 rounded-lg w-96 m-4"
                        onClick={onLogin}
                        style={{
                            ...typographyTitle,
                            background: "#f0effa",
                            color: "#1e2875",
                            fontSize: "24px",
                        }}
                    >Login</button>
                    <div className="flex gap-3">
                        {"Don't have account? "}
                        <Link href="/signup" className="flex justify-center text-center items-center hover:underline" style={{
                            ...typographyTitle,
                            fontSize: "18px",
                            fontWeight: 500,
                        }}>Signup</Link>
                    </div>
                </div>
            </form>
        </main >
    );
}