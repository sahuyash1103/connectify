import Image from "next/image";
import TitleWithButton from "./TitleWithButton";
import { aboutTypography } from "@/utils/consts";

export default function UserProfessionalDetailsSection() {
    return (
        <section
            className="flex-shrink-0 flex justify-evenly p-4 mt-4"
            style={{
                border: "0.889px solid var(--input-box-stroke-thin, rgba(0, 0, 0, 0.15))",
                borderRadius: "8.889px",
                boxShadow: "0px 1.8px 1.8px 0px rgba(0, 0, 0, 0.10)",
            }}
        >
            <div className="flex flex-col gap-4">
                <TitleWithButton title="Professional Details" />
                <span style={{ ...aboutTypography }}>
                    This are the professional details shown to users in the app.
                </span>
            </div>
            <Image
                priority
                width={48}
                height={48}
                alt=""
                src="/assets/svgs/bold-duotone-astranomy-stars.svg"
            />
        </section>
    )
}