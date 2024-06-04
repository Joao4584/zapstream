'use client';
// * Modules * //
import React, { ReactElement } from 'react'
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { MdAutoGraph } from "react-icons/md";
// * Exports * //
import { GetSchemaStrapi } from '../page';
import { fadeIn, textVariant, textVariant2 } from '@/src/lib/motion/motion';


// * Components * //

interface HeroSectionProps {
    schema: GetSchemaStrapi | null;
}
export default function CategoryHability({ schema }: HeroSectionProps) {
    console.log(schema)
    return (
        <div className="max-w-292.5 px-4 py-10 sm:px-6 mt-20 lg:px-8 lg:py-14 mx-auto">
            <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                <div className="lg:col-span-7">
                    <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
                        <motion.div initial="hidden" whileInView="show" variants={fadeIn('right', 'spring', .4 * 0.5, 0.75)} className="col-span-4">
                            <img className="rounded-xl  h-2/6" src="./test/3-2.jpg" alt="Image Description" />
                        </motion.div>

                        <motion.div initial="hidden" whileInView="show" variants={fadeIn('right', 'spring', .8 * 0.5, 0.75)} className="col-span-3">
                            <img className="rounded-xl" src="./test/3-1.jpg" alt="Image Description" />
                        </motion.div>

                        <motion.div initial="hidden" whileInView="show" variants={fadeIn('right', 'spring', 1.2 * 0.5, 0.75)} className="col-span-5">
                            <img className="rounded-xl" src="./test/3.jpg" alt="Image Description" />
                        </motion.div>
                    </div>
                </div>

                <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
                    <div className="space-y-6 sm:space-y-8">
                        <div className="space-y-2 md:space-y-4">
                            <motion.h2 initial="hidden"
                                whileInView="show" variants={textVariant(.1)} className="font-bold text-2xl lg:text-4xl text-gray-800 dark:text-gray-200">
                                {schema?.data?.attributes ? schema?.data?.attributes.quem_somos : "-"}
                            </motion.h2>
                            <motion.p initial="hidden"
                                whileInView="show" variants={textVariant(.15)} className="text-gray-500">
                                {schema?.data?.attributes ? schema?.data?.attributes.quem_somos_texto : "-"}
                            </motion.p>
                        </div>
                        <ul role="list" className="space-y-2 sm:space-y-4">
                            <motion.li initial="hidden" whileInView="show" variants={textVariant(.1)} className="flex space-x-3">
                                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                    <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </span>
                                <span className="text-sm sm:text-base text-gray-500">
                                    <span className="font-bold">Trabalho </span> em
                                </span>
                            </motion.li>

                            <motion.li initial="hidden" whileInView="show" variants={textVariant(.18)} className="flex space-x-3">
                                <span className="mt-0.5 size-5 flex p-1 justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                    <MdAutoGraph />
                                </span>
                                <span className="text-sm sm:text-base text-gray-500">
                                    Diversos <span className="font-bold">clientes</span> Satisfeitos.
                                </span>
                            </motion.li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}