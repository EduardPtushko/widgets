import React from 'react';
import { render } from '@testing-library/react';
import { Companies } from './Companies';

describe('Companies', () => {
    test('renders successfully', () => {
        const { container } = render(<Companies />);

        expect(container.innerHTML).toMatch(/companies works!/i);
    });
});
