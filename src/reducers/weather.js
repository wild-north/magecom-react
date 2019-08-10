import * as cnt from '../actions/constants';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    data: {},
    hasError: false,
    hasData: false,
    errorMessage: null,
    isFetching: false
});

export const weather = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case cnt.WEATHER_REQUEST:

            return state
                .set('hasError', false)
                .set('errorMessage', null)
                .set('isFetching', true);

        case cnt.WEATHER_SUCCESS:
            return state
                .set('data', Immutable.fromJS(payload))
                .set('hasData', true)
                .set('isFetching', false);
        case cnt.WEATHER_FAILURE:
            return state
                .set('isFetching', false)
                .set('hasError', true)
                .set('hasData', false)
                .set('errorMessage', Immutable.fromJS(payload));
        default:
            return state;
    }

};