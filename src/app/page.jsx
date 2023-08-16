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
      <main className="relative flex-shrink-0 w-95/ p-2 m-2 max-[1900px]:w-full">
        <div className="p-2 w-full h-44 border border-solid border-white rounded-lg bg-1E2875">
          <span className="m-2 p-2 text-FFF text-18 font-500 font-Outfit leading-normal" >
            MY PROFILE
          </span>
        </div>
        <div
          className="absolute flex justify-center items-start flex-shrink-0 z-10 p-4 gap-10 border border-solid w-80/ top-2/4 left-[9%] border-EBEBEE rounded-[9px] bg-white shadow-1 max-[1500px]:w-90/ max-[1500px]:left-[5%] max-[1900px]:gap-5 max-[900px]:flex-col max-[900px]:items-center"
        >
          <div className="flex flex-col justify-between gap-3 w-45/ max-[1500px]:w-[48%] max-[900px]:w-80/ max-[500px]:w-95/ ">
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
          <div className="flex flex-col gap-3 w-45/ max-[1500px]:w-[48%] max-[900px]:w-80/ max-[500px]:w-95/">
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
