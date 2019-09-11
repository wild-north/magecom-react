import Immutable from 'immutable';
import { SIDEBAR_TOGGLE } from '../actions/constants';

const initialState = Immutable.Map({
    isSidebarVisible: true
});

export const common = (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case SIDEBAR_TOGGLE:
            // return { ...state, isSidebarVisible: !state.isSidebarVisible };
            return state.set('isSidebarVisible', !state.get('isSidebarVisible'));

        default:
            return state;
    }
};