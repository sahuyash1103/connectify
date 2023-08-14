'use client'
import UserAboutSection from "@/components/User_Info_component/UserAboutSection";
import UserProfilePicSection from "@/components/User_Info_component/UserProfilePicSection";
import UserInfoSection from "@/components/User_Info_component/UserInfoSection";
import httpRequest from "@/utils/http_request";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { typographyTitle } from "@/utils/consts";
import { validateSigupData } from "@/utils/validators";
import { setCookie } from "cookies-next";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [about, setAbout] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const router = useRouter();

    const onSignup = async (e) => {
        e.preventDefault()

        const SignupData = {
            name,
            email,
            phone,
            password,
            about,
        };

        const error = await validateSigupData(SignupData);
        if (error) {
            console.log(error);
            return;
        }

        const res = await httpRequest("auth/signup/", 'POST', {
            body: SignupData,
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
    };

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
                }}>SIGNUP</span>
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
                <div className="flex flex-col justify-center items-center gap-3 px-4 py-5 h-full" style={{ width: "45%" }}>
                    <UserProfilePicSection editable register style={{ width: "90%" }} />
                    <UserInfoSection
                        editable
                        register
                        style={{ width: "90%" }}
                        name={name}
                        email={email}
                        phone={phone}
                        password={password}
                        confirmPassword={confirmPassword}
                        onChangeName={(e) => setName(e.target.value)}
                        onChangeEmail={(e) => setEmail(e.target.value)}
                        onChangePhone={(e) => setPhone(e.target.value)}
                        onChangePassword={(e) => setPassword(e.target.value)}
                        onChangeConfirmPassword={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div className="flex flex-col justify-center items-center gap-5 px-4 py-5 h-full" style={{ width: "45%" }}>
                    <UserAboutSection
                        editable
                        register
                        style={{ width: "90%" }}
                        about={about}
                        onChangeAbout={(e) => setAbout(e.target.value)}
                    />
                    <div className="flex flex-col justify-center items-start m-4 mt-10 gap-4">
                        <div className="flex gap-3 items-center justify-center px-1">
                            <input
                                className="w-5 h-5"
                                id="rememberme"
                                name="rememberme"
                                type="checkbox"
                                value={rememberMe}
                                onChange={(e) => setRememberMe(!rememberMe)}
                            />
                            <label for="rememberme" className="flex justify-center text-center items-center" style={{
                                ...typographyTitle,
                                fontSize: "18px",
                                fontWeight: 500,
                            }}>remember me</label>
                        </div>
                        <button type="submit" className="py-3 rounded-lg w-96"
                            style={{
                                ...typographyTitle,
                                background: "#f0effa",
                                color: "#1e2875",
                                fontSize: "24px",
                            }}
                            onClick={onSignup}
                        >Signup</button>
                    </div>

                    <div className="flex gap-3">
                        Already have account?
                        <Link href="/login" className="flex justify-center text-center items-center hover:underline" style={{
                            ...typographyTitle,
                            fontSize: "18px",
                            fontWeight: 500,
                        }}>Login</Link>
                    </div>
                </div>
            </form>
        </main >
    );
}