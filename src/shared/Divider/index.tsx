import React from 'react';
import './styles.css';

interface DividerProps {
    title: string;
}

const Divider: React.FC<DividerProps> = ({ title }) => {
    return (
        <div className='host'>
            <h1>{title}</h1>
            <div className='ui divider'></div>
        </div>
    );
};

export default Divider;
