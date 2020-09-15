import React from 'react';
import { render, screen } from '@testing-library/react';
import { Divider } from './Divider';

describe('Divider', () => {
    test('renders successfully', () => {
        const testTitle = 'test divider';
        render(<Divider title={testTitle} />);
        const dividerHeader = screen.getByText(testTitle);

        expect(dividerHeader).toBeInTheDocument();
    });
});
