'use client';

// * Modules * //
import React, { useState, useEffect } from 'react';


// * Exports * //
import { ConnectionTreatmentPoints } from './ConnectionTreatmentPoints';
import UserProfile from './profile';
import { DivEffect } from '@/src/lib/motion/Effects';
import Divider from '../ui/divider';
import MenuList from './menuList';


// * Components * //
export default function SideBar(): JSX.Element {
    return (
        <nav className="w-55 h-full card-gray relative text-slate-700 dark:text-slate-50" >
            <DivEffect>
                <React.Fragment>
                    <ConnectionTreatmentPoints />
                    <UserProfile className='mt-4' />
                    <Divider />
                    <MenuList />
                </ React.Fragment>
            </DivEffect>
        </nav>
    )

}
