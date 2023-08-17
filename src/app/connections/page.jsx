'use client';
import ProtectedRouteLayout from "@/components/ProtectedRouteLayout";
import { useState, useEffect } from "react";
import { getUserConnectionsData, getAllConnectionsData } from "@/utils/http-service";
import ConnectionsList from "@/components/connection_page_component/ConnectionsList";
import { useRouter } from "next/navigation";

export default function Connections() {
    const [userConnections, setUserConnections] = useState([]);
    const [allConnections, setAllConnections] = useState([]);

    const router = useRouter();

    useEffect(() => {
        getUserConnectionsData().then((res) => {
            if (res?.status === 200) {
                setUserConnections(res?.data);
            }
            else {
                console.log("[server]: ", res?.data)
                router.push("/login");
            }
        });
        getAllConnectionsData().then((res) => {
            if (res?.status === 200) {
                setAllConnections(res?.data);
            }
            else {
                console.log("[server]: ", res?.data)
                router.push("/login");
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ProtectedRouteLayout>
            <main className="flex-shrink-0 w-11/12 p-2 m-2 max-[1900px]:w-full">
                <div className="p-2 w-full h-20 rounded-[9px] bg-1E2875 border border-solid border-FFF">
                    <span className="m-2 p-2 text-FFF text-18 font-500 font-Outfit leading-normal not-italic" >
                        MY CONNECTIONS
                    </span>
                </div>
                <div className="flex flex-col p-2 justify-start items-start w-full">
                    <ConnectionsList
                        isConnected
                        userConnections={userConnections}
                        allConnections={allConnections}
                        setUserConnections={setUserConnections}
                    />
                    <span className="text-34-34-34 text-14 font-600 font-Outfit leading-normal not-italic w-full py-2 border-t-2 m-4 max-desktop:mb-3 max-laptop:mb-2 max-[900px]:mb-1">
                        People you can also connect
                    </span>
                    <ConnectionsList
                        userConnections={userConnections}
                        allConnections={allConnections}
                        setUserConnections={setUserConnections}
                    />
                </div>
            </main>
        </ProtectedRouteLayout>
    );
}