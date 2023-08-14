import { BoldDuotoneAstranomyStarsIcon } from "@/svgs";
import TitleWithButton from "../TitleWithButton";
import { typographySubtitle } from "@/utils/consts";

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
                <span style={{ ...typographySubtitle }}>
                    This are the professional details shown to users in the app.
                </span>
            </div>
            <BoldDuotoneAstranomyStarsIcon className="w-12 h-12"/>
        </section>
    )
}