'use client';
import React, { Fragment, ReactNode } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import { motion } from "framer-motion";
import { LI_VARIANT, UL_VARIANT } from '@/src/constants/variantsMotion';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu"
import { cn } from '@/src/lib/utils';
import Link from 'next/link';
import { MobileNavBar } from './NavBarMobile';

export default function NavBar(): JSX.Element {
    return (
        <Disclosure as="nav" className="bg-indigo-950 dark:bg-dark-1 dark:border-b dark:border-gray-1">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <MobileNavBar open={open} />
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <Image width={37} height={37} src={"/images/logo.png"} alt="RockMessages" />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <NavigationMenu>
                                        <NavigationMenuList>
                                            <motion.div
                                                className="flex space-x-4"
                                                initial="hidden"
                                                animate="visible"
                                                variants={UL_VARIANT}

                                            >
                                                <NavigationMenuItem>
                                                    <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                                                    <NavigationMenuContent>
                                                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                                            <li className="row-span-3">
                                                                <NavigationMenuLink asChild>
                                                                    <a
                                                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                                        href="/"
                                                                    >

                                                                        <div className="mb-2 mt-4 text-lg font-medium">
                                                                            shadcn/ui
                                                                        </div>
                                                                        <p className="text-sm leading-tight text-muted-foreground">
                                                                            Beautifully designed components that you can copy and
                                                                            paste into your apps. Accessible. Customizable. Open
                                                                            Source.
                                                                        </p>
                                                                    </a>
                                                                </NavigationMenuLink>
                                                            </li>
                                                            <ListItem href="/docs" title="Introduction">
                                                                Re-usable components built using Radix UI and Tailwind CSS.
                                                            </ListItem>
                                                            <ListItem href="/docs/installation" title="Installation">
                                                                How to install dependencies and structure your app.
                                                            </ListItem>
                                                            <ListItem href="/docs/primitives/typography" title="Typography">
                                                                Styles for headings, paragraphs, lists...etc
                                                            </ListItem>
                                                        </ul>
                                                    </NavigationMenuContent>
                                                </NavigationMenuItem>
                                                <NavigationMenuItem>
                                                    <Link href="/docs" legacyBehavior passHref>
                                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                            Documentation
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </NavigationMenuItem>
                                            </motion.div>
                                        </NavigationMenuList>
                                    </NavigationMenu>
                                    {/* <motion.ul
                                        className="flex space-x-4"
                                        initial="hidden"
                                        animate="visible"
                                        variants={UL_VARIANT}

                                    >

                                        {navigation.map((item) => (
                                            <motion.li className={`px-5 py-2 rounded-xl`} key={item.name}
                                                variants={LI_VARIANT}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <a

                                                    href={item.href}
                                                    className={classNames(
                                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'rounded-md px-3 py-2 text-sm font-medium'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>

                                            </motion.li>
                                        ))}
                                    </motion.ul> */}
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 gap-4 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    type="button"
                                    className="relative rounded-full  p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    {/* <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel> */}
                </>
            )}
        </Disclosure>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"