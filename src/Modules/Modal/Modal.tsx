import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root') as HTMLDivElement;

export const Modal: React.FC<React.PropsWithChildren<unknown>> = (props) => {
    const el = document.createElement('div');

    useEffect(() => {
        modalRoot.appendChild(el);

        return () => {
            modalRoot.removeChild(el);
        };
    }, [el]);

    return ReactDOM.createPortal(props.children, el);
};
