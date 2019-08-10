import { createImmutableSelector } from '../helpers/selectors';

export const common = createImmutableSelector(
    state => {
        console.log('common selector');

        return state.weather // Mutable structure
    },
    weather => weather
);

export const data = createImmutableSelector(
    common,
    weather => {
        console.log('data selector');

        return weather.get('data');
    } // returns Immutable structure
);
export const hasError = createImmutableSelector(
    common,
    weather => {
        console.log('hasError selector');

        return weather.get('hasError') // returns primitive value
    }
);
export const hasData = createImmutableSelector(
    common,
    weather => {
        console.log('hasData selector');

        return weather.get('hasData') // returns primitive value
    }
);
export const errorMessage = createImmutableSelector(
    common,
    weather => {
        console.log('errorMessage selector');

        return weather.get('errorMessage') // returns primitive value
    }
);
export const isFetching = createImmutableSelector(
    common,
    weather => {
        console.log('isFetching selector');

        return weather.get('isFetching') // returns primitive value
    }
);
