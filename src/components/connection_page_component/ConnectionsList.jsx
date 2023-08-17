'use client';
import ConnectionCard from "./ConnectionCard";
import { disconnectToUserPutReq, connectToUserPutReq } from "@/utils/http-service";
import { useEffect, useState } from "react";
import { UserContext } from "@/context/userContext";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function ConnectionsList({ userConnections, allConnections, setUserConnections, isConnected }) {
    const { userData } = useContext(UserContext);
    const [connections, setConnections] = useState([]);

    const disconnectToUser = async (email, setLoading) => {
        setLoading(true);

        const res = await disconnectToUserPutReq(email);
        if (res?.status === 200) {
            setLoading(false);
            setUserConnections(res?.data);
        }
        else {
            setLoading(false);
            console.log("[server]: ", res?.data);
            toast("[server]: " + res?.data, { hideProgressBar: true, autoClose: 2000, type: 'error' });
        }
    }

    const connectToUser = async (email, setLoading) => {
        setLoading(true);
        // setUserConnections([...userConnections, email]);

        const res = await connectToUserPutReq(email);
        if (res?.status === 200) {
            setLoading(false);
            setUserConnections(res?.data);
        }
        else {
            setLoading(false);
            console.log("[server]: ", res?.data);
            toast("[server]: " + res?.data, { hideProgressBar: true, autoClose: 2000, type: 'error' });
        }
    }

    useEffect(() => {
        let result = allConnections.filter((connection) => {
            if (connection?.email === userData?.email) return false;

            if (isConnected) {
                return userConnections.includes(connection?.email)
            }
            else {
                return !userConnections.includes(connection?.email);
            }
        });
        setConnections(result);
    }, [allConnections, userConnections, isConnected, userData]);

    return (
        <section className="flex flex-wrap justify-start items-start overflow-x-hidden overflow-y-scroll gap-4 p-2 w-full h-[35vh] max-[900px]:h-[35vh] max-desktop:gap-3 max-desktop:p-1 max-laptop:gap-2 max-[900px]:p-0">
            {
                connections?.length > 0 ?
                    connections?.map((connection, index) => {
                        return <ConnectionCard
                            key={connection?.email}
                            name={connection?.name}
                            job="Full stack developer"
                            company="Oruphones"
                            onClick={(setLoading) => {
                                isConnected ?
                                    disconnectToUser(connection?.email, setLoading) :
                                    connectToUser(connection?.email, setLoading)
                            }}
                            isConnected={isConnected}
                        />
                    })
                    :
                    <span>
                        No Connections
                    </span>
            }
        </section>
    );
}