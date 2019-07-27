import { SIDEBAR_TOGGLE } from '../actions/constants';

const initialState = {
    isSidebarVisible: true
};

export const common = (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case SIDEBAR_TOGGLE:
            return { ...state, isSidebarVisible: !state.isSidebarVisible };

        default:
            return state;
    }
};