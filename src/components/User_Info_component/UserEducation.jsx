import TitleWithButton from "../TitleWithButton";

const EducationTile = () => {
    return (
        <div
            className="flex-shrink-0 flex flex-col p-5 gap-2 border border-solid border-CECECE rounded-[9px] shadow-6 max-desktop:p-3"
        >
            <span
                className="text-413B89 text-16 font-500 font-Outfit leading-normal not-italic lining-nums proportional-nums tracking-[0.118px]"
            >
                IIT  HYDERABAD
            </span>
            <div className="flex justify-between items-center mr-8">
                <span
                    className="text-16 font-500 text-34-34-34 font-Outfit leading-normal not-italic">
                    (2010-2014)
                </span>
                <span
                    className="text-16 font-500 text-34-34-34 font-Outfit leading-normal not-italic"
                >
                    Btech
                </span>
            </div>
            <span className="text-16 text-73-69-79 font-500 font-Outfit leading-normal not-italic lining-nums proportional-nums text-justify"
            >
                Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.
            </span>
        </div>
    );
}

export default function UserEducation() {
    return (
        <section className="flex flex-col gap-4 p-4 max-desktop:p-2 max-desktop:gap-2">
            <TitleWithButton title="Education" buttonText="Edit" />
            <EducationTile />
        </section>
    );
}