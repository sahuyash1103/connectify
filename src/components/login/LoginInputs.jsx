import EditableInfoTile from "../EditableInfoTile";
import Link from "next/link";

export default function LoginInputs({ className, email, password, rememberMe, onChangeEmail, onChangePassword, onChangeRememberMe }) {
    return (
        <section
            className={`flex flex-col flex-shrink-0 p-4 gap-6 rounded-md shadow-2 border border-solid border-0-0-0 ${className}`}
        >
            <EditableInfoTile
                editable
                register
                title="Email"
                type="email"
                titleClass="text-20 max-laptop:text-16 max-[500px]:text-14"
                fieldClass="text-20 max-laptop:text-16 max-[500px]:text-12"
                value={email}
                onChangeValue={onChangeEmail}
            />
            <EditableInfoTile
                editable
                register
                title="Password"
                type="password"
                titleClass="text-20 max-laptop:text-16 max-[500px]:text14"
                fieldClass="text-20 max-laptop:text-16 max-[500px]:text12"
                value={password}
                onChangeValue={onChangePassword}

            />
            <div className="flex gap-4 justify-between px-5 max-laptop:px-2">
                <div className="flex gap-3 items-center justify-center p-1">
                    <input
                        className="w-5 h-5 max-laptop:w-3 max-laptop:h-3"
                        id="rememberme"
                        name="rememberme"
                        type="checkbox"
                        value={rememberMe}
                        onChange={onChangeRememberMe}
                    />
                    <label
                        className="flex justify-center text-center items-center text-34-34-34 text-18 font-500 font-Outfit leading-normal not-italic max-laptop:text-14 max-[500px]:text-12"
                        htmlFor="rememberme"> 
                        Keep me logged in
                    </label>
                </div>
                <Link
                    className="flex justify-center text-center items-center hover:underline text-34-34-34 text-18 font-500 font-Outfit leading-normal not-italic max-laptop:text-14 max-[500px]:text-12"
                    href={"#"}
                >
                    Forget Password
                </Link>
            </div>
        </section >
    );
}