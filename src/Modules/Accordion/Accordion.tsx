import React, { useState } from 'react';
import { ItemType } from '../Modules';

interface AccordionProps {
    items: ItemType[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [openedItemIndex, setOpenedItemIndex] = useState(0);
    const onOpenAccordion = (i: number) => {
        if (i === openedItemIndex) {
            setOpenedItemIndex(-1);
        } else {
            setOpenedItemIndex(i);
        }
    };
    const setClass = (i: number, name: string) => {
        return [name, openedItemIndex === i ? 'active' : ''].join(' ');
    };
    const renderItems = () => {
        return items.map((item, i) => (
            <React.Fragment key={item.title}>
                <div
                    onClick={() => onOpenAccordion(i)}
                    className={setClass(i, 'title')}
                >
                    <i className='dropdown icon'></i>
                    {item.title}
                </div>
                <div className={setClass(i, 'content')}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        ));
    };

    return <div className='ui accordion styled'>{renderItems()}</div>;
};
