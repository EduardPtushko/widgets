import React from 'react';
import { Stat } from '../Views';

interface StatisticsProps {
    data: Stat[];
}

export const Statistics: React.FC<StatisticsProps> = ({ data }) => {
    const renderStatistic = () =>
        data.map((stat) => (
            <div key={stat.label} className='statistic'>
                <div className='value'>{stat.value}</div>
                <div className='label'>{stat.label}</div>
            </div>
        ));

    return <div className='ui statistics'>{renderStatistic()}</div>;
};
