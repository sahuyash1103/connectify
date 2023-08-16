import { VectorIcon } from "@/svgs";
import TitleWithButton from "../TitleWithButton";

const CirtificateTile = ({ title, from }) => {
    return (
        <div
            className="flex gap-5 px-8 py-1 justify-start items-center border border-solid border-CECECE bg-FFF rounded-[26px] max-desktop:gap-2"
        >
            <VectorIcon className="flex-shrink-0 w-6 h-6 fill-FFCE10" />
            <div className="flex flex-col justify-center items-center w-3/4">
                <span>{title}</span>
                <span>{from}</span>
            </div>
        </div>
    );
}

export default function UserCertifications() {
    return (
        <section className="flex flex-col gap-4 p-4 max-desktop:p-2 max-desktop:gap-2">
            <TitleWithButton
                title="Certifications"
                buttonText="Edit"
            />
            <div className="flex flex-col gap-5 max-desktop:gap-2">
                <CirtificateTile title={"Python"} from={"Coding Ninja"} />
                <CirtificateTile title={"Next js"} from={"Coding Ninja"} />
            </div>
        </section>
    );
}