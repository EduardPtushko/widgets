import React from 'react';

interface PlaceholderProps {
    header?: boolean;
    lines?: number;
}

export const Placeholder: React.FC<PlaceholderProps> = ({
    header = true,
    lines = 3,
}) => {
    const createLines = (times: number) => {
        const l = Array.from({ length: times }).map((_, i) => (
            <div key={`line-${i}`} className='line'></div>
        ));

        return l;
    };

    return (
        <div className='ui placeholder'>
            {header && (
                <div className='image header'>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
            )}

            <div className='paragraph'>{createLines(lines)}</div>
        </div>
    );
};
