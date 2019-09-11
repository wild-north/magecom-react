import * as ct from './constants';
import { createAction } from '../helpers/actions';

export const toggleSidebar = createAction(ct.SIDEBAR_TOGGLE);
/////////////////////////////////////////////////////////////////
export const requestUserInfo = createAction(ct.USER_INFO_REQUEST);

export const requestUserInfo1 = (payload) => ({
    type: ct.USER_INFO_REQUEST,
    payload
});

/////////////////////////////////////////////////////////////////



export const resolveUserInfo = createAction(ct.USER_INFO_SUCCESS);
export const rejectUserInfo = createAction(ct.USER_INFO_FAILURE);

export const requestWeatherByCity = createAction(ct.WEATHER_REQUEST);
export const resolveWeatherByCity = createAction(ct.WEATHER_SUCCESS);
export const rejectWeatherByCity = createAction(ct.WEATHER_FAILURE);

export const getUserInfo = () => dispatch => {
    dispatch(requestUserInfo());

    new Promise((res, rej) => {
        setTimeout(() => {
            Math.random() > .5
                ? res(dispatch(resolveUserInfo(true)))
                : rej(dispatch(rejectUserInfo(false)));
        }, 2000);
    })
};

const mainPart = 'https://api.openweathermap.org';
const API_KEY = 'd2eeaf4dae5c05563d31da5c8f85d62d';
const url = `${mainPart}/data/2.5/weather?appid=${API_KEY}`;

const getWeather = (name, options) => {
    console.log('getWeather');

    return fetch(url + `&q=${name}`, options)
        .then(resp => resp.json());
};

const onSuccess = (data, dispatch) => {
    if (!data.cod || data.cod !== 200) {
        return dispatch({
            type: ct.WEATHER_FAILURE,
            payload: data.message
        })
    }

    return dispatch({
        type: ct.WEATHER_SUCCESS,
        payload: data
    });
};

const onError = (err, dispatch) => {
    dispatch({
        type: ct.WEATHER_FAILURE,
        payload: err.payload || err.message
    })
};

export const getWeatherByCityName = (cityName, options) => dispatch => {
    dispatch({ type: ct.WEATHER_REQUEST });

    return getWeather(cityName, options)
        .then(data => onSuccess(data, dispatch))
        .catch(err => onError(err, dispatch));
};







// export const getWeatherByCityName1 = (cityName) => createApiCall({
//     url: url + `&q=${cityName}`,
//     method: 'get',
//     options: { 'content-type': 'application/json' },
//     actions: [
//         requestWeatherByCity,
//         resolveWeatherByCity,
//         rejectWeatherByCity
//     ]
// });
//
// const createApiCall = ({ url, actions, method, options }) => ({
//     type: ct.API_ACTION_TYPE,
//     actions,
//     url,
//     method,
//     options
// });
//




