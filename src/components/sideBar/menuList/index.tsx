import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import { routeDashboard, RouteDefinition, RouteProps, RouteGroup } from "@/src/routes/routes";
import { motion } from "framer-motion";
import GroupMenu from "./GroupMenu";
import SingleMenu from "./SingleMenu";

const MenuList: React.FC = () => {
    const pathname = usePathname();
    const router = useRouter();
    const dashboardSegment = (pathname.split('/dashboard/')[1] || '').split('/')[0];
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        const currentIndex = routeDashboard.findIndex((route: any) =>
            route.path === "/" + dashboardSegment ||
            (route instanceof Object && 'routes' in route && Array.isArray(route.routes) && route.routes.some((subRoute: RouteProps) => subRoute.path === "/" + dashboardSegment))
        );
        setActiveIndex(currentIndex);
    }, [pathname]);

    return (
        <div className="mt-4 relative">
            {activeIndex !== null && (
                <motion.span
                    className="absolute left-0 bg-green-700 w-1.5 mt-1 mxd:mt-0 h-10 mxd:h-10 rounded-br-xl rounded-tr-xl shadow-green-800 shadow-md"
                    layoutId="activeIndicator"
                    initial={{ y: 0 }}
                    animate={{ y: activeIndex * 48 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
            )}
            <ul className="h-125 w-full overflow-y-auto overflow-x-hidden">
                {routeDashboard.map((route, i) => (
                    <React.Fragment key={i}>
                        {isRouteGroup(route) ? (
                            <GroupMenu group={route as RouteGroup} dashboardSegment={dashboardSegment} router={router} />
                        ) : (
                            <SingleMenu route={route as RouteProps} isActive={"/" + dashboardSegment === route.path} router={router} />
                        )}
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
};

export default MenuList;

function isRouteGroup(route: RouteDefinition): route is RouteGroup {
    return 'groupName' in route;
}
