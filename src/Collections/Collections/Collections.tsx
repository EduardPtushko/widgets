import React from 'react';
import { Divider } from '../../shared/Divider';
import { Table } from '../Table';
import { Tabs } from '../Tabs';

export const Collections: React.FC = () => {
    const data = [
        {
            name: 'james',
            age: 24,
            job: 'designer',
        },
        {
            name: 'Jill',
            age: 23,
            job: 'Engineer',
        },
        {
            name: 'Elyse',
            age: 25,
            job: 'designer',
        },
    ];

    const headers = [
        { key: 'name', label: 'Name' },
        { key: 'age', label: 'Age' },
        { key: 'job', label: 'Job' },
    ];

    return (
        <div>
            <Divider title="Table Component" />
            <Table data={data} headers={headers} classes="striped celled" />
            <Divider title="Tab Menu" />
            <Tabs />
        </div>
    );
};
