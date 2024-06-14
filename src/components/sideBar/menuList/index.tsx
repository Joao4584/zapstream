import React from "react";
import { usePathname, useRouter } from 'next/navigation';
import { RouteDashboardProps, routeDashboard } from "@/src/routes/routes";
import { DivEffect } from "@/src/lib/motion/Effects";

export default function MenuList() {
    const pathname = usePathname();
    const router = useRouter();
    const dashboardSegment = (pathname.split('/dashboard/')[1] || '').split('/')[0];

    return (
        <div className="mt-4">
            <ul>
                {
                    routeDashboard.map((route: RouteDashboardProps, i: number) => {
                        const isActive = "/" + dashboardSegment === route.path;
                        return (
                            <li
                                key={i}
                                className={`items-center cursor-pointer rounded-sm text-sm relative dark:hover:bg-slate-500 dark:hover:bg-opacity-20 dark:hover:text-slate-200 ${isActive ? 'text-black dark:text-slate-200' : 'dark:text-slate-300'}`}
                                onClick={() => router.push(`/dashboard/${route.path}`)}
                            >
                                <span className={`absolute left-0 bg-green-700 w-1.5 top-1/2 -translate-y-1/2 h-4/5 rounded-br-xl rounded-tr-xl shadow-green-800 shadow-md ${isActive ? "opacity-1" : "opacity-0"}`} />
                                <DivEffect whileTap={{ scale: 0.9 }} delay={i / 10}>
                                    <div className="flex w-full mt-1 py-3 px-6">
                                        <span className="mr-3 icon-menu-svg">
                                            {route.icon}
                                        </span>
                                        {route.title}
                                    </div>
                                </DivEffect>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
