import TitleWithButton from "../TitleWithButton";
import { typographyTitle } from "@/utils/consts";

const SkillTile = ({ skill }) => {
    return (
        <span
            style={{
                ...typographyTitle,
                fontWeight: "500",
                fontSize: "16px",
            }}
        >
            {skill}
        </span>
    );
}

export default function UserSkillsSection() {
    return (
        <section className="flex-shrink-0 p-4 flex flex-col gap-4"
            style={{
                border: "0.889px solid var(--input-box-stroke-thin, rgba(0, 0, 0, 0.15))",
                borderRadius: "4.5px",
                boxShadow: "0px 1.8px 1.8px 0px rgba(0, 0, 0, 0.10)",
            }}
        >
            <TitleWithButton title="Skills" buttonText="Edit" />
            <div className="flex flex-col gap-2">
                <SkillTile skill="NextJs" />
                <SkillTile skill="TypeScript" />
            </div>
        </section >
    );
}