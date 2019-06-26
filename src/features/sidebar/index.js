import React, { Fragment } from 'react';
import PropTypes from 'proptypes';
import { AddItem } from '../../components/add-item';
import { ItemsList } from '../../components/items-list';

export const Sidebar = ({ categories }) => (
    <Fragment>
        <br/>
        <AddItem/>
        <br/>
        <ItemsList items={ categories }/>
    </Fragment>
);

Sidebar.propTypes = {
    categories: PropTypes.array.isRequired
};