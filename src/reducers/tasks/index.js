import { combineReducers } from 'redux-immutable';
import { items } from './items';
import { meta } from './meta';

export const tasks = combineReducers({
    items,
    meta
});
