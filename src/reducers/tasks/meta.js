import Immutable from 'immutable';

const initialState = Immutable.Map({
    isFetching: false
});

export const meta = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        default:
            return state;
    }
};
