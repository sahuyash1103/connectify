'use client';
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";
import { useState } from "react";

export default function ProtectedRouteLayout({ children }) {
    const [openSidebar, setOpenSidebar] = useState(false);
    return (
        <div className='flex w-full h-full duration-[250ms]'>
            <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
            <div className="flex w-screen h-full justify-end">
                <div className='flex flex-col items-center h-full w-[75vw] min-h-[100vh] max-[1900px]:w-[80vw] max-laptop:w-[100vw]'
                >
                    <Navbar setOpenSidebar={setOpenSidebar} />
                    {children}
                </div>
            </div>
        </div>
    );
}