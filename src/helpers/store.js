let storeInstance = null;

export const setStoreInstance = store => {
    if (storeInstance) {
        throw new Error('Store has already defined');
    }

    storeInstance = store;
};

export const getStoreInstance = () => {
    if (!storeInstance) {
        throw new Error('Store is not defined');
    }

    return storeInstance;
};

export const dispatchAction = action => getStoreInstance().dispatch(action);
