'use client';
// * Modules * //
import React, { useState, useEffect } from 'react';
import {
    DataTable, DataTableSelectionChangeEvent, DataTableSelectAllChangeEvent,
    DataTablePageEvent, DataTableSortEvent, DataTableFilterEvent,
    DataTableFilterMeta
} from 'primereact/datatable';
import { Column } from 'primereact/column';
import CardSection from '@/src/components/card/CardSections';
import { classNames } from 'primereact/utils';
// * Exports * //


// * Components * //


interface Country {
    name: string;
    code: string;
}

interface Representative {
    name: string;
    code: string;
}

interface Customer {
    id: number;
    name: string;
    country: Country;
    company: string;
    date: string;
    status: string;
    verified: boolean;
    activity: number;
    representative: Representative;
    balance: number;
}

interface LazyTableState {
    first: number;
    rows: number;
    page: number;
    sortField?: string;
    sortOrder?: number;
    filters: DataTableFilterMeta;
}
export const ListTable = () => {
    const [products, setProducts] = useState<any>();

    const [loading, setLoading] = useState<boolean>(false);
    const [totalRecords, setTotalRecords] = useState<number>(0);
    const [customers, setCustomers] = useState<Customer[] | null>(null);
    const [selectAll, setSelectAll] = useState<boolean>(false);
    const [selectedCustomers, setSelectedCustomers] = useState<Customer[] | null>(null);
    const [lazyState, setlazyState] = useState<any>({
        first: 0,
        rows: 10,
        page: 1,
        sortField: null,
        sortOrder: null,
        filters: {
            name: { value: '', matchMode: 'contains' },
            'country.name': { value: '', matchMode: 'contains' },
            company: { value: '', matchMode: 'contains' },
            'representative.name': { value: '', matchMode: 'contains' }
        }
    });

    let networkTimeout: any = null;

    useEffect(() => {
        loadLazyData();
    }, [lazyState]);

    const loadLazyData = () => {
        setLoading(true);
        console.log(lazyState)
        if (networkTimeout) {
            clearTimeout(networkTimeout);
        }

        //imitate delay of a backend call
        networkTimeout = setTimeout(() => {
            setTotalRecords(10);
            setCustomers([
                {
                    id: 1000,
                    name: 'James Butt',
                    country: {
                        name: 'Algeria',
                        code: 'dz'
                    },
                    company: 'Benton, John B Jr',
                    date: '2015-09-13',
                    status: 'unqualified',
                    verified: true,
                    activity: 17,
                    representative: {
                        name: 'Ioni Bowcher',
                        image: 'ionibowcher.png'
                    },
                    balance: 70663
                },
            ]);
            setLoading(false);
        }, Math.random() * 1000 + 250);
    };

    const onPage = (event: DataTablePageEvent) => {
        setlazyState(event);
    };


    const representativeBodyTemplate = (rowData: Customer) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={rowData.representative.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${rowData.representative.image}`} width={32} />
                <span>{rowData.representative.name}</span>
            </div>
        );
    };

    const countryBodyTemplate = (rowData: Customer) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${rowData.country.code}`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };


    return (
        <CardSection className="w-full  mb-2 my-0 p-6 py-4 ">
            <DataTable value={customers} lazy dataKey="id" paginator header
                first={lazyState.first} rows={10} totalRecords={totalRecords} onPage={onPage}
                loading={loading}
            >

                <Column field="name" header="Name" />
                <Column field="country.name" header="Country" body={countryBodyTemplate} />
                <Column field="company" header="Company" />
                <Column field="representative.name" header="Representative" body={representativeBodyTemplate} />
            </DataTable>
        </CardSection>
    )
}