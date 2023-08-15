'use client';
import UserAboutSection from "@/components/User_Info_component/UserAboutSection";
import UserProfilePicSection from "@/components/User_Info_component/UserProfilePicSection";
import UserInfoSection from "@/components/User_Info_component/UserInfoSection";
import UserSkillsSection from "@/components/User_Info_component/UserSkillsSections";
import UserProfessionalDetailsSection from "@/components/User_Info_component/UserProfessionalDetailsSection";
import UserCertifications from "@/components/User_Info_component/UserCertifications";
import UserExperience from "@/components/User_Info_component/UserExperience";
import UserEducation from "@/components/User_Info_component/UserEducation";
import ProtectedRouteLayout from "@/components/ProtectedRouteLayout";
import { typographyTitle } from "@/utils/consts";
import { useContext, useEffect, useState } from "react";
import { updateUserData } from "@/utils/http-service";
import { validateUserUpdateData } from "@/utils/validators";
import { UserContext } from "@/context/userContext";
import { setUser } from "@/utils/cookies";

export default function Home() {
  const { userData, setUserData } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const setPageState = () => {
    setName(userData?.name);
    setEmail(userData?.email);
    setPhone(userData?.phone);
  }

  useEffect(() => {
    setPageState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  const handleSave = async (field) => {
    if (field === 'email') {
      console.log("email cannot be changed");
      return;
    }
    const getFieldData = (field) => {
      if (field === "name") return name;
      if (field === "email") return email;
      if (field === "phone") return phone;
    }

    const dataToUpdate = {
      [field]: getFieldData(field),
    };
    const error = await validateUserUpdateData(dataToUpdate);
    if (error) {
      setPageState();
      console.log("[validator]: ", error)
      return;
    };

    const res = await updateUserData(dataToUpdate);
    if (res.status === 200) {
      setUserData({
        ...userData,
        ...dataToUpdate,
      });
      setUser(userData);
    }
    else {
      setPageState();
      console.log("[server]: ", res?.data);
    };
  }

  return (
    <ProtectedRouteLayout >
      <main className="relative flex-shrink-0 w-11/12 p-2 m-2  ">
        <div className="p-2 w-full h-44" style={{
          border: "0.889px solid #FFF",
          borderRadius: "8.889px",
          background: "#1E2875",
        }}>
          <span className="m-2 p-2" style={{
            ...typographyTitle,
            color: "#FFF",
            fontSize: "18px",
            fontWeight: 500,
          }}>MY PROFILE</span>
        </div>
        <div
          className="absolute flex justify-center items-start flex-shrink-0 z-10 p-4 gap-10"
          style={{
            width: "85%",
            top: "50%",
            left: "7%",
            border: "1px solid #EBEBEE",
            borderRadius: "9px",
            boxShadow: "0px 3.555555582046509px 5.333333492279053px 0px rgba(0, 0, 0, 0.15)",
            background: "#FFF",
          }}>
          <div className="flex flex-col justify-between gap-3" style={{ width: "45%" }}>
            <UserProfilePicSection />
            <UserInfoSection
              userName={name}
              email={email}
              phone={phone}
              onChangeName={(e) => setName(e.target.value)}
              onChangeEmail={(e) => setEmail(e.target.value)}
              onChangePhone={(e) => setPhone(e.target.value)}
              onSave={handleSave}
            />
            <UserAboutSection userName={userData?.name} />
            <UserSkillsSection />
          </div>
          <div className="flex flex-col gap-3" style={{ width: "45%" }}>
            <UserProfessionalDetailsSection />
            <UserCertifications />
            <UserExperience />
            <UserEducation />
          </div>
        </div>
      </main>
    </ProtectedRouteLayout>
  );
}
