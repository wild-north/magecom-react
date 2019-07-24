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
        <Button onClick={ () => toggleSidebar() }>
            <i>{ isOpened ? 'X' : 'O' }</i>
        </Button>
    </div>
);

export const Header = ({ toggleSidebar, isOpened }) => {
    return (
        <div className={ header }>
            { 'Welcome, dude!' }
            {' '}
            <SidebarToggler toggleSidebar={ toggleSidebar }
                            isOpened={ isOpened }
            />
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/category/123">Category</NavLink>
        </div>
    );
};
