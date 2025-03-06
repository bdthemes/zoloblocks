import { fetchDemos } from "./actions";
import { getDemoData } from "../utils/axios";

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
