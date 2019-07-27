const initialState = {
    isFetching: false
};

export const meta = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'AAA':
            return { ...state,  }
        default:
            return state;
    }
};

function doSmth() {
    ////
}