'use client';

// * Modules * //
import ChildrenProps from "@/@types/children";
import { ReactNode, useEffect, useLayoutEffect, useState } from "react";

// * Exports * //
import useColorMode from "../hooks/useColorMode";
import { MainPattern } from "./ui/GridPattern";
import SideBar from "./sideBar";
import { AuthProvider } from "@/src/context/AuthContext";

// * Components * //
export default function DashboardLayout({ children }: ChildrenProps) {

    const [theme, setTheme] = useColorMode();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        if (theme == "dark") {
            document.querySelector('body')?.classList.add("dark-body");
        } else {
            document.querySelector('body')?.classList.remove("dark-body");
            document.querySelector('body')?.classList.remove("white-body");
        }
    }, [theme]);

    return (
        <AuthProvider>
            <main className="relative w-screen h-screen overflow-x-hidden z-10 relative p-2">
                <MainPattern />
                <div className="flex w-full h-full">
                    <SideBar />
                    {children}
                </div>
            </main>
        </AuthProvider>
    )
}