export const logger = store => next => action => {
    console.warn(store);
    // console.warn(next);
    // console.warn(action);

    console.info(action.type, action.payload);

    next(action);
};
