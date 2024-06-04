'use client';
import { DivEffect } from "@/src/lib/motion/Effects";
import { ReactElement } from "react";
import { motion } from 'framer-motion';
import { fadeIn, textVariant, textVariant2 } from '@/src/lib/motion/motion';
import { GetSchemaStrapi } from "../../page";
import Image from "next/image";

interface FooterProps {
    schema: any | null;
}
export function FooterBar({ schema }: FooterProps): ReactElement {
    const urlLogo = schema?.data?.attributes?.logo?.data?.attributes?.url;

    return (
        <footer className="w-full bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/*Grid*/}
                <div className="py-3 flex justify-between items-center flex-col gap-8 lg:flex-row">
                    <a href="https://pagedone.io/" className="flex justify-center ">
                        <Image src={urlLogo ? schema?.defaultUrl + urlLogo : ''} alt="Logo" width={55} height={55} />

                    </a>
                    {/* <ul className="text-lg text-center sm:flex items-cente justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500">
                        <li>
                            <a href="javascript:;" className="text-white hover:text-gray-400">
                                Pagedone
                            </a>
                        </li>
                        <li className="sm:my-0 my-2">
                            <a href="javascript:;" className="text-white hover:text-gray-400">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" className="text-white hover:text-gray-400">
                                Resources
                            </a>
                        </li>
                        <li className="sm:my-0 my-2">
                            <a href="javascript:;" className="text-white hover:text-gray-400">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;" className="text-white hover:text-gray-400">
                                Support
                            </a>
                        </li>
                    </ul> */}
                    <div className="flex  space-x-4 sm:justify-center  ">

                        <a
                            href="javascript:;"
                            className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
                        >
                            <svg
                                className="w-[1.25rem] h-[1.125rem] text-white"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.70975 7.93663C4.70975 6.65824 5.76102 5.62163 7.0582 5.62163C8.35537 5.62163 9.40721 6.65824 9.40721 7.93663C9.40721 9.21502 8.35537 10.2516 7.0582 10.2516C5.76102 10.2516 4.70975 9.21502 4.70975 7.93663ZM3.43991 7.93663C3.43991 9.90608 5.05982 11.5025 7.0582 11.5025C9.05658 11.5025 10.6765 9.90608 10.6765 7.93663C10.6765 5.96719 9.05658 4.37074 7.0582 4.37074C5.05982 4.37074 3.43991 5.96719 3.43991 7.93663ZM9.97414 4.22935C9.97408 4.39417 10.0236 4.55531 10.1165 4.69239C10.2093 4.82946 10.3413 4.93633 10.4958 4.99946C10.6503 5.06259 10.8203 5.07916 10.9844 5.04707C11.1484 5.01498 11.2991 4.93568 11.4174 4.81918C11.5357 4.70268 11.6163 4.55423 11.649 4.39259C11.6817 4.23095 11.665 4.06339 11.6011 3.91109C11.5371 3.7588 11.4288 3.6286 11.2898 3.53698C11.1508 3.44536 10.9873 3.39642 10.8201 3.39635H10.8197C10.5955 3.39646 10.3806 3.48424 10.222 3.64043C10.0635 3.79661 9.97434 4.00843 9.97414 4.22935ZM4.21142 13.5892C3.52442 13.5584 3.15101 13.4456 2.90286 13.3504C2.57387 13.2241 2.33914 13.0738 2.09235 12.8309C1.84555 12.588 1.69278 12.3569 1.56527 12.0327C1.46854 11.7882 1.3541 11.4201 1.32287 10.7431C1.28871 10.0111 1.28189 9.79119 1.28189 7.93669C1.28189 6.08219 1.28927 5.86291 1.32287 5.1303C1.35416 4.45324 1.46944 4.08585 1.56527 3.84069C1.69335 3.51647 1.84589 3.28513 2.09235 3.04191C2.3388 2.79869 2.57331 2.64813 2.90286 2.52247C3.1509 2.42713 3.52442 2.31435 4.21142 2.28358C4.95417 2.24991 5.17729 2.24319 7.0582 2.24319C8.9391 2.24319 9.16244 2.25047 9.90582 2.28358C10.5928 2.31441 10.9656 2.42802 11.2144 2.52247C11.5434 2.64813 11.7781 2.79902 12.0249 3.04191C12.2717 3.2848 12.4239 3.51647 12.552 3.84069C12.6487 4.08513 12.7631 4.45324 12.7944 5.1303C12.8285 5.86291 12.8354 6.08219 12.8354 7.93669C12.8354 9.79119 12.8285 10.0105 12.7944 10.7431C12.7631 11.4201 12.6481 11.7881 12.552 12.0327C12.4239 12.3569 12.2714 12.5882 12.0249 12.8309C11.7784 13.0736 11.5434 13.2241 11.2144 13.3504C10.9663 13.4457 10.5928 13.5585 9.90582 13.5892C9.16306 13.6229 8.93994 13.6296 7.0582 13.6296C5.17645 13.6296 4.95395 13.6229 4.21142 13.5892ZM4.15307 1.03424C3.40294 1.06791 2.89035 1.18513 2.4427 1.3568C1.9791 1.53408 1.58663 1.77191 1.19446 2.1578C0.802277 2.54369 0.56157 2.93108 0.381687 3.38797C0.207498 3.82941 0.0885535 4.3343 0.0543922 5.07358C0.0196672 5.81402 0.0117188 6.05074 0.0117188 7.93663C0.0117188 9.82252 0.0196672 10.0592 0.0543922 10.7997C0.0885535 11.539 0.207498 12.0439 0.381687 12.4853C0.56157 12.9419 0.802334 13.3297 1.19446 13.7155C1.58658 14.1012 1.9791 14.3387 2.4427 14.5165C2.89119 14.6881 3.40294 14.8054 4.15307 14.839C4.90479 14.8727 5.1446 14.8811 7.0582 14.8811C8.9718 14.8811 9.212 14.8732 9.96332 14.839C10.7135 14.8054 11.2258 14.6881 11.6737 14.5165C12.137 14.3387 12.5298 14.1014 12.9219 13.7155C13.3141 13.3296 13.5543 12.9419 13.7347 12.4853C13.9089 12.0439 14.0284 11.539 14.062 10.7997C14.0962 10.0587 14.1041 9.82252 14.1041 7.93663C14.1041 6.05074 14.0962 5.81402 14.062 5.07358C14.0278 4.33424 13.9089 3.82913 13.7347 3.38797C13.5543 2.93135 13.3135 2.5443 12.9219 2.1578C12.5304 1.7713 12.137 1.53408 11.6743 1.3568C11.2258 1.18513 10.7135 1.06735 9.96388 1.03424C9.21256 1.00058 8.97236 0.992188 7.05876 0.992188C5.14516 0.992188 4.90479 1.00002 4.15307 1.03424Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                        <a
                            href="javascript:;"
                            className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
                        >
                            <svg
                                className="w-[1rem] h-[1rem] text-white"
                                viewBox="0 0 13 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.8794 11.5527V3.86835H0.318893V11.5527H2.87967H2.8794ZM1.59968 2.81936C2.4924 2.81936 3.04817 2.2293 3.04817 1.49188C3.03146 0.737661 2.4924 0.164062 1.61666 0.164062C0.74032 0.164062 0.167969 0.737661 0.167969 1.49181C0.167969 2.22923 0.723543 2.8193 1.5829 2.8193H1.59948L1.59968 2.81936ZM4.29668 11.5527H6.85698V7.26187C6.85698 7.03251 6.87369 6.80255 6.94134 6.63873C7.12635 6.17968 7.54764 5.70449 8.25514 5.70449C9.18141 5.70449 9.55217 6.4091 9.55217 7.44222V11.5527H12.1124V7.14672C12.1124 4.78652 10.8494 3.68819 9.16483 3.68819C7.78372 3.68819 7.17715 4.45822 6.84014 4.98267H6.85718V3.86862H4.29681C4.33023 4.5895 4.29661 11.553 4.29661 11.553L4.29668 11.5527Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>

                    </div>
                </div>
                {/*Grid*/}
                <div className="py-7 border-t border-gray-700">
                    <div className="flex items-center justify-center">
                        <span className="text-gray-400 ">
                            ©<a href="https://pagedone.io/"></a>2024, Todos os direitos reservados.
                        </span>
                    </div>
                </div>
            </div>
        </footer>

    )
}


