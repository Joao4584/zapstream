'use client';
import React, { useState, useEffect } from 'react';
import { ConnectionTreatmentPoints } from './ConnectionTreatmentPoints';
import UserProfile from './profile';
import { DivEffect } from '@/src/lib/motion/Effects';

export default function SideBar(): JSX.Element {
    return (
        <nav className="w-55 card-gray relative text-slate-700 dark:text-slate-50  ">
            <DivEffect>
                <>
                    <ConnectionTreatmentPoints />
                    <UserProfile className='mt-4' />
                    <hr className='dark:border-gray-1 w-5/6 relative left-1/2 -translate-x-1/2 mt-3' />
                    dwa
                </>
            </DivEffect>
        </nav>
    )

}
