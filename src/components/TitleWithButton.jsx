import CustomButton from "./CustomButton";

export default function TitleWithButton({ title, subtitle, buttonText, onClick }) {
    return (
        <div className="flex justify-between items-center">
            <span className="flex gap-1 text-18 text-34-34-34 font-Outfit font-600 not-italic leading-normal max-desktop:text-16"
            >
                {title}
                <span className="text-413B89 font-Outfit font-600 not-italic leading-normal text-18 max-desktop:text-16"
                >
                    {subtitle}
                </span>
            </span>
            {
                buttonText &&
                <CustomButton
                    text={buttonText}
                    onClick={onClick}
                />}
        </div>
    );
}