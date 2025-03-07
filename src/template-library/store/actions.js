import { FETCH_DEMOS, FETCH_DEMOS_CATEGORIES } from './types';

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

