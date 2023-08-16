'use client';
import ConnectionCard from "./ConnectionCard";
import { disconnectToUserPutReq, connectToUserPutReq } from "@/utils/http-service";
import { useEffect, useState } from "react";
import { UserContext } from "@/context/userContext";
import { useContext } from "react";

export default function ConnectionsList({ userConnections, allConnections, setUserConnections, userConnection }) {
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

            if (userConnection) {
                return userConnections.includes(connection?.email)
            }
            else {
                return !userConnections.includes(connection?.email);
            }
        });
        setMyConnections(result);
    }, [allConnections, userConnections, userConnection, userData]);

    return (
        <section className="flex flex-wrap justify-start items-start overflow-x-hidden overflow-y-scroll gap-4 p-2 w-full h-[50vh] max-desktop:gap-3 max-desktop:p-1 max-laptop:gap-2 max-[900px]:p-0">
            <ConnectionCard
                name="dummy"
                job="Full stack developer"
                company="Oruphones"
                isConnected={userConnection}
            />
            <ConnectionCard
                name="dummy"
                job="Full stack developer"
                company="Oruphones"
                isConnected={userConnection}
            />
            <ConnectionCard
                name="dummy"
                job="Full stack developer"
                company="Oruphones"
                isConnected={userConnection}
            />
            <ConnectionCard
                name="dummy"
                job="Full stack developer"
                company="Oruphones"
                isConnected={userConnection}
            />
            <ConnectionCard
                name="dummy"
                job="Full stack developer"
                company="Oruphones"
                isConnected={userConnection}
            />
            <ConnectionCard
                name="dummy"
                job="Full stack developer"
                company="Oruphones"
                isConnected={userConnection}
            />
            <ConnectionCard
                name="dummy"
                job="Full stack developer"
                company="Oruphones"
                isConnected={userConnection}
            />
            {
                myConnections?.length > 0 ?
                    myConnections?.map((connection, index) => {
                        return <ConnectionCard
                            key={index}
                            name={connection?.name}
                            job="Full stack developer"
                            company="Oruphones"
                            onClick={() => {
                                userConnection ?
                                    disconnectToUser(connection?.email) :
                                    connectToUser(connection?.email)
                            }}
                            isConnected={userConnection}
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