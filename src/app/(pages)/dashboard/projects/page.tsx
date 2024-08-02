
import BreadCrumb, { BreadcrumbItemType } from '@/src/components/breadCrumb';
import { ListTable } from './List';
import React from 'react';

const route: BreadcrumbItemTyper[] = [
  
]

export default function Main() {

    return (
        <React.Fragment>
            <BreadCrumb items={route} />
            <ListTable />
        </React.Fragment>
    );
}
