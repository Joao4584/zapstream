// * Modules * //
import { ReactElement } from "react";
import { FaBell, FaBorderTopLeft, FaReceipt } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";
import { TbNetwork } from "react-icons/tb";
// * Exports * //

export interface RouteDashboardProps {
    title: string;
    icon?: ReactElement;
    path: string;
}
export const routeDashboard: RouteDashboardProps[] = [
    {
        title: "Dashboard",
        icon: <FaBorderTopLeft />,
        path: "/"
    },
    {
        title: "Notificações",
        icon: <FaBell />,
        path: "/notification"
    },
    {
        title: "Projetos",
        icon: <FaProjectDiagram />,
        path: "/projects"
    },
    {
        title: "Automações",
        icon: <TbNetwork />,
        path: "/automation"
    },
    {
        title: "Logs",
        icon: <FaReceipt />,
        path: "/logs"
    }

];