import { Ellipse255Icon } from "@/svgs";
import CustomButton from "../CustomButton";
import { typographySubtitle, typographyTitle } from "@/utils/consts";

export default function ConnectionCard({ name, job, company, isConnected, onClick }) {
    return (
        <div className="flex flex-shrink-0 gap-3 p-2 justify-between px-6 items-center"
            style={{
                width: "350px",
                height: "150px",
                border: "0.889px solid var(--input-box-stroke-thin, rgba(0, 0, 0, 0.15))",
                borderRadius: "4.444px",
                boxShadow: "0px 1.8px 1.8px 0px rgba(0, 0, 0, 0.10)",
            }}>
            <div className="flex flex-col gap-3">
                <span style={{ ...typographyTitle, fontSize: "18px" }} >{name}</span>
                <div className="flex flex-col">
                    <span style={{
                        ...typographySubtitle,
                        fontWeight: 400,
                        fontSize: "12px"
                    }}>{job}</span>
                    <span style={{
                        ...typographySubtitle,
                        fontWeight: 400,
                        fontSize: "12px"
                    }}>@ {company}</span>
                </div>{isConnected ?
                    <CustomButton text="Remove Connection" color="#BAB6EB" onClick={onClick}/> :
                    <CustomButton text="Connect" color="#BAB6EB" onClick={onClick}/>}
            </div>
            <Ellipse255Icon className="flex-shrink-0 w-27 h-27" style={{
                border: "0.889px solid #F8F8FF",
                borderRadius: "88.889px",
                background: "url(<path-to-image>), lightgray 50% / cover no-repeat, #FFA78D",
                boxShadow: "0px 1.8px 3.5px 0px rgba(0, 0, 0, 0.10)",
            }} />
        </div>
    );
}