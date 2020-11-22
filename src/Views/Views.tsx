import React from 'react';
import { Divider } from '../shared/Divider';
import { Statistics } from './Statistics';
import { ListItem } from './ListItem';
import CouchImg from '../assets/couch.jpeg';
import DresserImg from '../assets/dresser.jpeg';

export interface Stat {
    value: number;
    label: string;
}
export interface Item {
    image: string;
    title: string;
    description: string;
}

type StatsType = Stat[];
type ItemsType = Item[];

export const Views: React.FC = () => {
    const stats: StatsType = [
        { value: 22, label: '# of Users' },
        { value: 900, label: 'Revenue' },
        { value: 50, label: 'Reviews' },
    ];
    const items: ItemsType = [
        {
            image: CouchImg,
            title: 'Couch',
            description: 'This is a fantastic couch to sit on',
        },
        {
            image: DresserImg,
            title: 'Dresser',
            description: 'This is a great dresser to put staff in',
        },
    ];
    return (
        <div>
            <Divider title="Statistics Component" />
            <Statistics data={stats} />
            <Divider title="Item List Component" />
            <ListItem items={items} />
        </div>
    );
};
