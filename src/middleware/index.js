export const logger = store => next => action => {
    console.info(action.type, action.payload);
    next(action);
};
