import Image from "next/image";

interface SideBarProps {
    logo: string;

}
export default function SideBar({ logo }: SideBarProps) {

    return (
        <header className="w-full h-17 bg-slate-400 bg-opacity-10 flex justify-center">
            <div className="max-w-292.5 w-full flex justify-between items-center">
                <Image src={logo} alt="Logo" width={47} height={47} />

                <div className="h-full">
                    <ul className="flex items-center h-full gap-8">
                        <li>
                            Serviços
                        </li>
                        <li>
                            Contate-me
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}