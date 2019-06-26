import React, { Fragment } from 'react';
import { isEmpty } from 'lodash';
// import { ol, li } from './style.module.css';

const Item = ({ item, list }) => {
    return (
        <Fragment>
            <li>
                { item.name }
            </li>
            <ItemsList items={ list.filter(v => v.parent === item.id) }
                       parentId={ item.id }
            />
        </Fragment>
    );
};

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



// export const Categories = ({ tree, source }) => {
//     return (
//         <ol>
//             {
//                 tree.map(cat =>
//                     <CategoryItem key={ cat.id } {...cat} source={ source }/>)
//             }
//         </ol>
//     );
// };
//
// function getCatById(source, id) {
//     for (let i = 0; i < source.length; i++) {
//         if (source[i].id === id) {
//             return source[i];
//         }
//     }
// }
//
// const CategoryItem = ({ id, name, sub, source, parentId }) => {
//     const shouldRenderChildren = !!sub.length;
//     const subTree = sub.map(id => getCatById(source, id));
//
//     return (
//         <li>
//             { name }
//             {
//                 shouldRenderChildren && (
//                     <Categories tree={ subTree } source={ source }/>
//                 )
//             }
//         </li>
//     );
// };