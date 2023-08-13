import UserAboutSection from "@/components/UserAboutSection";
import UserProfilePicSextion from "@/components/UserProfilePicSection";
import UserInfoSection from "@/components/UserInfoSection";
import UserSkillsSection from "@/components/UserSkillsSections";
import UserProfessionalDetailsSection from "@/components/UserProfessionalDetailsSection";
import UserCertifications from "@/components/UserCertifications";
import UserExperience from "@/components/UserExperience";
import UserEducation from "@/components/UserEducation";

export default function Home() {
  return (
    <main className="relative flex-shrink-0 w-11/12 p-2 m-2  ">
      <div className="p-2 w-full h-44" style={{
        border: "0.889px solid #FFF",
        borderRadius: "8.889px",
        background: "#1E2875",
      }}>
        <span className="m-2 p-2" style={{
          color: "#FFF",
          fontFamily: "Outfit",
          fontSize: "16px",
          fontWeight: "500",
          fontStyle: "normal",
          lineHeight: "normal",
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
          <UserProfilePicSextion />
          <UserInfoSection />
          <UserAboutSection />
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
  );
}
