import React from 'react';
import { screen } from '@testing-library/react';
import { Collections } from './Collections';
import { Divider as MockDivider } from '../../shared/Divider';

jest.mock('../../shared/Divider');

jest.mock('../Table', () => ({
    Table() {
        return <div>Table</div>;
    },
}));

jest.mock('../Tabs', () => ({
    Tabs() {
        return <div>Tabs</div>;
    },
}));

describe('Collections', () => {
    test('renders successfully', () => {
        (MockDivider as jest.Mock).mockImplementation(() => <div>Divider</div>);
        const { container } = renderWithRouter(
            () => <Collections />,
            '/collections',
        );

        expect(container.innerHTML).toMatch(/Divider/i);
        expect(container.innerHTML).toMatch(/Table/i);
        expect(container.innerHTML).toMatch(/Tabs/i);

        expect(MockDivider).toHaveBeenCalledTimes(2);
    });
});
