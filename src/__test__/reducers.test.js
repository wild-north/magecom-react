import Immutable from 'immutable';
import { weather } from '../reducers/weather';

describe('Weather reducer', () => {
    const initialState = Immutable.fromJS({
        data: {},
        hasError: false,
        hasData: false,
        errorMessage: null,
        isFetching: false
    });

    it('WEATHER_REQUEST request changes related fields.', () => {
        const state = weather(initialState, {
            type: 'WEATHER_REQUEST'
        });

        expect(state.toJS()).toEqual({
            data: {},
            hasError: false,
            hasData: false,
            errorMessage: null,
            isFetching: true
        });
    });

    it('WEATHER_SUCCESS changes related fields correctly', () => {
        const state = weather(initialState, {
            type: 'WEATHER_SUCCESS',
            payload: {ololo: 123}
        });

        expect(state.toJS()).toEqual({
            data: {ololo: 123},
            hasError: false,
            hasData: true,
            errorMessage: null,
            isFetching: false
        });
    });

    it('WEATHER_FAILURE changes related fields correctly', () => {
        const state = weather(initialState, {
            type: 'WEATHER_FAILURE',
            payload: 'Something went wrong'
        });

        expect(state.toJS()).toEqual(expect.objectContaining({
            hasError: true,
            hasData: false,
            errorMessage: 'Something went wrong',
            isFetching: false
        }));
    });

    // const anyObject = {
    //     complex: true,
    //     otherProperties: "yes",
    //     foo: "bar",
    // };
    //
    // expect(anyObject).toEqual(expect.objectContaining({ foo: "bar" }))
});

// Тестируем THUNK MIDDLEWARE: если я задиспатчу вместо объекта функцию,
// то эта функция будет вызвана миддлварью THUNK, и в эту функцию в
// качестве аргумента придет dispatch
//
//
// onClick(function (dispatch) {
//     if (typeof dispatch !== 'function') {
//         throw new Error('')
//     }
// })






























