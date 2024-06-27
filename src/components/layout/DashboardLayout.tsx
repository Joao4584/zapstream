'use client';

import { ReactNode, useEffect, useLayoutEffect, useState } from "react";
import { twMerge } from 'tailwind-merge';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { classNames } from "primereact/utils";

// * Exports * //
import ChildrenProps from "@/@types/children";
import useColorMode from "@/src/hooks/useColorMode";
import { MainPattern } from "@/src/components/ui/GridPattern";
import SideBar from "@/src/components/sideBar";
import { AuthProvider } from "@/src/providers/auth-provider/AuthContext";

// * Components * //

export default function DashboardLayout({ children }: ChildrenProps) {

    const [theme, setTheme] = useColorMode();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setGlobalTheme(theme)
    }, [theme]);

    return (
        <PrimeReactProvider value={
                {
                    unstyled: false,
                    ptOptions: { mergeSections: true, mergeProps: true, classNameMergeFunction: twMerge },
                    pt: {
                        datatable: {
                            table: {
                                className: "bg-red-100"
                            },

                            thead: {
                                className: "dark:bg-slate-700",
                                
                            },
                        
                            header: {
                                className: "dark:bg-slate-700"
                            },
                            headerRow: {
                                className: "dark:bg-slate-700"
                                
                            },
                            rowGroupHeader: {
                                className: "dark:bg-slate-700"
                                
                            },
                            column: {
                                headerContent: {
                                    className: ""
                                },
                                headerCell: {
                                    className: "text-left border text-slate-100 dark:bg-slate-700 p-2"
                                }
                            },
                            bodyRow: {
                                className: "bg-red-100  dark:bg-slate-700 "
                            },
                            paginator: {
                                root: {
                                     className: "bg-red-100 rounded-md dark:bg-slate-700  "
                                 }
                            }
                        }
                    }
                }
            }
        >
            <AuthProvider>
                <main className="relative w-screen   h-screen overflow-x-hidden overflow-y-hidden z-10 relative p-1">
                    <MainPattern />
                    <div className="flex w-full h-full" >
                        <SideBar />
                        <div className="w-10/12 pl-1 h-full overflow-y-auto overflow-x-hidden">
                           {children}
                        </div>
                    </div>
                </main>
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
