'use client';
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";


export const ConnectionTreatmentPoints = () => {
    const [countdownState, setCountdownState] = useState("Verificando Conexão...");
    const [openHover, setOpenHover] = useState(false);

    let countdownInterval: any;
    const handleMouseEnter = (e: boolean) => {
        clearInterval(countdownInterval);
        if (e) {
            setOpenHover(true);
            countdownInterval = setTimeout(() => {
                setCountdownState("Conexão verificada com sucesso.");
            }, 2000);
        } else {
            setCountdownState("Verificando Conexão...");
            setOpenHover(false);
        }
    };

    return (
        <TooltipProvider>
            <Tooltip open={openHover} onOpenChange={handleMouseEnter}  >
                <TooltipTrigger>
                    <div className="flex absolute gap-1 top-2 left-2 p-2">
                        <div className="rounded-full bg-red-700 w-2 h-2 animate-pulse"></div>
                        <div className="rounded-full bg-yellow-700 w-2 h-2 animate-pulse"></div>
                        <div className="rounded-full bg-green-700 w-2 h-2 animate-pulse"></div>
                    </div>
                </TooltipTrigger>
                <TooltipContent sideOffset={12}  className="ml-8">
                    {countdownState}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};