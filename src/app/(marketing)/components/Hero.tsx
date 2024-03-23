'use client';

import SideBar from "./ui/sideBar";
import { motion } from 'framer-motion';
import { textContainer, textVariant, textVariant2 } from "@/src/lib/motion/motion";
import { GetSchemaStrapi } from "../page";



interface HeroSectionProps {
    schema: GetSchemaStrapi | null;
}
export default function HeroSection({ schema }: HeroSectionProps) {
    const urlLogo = schema?.data?.attributes?.logo?.data?.attributes?.url;
    const urlBanner = schema?.data?.attributes?.banner_principal?.data?.attributes?.formats?.large?.url;


    return (
        <div className="w-full relative model-banner-hero text-slate-200" style={{ backgroundImage: `url(${urlBanner ? schema?.defaultUrl + urlBanner : ""})` }}>
            <div className="w-full h-full bg-sky-950 bg-opacity-60">


                <div className="bg-waves absolute z-0 bottom-0 w-full  left-0">
                    <SideBar logo={urlLogo ? schema?.defaultUrl + urlLogo : ''} />

                    <section className="w-full z-10  mt-36 flex justify-center">
                        <div className="max-w-150 text-center">
                            <motion.p
                                initial={{ opacity: 0, translateY: 20 }}
                                whileInView={
                                    { opacity: 1, translateY: 0 }
                                }
                                transition={{
                                    type: "spring",
                                    stiffness: 80,
                                    damping: 20,
                                    delay: .3
                                }}
                                className="text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-yellow-400" >
                                {schema?.data?.attributes?.titulo_principal ? schema?.data?.attributes.titulo_principal : "-"}
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, translateY: 20 }}
                                whileInView={{ opacity: 1, translateY: 0 }}
                                transition={{
                                    type: "spring", stiffness: 80, damping: 20, delay: .4
                                }}
                                className="text-2xl font-medium mt-4" >
                                {schema?.data?.attributes?.sub_titulo ? schema.data.attributes.sub_titulo : "-"}
                            </motion.p>

                        </div>
                    </section>
                </div>
            </div>
        </div >
    )
}
