import React from 'react';
import './style.css';

export const ErrorMessage: React.FC = () => {
    return (
        <div className='error-message'>
            <span className='error-info'>Something Went Wrong</span>
        </div>
    );
};
