'use client';
import tw from "tailwind-styled-components"
import { ReactNode, useEffect, useLayoutEffect, useState } from "react";
import { twMerge } from 'tailwind-merge';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

// * Exports * //
import ChildrenProps from "@/@types/children";
import useColorMode from "../hooks/useColorMode";
import { MainPattern } from "./ui/GridPattern";
import SideBar from "./sideBar";
import { AuthProvider } from "@/src/hooks/use-auth/AuthContext";
import { classNames } from "primereact/utils";

// * Components * //

const defaultPrimeSystem = {}
export default function DashboardLayout({ children }: ChildrenProps) {

    const [theme, setTheme] = useColorMode();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setGlobalTheme(theme)
    }, [theme]);

    return (
        <PrimeReactProvider value={{
            unstyled: true,
            ptOptions: { mergeSections: true, mergeProps: true, classNameMergeFunction: twMerge },
            pt: {
                datatable: {
                    table: {
                        className: "mx-4 w-full"
                    },
                    thead: {
                        className: "w-full px-2"
                    },
                    column: {
                        headerContent: {
                            className: "bg-green-200"
                        },
                        headerCell: {
                            className: "text-left border text-slate-100 p-2"
                        }
                    }
                }
            }
        }}>
            <AuthProvider>
                <Main >
                    <MainPattern />
                    <CardMain >
                        <SideBar />
                        {children}
                    </CardMain>
                </Main>
            </AuthProvider>
        </PrimeReactProvider>
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

const Main = tw.main`relative w-screen h-screen overflow-x-hidden overflow-y-hidden z-10 relative p-2`;
const CardMain = tw.div`flex w-full h-full`;