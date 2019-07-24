const initialState = {
    isSidebarVisible: true
};

export const common = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        default:
            return state;
    }
};