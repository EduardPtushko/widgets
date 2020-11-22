import React from 'react';
import './styles.css';

interface SegmentProps {
    header?: JSX.Element;
    button?: JSX.Element;
}

export const Segment: React.FC<SegmentProps> = ({ header, button }) => {
    return (
        <div className='ui placeholder segment'>
            <div className='ui icon header'>{header}</div>
            {button}
        </div>
    );
};
