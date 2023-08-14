import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";

export default function ProtectedLayout({ children }) {
    return (
        <div className='flex w-full h-full'>
            <Sidebar />
            <div className='flex flex-col h-full' style={{
                width: "75vw",
                minHeight: '99vh',
            }}
            >
                <Navbar />
                {children}
            </div>
        </div>
    );
}