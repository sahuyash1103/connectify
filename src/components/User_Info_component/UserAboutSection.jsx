'use client';
import TitleWithButton from "../TitleWithButton";
import { typographySubtitle } from "@/utils/consts";

export default function UserAboutSection({ editable, register, style, about, onChangeAbout }) {
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
                    <TitleWithButton title="About" subtitle="Vishnu" />
                    :
                    (editable ?
                        <TitleWithButton title="About" subtitle="Vishnu" buttonText="Save" />
                        :
                        <TitleWithButton title="About" subtitle="Vishnu" buttonText="Edit" />
                    )
            }
            {
                editable ?
                    <textarea
                        className="p-2 border rounded-lg outline-none w-full"
                        required
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
                        style={{ ...typographySubtitle }}
                    >
                        Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.
                    </span>
            }
        </section >
    );
}