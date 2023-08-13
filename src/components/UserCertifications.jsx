import Image from "next/image";
import TitleWithButton from "./TitleWithButton";

export default function UserCertifications() {
    return (
        <section className="flex flex-col gap-4 p-2">
            <TitleWithButton title="Certifications" buttonText="Edit" />
            <div className="flex gap-5 px-8 py-1 justify-start" style={{
                border: "0.889px solid var(--dividers-and-borders-grey-light, #CECECE)",
                borderRadius: "26.667px",
                background: "var(--secondary-white, #FFF)",
            }}>
                <Image
                    className="flex-shrink-0"
                    priority
                    width={24}
                    height={24}
                    alt=""
                    src="/assets/svgs/vector.svg"
                    style={{
                        fill: "#FFCE10",
                    }}
                />
                <div className="flex flex-col justify-center items-center w-3/4">
                    <span>Python</span>
                    <span>Coding Ninjas</span>
                </div>
            </div>
        </section>
    );
}