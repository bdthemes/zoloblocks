import { FETCH_DEMOS, FETCH_DEMOS_CATEGORIES, FETCH_DEMOS_TAGS, SET_ACTIVE_TAG, SET_ACTIVE_CAT, SET_ACTIVE_TAB } from './types';

export const fetchDemos = (demos) => {
    return {
        type: FETCH_DEMOS,
        demos,
    };
};

export const fetchDemosCategories = (categories) => {
    return {
        type: FETCH_DEMOS_CATEGORIES,
        categories,
    };
}

export const fetchDemosTags = (tags) => {
    return {
        type: FETCH_DEMOS_TAGS,
        tags,
    };
}

export const setActiveTag = (activeTag) => {
    return {
        type: SET_ACTIVE_TAG,
        activeTag,
    };
}

export const setActiveCat = (activeCat) => {
    return {
        type: SET_ACTIVE_CAT,
        activeCat,
    };
}

export const setActiveTab = (activeTab) => {
    return {
        type: SET_ACTIVE_TAB,
        activeTab,
    };
}

