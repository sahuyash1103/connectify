import Image from "next/image";
import CustomButton from "./CustomButton";

export default function UserProfilePicSextion() {
    return (
        <section className="flex justify-between items-center p-2">
            <Image
                className="flex-shrink-0 "
                priority
                width={100}
                height={100}
                alt="Profile Picture"
                src="/assets/svgs/ellipse-255.svg"
                style={{
                    border: "0.5px solid #F8F8FF",
                    borderRadius: "50%",
                    background: "lightgray 50% / cover no-repeat, #FFA78D",
                    boxShadow: "0px 1.5px 3.5px 0px rgba(0, 0, 0, 0.10)",
                }}
            />
            <CustomButton text="Upload Photo" />
        </section>
    );
}