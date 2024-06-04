'use client';
// * Modules * //
import React, { ReactElement } from 'react'
import { motion } from 'framer-motion';
import { fadeIn, textVariant, textVariant2 } from '@/src/lib/motion/motion';
// * Exports * //


// * Components * //

export function SolutionsExplore() {


    return (
        <section className="w-full bg-white pt-2 pb-7 md:pt-10 md:pb-24 tails-selected-element" >
            <div className="box-border flex flex-col mt-30 items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">


                <motion.div initial="hidden"
                    whileInView="show" variants={textVariant(.1)} className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                    <img src="./images/Advogado1.jpg" className="p-2 pl-6 pr-5 xl:pl-10 xl:pr-10 " />
                </motion.div>

                <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                    <motion.h2 initial="hidden"
                        whileInView="show" variants={textVariant(.1)} className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                        Direito Trabalhista
                    </motion.h2>
                    <motion.p initial="hidden"
                        whileInView="show" variants={textVariant(.1)} className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-base">
                        O Direito Trabalhista estabelece os direitos e deveres dos trabalhadores e empregadores, garantindo relações justas e equilibradas no ambiente de trabalho.
                    </motion.p>
                    <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                        <motion.li initial="hidden"
                            whileInView="show" variants={textVariant(.1)} className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400"><span className="text-sm font-bold">✓</span></span>Contratos de Trabalho
                        </motion.li>
                        <motion.li initial="hidden"
                            whileInView="show" variants={textVariant(.1)} className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400"><span className="text-sm font-bold">✓</span></span> Negociação Coletiva
                        </motion.li>
                        <motion.li initial="hidden"
                            whileInView="show" variants={textVariant(.1)} className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400"><span className="text-sm font-bold">✓</span></span> Reclamações Trabalhistas
                        </motion.li>
                    </ul>
                </div>
            </div>
            <div className="box-border flex flex-col items-center mt-35 content-center px-8 mx-auto  leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-35 md:flex-row max-w-7xl lg:px-16">

                <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
                    <motion.h2 initial="hidden"
                        whileInView="show" variants={textVariant(.1)} className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                        Direito Educacional
                    </motion.h2>
                    <motion.p initial="hidden"
                        whileInView="show" variants={textVariant(.1)} className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-base">
                        O direito educacional assegura que todos os indivíduos tenham acesso igualitário a oportunidades de aprendizagem, promovendo a inclusão e a justiça social dentro do sistema educacional.
                    </motion.p>
                    <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                        <motion.li initial="hidden"
                            whileInView="show" variants={textVariant(.1)} className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400"><span className="text-sm font-bold">✓</span></span> Autonomia Universitária
                        </motion.li>
                        <motion.li initial="hidden"
                            whileInView="show" variants={textVariant(.1)} className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400"><span className="text-sm font-bold">✓</span></span> Regulação e Fiscalização
                        </motion.li>
                        <motion.li initial="hidden"
                            whileInView="show" variants={textVariant(.1)} className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400"><span className="text-sm font-bold">✓</span></span> Vagas em creche e escolas
                        </motion.li>
                    </ul>
                </div>
                <motion.div initial="hidden"
                    whileInView="show" variants={textVariant(.1)} className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
                    <img src="./images/Advogado.jpg" className="pl-4 sm:pr-10 xl:pl-5 lg:pr-6" />
                </motion.div>
            </div>
        </section>
    )
}