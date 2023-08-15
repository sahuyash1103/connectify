'use client';
import TitleWithButton from "../TitleWithButton";
import { typographySubtitle } from "@/utils/consts";
import { useState } from "react";

export default function UserAboutSection({ register, style, about, onChangeAbout, userName }) {
    const [isEditing, setIsEditing] = useState(false);

    const onClickSave = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    return (
        <section className="flex-shrink-0 flex flex-col p-4 gap-6"
            style={{
                ...style,
                border: "0.889px solid var(--input-box-stroke-thin, rgba(0, 0, 0, 0.15))",
                borderRadius: "4.5px",
                boxShadow: "0px 1.8px 1.8px 0px rgba(0, 0, 0, 0.10)",
            }}
        >
            {
                register ?
                    <TitleWithButton title="About" subtitle={userName} />
                    :
                    (isEditing ?
                        <TitleWithButton title="About" subtitle={userName} buttonText="Save" onClick={onClickSave} />
                        :
                        <TitleWithButton title="About" subtitle={userName} buttonText="Edit" onClick={() => setIsEditing(true)} />
                    )
            }
            {
                (isEditing || register) ?
                    <textarea
                        className="p-2 border rounded-lg outline-none w-full"
                        value={about}
                        onChange={onChangeAbout}
                        type="text"
                        style={{
                            ...typographySubtitle,
                            height: "150px",
                            fontSize: "14px",
                            background: "#F0EFFA",
                            letterSpacing: "0.3px"
                            // color: "#1e2875",
                        }}
                    />
                    :
                    <span
                        style={{ ...typographySubtitle, fontSize: "16px" }}
                    >
                        {
                            about ? about :
                                "Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur."
                        }
                    </span>
            }
        </section >
    );
}