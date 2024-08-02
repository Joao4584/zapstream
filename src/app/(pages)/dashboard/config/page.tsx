import BreadCrumb, { BreadcrumbItemType } from "@/src/components/breadCrumb";
import UserPage from "./User";
import React from "react";

const route: BreadcrumbItemType[] = [
    {
        label: "Dashboard",
        href: "/dashboard/"
    },
    {
        label: "Gerais",
        href: "/dashboard/config"
    }
]

export default function Main() {
    return (
        <React.Fragment>
            <BreadCrumb items={route} />
            <UserPage />
        </React.Fragment>
    );
}
