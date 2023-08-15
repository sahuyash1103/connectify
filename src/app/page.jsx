'use client';
import UserAboutSection from "@/components/User_Info_component/UserAboutSection";
import UserProfilePicSection from "@/components/User_Info_component/UserProfilePicSection";
import UserInfoSection from "@/components/User_Info_component/UserInfoSection";
import UserSkillsSection from "@/components/User_Info_component/UserSkillsSections";
import UserProfessionalDetailsSection from "@/components/User_Info_component/UserProfessionalDetailsSection";
import UserCertifications from "@/components/User_Info_component/UserCertifications";
import UserExperience from "@/components/User_Info_component/UserExperience";
import UserEducation from "@/components/User_Info_component/UserEducation";
import ProtectedLayout from "@/components/ProtectedLayout";
import { typographyTitle } from "@/utils/consts";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function Home() {
  const [userData, setUserData] = useState({});
  const router = useRouter();

  useEffect(() => {
    let user = getCookie("user");
    if (!user) return router.push("/login");

    setUserData(JSON.parse(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProtectedLayout >
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
            <UserInfoSection userName={userData?.name} email={userData?.email} phone={userData?.phone} />
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
    </ProtectedLayout>
  );
}
