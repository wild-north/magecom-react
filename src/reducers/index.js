import { categories } from './categories';
import { tasks } from './tasks';
import { common } from './common';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
    categories,
    tasks,
    common
});
