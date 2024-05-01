import tw from "tailwind-styled-components"
// * Modules * //
import React from "react";
import { usePathname, useRouter } from 'next/navigation';
// * Exports * //
import { RouteDashboardProps, routeDashboard } from "@/src/routes/routes";
import { LiItem, MenuDiv, SpanActive, SpanLi, UlItems } from "./index.styles";
import { DivEffect } from "@/src/lib/motion/Effects";

// * Components * //

export default function MenuList() {
    const pathname = usePathname();
    const router = useRouter();
    const dashboardSegment = (pathname.split('/dashboard/')[1] || '').split('/')[0];

    return (
        <MenuDiv>
            <UlItems>
                {
                    routeDashboard.map((route: RouteDashboardProps, i: number) => {
                        const isActive = "/" + dashboardSegment === route.path;
                        return (
                            <LiItem
                                key={i}
                                active={isActive}
                                onClick={() => router.push(`/dashboard/${route.path}`)}
                            >
                                <SpanActive className={`shadow-green-800 shadow-md ${isActive ? "opacity-1" : "opacity-0"}`} />
                                <DivEffect whileTap={{ scale: 0.9 }} delay={i / 10}>
                                    <div className="flex w-full mt-1 py-3 px-6 ">
                                        <SpanLi className="icon-menu-svg">
                                            {route.icon}
                                        </SpanLi>
                                        {route.title}
                                    </ div>
                                </DivEffect>
                            </LiItem>

                        )
                    })
                }
            </UlItems>
        </MenuDiv>
    )
}
