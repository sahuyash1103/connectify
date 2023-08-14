import ConnectionCard from "@/components/connection_page_component/ConnectionCard";
import ProtectedLayout from "@/components/ProtectedLayout";
import { typographyTitle } from "@/utils/consts";

export default function MyConnections() {
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
                    <div className="flex flex-wrap justify-start items-start overflow-x-hidden overflow-y-scroll gap-4 p-2 w-full" style={{
                        height: "35vh",
                    }}>
                        {
                            <ConnectionCard name="Vishnu Swaroop" job="Full stack developer" company="Oruphones" isConnected />
                        }
                    </div>
                    <span style={{ ...typographyTitle }}>People you can also connect</span>
                    <div className="flex flex-wrap justify-start items-start overflow-x-hidden overflow-y-scroll gap-4 p-2 w-full" style={{
                        height: "35vh",
                    }}>
                        {
                            <ConnectionCard name="Vishnu Swaroop" job="Full stack developer" company="Oruphones" />
                        }
                    </div>
                </div>
            </main>
        </ProtectedLayout>
    );
}