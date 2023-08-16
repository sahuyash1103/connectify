import { Ellipse255Icon } from "@/svgs";
import CustomButton from "../CustomButton";

export default function UserProfilePicSection({ className }) {
    return (
        <section className={`flex justify-between items-center p-2 ${className}`}>
            <Ellipse255Icon className="w-[97px] flex-shrink-0 border-[1px] border-solid border-F8F8FF rounded-[50%] shadow-3"
            />
            <CustomButton text="Upload Photo" />
        </section>
    );
}