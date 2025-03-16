import { SET_ACTIVE_TAB, SET_CATEGORIES, SET_FILTERS, SET_RECORDS, SET_TAGS } from "./types";


export const setActiveTab = (activeTab) => {
    return {
        type: SET_ACTIVE_TAB,
        activeTab
    };
}

export const setFilters = (filters) => {
    return {
        type: SET_FILTERS,
        filters
    };
}

export const setCategories = (categories, paramKey) => {
    return {
        type: SET_CATEGORIES,
        categories,
        paramKey
    };
}

export const setTags = (tags, paramKey) => {
    return {
        type: SET_TAGS,
        tags,
        paramKey
    };
}

export const setRecords = (records, params, filterType) => {
    return {
        type: SET_RECORDS,
        records,
        params,
        filterType
    };
}
