'use client';

// * Modules * //
import Image from "next/image";
import LogoImage from '@/public/images/logo.png'
import React, { useEffect, useState } from "react";

// * Exports * //


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
            <div className="flex flex-wrap items-center justify-center relative bottom-8">

                <Image src={LogoImage} alt="" className="animate-spin-1.5  w-11 h-11" />

                <p className="w-full text-center mt-5 text-slate-700 dark:text-slate-200">Carregando
                    {dotsArray.map((index) => (
                        <React.Fragment key={index}>.</React.Fragment>
                    ))}
                </p>
            </div>
        </main>
    );
}