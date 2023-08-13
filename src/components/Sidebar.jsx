import Image from "next/image";

const typography = {
    color: "#1A1558",
    fontFamily: "Palatino Linotype",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
}

const ActiveTabStyle = {
    borderRadius: "8.889px",
    border: "0.889px solid #413B89",
    boxShadow: "0px 1.8px 1.8px 0px rgba(0, 0, 0, 0.10)",
};

const SidebarTabs = () => {
    return (
        <div className="flex flex-row justify-start items-start m-2 p-5 gap-2">
            <div className="flex flex-col justify-evenly items-center h-full gap-5">
                <Image
                    className="mx-3 py-4 "
                    priority
                    width={15}
                    height={15}
                    alt="bullet arrow"
                    src="/assets/svgs/chevron-right-3.svg"
                />
                <Image
                    className="mx-3 py-4"
                    priority
                    width={15}
                    height={15}
                    alt="bullet arrow"
                    src="/assets/svgs/chevron-right-3.svg"
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
                <div
                    className="flex justify-center items-center py-3 px-16"
                    style={{
                        ...ActiveTabStyle,
                    }}
                >
                    <span style={{ ...typography }}> My Profile</span>
                </div>
                <div
                    className="flex justify-center items-center py-3 px-16"
                    style={{
                        // ...ActiveTabStyle,
                    }}
                >
                    <span style={{ ...typography }}>My Connections</span>
                </div>
            </div>
        </div>
    );
}

export default function Sidebar() {
    return (
        <section className="flex-shrink-0" style={{
            width: "25%",
            hight: "99vh",
        }}>
            <div className="flex-shrink-0 h-full" style={{
                width: "95%",
                background: "#FFF",
                boxShadow: "0px 8.88888931274414px 53.33333206176758px 0px rgba(226, 236, 249, 0.50)",
            }}>
                <div className="flex flex-col justify-between gap-10 items-center pb-10 m-1 p-2 h-full">
                    <div
                        className="flex flex-col justify-between items-end py-5 px-3 m-2"
                        style={{
                            height: "40%",
                        }}
                    >
                        <div
                            className="inline-flex justify-end items-end px-8 py-2 gap-12 m-2"
                            style={{
                                border: "0.889px solid var(--input-box-stroke-thin, rgba(0, 0, 0, 0.15))",
                                borderRadius: "8.889px",
                                boxShadow: "0px 1.7777777910232544px 1.7777777910232544px 0px rgba(0, 0, 0, 0.10)",
                            }}
                        >
                            <span style={{
                                ...typography,
                                color: "rgba(34, 34, 34, 0.90)",
                                fontFamily: "Outfit",
                                fontStyle: "normal",
                                fontWeight: 500,
                                fontSize: "24px",
                            }}
                            >
                                Dashboard
                            </span>
                        </div>
                        <SidebarTabs />
                    </div>
                    <div className="justify-self-end">
                        <span style={{
                            ...typography,
                            color: "rgba(34, 34, 34, 0.90)",
                            fontFamily: "Outfit",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "16px",
                        }}>
                            Log Out
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
