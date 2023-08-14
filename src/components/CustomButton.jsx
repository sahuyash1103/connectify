const typography = {
    color: "rgba(34, 34, 34, 0.90)",
    fontFamily: "Outfit",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
};

export default function CustomButton({ text, style, color, onClick }) {
    return (
        <button
            onClick={onClick}
            className="flex justify-center items-center py-1 px-5 my-2"
            style={{
                borderRadius: "64px",
                background: color || "#F0EFFA",
                fontSize: "12px",
                ...typography,
                ...style,
            }}
        >
            {text}
        </button >
    );
}