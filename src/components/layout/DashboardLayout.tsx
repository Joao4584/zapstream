'use client';

import { ReactNode, useEffect, useLayoutEffect, useState } from "react";

// * Exports * //
import ChildrenProps from "@/@types/children";
import useColorMode from "@/src/hooks/useColorMode";
import { MainPattern } from "@/src/components/ui/GridPattern";
import SideBar from "@/src/components/sideBar";
import { AuthProvider } from "@/src/providers/auth-provider/AuthContext";
import { PrimeProvider } from "@/src/providers/prime-provider";

// * Components * //

export default function DashboardLayout({ children }: ChildrenProps) {

    const [theme, setTheme] = useColorMode();

    useEffect(() => {
        setGlobalTheme(theme)
    }, [theme]);

    return (
            <PrimeProvider>
                <AuthProvider>
                    <main className="relative w-screen h-screen overflow-x-hidden overflow-y-hidden z-10 relative p-1">
                        <MainPattern />
                        <div className="flex w-full h-full ">
                            <SideBar />
                            <div className="w-10/12 pl-1 h-full overflow-y-auto overflow-x-hidden">
                            {children}
                            </div>
                        </div>
                    </main>
                </AuthProvider>
            </PrimeProvider>
    )
}

const setGlobalTheme = (theme: string) => {
    if (theme == "dark") {
        document.querySelector('body')?.classList.add("dark-body");
    } else {
        document.querySelector('body')?.classList.remove("dark-body");
        document.querySelector('body')?.classList.remove("white-body");
    }
}
