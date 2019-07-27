import React from 'react';
import { header } from './style.module.css';
import { NavLink } from 'react-router-dom';

const Button = ({ onClick, children }) => {

    return (
        <button onClick={ onClick }>
            { children }
        </button>
    )
};

const SidebarToggler = ({ toggleSidebar, isOpened }) => (
    <div>
        <Button onClick={ toggleSidebar }>
            <i>{ isOpened ? ']|[' : '|||' }</i>
        </Button>
    </div>
);

export const Header = ({ isOpened, toggleSidebar }) => {
    return (
        <div className={ header }>
            { 'Welcome, dude!' }
            {' '}
            <SidebarToggler toggleSidebar={ toggleSidebar }
                            isOpened={ isOpened }
            />
        </div>
    );
};
