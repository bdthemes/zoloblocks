import { fetchDemos, fetchDemosCategories, setActiveCat } from './actions';
import { getDemoData, getDemoCategoriesData } from "../utils/axios";

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
