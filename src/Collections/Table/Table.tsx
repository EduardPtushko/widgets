import React from 'react';

export interface Record {
    name: string;
    age: number;
    job: string;
    [key: string]: string | number;
}
export interface Header {
    key: string;
    label: string;
}

export interface TableProps {
    headers: Header[];
    data: Record[];
    classes?: string;
}

export const Table: React.FC<TableProps> = ({
    headers,
    data,
    classes = '',
}) => {
    const createHeaders = () =>
        headers.map(({ key, label }) => <th key={key}>{label}</th>);

    const createRecords = () =>
        data.map((record) => {
            const rows = headers.map((header) => (
                <td key={`key-${header.key}`}>{record[header.key]}</td>
            ));

            return <tr key={'key' + record.name}>{rows}</tr>;
        });

    return (
        <table className={['ui', 'table', classes].join(' ')}>
            <thead>
                <tr>{createHeaders()}</tr>
            </thead>
            <tbody>{createRecords()}</tbody>
        </table>
    );
};
