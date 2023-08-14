'use client';
import CustomButton from "./CustomButton";
import { typographyTitle, typographySubtitle } from "@/utils/consts";



export default function EditableInfoTile({ title, field, type, editable, register, titleStyle, fieldStyle, buttonStyle, value, onChangeValue }) {
    const typography = {
        ...typographyTitle,
        color: "rgba(31, 31, 31, 0.70)",
        fontSize: "12px",
        ...titleStyle,
    };

    return (
        <div className="flex flex-col justify-center gap-2">
            <span style={{ ...typography }}>{title}</span>
            <div className="flex justify-between items-center">
                {
                    editable ?
                        <input
                            className="p-2 border rounded-lg outline-none w-11/12"
                            required
                            onChange={onChangeValue}
                            value={value}
                            type={type}
                            name={title}
                            style={{
                                ...typographySubtitle,
                                fontSize: "16px",
                                background: "#F0EFFA",
                                letterSpacing: "0.3px",
                                // color: "#1e2875",
                                ...fieldStyle,
                            }}
                        />
                        :
                        <span style={{
                            ...typography,
                            color: "rgba(34, 34, 34, 0.90)",
                            ...fieldStyle,
                        }}
                        >
                            {field}
                        </span>
                }
                {
                    register ||
                    (
                        editable ?
                            <CustomButton text="Save" style={{ ...buttonStyle }} />
                            :
                            <CustomButton text="Edit" style={{ ...buttonStyle }} />
                    )
                }
            </div>
        </div>
    );
}