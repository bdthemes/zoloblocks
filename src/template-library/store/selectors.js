import { getNormalizedParams } from "../utils";

export const getActiveTab = (state) => {
    return state?.activeTab;
}
export const getFilters = (state) => {
    return state?.filters;
}

export const getCategories = (state, paramKey) => {
    return state?.categories?.[paramKey];
}

export const getTags = (state, paramKey) => {
    return state?.tags?.[paramKey];
}

export const getRecords = (state, params, type) => {
    let hashParams = {
        [type]: getNormalizedParams(params)
    }
    let hash = JSON.stringify(hashParams);
    return state?.records?.[hash];
}
