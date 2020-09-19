import React from 'react';
import { fireEvent } from '@testing-library/react';
import { Menu } from './Menu';

describe('Menu', () => {
    test('renders "Elements" and navigates to "/elements" on click', () => {
        const { getByText, history } = renderWithRouter(() => <Menu />);
        const link = getByText(/elements/i);

        expect(link).toBeInTheDocument();
        fireEvent.click(link);
        expect(history.location.pathname).toBe('/elements');
    });

    test('renders "Collections" and navigates to "/collections" on click', () => {
        const { getByText, history } = renderWithRouter(() => <Menu />);
        const link = getByText(/collections/i);

        expect(link).toBeInTheDocument();
        fireEvent.click(link);
        expect(history.location.pathname).toBe('/collections');
    });

    test('renders "Views" and navigates to "/views" on click', () => {
        const { getByText, history } = renderWithRouter(() => <Menu />);
        const link = getByText(/views/i);

        expect(link).toBeInTheDocument();
        fireEvent.click(link);
        expect(history.location.pathname).toBe('/views');
    });

    test('renders "Modules" and navigates to "/modules" on click', () => {
        const { getByText, history } = renderWithRouter(() => <Menu />);
        const link = getByText(/modules/i);

        expect(link).toBeInTheDocument();
        fireEvent.click(link);
        expect(history.location.pathname).toBe('/modules');
    });
});
