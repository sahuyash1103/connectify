import TitleWithButton from "./TitleWithButton";
import { aboutTypography } from "@/utils/consts";

export default function UserAboutSection() {
    return (
        <section className="flex-shrink-0 flex flex-col p-4 gap-6"
            style={{
                border: "0.889px solid var(--input-box-stroke-thin, rgba(0, 0, 0, 0.15))",
                borderRadius: "4.5px",
                boxShadow: "0px 1.8px 1.8px 0px rgba(0, 0, 0, 0.10)",
            }}
        >
            <TitleWithButton title="About" subtitle="Vishnu" buttonText="Edit" />
            <span
                style={{...aboutTypography}}
            >
                Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.
            </span>
        </section >
    );
}