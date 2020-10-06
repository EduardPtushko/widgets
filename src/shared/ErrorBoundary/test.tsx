import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ErrorBoundary } from './ErrorBoundary';
import { reportError as mockReportError } from '../../api/logs';

jest.mock('../../api/logs.ts');

let spy: jest.SpyInstance;
beforeAll(() => {
    spy = jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterAll(() => {
    spy.mockRestore();
});

afterEach(() => {
    jest.clearAllMocks();
});

function Bomb({ shouldThrow }: { shouldThrow: boolean }) {
    if (shouldThrow) {
        throw new Error('💣');
    } else {
        return null;
    }
}

describe('ErrorBoundary', () => {
    test('calls reportError and renders that there was a problem', () => {
        (mockReportError as jest.Mock).mockResolvedValueOnce({
            success: true,
        });

        const {
            rerender,
            getByText,
            getByRole,
            queryByRole,
            queryByText,
        } = render(
            <ErrorBoundary>
                <Bomb shouldThrow={false} />
            </ErrorBoundary>,
        );

        rerender(
            <ErrorBoundary>
                <Bomb shouldThrow={true} />
            </ErrorBoundary>,
        );

        const error = expect.any(Error);
        const info = { componentStack: expect.stringContaining('Bomb') };

        expect(mockReportError).toHaveBeenCalledWith(error, info);
        expect(mockReportError).toHaveBeenCalledTimes(1);

        expect(console.error).toHaveBeenCalledTimes(2);

        expect(getByRole('alert').textContent).toMatchInlineSnapshot(
            `"There was a problem."`,
        );

        spy.mockClear();
        (mockReportError as jest.Mock).mockClear();

        rerender(
            <ErrorBoundary>
                <Bomb shouldThrow={false} />
            </ErrorBoundary>,
        );

        fireEvent.click(getByText(/Try again?/i));

        expect(console.error).not.toHaveBeenCalledTimes(2);
        expect(mockReportError).not.toHaveBeenCalled();

        expect(queryByRole('alert')).not.toBeInTheDocument();
        expect(queryByText(/try again/i)).not.toBeInTheDocument();
    });
});
