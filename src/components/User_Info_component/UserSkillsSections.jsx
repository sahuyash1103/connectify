import TitleWithButton from "../TitleWithButton";

const SkillTile = ({ skill }) => {
    return (
        <span className="text-34-34-34 text-16 font-500 font-Outfit leading-normal not-italic"
        >
            {skill}
        </span>
    );
}

export default function UserSkillsSection() {
    return (
        <section className="flex-shrink-0 p-4 flex flex-col gap-4 border border-solid border-0-0-0 rounded-[5px] shadow-2 max-desktop:p-3 max-desktop:gap-2"
        >
            <TitleWithButton title="Skills" buttonText="Edit" />
            <div className="flex flex-col gap-2 p-1">
                <SkillTile skill="NextJs" />
                <SkillTile skill="TypeScript" />
            </div>
        </section >
    );
}