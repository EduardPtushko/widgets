import React from 'react';
import { render } from '@testing-library/react';
import { ErrorMessage } from './ErrorMessage';

describe('ErrorMessage', () => {
    test('renders successfully', () => {
        const { container } = render(<ErrorMessage />);

        expect(container.innerHTML).toMatch(/Something Went Wrong/i);
    });
});
