import { typographySubtitle, typographyTitle } from "@/utils/consts";
import EditableInfoTile from "../EditableInfoTile";
import Link from "next/link";

export default function LoginInputs({ className, style, email, password, rememberMe, onChangeEmail, onChangePassword, onChangeRememberMe }) {
    return (
        <section
            className={`flex flex-col flex-shrink-0 p-4 gap-6 ${className}`}
            style={{
                ...style,
                borderRadius: "5px",
                border: "0.889px solid var(--input-box-stroke-thin, rgba(0, 0, 0, 0.15))",
                boxShadow: "0px 1.8px 1.8px 0px rgba(0, 0, 0, 0.10)",
            }}
        >
            <EditableInfoTile
                editable
                register
                title="Email"
                type="email"
                titleStyle={{
                    fontSize: "20px"
                }}
                fieldStyle={{
                    fontSize: "20px"
                }}
                value={email}
                onChangeValue={onChangeEmail}
            />
            <EditableInfoTile
                editable
                register
                title="Password"
                type="password"
                titleStyle={{
                    fontSize: "20px"
                }}
                fieldStyle={{
                    fontSize: "20px"
                }}
                value={password}
                onChangeValue={onChangePassword}

            />
            <div className="flex gap-4 justify-between px-5">
                <div className="flex gap-3 items-center justify-center p-1">
                    <input type="checkbox" name="rememberme" id="rememberme" onChange={onChangeRememberMe} value={rememberMe} className="w-5 h-5" />
                    <label htmlFor="rememberme" className="flex justify-center text-center items-center" style={{
                        ...typographyTitle,
                        fontSize: "18px",
                        fontWeight: 500,
                    }}>Keep me logged in</label>
                </div>
                <Link href={"#"} className="flex justify-center text-center items-center hover:underline" style={{
                    ...typographyTitle,
                    fontSize: "18px",
                    fontWeight: 500,
                }}>Forget Password</Link>
            </div>
        </section >
    );
}