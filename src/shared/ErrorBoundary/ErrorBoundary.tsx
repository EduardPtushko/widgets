import React, { Component, ErrorInfo, ReactNode } from 'react';
import { reportError } from '../../api/logs';

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends Component<unknown, State> {
    state = { hasError: false };

    componentDidCatch(error: Error, info: ErrorInfo): void {
        this.setState({ hasError: true });
        reportError(error, info);
    }

    tryAgain = (): void => this.setState({ hasError: false });

    render(): JSX.Element | ReactNode {
        return this.state.hasError ? (
            <div>
                <div role="alert">There was a problem.</div>
                <button onClick={this.tryAgain}>Try again?</button>
            </div>
        ) : (
            this.props.children
        );
    }
}
