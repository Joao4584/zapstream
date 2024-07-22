'use client'
import Image from "next/image";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import {
    DropdownMenu,
    DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu"
import { DivEffect } from "@/src/lib/motion/Effects";
import { getCurrentGreating } from "@/src/lib/constants/getCurrentGreeting";
import { ListContentDropDown } from "./ListContentDropDown";


interface UserProfileProps {
    className?: string;

}
export default function UserProfile(props: UserProfileProps) {
    return (
        <div className={`${props.className}  bg-opacity-10 w-full flex items-center justify-center`}>
            <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <div className="flex relative w-full pl-5 justify-start mxd:justify-center gap-2 py-2 mxd:p-0 cursor-pointer hover:bg-opacity-40 hover:bg-slate-500 hover:bg-opacity-10 transition-all">
                        <div className="absolute flex mxd:hidden justify-center items-center right-0 top-1/2 pl-1 -translate-y-1/2 bg-slate-400 bg-opacity-10 h-10 rounded-l-lg">
                            <RiArrowLeftDoubleLine />
                        </div>
                        <div className="flex items-center">
                            <DivEffect>
                                <div className="card bg-slate-400 rounded-full overflow-hidden p-1 bg-opacity-25">
                                    <Image src={"/images/profile/Default.jpeg"} className="rounded-full" alt="test" width={35} height={35} />
                                </div>
                            </DivEffect>
                        </div>
                        <div className="mxd:hidden">
                            <DivEffect delay={0.1}>
                                <span className="text-xs text-slate-300">{getCurrentGreating()}</span>
                            </DivEffect>
                            <DivEffect delay={0.2}>
                                <h4 className="text-sm font-semibold" style={{ lineHeight: '17.5px' }}>João Roberto</h4>
                            </DivEffect>
                        </div>
                    </div>
                </DropdownMenuTrigger>
                <ListContentDropDown />

            </DropdownMenu>
        </div>
    )
}
