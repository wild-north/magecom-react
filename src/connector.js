import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
    toggleSidebar,
    getUserInfo,
    getWeatherByCityName
} from './actions';
import {
    data, isFetching, hasData,
    hasError, errorMessage
} from './selectors/weather';
import { convertToJS } from './helpers/selectors';

export const appConnector = connect(state => ({
    isSidebarVisible: state.common.isSidebarVisible
}), {
    getUserInfo
});

export const headerConnector = connect(state => ({
    isOpened: state.common.isSidebarVisible
}), {
    toggleSidebar: () => toggleSidebar()
});

export const weatherWidgetConnector = connect(null, {
    getData: getWeatherByCityName
});

const weatherSelector = createSelector(
    [data, isFetching, hasData, hasError, errorMessage],
    (data, isFetching, hasData, hasError, errorMessage) => {
        // debugger;

        return ({
            data: convertToJS(data),
            isFetching,
            hasData,
            hasError,
            errorMessage
        });
    }
);

export const weatherInfoConnector = connect(weatherSelector);
