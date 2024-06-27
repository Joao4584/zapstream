import BreadCrumb from "@/src/components/breadCrumb";
import UserPage from "./User";
import React from "react";

export default function Main() {
    return (
        <React.Fragment>
            <BreadCrumb />
            <UserPage />
        </React.Fragment>
    );
}
