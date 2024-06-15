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
    SunMoon,
    UserPlus,
    Users,
} from "lucide-react";
import { motion } from "framer-motion";
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
} from "@/src/components/ui/dropdown-menu";
import { ReactElement } from "react";
import { setToken } from "@/src/lib/token";
import { useRouter } from 'next/navigation';
import useColorMode from "@/src/hooks/useColorMode";

export const ListContentDropDown = (): ReactElement => {
    const router = useRouter();
    const [theme, setTheme] = useColorMode();

    const disconnectAuth = () => {
        setToken("");
        router.push('/auth');
    }

    const alterThemeColor = () => {
        window.location.reload();
        setTheme(theme == "dark" ? "light": "dark");
    }

    return (
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
                <DropdownMenuItem onClick={alterThemeColor}>
                    <SunMoon className="mr-2 h-4 w-4" />
                    <span>Modo {theme == "dark" ? "Claro" : "Escuro"}</span>
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
            <DropdownMenuItem onClick={disconnectAuth} className="rounded-bl-full dark:rounded-bl-xl rounded-br-full dark:rounded-br-xl">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Desconectar</span>
            </DropdownMenuItem>
        </DropdownMenuContent>
    )
}
