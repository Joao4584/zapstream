import { ReactElement } from "react";
import { FaBell, FaBorderTopLeft, FaReceipt } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";
import { TbNetwork } from "react-icons/tb";
import { RiSettings2Fill } from "react-icons/ri";
import { MdOutlineBroadcastOnHome } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
export interface RouteProps {
    title: string;
    icon: ReactElement;
    path: string;
}

export interface RouteGroup {
    groupName: string;
    icon: ReactElement;
    routes: RouteProps[];
}

export type RouteDefinition = RouteProps | RouteGroup;

export const routeDashboard: RouteDefinition[] = [
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
    },
    {
        groupName: "Configurações",
        icon: <RiSettings2Fill/>,
        routes: [
            {
                title: "Gerais",
                icon: <MdOutlineBroadcastOnHome />,
                path: "/config"
            },
            {
                title: "Usuários",
                icon: <FaUsers />,
                path: "/config/users"
            }
        ]
    }
];
