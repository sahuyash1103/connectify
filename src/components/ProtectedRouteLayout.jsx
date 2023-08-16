import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";

export default function ProtectedRouteLayout({ children }) {
    return (
        <div className='flex w-full h-full duration-[250ms]'>
            <Sidebar />
            <div className="flex w-screen h-full justify-end">
                <div className='flex flex-col items-center h-full w-[75vw] min-h-[100vh] max-[1900px]:w-[80vw] max-laptop:w-[100vw]'
                >
                    <Navbar />
                    {children}
                </div>
            </div>
        </div>
    );
}