'use client';
import ProtectedLayout from "@/components/ProtectedLayout";
import { typographyTitle } from "@/utils/consts";
import { useState, useEffect } from "react";
import { getUserConnectionsData, getAllConnectionsData } from "@/utils/http-service";
import ConnectionsList from "@/components/connection_page_component/ConnectionsList";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

export default function Connections() {
    const [userConnections, setUserConnections] = useState([]);
    const [allConnections, setAllConnections] = useState([]);
    const [userData, setUserData] = useState([]);

    const router = useRouter();

    useEffect(() => {
        let user = getCookie("user");
        if (!user) return router.push("/login");
        setUserData(JSON.parse(user));

        getUserConnectionsData().then((res) => {
            if (res.status === 200)
                setUserConnections(res?.data);
            else
                router.push("/login");
        });
        getAllConnectionsData().then((res) => {
            if (res.status === 200)
                setAllConnections(res?.data);
            else
                router.push("/login");
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ProtectedLayout>
            <main className="flex-shrink-0 w-11/12 p-2 m-2">
                <div className="p-2 w-full h-20" style={{
                    border: "0.889px solid #FFF",
                    borderRadius: "8.889px",
                    background: "#1E2875",
                }}>
                    <span className="m-2 p-2" style={{
                        ...typographyTitle,
                        color: "#FFF",
                        fontSize: "18px",
                        fontWeight: 500,
                    }}>MY CONNECTIONS</span>
                </div>
                <div className="flex flex-col gap-4 p-2 justify-start items-start w-full">
                    <section className="flex flex-wrap justify-start items-start overflow-x-hidden overflow-y-scroll gap-4 p-2 w-full" style={{
                        height: "35vh",
                    }}>
                        <ConnectionsList isMy userConnections={userConnections} allConnections={allConnections} setUserConnections={setUserConnections} userData={userData} />
                    </section>
                    <span style={{ ...typographyTitle }}>People you can also connect</span>
                    <section className="flex flex-wrap justify-start items-start overflow-x-hidden overflow-y-scroll gap-4 p-2 w-full" style={{
                        height: "35vh",
                    }}>
                        <ConnectionsList userConnections={userConnections} allConnections={allConnections} setUserConnections={setUserConnections} userData={userData} />
                    </section>
                </div>
            </main>
        </ProtectedLayout>
    );
}