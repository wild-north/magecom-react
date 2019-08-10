import { createStore, applyMiddleware, compose } from 'redux';
import { reducer } from './reducers';
// import { logger } from './middleware';
import { async } from './middleware/async';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewareList = [
    async
];


export function initStore(preloadedState) {
    return createStore(
        reducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware( ...middlewareList )
        )
    );
}

// export function initStore(preloadedState) {
//     return createStore(reducer, preloadedState);
// }