import {FETCH_DEMOS } from './types';

const DEFAULT_STATE = {
    demos: [],
};

const reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case FETCH_DEMOS:
            return { ...state, demos: action.demos };

        default:
            return state;
    }
};

export default reducer;