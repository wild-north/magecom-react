import * as ct from './constants';
import { createAction } from '../helpers/actions';

export const toggleSidebar = createAction(ct.SIDEBAR_TOGGLE);

export const requestUserInfo = createAction(ct.USER_INFO_REQUEST);
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

    // fetch('http://asda.sd')
    //     .then((data) => {
    //         dispatch(resolveUserInfo(data));
    //     }, (err) => {
    //         dispatch(rejectUserInfo(err));
    //     });

};

export const getWeatherByCityName = cityName => dispatch => {
    const mainPart = 'https://api.openweathermap.org';
    const API_KEY = 'd2eeaf4dae5c05563d31da5c8f85d62d';
    const url = `${mainPart}/data/2.5/weather?appid=${API_KEY}&q=${cityName}`;

    dispatch(requestWeatherByCity());

    setTimeout(() => {
        fetch(url)
            .then(resp => resp.json())
            .then((data) => {

                if (data.cod && data.cod === 200) {
                    return dispatch(resolveWeatherByCity(null));
                }

                return dispatch(rejectWeatherByCity(data.message || 'Smth went wrong'));
            }, (err) => {
                dispatch(rejectWeatherByCity(err));
            });
    }, 1000);
};


