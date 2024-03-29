import { categories } from './categories';
import { tasks } from './tasks';
import { common } from './common';
import { weather } from './weather';
import { combineReducers } from 'redux-immutable';

export const reducer = combineReducers({
    categories,
    tasks,
    common,
    weather
});
