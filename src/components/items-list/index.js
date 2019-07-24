import React, { Fragment } from 'react';
import { isEmpty } from 'lodash';
import PropTypes from 'proptypes';
import { NavLink } from 'react-router-dom';

const Item = ({ item, list }) => {
    return (
        <Fragment>
            <li>
                <NavLink to={`/category/${item.id}`}>
                    { item.name }
                </NavLink>
                {
                    getItemsList(list, item)
                }
            </li>
        </Fragment>
    );
};

function getItemsList(list, item) {
    const filteredData = list.filter(v => v.parent === item.id);

    if (!filteredData.length) {
        return null;
    }

    return <ItemsList items={ filteredData } parentId={ item.id }/>;
}

export const ItemsList = ({ items, parentId }) => {
    if (isEmpty(items)) {
        return null;
    }

    return (
        <ul>
            { items.filter(v => v.parent === parentId).map(item => (
                <Item key={ item.id }
                      item={ item }
                      list={ items }
                />
            )) }
        </ul>
    );
};

ItemsList.defaultProps = {
    items: [],
    parentId: null
};

ItemsList.propTypes = {
    items: PropTypes.array.isRequired,
    parentId: PropTypes.number
};
