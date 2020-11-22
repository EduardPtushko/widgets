import React from 'react';
import { Placeholder } from '../Placeholder';
import { Divider } from '../../shared/Divider';
import { Segment } from '../Segment';

export const Elements: React.FC = () => {
    return (
        <>
            <Divider title='Placeholder Component' />
            <Placeholder />
            <Divider title='Segment Component' />
            <Segment
                header={
                    <header>
                        <i className='pdf file outline icon'> </i>
                        No document are listed for this customer.
                    </header>
                }
                button={
                    <button className='ui primary button'>Add Document</button>
                }
            />
        </>
    );
};
