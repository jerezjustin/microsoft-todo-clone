import { ReactNode } from "react";
import Navbar from "../components/layout/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import DesktopNavigationSidebar from "../components/layout/DesktopNavigationSidebar";
import MobileNavigationSidebar from "../components/layout/MobileNavigationSidebar";
import DetailsSidebar from "../components/layout/DetailsSidebar";

interface MainLayoutProps {
    children?: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    const isNavigationSidebarOpen = useSelector(
        (state: RootState) => state.sidebar.isOpen
    );

    return (
        <>
            <Navbar />
            <main
                className={`relative  md:pl-0 flex bg-background h-[calc(100vh-3rem)] ${
                    isNavigationSidebarOpen && "pl-[50px]"
                }`}
            >
                {isNavigationSidebarOpen && <DesktopNavigationSidebar />}
                {isNavigationSidebarOpen && <MobileNavigationSidebar />}

                <div className="flex flex-col w-full">{children}</div>

                <DetailsSidebar />
            </main>
        </>
    );
};

export default MainLayout;
