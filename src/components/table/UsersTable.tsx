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
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

// * Interfaces * //
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

export const UsersTable = () => {
    const [products, setProducts] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [totalRecords, setTotalRecords] = useState<number>(0);
    const [customers, setCustomers] = useState<Customer[] | null>(null);
    const [selectAll, setSelectAll] = useState<boolean>(false);
    const [selectedCustomers, setSelectedCustomers] = useState<Customer[] | null>(null);
    const [lazyState, setLazyState] = useState<LazyTableState>({
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

        // Imitate delay of a backend call
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
                // Add more test data here
            ]);
            setLoading(false);
        }, Math.random() * 1000 + 250);
    };

    const onPage = (event: DataTablePageEvent) => {
        setLazyState(event);
    };

    const onFilter = (e: DataTableFilterEvent) => {
        const filters = { ...lazyState.filters, [e.field]: e.filters };
        setLazyState({ ...lazyState, filters });
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
            <div className="flex  align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${rowData.country.code}`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const header = (
        <div className="flex justify-between items-center ">
            <h2 className="text-lg font-semibold">Customer List</h2>
            <Button label="Add" icon="pi pi-plus" className="p-button-outlined" />
        </div>
    );

    return (
        <CardSection className="w-full mb-2 my-0 p-3 py-3">
            <DataTable value={customers} lazy dataKey="id" stripedRows size='small' paginator header={header}
                first={lazyState.first} rows={10} totalRecords={totalRecords} onPage={onPage}
                onFilter={onFilter} loading={loading}
            >
                <Column field="name" header="Name"  filterPlaceholder="Search by name" />
                <Column field="country.name" header="Country" body={countryBodyTemplate}  filterPlaceholder="Search by country" />
                <Column field="company" header="Company"  filterPlaceholder="Search by company" />
            </DataTable>
        </CardSection>
    );
}
