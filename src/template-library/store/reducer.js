import {FETCH_DEMOS, FETCH_DEMOS_CATEGORIES, FETCH_DEMOS_TAGS} from './types';

const DEFAULT_STATE = {
    demos: [],
    categories: [],
    tags: [],
    activeTag: '',
    activeCat: '',
    activeTab: 'demos',
};

const reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case FETCH_DEMOS:
            return { ...state, demos: action.demos };
        case FETCH_DEMOS_CATEGORIES:
            return { ...state, categories: action.categories };
        case FETCH_DEMOS_TAGS:
            return { ...state, tags: action.tags };

        default:
            return state;
    }
};

export default reducer;
