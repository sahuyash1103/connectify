'use client';
import TitleWithButton from "../TitleWithButton";
import { useState } from "react";

export default function UserAboutSection({ register, className, about, onChangeAbout, userName }) {
    const [isEditing, setIsEditing] = useState(false);

    const onClickSave = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    return (
        <section className={`flex-shrink-0 flex flex-col p-4 gap-6 border border-solid border-0-0-0 rounded-[5px] shadow-2 ${className} max-desktop:p-3 max-[900px]:p-1 max-desktop:gap-2`}
        >
            {
                register ?
                    <TitleWithButton
                        title="About"
                        subtitle={userName} />
                    :
                    (isEditing ?
                        <TitleWithButton
                            title="About"
                            subtitle={userName}
                            buttonText="Save"
                            onClick={onClickSave} />
                        :
                        <TitleWithButton
                            title="About"
                            subtitle={userName}
                            buttonText="Edit"
                            onClick={() => setIsEditing(true)} />
                    )
            }
            {
                (isEditing || register) ?
                    <textarea
                        className="p-2 border rounded-lg outline-none w-full h-[150px] bg-F0EFFA tracking-[0.3px] text-1E2875 text-14 font-500 font-Outfit leading-normal not-italic lining-nums proportional-nums max-desktop:h-[120px]"
                        value={about}
                        onChange={onChangeAbout}
                        type="text"
                    />
                    :
                    <span className="text-16 text-73-69-79 font-500 font-Outfit leading-normal not-italic lining-nums proportional-nums text-justify p-2"
                    >
                        {
                            about ? about :
                                "Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur."
                        }
                    </span>
            }
        </section >
    );
}