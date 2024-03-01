'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu"
import { DivEffect } from "@/src/lib/motion/Effects";
import { getCurrentGreating } from "@/src/lib/getCurrentGreeting";
import { ReactElement } from "react";


interface UserProfileProps {
    className?: string;

}
export default function UserProfile(props: UserProfileProps) {


    return (
        <div className={`${props.className}  bg-opacity-10 w-full flex items-center justify-center`}>
            <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <div className="flex relative w-full pl-5 justify-start gap-2 py-2 cursor-pointer hover:bg-opacity-40 hover:bg-slate-500 hover:bg-opacity-10 transition-all">
                        <div className="absolute flex justify-center items-center right-0 top-1/2 pl-1 -translate-y-1/2 bg-slate-400 bg-opacity-10 h-10 rounded-l-lg">
                            <RiArrowLeftDoubleLine />
                        </div>
                        <div className="flex items-center">
                            <DivEffect>
                                <div className="card bg-slate-400 rounded-full overflow-hidden p-1 bg-opacity-25">
                                    <Image src={"/images/profile/Default.jpeg"} className="rounded-full" alt="test" width={35} height={35} />
                                </div>
                            </DivEffect>
                        </div>
                        <div>
                            <DivEffect delay={0.1}>
                                <span className="text-xs text-slate-300">{getCurrentGreating()}</span>
                            </DivEffect>
                            <DivEffect delay={0.2}>
                                <h4 className="text-base font-semibold" style={{ lineHeight: '17.5px' }}>João Roberto</h4>
                            </DivEffect>
                        </div>
                    </div>
                </DropdownMenuTrigger>
                <ListContentDropDown />

            </DropdownMenu>
        </div>
    )
}

const ListContentDropDown = (): ReactElement => (
    <DropdownMenuContent className="w-64 ml-50 -mt-1">
        <DropdownMenuLabel className="">Minha Conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
            <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Perfil</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Configurações</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Keyboard className="mr-2 h-4 w-4" />
                <span>Atalhos de Teclado</span>
                <DropdownMenuShortcut className="text-xs">ctrl + /</DropdownMenuShortcut>
            </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub (Projeto)</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Suporte</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
            <Cloud className="mr-2 h-4 w-4" />
            <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Desconectar</span>
        </DropdownMenuItem>
    </DropdownMenuContent>
)