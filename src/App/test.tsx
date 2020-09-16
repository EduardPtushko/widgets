import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from './App';

jest.mock('../shared/Home', () => ({
    // eslint-disable-next-line react/display-name
    Home: () => <div>Home</div>,
}));

describe('App', () => {
    test('renders', () => {
        const history = createMemoryHistory();
        const { container } = render(
            <Router history={history}>
                <App />
            </Router>,
        );

        expect(container.innerHTML).toMatch('Elements');
        expect(container.innerHTML).toMatch('Collections');
        expect(container.innerHTML).toMatch('Views');
        expect(container.innerHTML).toMatch('Modules');
    });

    test('renders Home component on root route', () => {
        const { container } = renderWithRouter(() => <App />, '/');

        expect(container.innerHTML).toMatch('Home');
    });

    test('renders Elements component on /elements route', async () => {
        renderWithRouter(() => <App />, '/elements');

        const component = await screen.findByText(/placeholder component/i);

        expect(component).toBeInTheDocument();
    });

    test('renders Collections component on /collections route', async () => {
        renderWithRouter(() => <App />, '/collections');

        const component = await screen.findByText(/table component/i);

        expect(component).toBeInTheDocument();
    });

    test('renders Views component on /views route', async () => {
        renderWithRouter(() => <App />, '/views');

        const component = await screen.findByText(/statistics component/i);

        expect(component).toBeInTheDocument();
    });

    test('renders Modules component on /modules route', async () => {
        renderWithRouter(() => <App />, '/modules');

        const component = await screen.findByText(/modal component/i);

        expect(component).toBeInTheDocument();
    });

    test('renders NotFound component on /unknown route', async () => {
        renderWithRouter(() => <App />, '/unkown');

        const component = await screen.findByText(/Oops...Page not found/i);

        expect(component).toBeInTheDocument();
    });
});
