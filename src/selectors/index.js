import { createSelector } from 'reselect'

export const weather = createSelector(
    state => state.weather,
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
