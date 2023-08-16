'use client'
import Link from "next/link";
import AuthRouteLayout from "@/components/AuhtRouteLayout";
import UserAboutSection from "@/components/User_Info_component/UserAboutSection";
import UserProfilePicSection from "@/components/User_Info_component/UserProfilePicSection";
import UserInfoSection from "@/components/User_Info_component/UserInfoSection";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { validateSigupData } from "@/utils/validators";
import { registerUser } from "@/utils/http-service";
import { UserContext } from "@/context/userContext";

export default function Signup() {
    const { _, setUserData } = useContext(UserContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [about, setAbout] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const router = useRouter();

    const onSignup = async (e) => {
        e.preventDefault();
        const signupData = {
            name,
            email,
            phone,
            password,
            ...(about && { about })
        };
        const error = await validateSigupData(signupData);
        if (error) {
            console.log("[validator]: ", error);
            return;
        }
        if (password !== confirmPassword) {
            console.log("passwords don't match: ", password, confirmPassword);
            return;
        }
        const res = await registerUser(signupData);
        if (res.status === 200) {
            setUserData(res?.data);
            router.push("/");
        }
        else
            console.log("[server]: ", res?.data);
    };

    return (
        <AuthRouteLayout title="SIGNUP">
            <div className="flex flex-col justify-center items-center gap-3 px-4 py-5 h-full w-45/  max-[1500px]:w-50/ max-laptop:p-4 max-laptop:gap-3 max-[900px]:gap-2 max-[500px]:gap-1 max-[900px]:w-90/  max-[500px]:w-full max-[500px]:p-0 max-[900px]:p-2">
                <UserProfilePicSection editable register className="!w-90/" />
                <UserInfoSection
                    register
                    className="!w-90/"
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
            <div className="flex flex-col justify-center items-center gap-5 px-4 py-5 h-full w-45/  max-[1500px]:w-50/ max-laptop:p-4 max-laptop:gap-3 max-[900px]:gap-2 max-[500px]:gap-1 max-[900px]:w-90/  max-[500px]:w-full max-[500px]:p-0 max-[900px]:p-2" >
                <UserAboutSection
                    register
                    className="!w-90/"
                    about={about}
                    onChangeAbout={(e) => setAbout(e.target.value)}
                />
                <div className="flex flex-col justify-center items-start m-4 mt-10 gap-4 max-laptop:px-2 max-laptop:gap-2 max-laptop:m-3 max-[900px]:gap-1 max-[900px]:m-2">
                    <div className="flex gap-3 items-center justify-center px-1">
                        <input
                            className="w-5 h-5 max-laptop:w-3 max-laptop:h-3"
                            id="rememberme"
                            name="rememberme"
                            type="checkbox"
                            value={rememberMe}
                            onChange={(e) => setRememberMe(!rememberMe)}
                        />
                        <label
                            htmlFor="rememberme"
                            className="flex justify-center text-center items-center text-34-34-34 text-18 font-500 font-Outfit leading-normal not-italic max-laptop:text-14 max-[500px]:text-12"
                        >
                            remember me
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="py-3 rounded-lg w-96 text-1E2875 text-24 font-600 font-Outfit leading-normal not-italic bg-F0EFFA max-laptop:w-[300px] max-laptop:text-20 max-laptop:m-2 max-[500px]:w-[200px]"
                        onClick={onSignup}
                    >
                        Signup
                    </button>
                </div>

                <div className="flex gap-3 text-center items-center hover:underline text-34-34-34 text-18 font-500 font-Outfit leading-normal not-italic max-[900px]:text-14">
                    Already have account?

                    <Link
                        href="/login"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </AuthRouteLayout>
    );
}