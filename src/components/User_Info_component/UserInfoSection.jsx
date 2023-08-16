import EditableInfoTile from "../EditableInfoTile";

export default function UserInfoSection({
    register, className, userName, email, phone, password, confirmPassword, onChangeName, onChangeEmail, onChangePhone, onChangePassword, onChangeConfirmPassword, onSave
}) {
    return (
        <section
            className={`flex flex-col flex-shrink-0 p-4 gap-6 rounded-[5px] shadow-2 border border-solid border-0-0-0 ${className} max-desktop:p-3 max-desktop:gap-2`}
        >
            <EditableInfoTile
                title="Your Name"
                type="text"
                field={userName}
                register={register}
                value={userName}
                onChangeValue={onChangeName}
                onSave={() => onSave('name')} />

            <EditableInfoTile
                title="Email"
                type="email"
                field={email}
                register={register}
                value={email}
                onChangeValue={onChangeEmail}
                onSave={() => onSave('email')} />

            <EditableInfoTile
                title="Phone Number"
                type="text"
                field={'+91 ' + phone}
                register={register}
                value={phone}
                onChangeValue={onChangePhone}
                onSave={() => onSave('phone')} />

            {
                register &&
                <>
                    <EditableInfoTile
                        title="Password"
                        type="password"
                        register={register}
                        value={password}
                        onChangeValue={onChangePassword} />
                    <EditableInfoTile
                        title="Confirm Password"
                        type="password"
                        register={register}
                        value={confirmPassword}
                        onChangeValue={onChangeConfirmPassword} />
                </>
            }
        </section >
    );
}