import { fetchDemos, fetchDemosCategories, fetchPatterns, fetchPatternsCategories, fetchDemosTags } from './actions';
import { getDemoData, getDemoCategoriesData, getPatternsData, getPatternsCategoriesData, getDemosTagsData } from '../utils/axios';

export function getDemos(props) {
    return async ({ dispatch }) => {

        try {
            const data = await getDemoData(props);
            dispatch(fetchDemos(data));
        } catch (error) {
            console.error(error);
        }
    };
}

export function getDemosCategories(state) {
    return async ({dispatch}) => {
        try {
            const data = await getDemoCategoriesData();
            dispatch(fetchDemosCategories(data));
        } catch (error) {
            console.error(error);
        }
    }
}

export function getDemosTags(state) {
    return async ({ dispatch }) => {
        try {
            const data = await getDemosTagsData();
            dispatch(fetchDemosTags(data));
        } catch (error) {
            console.error(error);
        }
    };
}

export function getPatterns(props) {
    return async ({ dispatch }) => {
        try {
            const data = await getPatternsData(props);
            dispatch(fetchPatterns(data));
        } catch (error) {
            console.error(error);
        }
    };
}

export function getPatternsCategories(state) {
    return async ({ dispatch }) => {
        try {
            const data = await getPatternsCategoriesData();
            dispatch(fetchPatternsCategories(data));
        } catch (error) {
            console.error(error);
        }
    };
}
