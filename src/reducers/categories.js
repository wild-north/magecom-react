import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    data: [
        {id: 1, name: 'React', parent: null},
        {id: 2, name: 'Redux', parent: null},
        {id: 3, name: 'Immutable', parent: 2},
        {id: 4, name: 'React Router', parent: 1},
        {id: 5, name: 'Cache', parent: 3}
    ]
});

export const categories = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        default:
            return state;
    }

};