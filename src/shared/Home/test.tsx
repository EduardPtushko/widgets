import React from 'react';
import { render } from '@testing-library/react';
import { Home } from './Home';

describe('Home', () => {
    test('renders successfully', () => {
        const { container } = render(<Home />);

        expect(container.innerHTML).toMatch(/home/i);
    });
});
