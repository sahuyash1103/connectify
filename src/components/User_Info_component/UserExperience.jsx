import Image from "next/image";
import TitleWithButton from "../TitleWithButton";

const ExperienceTile = ({ duration, years, workType, componey, role }) => {
    return (
        <div
            className="flex-shrink-0 flex gap-5 p-4 border border-solid border-0-0-0 rounded-[9px] shadow-2 max-[1700px]:p-3"
        >
            <div className="flex flex-col w-full gap-1">
                <div className="flex justify-between">
                    <span className="text-34-34-34 text-14 font-600 font-Outfit leading-normal not-italic max-[400px]:text-12" >
                        {duration} {years}
                    </span>
                    <span className="text-34-34-34 text-14 font-600 font-Outfit leading-normal not-italic max-[400px]:text-12" >
                        {workType}
                    </span>
                </div>
                <div className="flex justify-between">
                    <span
                        className="text-14 text-73-69-79 font-500 font-Outfit leading-normal not-italic lining-nums proportional-nums max-[400px]:text-12"
                    >
                        {componey}
                    </span>
                    <span
                        className="text-14 text-73-69-79 font-500 font-Outfit leading-normal not-italic lining-nums proportional-nums max-[400px]:text-12"
                    >
                        {role}
                    </span>
                </div>
            </div>
            <Image
                className="flex-shrink-0 max-[1700px]:w-[70px] max-desktop:w-[50px] max-[425px]:w-[40px] max-[400px]:w-[30px]"
                priority
                width={83}
                height={38}
                alt=""
                src="/assets/imgs/image-13s.png"
            />
        </div>
    );
}

export default function UserExperience() {
    return (
        <section className="flex flex-col gap-4 p-4 max-desktop:p-2 max-desktop:gap-2">
            <TitleWithButton title="Experience" buttonText="Edit" />
            <ExperienceTile
                duration="7 Years"
                years="(2014-2021)"
                workType="Full-time"
                componey="Oruphones"
                role="-- Full Stack Developer"
            />
            <ExperienceTile
                duration="6 months"
                years="(2014)"
                workType="intern"
                componey="Oruphones"
                role="-- Full Stack Developer"
            />
        </section>
    );
}