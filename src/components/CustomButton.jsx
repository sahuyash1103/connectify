export default function CustomButton({ className, text, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`flex justify-center items-center py-1 px-3 my-2 rounded-[60px] text-34-34-34 text-14 font-600 font-Outfit leading-normal not-italic bg-F0EFFA ${className}`}
        >
            {text}
        </button >
    );
}