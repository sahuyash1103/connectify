import CustomButton from "./CustomButton";

const typography = {
    color: "rgba(34, 34, 34, 0.90)",
    fontFamily: "Outfit",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
};

export default function TitleWithButton({ title, subtitle, buttonText }) {
    return (
        <div className="flex justify-between items-center">
            <span className="flex gap-1" style={{
                ...typography,
            }}
            >
                {title}
                <span
                    style={{
                        ...typography,
                        color: "#413B89",
                    }}
                >
                    {subtitle}
                </span>
            </span>
            {buttonText && <CustomButton text={buttonText} />}
        </div>
    );
}