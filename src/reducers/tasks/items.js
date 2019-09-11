import Immutable from 'immutable';

const initialState = Immutable.fromJS([
    {id: 1, name: 'React basics', category: 1, description: '', dod: '', isDone: true, startDate: new Date(), endDate: new Date()},
    {id: 2, name: 'Virtual DOM', category: 1, description: '', dod: '', isDone: false, startDate: new Date(), endDate: new Date()},
    {id: 3, name: 'Hooks', category: 1, description: '', dod: '', isDone: false, startDate: new Date(), endDate: new Date()},
    {id: 4, name: 'Redux actions', category: 2, description: '', dod: '', isDone: false, startDate: new Date(), endDate: new Date()},
    {id: 5, name: 'Middleware', category: 2, description: '', dod: '', isDone: false, startDate: new Date(), endDate: new Date()},
    {id: 6, name: 'react-redux', category: 2, description: '', dod: '', isDone: false, startDate: new Date(), endDate: new Date()},
    {id: 7, name: 'Nav and Links', category: 2, description: '', dod: '', isDone: false, startDate: new Date(), endDate: new Date()}
]);

export const items = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        default:
            return state;
    }
};
