import { Ellipse255Icon } from "@/svgs";
import CustomButton from "../CustomButton";

export default function UserProfilePicSection({ style }) {
    return (
        <section className="flex justify-between items-center p-2" style={{ ...style }}>
            <Ellipse255Icon className="w-27 h-27 flex-shrink-0" style={{
                border: "0.5px solid #F8F8FF",
                borderRadius: "50%",
                background: "lightgray 50% / cover no-repeat, #FFA78D",
                boxShadow: "0px 1.5px 3.5px 0px rgba(0, 0, 0, 0.10)",
            }} />
            <CustomButton text="Upload Photo" />
        </section>
    );
}