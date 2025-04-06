import { getNormalizedParams } from "../utils";
import { SET_CATEGORIES, SET_RECORDS, SET_TAGS, SET_FILTERS, SET_ACTIVE_TAB } from "./types";


const DEFAULT_STATE = {
    activeTab: 'demos',
    filter: {},
    categories: {},
    tags: [],
    records: [],
};

const reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_ACTIVE_TAB:
            return { ...state, activeTab: action.activeTab };
        case SET_FILTERS:
            return { ...state, filters: action.filters };
        case SET_CATEGORIES:
            return {
                ...state, categories: {
                    ...state.categories,
                    [action.paramKey]: action.categories
                }
            };
        case SET_TAGS:
            return {
                ...state, tags: {
                    ...state.tags,
                    [action.paramKey]: action.tags
                }
            };
        case SET_RECORDS:
            let params = {
                [action.filterType]: getNormalizedParams(action.params)
            }
            let hash = JSON.stringify(params);

            const existingRecords = state.records[hash] || [];

            return {
                ...state,
                records: {
                    ...state.records,
                    [hash]: [...existingRecords, ...action.records],
                },
            };
        default:
            return state;
    }
};

export default reducer;
