import CustomButton from "./CustomButton";
import { typography2 } from "@/utils/consts";

const typography = {
    ...typography2,
    color: "rgba(31, 31, 31, 0.70)",
    fontSize: "12px",
};

const EditInfoTile = ({ title, field }) => {
    return (
        <div className="flex flex-col justify-center gap-2">
            <span style={{ ...typography }}>{title}</span>
            <div className="flex justify-between items-center">
                <span style={{
                    ...typography,
                    color: "rgba(34, 34, 34, 0.90)",
                }}
                >
                    {field}
                </span>
                <CustomButton text="Edit"/>
            </div>
        </div>
    );
}

export default function UserInfoSection() {
    return (
        <section
            className="flex flex-col flex-shrink-0 p-4 gap-6"
            style={{
                borderRadius: "5px",
                border: "0.889px solid var(--input-box-stroke-thin, rgba(0, 0, 0, 0.15))",
                boxShadow: "0px 1.8px 1.8px 0px rgba(0, 0, 0, 0.10)",
            }}
        >
            <EditInfoTile title="Your Name" field="Vishnu Swaroop" />
            <EditInfoTile title="Email" field="vishnu@oruphones.com" />
            <EditInfoTile title="Phone Number" field="+91 49652845732" />
        </section >
    );
}