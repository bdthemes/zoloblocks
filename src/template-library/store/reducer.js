import {FETCH_DEMOS, FETCH_DEMOS_CATEGORIES, FETCH_DEMOS_TAGS , SET_ACTIVE_TAG, SET_ACTIVE_CAT, SET_ACTIVE_TAB} from './types';

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
        case SET_ACTIVE_CAT:
            return { ...state, activeCat: action.activeCat };
        case SET_ACTIVE_TAG:
            return { ...state, activeTag: action.activeTag };
        case SET_ACTIVE_TAB:
            return { ...state, activeTab: action.activeTab
        };
        default:
            return state;
    }
};

export default reducer;
