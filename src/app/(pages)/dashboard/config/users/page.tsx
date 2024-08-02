
import React from "react";

// * Exports * //
import BreadCrumb, { BreadcrumbItemType } from "@/src/components/breadCrumb";
import { ListTable } from "./List";
 
 
// * Components * //

const route: BreadcrumbItemType[] = [
    {
        label: "Dashboard",
        href: "/dashboard/"
    },
    {
        label: "Gerais",
        href: "/dashboard/config"
    },
    {
        label: "Usuários",
        href: "/dashboard/config/users"
    },
    
]
export default function UserPage() {
    return (
       <React.Fragment>
            <BreadCrumb items={route} />
            <ListTable />
       </React.Fragment>
    );
}
