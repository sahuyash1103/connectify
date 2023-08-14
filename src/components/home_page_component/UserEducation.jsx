import TitleWithButton from "./TitleWithButton";
import { typographySubtitle, typographyTitle } from "@/utils/consts";

const EducationTile = () => {
    return (
        <div className="flex-shrink-0 flex flex-col p-5 gap-2"
            style={{
                border: "0.844px solid var(--dividers-and-borders-grey-light, #CECECE)",
                borderRadius: "8.921px",
                boxShadow: "0px 3.375375986099243px 5.063063621520996px 0px rgba(65, 59, 137, 0.10)",
            }}
        >
            <span style={{
                ...typographySubtitle,
                color: "var(--primary-blue, #413B89)",
                fontSize: "14px",
                letterSpacing: "0.118px",
            }}>IIT  HYDERABAD</span>
            <div className="flex justify-between items-center mr-8">
                <span style={{ ...typographyTitle, fontWeight: 500, fontSize: "14px" }}>
                    (2010-2014)
                </span>
                <span style={{ ...typographyTitle, fontWeight: 500, fontSize: "14px" }}>
                    Btech
                </span>
            </div>
            <span style={{ ...typographySubtitle }}>Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.</span>
        </div>
    );
}

export default function UserEducation() {
    return (
        <section className="flex flex-col gap-4 p-4">
            <TitleWithButton title="Education" buttonText="Edit" />
            <EducationTile />
        </section>
    );
}