import React, { Fragment } from 'react';
import PropTypes from 'proptypes';
import { AddItem } from '../../components/add-item';
import { ItemsList } from '../../components/items-list';

export const Sidebar = (props) => {
    const { categories, addCategory } = props;

    return (
        <Fragment>
            <br/>
            <AddItem onAdd={ addCategory }/>
            <br/>
            <ItemsList items={ categories }/>
        </Fragment>
    );
};


Sidebar.propTypes = {
    categories: PropTypes.array.isRequired
};