'use client';
import CustomButton from "./CustomButton";
import { EyeIcon, EyeSlashIcon } from '@/svgs/index';
import { typographyTitle, typographySubtitle } from "@/utils/consts";
import { useState } from "react";


export default function EditableInfoTile({ title, field, type, register, titleStyle, fieldStyle, buttonStyle, value, onChangeValue, onSave }) {
    const [isEditing, setIsEditing] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const typography = {
        ...typographyTitle,
        color: "rgba(31, 31, 31, 0.70)",
        fontSize: "12px",
        ...titleStyle,
    };

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
            <span style={{ ...typography, fontSize: "14px" }}>{title}</span>
            <div className="flex justify-between items-center">
                {
                    (isEditing || register) ?
                        <div className="flex justify-start items-center gap-1" style={{
                            width: "80%",
                        }}>
                            <input
                                className="p-2 border rounded-lg outline-none"
                                required
                                onChange={onChangeValue}
                                value={value}
                                type={getInputType(type)}
                                name={title}
                                style={{
                                    ...typographySubtitle,
                                    width: "85%",
                                    fontSize: "16px",
                                    background: "#F0EFFA",
                                    letterSpacing: "0.3px",
                                    // color: "#1e2875",
                                    ...fieldStyle,
                                }}
                            />
                            {
                                (type === "password") &&
                                <div
                                    className="flex justify-center items-center border rounded-lg py-2 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{
                                        background: "#F0EFFA",
                                        width: "10%",
                                    }}
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
                        <span style={{
                            ...typography,
                            color: "rgba(34, 34, 34, 0.90)",
                            fontSize: "16px",
                            ...fieldStyle,
                        }}
                        >
                            {field}
                        </span>
                }
                {
                    register ||
                    (
                        (isEditing) ?
                            <CustomButton text="Save" style={{ ...buttonStyle }} onClick={onClickSave} />
                            :
                            <CustomButton text="Edit" style={{ ...buttonStyle }} onClick={() => setIsEditing(true)} />
                    )
                }
            </div>
        </div>
    );
}