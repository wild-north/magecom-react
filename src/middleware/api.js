import { API_ACTION_TYPE } from '../actions/constants';

export const api = ({ dispatch }) => next => action => {
    if (action.type === API_ACTION_TYPE) {
        const [request, success, failure] = action.actions;

        dispatch(request());

        fetch(action.url, { ...action.options, method: action.method })
            .then(resp => resp.json())
            .then((data) => {
                dispatch(success(data));
            }, (err) => {
                dispatch(failure(err));
            });

    } else {
        return next(action);
    }
};
