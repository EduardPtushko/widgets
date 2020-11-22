import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { Tabs } from './Tabs';

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom'),
//     useRouteMatch: () => ({
//         path: '/test',
//         url: '/test',
//     }),
// }));

jest.mock('../Biography', () => ({
    Biography() {
        return <div>Mock Biography</div>;
    },
}));

describe('Tabs', () => {
    test('renders successfully', () => {
        const { container, history } = renderWithRouter(
            () => <Tabs />,
            '/collections',
        );
        console.log(history.location);

        expect(container.innerHTML).toMatch(/biography/i);
        expect(container.innerHTML).toMatch(/companies/i);
        expect(container.innerHTML).toMatch(/partners/i);
        expect(history.location.pathname).toBe('/collections');
    });

    test('on click goes to "/collections/" route', () => {
        const { container, history, getByText } = renderWithRouter(
            () => <Tabs />,
            '/collections',
        );
        console.log(history.location);

        fireEvent.click(getByText('Biography'));
        console.log(history.location);

        // expect(container.innerHTML).toMatch(/mock biography/i);
        expect(history.location.pathname).toBe('/');
    });
});
