import { BoldDuotoneAstranomyStarsIcon } from "@/svgs";
import TitleWithButton from "../TitleWithButton";

export default function UserProfessionalDetailsSection() {
    return (
        <section
            className="flex-shrink-0 flex justify-evenly items-center p-4 mt-4 gap-4 border border-solid border-0-0-0 rounded-[9px] shadow-2 max-desktop:p-2 "
        >
            <div className="flex flex-col gap-4 w-70/">
                <TitleWithButton title="Professional Details" />
                <span
                    className="text-73-69-79 text-justify text-16 font-500 font-Outfit leading-normal not-italic lining-nums proportional-nums"
                >
                    This are the professional details shown to users in the app.
                </span>
            </div>
            <BoldDuotoneAstranomyStarsIcon className="w-12 h-12" />
        </section>
    )
}