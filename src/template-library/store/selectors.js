export const getDemos = (state) => {
    return state.demos;
};
export const getPatterns = (state) => {
    return state.patterns;
};
export const getDemosCategories = (state) => {
    return state.categories;
};
export const getPatternsCategories = (state) => {
    return state.patternsCategories;
};
export const getDemosTags = (state) => {
    return state.tags;
};
export const getDemosActiveTag = (state) => {
    return state.activeTag;
};
export const getDemosActiveCat = (state) => {
    return state.activeCat;
};
export const getActiveTab = (state) => {
    return state.activeTab;
};
export const getDemosNumber = (state) => {
    return state.number;
};
export const getReset = (state) => {
    return state.reset;
};

export const getPackageType = (state) => {
    return state.packageType || '';
};

export const getSearchQuery = (state) => {
    return state.search;
};

export const getLoading = (state) => {
    return state.loading;
};

export const getError = (state) => {
    return state.error;
};
