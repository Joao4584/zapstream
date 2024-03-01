// * Modules * //

import React from "react";


// * Exports * //
import { RouteDashboardProps, routeDashboard } from "@/src/routes/routes";


// * Components * //
export default function MenuList() {
    return (
        <div>
            <ul>
                {
                    routeDashboard.map((route: RouteDashboardProps, i: number) => {
                        return (
                            <li key={i} className="flex w-full  py-2 items-center px-6">
                                <span className=" mr-3">
                                    {route.icon}
                                </span>
                                {route.title}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}