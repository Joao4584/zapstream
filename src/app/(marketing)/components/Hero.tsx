'use client';

import { client } from "@/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url';
import SideBar from "./ui/sideBar";
import { motion } from 'framer-motion';
import { textContainer, textVariant, textVariant2 } from "@/src/lib/motion/motion";

const builder = imageUrlBuilder(client);

interface HeroSectionProps {
    hero: any;
    header: any;
}

export default function HeroSection(props: HeroSectionProps) {
    const { banner, title, subtitle } = props.hero;
    const imageId = banner.asset._ref;

    // Use o construtor de URLs de imagem para gerar o URL da imagem
    const BannerUrl = builder.image(imageId).url();

    return (
        <div className="w-full relative model-banner-hero text-slate-200" style={{ backgroundImage: `url(${BannerUrl})` }}>
            <div className="w-full h-full bg-sky-950 bg-opacity-60">


                <div className="bg-waves absolute z-0 bottom-0 w-full  left-0">
                    <SideBar header={props.header} />

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
                                {title}
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, translateY: 20 }}
                                whileInView={{ opacity: 1, translateY: 0 }}
                                transition={{
                                    type: "spring", stiffness: 80, damping: 20, delay: .4
                                }}
                                className="text-2xl font-medium mt-4" >
                                {subtitle}
                            </motion.p>

                        </div>
                    </section>
                </div>
            </div>
        </div >
    )
}
