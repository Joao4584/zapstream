'use client';

// * Modules * //
import Image from "next/image";
import LogoImage from '@/public/images/logo.png'
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';

// * Components * //
export default function LoadingPage() {
    const [dots, setDots] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prevDots) => (prevDots >= 3 ? 1 : prevDots + 1));
        }, 500);

        return () => clearInterval(interval);
    }, []);

    const dotsArray = Array.from({ length: dots }, (_, index) => index + 1);

    return (
        <main className="flex justify-center items-center w-full h-full">
            <motion.div
                className="flex flex-wrap items-center justify-center relative bottom-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                >
                    <Image src={LogoImage} alt="Logo" className="w-11 h-11" />
                </motion.div>
                <motion.p
                    className="w-full text-center mt-8 text-slate-700 dark:text-slate-200"
                    animate={{ opacity: [0, 1], y: 5 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 1,
                    }}
                >
                    Carregando{" "}
                    {dotsArray.map((index) => (
                        <motion.span
                            key={index}
                            animate={{ opacity: [0, 1] }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 1,
                            }}
                        >
                            .
                        </motion.span>
                    ))}
                </motion.p>
            </motion.div>
        </main>
    );
}
