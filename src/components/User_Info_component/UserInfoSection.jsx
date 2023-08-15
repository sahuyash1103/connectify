import EditableInfoTile from "../EditableInfoTile";

export default function UserInfoSection({
    register, style, userName, email, phone, password, confirmPassword, onChangeName, onChangeEmail, onChangePhone, onChangePassword, onChangeConfirmPassword, onSave
}) {
    return (
        <section
            className="flex flex-col flex-shrink-0 p-4 gap-6"
            style={{
                ...style,
                borderRadius: "5px",
                border: "0.889px solid var(--input-box-stroke-thin, rgba(0, 0, 0, 0.15))",
                boxShadow: "0px 1.8px 1.8px 0px rgba(0, 0, 0, 0.10)",
            }}
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