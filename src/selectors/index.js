import { createSelector } from 'reselect'

export const weather = createSelector(
    state => state.get('weather'),
    weather => weather
);

export const data = createSelector(
    weather,
    weather => weather.data
);
export const hasError = createSelector(
    weather,
    weather => weather.hasError
);
export const hasData = createSelector(
    weather,
    weather => weather.hasData
);
export const errorMessage = createSelector(
    weather,
    weather => weather.errorMessage
);
export const isFetching = createSelector(
    weather,
    weather => weather.isFetching
);
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

export const common = createSelector(
    state => state.get('common'),
    common => common
);

export const isSidebarVisible = createSelector(
    common => common.get('isSidebarVisible'),
    isSidebarVisible => isSidebarVisible
);

//////////////////////////////////////////////////