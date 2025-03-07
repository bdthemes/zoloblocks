import { fetchDemos, fetchDemosCategories } from './actions';
import { getDemoData, getDemoCategoriesData } from "../utils/axios";

export function getDemos() {
    return async ({ dispatch }) => {
        try {
            const data = await getDemoData();
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
