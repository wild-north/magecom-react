import React from 'react';
import { header } from './style.module.css';

export const Header = ({ toggleSidebar }) => {
    return (
        <div className={ header }>
            { 'Welcome, dude!' }
            {' '}
            <button onClick={ () => toggleSidebar() }>|||</button>
        </div>
    );
};
