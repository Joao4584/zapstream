import Image from "next/image";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url';


const builder = imageUrlBuilder(client);


interface SideBarProps {
    header: any;
}
export default function SideBar(props: SideBarProps) {

    const { logo, links } = props.header;
    const imageId = logo.asset._ref;
    const logoUrl = builder.image(imageId).url();
    return (
        <header className="w-full h-17 bg-slate-400 bg-opacity-10 flex justify-center">
            <div className="max-w-292.5 w-full flex justify-between items-center">
                <Image src={logoUrl} alt="Logo" width={40} height={40} />

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