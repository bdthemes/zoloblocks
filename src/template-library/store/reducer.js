import { SET_CATEGORIES, SET_RECORDS, SET_TAGS, SET_FILTERS, SET_ACTIVE_TAB, SYNC_DEMOS } from "./types";


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
            return { ...state, categories: {
                ...state.categories,
                [action.paramKey]: action.categories
            } };
        case SET_TAGS:
            return { ...state, tags: {
                ...state.tags,
                [action.paramKey]: action.tags
            }};
        case SET_RECORDS:
            let params = {
                [action.filterType]: action?.params
            }
            let hash = JSON.stringify(params);

            return { ...state, records: {
                ...state.records,
                [hash]: action.records
            }};
        case SYNC_DEMOS:
            let syncParams = {
                [action.filterType]: action?.params
            }
            let syncHash = JSON.stringify(syncParams);

            return { ...state, records: {
                [syncHash]: action.records
            }};
        default:
            return state;
    }
};

export default reducer;
