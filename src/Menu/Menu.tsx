import React from 'react';
import { NavLink } from 'react-router-dom';

export const Menu: React.FC = () => {
    return (
        <div className='ui secondary pointing menu'>
            <NavLink to='/elements' className='item'>
                Elements
            </NavLink>
            <NavLink to='/collections' className='item'>
                Collections
            </NavLink>
            <NavLink to='/views' className='item'>
                Views
            </NavLink>
            <NavLink to='/modules' className='item'>
                Modules
            </NavLink>
        </div>
    );
};
