import EditableInfoTile from "../EditableInfoTile";

export default function UserInfoSection({ editable, register, style, name, email, phone, password, confirmPassword, onChangeName, onChangeEmail, onChangePhone, onChangePassword, onChangeConfirmPassword }) {

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
            <EditableInfoTile title="Your Name" type="text" field="Vishnu Swaroop" editable={editable} register={register} value={name} onChangeValue={onChangeName} />
            <EditableInfoTile title="Email" type="email" field="vishnu@oruphones.com" editable={editable} register={register} value={email} onChangeValue={onChangeEmail} />
            <EditableInfoTile title="Phone Number" type="text" field="+91 49652845732" editable={editable} register={register} value={phone} onChangeValue={onChangePhone} />
            {
                register &&
                <>
                    <EditableInfoTile title="Password" type="password" editable={editable} register={register} value={password} onChangeValue={onChangePassword} />
                    <EditableInfoTile title="Confirm Password" type="password" editable={editable} register={register} value={confirmPassword} onChangeValue={onChangeConfirmPassword} />
                </>
            }
        </section >
    );
}