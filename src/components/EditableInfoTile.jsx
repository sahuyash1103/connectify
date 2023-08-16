'use client';
import CustomButton from "./CustomButton";
import { EyeIcon, EyeSlashIcon } from '@/svgs/index';
import { useState } from "react";


export default function EditableInfoTile({
    title, field, type, register, titleClass, fieldClass, buttonClass, value, onChangeValue, onSave
}) {
    const [isEditing, setIsEditing] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const getInputType = (inputType) => {
        if (inputType === "password") {
            return (showPassword) ? "text" : "password";
        }
        return inputType;
    }

    const onClickSave = (e) => {
        e.preventDefault();
        onSave && onSave();
        setIsEditing(false);
    };

    return (
        <div className="flex flex-col justify-center gap-2">
            <span className={`text-31-31-31 text-14 font-600 font-Outfit leading-normal not-italic ${titleClass}`}
            >
                {title}
            </span>
            <div className="flex justify-between items-center">
                {
                    (isEditing || register) ?
                        <div className={`flex justify-start items-center gap-1 ${type === 'password' ? 'w-90/' : 'w-full'}`}>
                            <input
                                className={
                                    `p-2 border rounded-lg outline-none w-85/ bg-F0EFFA text-1E2875 text-16 tracking-[0.3px] font-500 font-Outfit leading-normal not-italic lining-nums proportional-nums ${fieldClass}`
                                }
                                required
                                onChange={onChangeValue}
                                value={value}
                                type={getInputType(type)}
                                name={title}
                            />
                            {
                                (type === "password") &&
                                <div
                                    className="flex justify-center items-center border rounded-lg py-2 cursor-pointer bg-F0EFFA w-15/"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {
                                        showPassword ?
                                            <EyeSlashIcon className="w-5 h-5" />
                                            :
                                            <EyeIcon className="w-5 h-5" />
                                    }
                                </div>
                            }
                        </div>
                        :
                        <span className={`text-34-34-34 text-16 font-550 font-Outfit leading-normal not-italic ${fieldClass} max-desktop:font-500`}
                        >
                            {field}
                        </span>
                }
                {
                    register ||
                    (
                        (isEditing) ?
                            <CustomButton
                                className={buttonClass}
                                text="Save"
                                onClick={onClickSave} />
                            :
                            <CustomButton
                                className={buttonClass}
                                text="Edit"
                                onClick={() => setIsEditing(true)} />
                    )
                }
            </div>
        </div>
    );
}