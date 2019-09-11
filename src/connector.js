import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
    toggleSidebar,
    getUserInfo,
    getWeatherByCityName1
} from './actions';
import {
    data, isFetching, hasData,
    hasError, errorMessage,
    isSidebarVisible
} from './selectors';
import { convertToJS } from './helpers/selectors';

const appSelector = createSelector(
    isSidebarVisible,
    (isSidebarVisible) => ({
        isSidebarVisible
    })
);

const headerSelector = createSelector(
    isSidebarVisible,
    (isOpened) => ({
        isOpened
    })
);

export const appConnector = connect(appSelector, {
    getUserInfo
});

export const headerConnector = connect(headerSelector, {
    toggleSidebar: () => toggleSidebar()
});

export const weatherWidgetConnector = connect(null, {
    getData: getWeatherByCityName1
});

const weatherSelector = createSelector(
    [data, isFetching, hasData, hasError, errorMessage],
    (data, isFetching, hasData, hasError, errorMessage) => ({
        data: convertToJS(data),
        isFetching,
        hasData,
        hasError,
        errorMessage
    })
);

export const weatherInfoConnector = connect(weatherSelector);
