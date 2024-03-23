'use client'
// * Modules * //
import React, { ReactElement } from 'react'
import { motion } from "framer-motion";
import { FaBalanceScale, FaGavel, FaUsers } from "react-icons/fa";
// * Exports * //


// * Components * //

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const resultHability = [
    {
        title: "Expertise Jurídica",
        icon: <FaBalanceScale className='w-7 h-7 fill-slate-500' />,
        description: "Experiência em diversas áreas do Direito."

    },
    {
        title: "Mediação Eficaz",
        icon: <FaGavel className='w-7 h-7 fill-slate-500' />,
        description: "Métodos eficazes de mediação e negociação para resolver conflitos de forma justa e equitativa."

    },
    {
        title: "Atendimento Personalizado",
        icon: <FaUsers className='w-7 h-7 fill-slate-500' />,
        description: "Oferecemos atendimento personalizado e buscamos a melhor solução jurídica para cada cliente."

    },
]

export default function CardsHability(): ReactElement {

    return (
        <section className="w-full flex relative justify-center">

            <motion.ul
                className='flex justify-between  w-full gap-5 max-w-230 absolute -top-50'
                initial={{ opacity: 0, translateY: 30 }}
                whileInView={
                    { opacity: 1, translateY: 0 }
                }
                transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                    delay: .6,
                    delayChildren: 0.3,
                    staggerChildren: 0.2
                }}
            >

                {resultHability.map((element, i) => {
                    return (
                        <motion.li key={i} variants={item} whileHover={{ scale: 1.03 }} className='w-90 h-48 p-6 bg-white border shadow-6 rounded-lg '>
                            <div className='block gap-3 items-center'>
                                <span className=''>
                                    {element.icon}
                                </span>
                                <h4 className='font-medium mt-3'>
                                    {element.title}
                                </h4>
                            </div>
                            <p className='text-sm mt-2 text-gray-600'>
                                {element.description}
                            </p>
                        </motion.li>
                    )
                })}
            </motion.ul>
        </section>
    )
}