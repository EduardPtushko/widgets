import React from 'react';
import { render } from '@testing-library/react';
import { Spinner } from './Spinner';

describe('Spinner', () => {
    test('renders correctly', () => {
        const { container } = render(<Spinner />);

        expect(container.firstChild).toMatchInlineSnapshot(`
            <div
              class="overlay"
            >
              <div
                class="spinner"
              />
            </div>
        `);
    });
});
