'use client';
import ConnectionCard from "./ConnectionCard";
import { disconnectToUserPutReq, connectToUserPutReq } from "@/utils/http-service";
import { useEffect, useState } from "react";
import { UserContext } from "@/context/userContext";
import { useContext } from "react";

export default function ConnectionsList({ userConnections, allConnections, setUserConnections, isMy }) {
    const { userData, _ } = useContext(UserContext);
    const [myConnections, setMyConnections] = useState([]);

    const disconnectToUser = async (email) => {
        const res = await disconnectToUserPutReq(email);
        if (res?.status === 200) {
            setUserConnections(res?.data);
        }
        else
            console.log("[server]: ", res?.data);
    }

    const connectToUser = async (email) => {
        const res = await connectToUserPutReq(email);
        if (res?.status === 200) {
            setUserConnections(res?.data);
        }
        else
            console.log("[server]: ", res?.data);
    }

    useEffect(() => {
        let result = allConnections.filter((connection) => {
            if (connection?.email === userData?.email) return false;

            if (isMy) {
                return userConnections.includes(connection?.email)
            }
            else {
                return !userConnections.includes(connection?.email);
            }
        });
        setMyConnections(result);
    }, [allConnections, userConnections, isMy, userData]);

    return (
        <>
            {
                myConnections?.length > 0 ?
                    myConnections?.map((connection, index) => {
                        return <ConnectionCard
                            key={index}
                            name={connection?.email}
                            job="Full stack developer"
                            company="Oruphones"
                            onClick={() => {
                                isMy ?
                                    disconnectToUser(connection?.email) :
                                    connectToUser(connection?.email)
                            }}
                            isConnected={isMy}
                        />
                    })
                    :
                    <span>
                        No Connections
                    </span>
            }
        </>
    );
}