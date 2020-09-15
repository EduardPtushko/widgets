import React from 'react';
import NotFound from './NotFound';

describe('NotFound', () => {
    test('renders successfully', () => {
        const { container } = renderWithRouter(
            () => <NotFound />,
            '/some-strange-route',
        );

        expect(container.innerHTML).toMatch(/Oops...Page not found/i);
    });
});
