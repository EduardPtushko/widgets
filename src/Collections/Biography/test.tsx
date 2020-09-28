import React from 'react';
import { render } from '@testing-library/react';
import { Biography } from './Biography';

describe('Biography', () => {
    test('renders successfully', () => {
        const { container } = render(<Biography />);

        expect(container.innerHTML).toMatch(/biography works!/i);
    });
});
