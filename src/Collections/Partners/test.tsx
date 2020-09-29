import React from 'react';
import { render } from '@testing-library/react';
import { Partners } from './Partners';

describe('Partners', () => {
    test('renders successfully', () => {
        const { container } = render(<Partners />);
        expect(container.innerHTML).toMatch(/partners/i);
    });
});