// return (
//     <footer className="w-full max-w-292.5 py-10 mt-16 px-4 sm:px-6 lg:px-8 mx-auto">
//         {/* Grid */}
//         <motion.h2 initial="hidden"
//             whileInView="show" variants={textVariant(.1)} className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">

//             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
//                 <div className="col-span-full hidden lg:col-span-1 lg:block">
//                     <a
//                         className="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                         href="#"
//                         aria-label="Brand"
//                     >
//                         Brand
//                     </a>
//                     <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
//                         © 2022 Preline.
//                     </p>
//                 </div>
//                 {/* End Col */}
//                 <div>
//                     <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
//                         Product
//                     </h4>
//                     <div className="mt-3 grid space-y-3 text-sm">
//                         <p>
//                             <a
//                                 className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                 href="#"
//                             >
//                                 Pricing
//                             </a>
//                         </p>
//                         <p>
//                             <a
//                                 className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                 href="#"
//                             >
//                                 Changelog
//                             </a>
//                         </p>
//                         <p>
//                             <a
//                                 className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                 href="#"
//                             >
//                                 Docs
//                             </a>
//                         </p>
//                         <p>
//                             <a
//                                 className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                 href="#"
//                             >
//                                 Download
//                             </a>
//                         </p>
//                     </div>
//                 </div>
//                 {/* End Col */}
//                 <div>
//                     <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
//                         Company
//                     </h4>
//                     <div className="mt-3 grid space-y-3 text-sm">
//                         <p>
//                             <a
//                                 className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                 href="#"
//                             >
//                                 About us
//                             </a>
//                         </p>
//                         <p>
//                             <a
//                                 className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                 href="#"
//                             >
//                                 Blog
//                             </a>
//                         </p>
//                         <p>
//                             <a
//                                 className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                 href="#"
//                             >
//                                 Careers
//                             </a>{" "}
//                             <span className="inline text-blue-600 dark:text-blue-500">
//                                 — We're hiring
//                             </span>
//                         </p>
//                         <p>
//                             <a
//                                 className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                 href="#"
//                             >
//                                 Customers
//                             </a>
//                         </p>
//                         <p>
//                             <a
//                                 className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                 href="#"
//                             >
//                                 Newsroom
//                             </a>
//                         </p>
//                         <p>
//                             <a
//                                 className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                 href="#"
//                             >
//                                 Sitemap
//                             </a>
//                         </p>
//                     </div>
//                 </div>
//                 {/* End Col */}
//                 <div>
//                     <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
//                         Resources
//                     </h4>
//                     <div className="mt-3 grid space-y-3 text-sm">
//                         <p>
//                             <a
//                                 className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                 href="#"
//                             >
//                                 Community
//                             </a>
//                         </p>
//                         <p>
//                             <a
//                                 className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                 href="#"
//                             >
//                                 Help &amp; Support
//                             </a>
//                         </p>
//                         <p>
//                             <a
//                                 className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                 href="#"
//                             >
//                                 eBook
//                             </a>
//                         </p>
//                         <p>
//                             <a
//                                 className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                 href="#"
//                             >
//                                 What's New
//                             </a>
//                         </p>
//                         <p>
//                             <a
//                                 className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                 href="#"
//                             >
//                                 Status
//                             </a>
//                         </p>
//                     </div>
//                 </div>
//                 {/* End Col */}
//                 <div>
//                     <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
//                         Developers
//                     </h4>
//                     <div className="mt-3 grid space-y-3 text-sm">
//                         <p>
//                             <a
//                                 className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                 href="#"
//                             >
//                                 Api
//                             </a>
//                         </p>
//                         <p>
//                             <a
//                                 className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                 href="#"
//                             >
//                                 Status
//                             </a>
//                         </p>
//                         <p>
//                             <a
//                                 className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                 href="#"
//                             >
//                                 GitHub
//                             </a>{" "}
//                             <span className="inline text-blue-600 dark:text-blue-500">— New</span>
//                         </p>
//                     </div>
//                     <h4 className="mt-7 text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
//                         Industries
//                     </h4>
//                     <div className="mt-3 grid space-y-3 text-sm">
//                         <p>
//                             <a
//                                 className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                 href="#"
//                             >
//                                 Financial Services
//                             </a>
//                         </p>
//                         <p>
//                             <a
//                                 className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                 href="#"
//                             >
//                                 Education
//                             </a>
//                         </p>
//                     </div>
//                 </div>
//                 {/* End Col */}
//             </div>
//         </motion.h2>
//         {/* End Grid */}
//         <motion.h2 initial="hidden"
//             whileInView="show" variants={textVariant(.14)} className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
//             <div className="pt-5 mt-5 border-t border-gray-200 dark:border-gray-700">
//                 <div className="sm:flex sm:justify-between sm:items-center">
//                     <div className="flex items-center gap-x-3">
//                         {/* Language Dropdown */}
//                         <div className="hs-dropdown relative inline-flex [--placement:top-left]">
//                             <button
//                                 id="footer-language-dropdown"
//                                 type="button"
//                                 className="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                             >
//                                 <svg
//                                     className="size-3 rounded-full"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     id="flag-icon-css-us1"
//                                     viewBox="0 0 512 512"
//                                 >
//                                     <g fillRule="evenodd">
//                                         <g strokeWidth="1pt">
//                                             <path
//                                                 fill="#bd3d44"
//                                                 d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
//                                                 transform="scale(3.9385)"
//                                             />
//                                             <path
//                                                 fill="#fff"
//                                                 d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
//                                                 transform="scale(3.9385)"
//                                             />
//                                         </g>
//                                         <path
//                                             fill="#192f5d"
//                                             d="M0 0h98.8v70H0z"
//                                             transform="scale(3.9385)"
//                                         />
//                                         <path
//                                             fill="#fff"
//                                             d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
//                                             transform="scale(3.9385)"
//                                         />
//                                     </g>
//                                 </svg>
//                                 English (US)
//                                 <svg
//                                     className="hs-dropdown-open:rotate-180 flex-shrink-0 size-4 text-gray-600"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width={24}
//                                     height={24}
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth={2}
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                 >
//                                     <path d="m18 15-6-6-6 6" />
//                                 </svg>
//                             </button>
//                             <div
//                                 className="hs-dropdown-menu w-40 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
//                                 aria-labelledby="footer-language-dropdown"
//                             >
//                                 <a
//                                     className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                     href="#"
//                                 >
//                                     <svg
//                                         className="flex-shrink-0 size-3.5 rounded-full"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         id="flag-icon-css-us"
//                                         viewBox="0 0 512 512"
//                                     >
//                                         <g fillRule="evenodd">
//                                             <g strokeWidth="1pt">
//                                                 <path
//                                                     fill="#bd3d44"
//                                                     d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
//                                                     transform="scale(3.9385)"
//                                                 />
//                                                 <path
//                                                     fill="#fff"
//                                                     d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
//                                                     transform="scale(3.9385)"
//                                                 />
//                                             </g>
//                                             <path
//                                                 fill="#192f5d"
//                                                 d="M0 0h98.8v70H0z"
//                                                 transform="scale(3.9385)"
//                                             />
//                                             <path
//                                                 fill="#fff"
//                                                 d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
//                                                 transform="scale(3.9385)"
//                                             />
//                                         </g>
//                                     </svg>
//                                     English (US)
//                                 </a>
//                                 <a
//                                     className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                     href="#"
//                                 >
//                                     <svg
//                                         className="size-3 rounded-full"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         id="flag-icon-css-de"
//                                         viewBox="0 0 512 512"
//                                     >
//                                         <path fill="#ffce00" d="M0 341.3h512V512H0z" />
//                                         <path d="M0 0h512v170.7H0z" />
//                                         <path fill="#d00" d="M0 170.7h512v170.6H0z" />
//                                     </svg>
//                                     Deutsch
//                                 </a>
//                                 <a
//                                     className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                     href="#"
//                                 >
//                                     <svg
//                                         className="size-3 rounded-full"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         id="flag-icon-css-dk"
//                                         viewBox="0 0 512 512"
//                                     >
//                                         <path fill="#c8102e" d="M0 0h512.1v512H0z" />
//                                         <path fill="#fff" d="M144 0h73.1v512H144z" />
//                                         <path fill="#fff" d="M0 219.4h512.1v73.2H0z" />
//                                     </svg>
//                                     Dansk
//                                 </a>
//                                 <a
//                                     className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                     href="#"
//                                 >
//                                     <svg
//                                         className="size-3 rounded-full"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         id="flag-icon-css-it"
//                                         viewBox="0 0 512 512"
//                                     >
//                                         <g fillRule="evenodd" strokeWidth="1pt">
//                                             <path fill="#fff" d="M0 0h512v512H0z" />
//                                             <path fill="#009246" d="M0 0h170.7v512H0z" />
//                                             <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
//                                         </g>
//                                     </svg>
//                                     Italiano
//                                 </a>
//                                 <a
//                                     className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                     href="#"
//                                 >
//                                     <svg
//                                         className="size-3 rounded-full"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         xmlnsXlink="http://www.w3.org/1999/xlink"
//                                         id="flag-icon-css-cn"
//                                         viewBox="0 0 512 512"
//                                     >
//                                         <defs>
//                                             <path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z" />
//                                         </defs>
//                                         <path fill="#de2910" d="M0 0h512v512H0z" />
//                                         <use
//                                             width={30}
//                                             height={20}
//                                             transform="matrix(76.8 0 0 76.8 128 128)"
//                                             xlinkHref="#a"
//                                         />
//                                         <use
//                                             width={30}
//                                             height={20}
//                                             transform="rotate(-121 142.6 -47) scale(25.5827)"
//                                             xlinkHref="#a"
//                                         />
//                                         <use
//                                             width={30}
//                                             height={20}
//                                             transform="rotate(-98.1 198 -82) scale(25.6)"
//                                             xlinkHref="#a"
//                                         />
//                                         <use
//                                             width={30}
//                                             height={20}
//                                             transform="rotate(-74 272.4 -114) scale(25.6137)"
//                                             xlinkHref="#a"
//                                         />
//                                         <use
//                                             width={30}
//                                             height={20}
//                                             transform="matrix(16 -19.968 19.968 16 256 230.4)"
//                                             xlinkHref="#a"
//                                         />
//                                     </svg>
//                                     中文 (繁體)
//                                 </a>
//                             </div>
//                         </div>
//                         {/* End Language Dropdown */}
//                         <div className="space-x-4 text-sm ms-4">
//                             <a
//                                 className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                 href="#"
//                             >
//                                 Terms
//                             </a>
//                             <a
//                                 className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                 href="#"
//                             >
//                                 Privacy
//                             </a>
//                             <a
//                                 className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
//                                 href="#"
//                             >
//                                 Status
//                             </a>
//                         </div>
//                     </div>
//                     <div className="flex justify-between items-center">
//                         <DivEffect>
//                             <div className="mt-3 sm:hidden">
//                                 <a
//                                     className="flex-none text-xl font-semibold dark:text-white"
//                                     href="#"
//                                     aria-label="Brand"
//                                 >
//                                     Brand
//                                 </a>
//                                 <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
//                                     © 2022 Preline.
//                                 </p>
//                             </div>

//                         </DivEffect>
//                         {/* Social Brands */}
//                         <div className="space-x-4">
//                             <a
//                                 className="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
//                                 href="#"
//                             >
//                                 <svg
//                                     className="flex-shrink-0 size-4"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width={16}
//                                     height={16}
//                                     fill="currentColor"
//                                     viewBox="0 0 16 16"
//                                 >
//                                     <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
//                                 </svg>
//                             </a>
//                             <a
//                                 className="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
//                                 href="#"
//                             >
//                                 <svg
//                                     className="flex-shrink-0 size-4"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width={16}
//                                     height={16}
//                                     fill="currentColor"
//                                     viewBox="0 0 16 16"
//                                 >
//                                     <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
//                                 </svg>
//                             </a>
//                             <a
//                                 className="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
//                                 href="#"
//                             >
//                                 <svg
//                                     className="flex-shrink-0 size-4"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width={16}
//                                     height={16}
//                                     fill="currentColor"
//                                     viewBox="0 0 16 16"
//                                 >
//                                     <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
//                                 </svg>
//                             </a>
//                         </div>
//                         {/* End Social Brands */}
//                     </div>
//                     {/* End Col */}
//                 </div>
//             </div>

//         </motion.h2>
//     </footer>

// )