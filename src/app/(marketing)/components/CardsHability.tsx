'use client'
// * Modules * //
import React, { ReactElement } from 'react'
import { motion } from "framer-motion";

// * Exports * //


// * Components * //

const container = {
    initial: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const resultHability = [
    {
        title: "a"
    },
    {
        title: "a"
    },
    {
        title: "a"
    },
]

export default function CardsHability(): ReactElement {

    return (
        <section className="w-full flex relative justify-center">

            <motion.ul
                className='flex justify-between  w-full gap-5 max-w-230 absolute -top-55'
                variants={container}
                initial="hidden"
                animate="visible"
            >

                {resultHability.map((element, i) => {
                    return (
                        <motion.li variants={item} className='w-90 h-52 bg-white shadow-6 rounded-lg '>
                            d
                        </motion.li>
                    )
                })}
            </motion.ul>
        </section>
    )
}