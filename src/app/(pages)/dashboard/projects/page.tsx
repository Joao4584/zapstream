
import BreadCrumb from '@/src/components/breadCrumb';
import { ListTable } from './List';
import React from 'react';

export default function Main() {

    return (
        <React.Fragment>
            <BreadCrumb />
            <ListTable />
        </React.Fragment>
    );
}
