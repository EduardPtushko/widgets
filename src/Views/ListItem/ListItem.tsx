import React from 'react';
import { Item } from '../Views';

interface listItemProps {
    items: Item[];
}

export const ListItem: React.FC<listItemProps> = ({ items }) => {
    const renderItems = () =>
        items.map((item) => (
            <div key={item.title} className='item'>
                <div className='image'>
                    <img src={item.image} alt='image' />
                </div>
                <div className='content'>
                    <div className='header'>{item.title}</div>
                    <div className='description'>
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
        ));
    return <div className='ui items'>{renderItems()}</div>;
};
