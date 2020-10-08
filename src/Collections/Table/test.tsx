import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from './Table';

const mockRecord = {
    name: 'Jill',
    age: 23,
    job: 'Engineer',
};

const mockData = [mockRecord];

const mockHeaders = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
];

describe('Table', () => {
    test('renders correct headers', () => {
        render(<Table data={mockData} headers={mockHeaders} />);
        const headers = screen.getAllByRole('columnheader');

        expect(headers[0].textContent).toContain(mockHeaders[0].label);
        expect(headers[1].textContent).toContain(mockHeaders[1].label);
        expect(headers[2].textContent).toContain(mockHeaders[2].label);
    });

    test('renders correct data', () => {
        render(<Table data={mockData} headers={mockHeaders} />);
        const headers = screen.getAllByRole('cell');

        expect(headers[0].textContent).toContain(mockRecord.name);
        expect(headers[1].textContent).toContain(mockRecord.age);
        expect(headers[2].textContent).toContain(mockRecord.job);
    });

    test('table has correct class when classes prop present', () => {
        const mockClasses = 'striped celled';
        render(
            <Table
                data={mockData}
                headers={mockHeaders}
                classes={mockClasses}
            />,
        );

        expect(screen.getByRole('table')).toHaveClass('striped celled');
    });
});
