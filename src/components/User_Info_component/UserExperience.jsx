import Image from "next/image";
import TitleWithButton from "../TitleWithButton";
import { typographyTitle, typographySubtitle } from "@/utils/consts";

const ExperienceTile = ({ duration, years, workType, componey, role }) => {
    return (
        <div className="flex-shrink-0 flex gap-5 p-4" style={{
            border: "0.889px solid var(--input-box-stroke-thin, rgba(0, 0, 0, 0.15))",
            borderRadius: "8.889px",
            boxShadow: "0px 1.8px 1.8px 0px rgba(0, 0, 0, 0.10)",
        }}>
            <div className="flex flex-col w-full gap-1">
                <div className="flex justify-between">
                    <span style={{ ...typographyTitle }}>{duration} {years}</span>
                    <span style={{ ...typographyTitle }}>{workType}</span>
                </div>
                <div className="flex justify-between">
                    <span
                        style={{
                            ...typographySubtitle,
                            fontSize: "14px",
                        }}
                    >
                        {componey}
                    </span>
                    <span
                        style={{
                            ...typographySubtitle,
                            fontSize: "14px",
                        }}
                    >
                        {role}
                    </span>
                </div>
            </div>
            <Image
                className="flex-shrink-0"
                priority
                width={47}
                height={23}
                alt=""
                src="/assets/imgs/image-13.png"
                style={{
                    background: "lightgray 50% / cover no-repeat",
                }}
            />
        </div>
    );
}

export default function UserExperience() {
    return (
        <section className="flex flex-col gap-4 p-4">
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