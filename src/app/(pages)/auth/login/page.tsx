'use client';
import React from 'react';
import { DivEffect } from '@/src/lib/motion/Effects';
import Image from 'next/image';
import Logo from '@/public/images/logo.png';
import FormLoginComponent from './form';
import Head from 'next/head';

export default function LoginPage() {

  return (
    <React.Fragment>
       <section className="flex md:flex-row h-screen items-center">
      <div className='bg-blue-900 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen'>
        <DivEffect>
          <Image src={Logo} alt="Icon Home" className='absolute top-5 left-6 opacity-100 z-50 saturate-50' style={{ width: "48px", height: "46px" }} />
        </DivEffect>
        <img src="/images/banners/rocket-banner.jpg" alt="" className="w-full h-full opacity-50 object-cover" />
      </div>
      <div className='bg-white w-full md:max-w-full lg:max-w-full overflow-y-auto md:mx-auto lg:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center'>
        <div className="w-full h-full pt-4 lg:pt-22">
          <DivEffect>
            <React.Fragment>
              <h1 className="text-xl md:text-2xl font-bold leading-tight mt-1 text-slate-500">Faça login na sua conta</h1>
              <FormLoginComponent/>
            </React.Fragment>
          </DivEffect>
        </div>
      </div>
    </section>
    </React.Fragment>
  
  );
}
