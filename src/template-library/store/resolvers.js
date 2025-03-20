import { setCategories, setRecords, setTags, syncDemos } from './actions';
import { fetchCategories, fetchRecords, fetchTags } from '../utils';

export function getRecords(query, type) {
    return async ({dispatch}) => {
        try {
            const data = await fetchRecords(query, type);
            dispatch(setRecords(data, query, type));
        } catch (error) {
            console.error(error);
            dispatch(setRecords([], query, type));
        }
    }
}

export function getCategories(type) {
    return async ({dispatch}) => {
        try {
            const data = await fetchCategories(type);
            dispatch(setCategories(data, type));
        } catch (error) {
            console.error(error);
            dispatch(setCategories([], type));
        }
    }
}

export function getTags(type) {
    return async ({dispatch}) => {
        try {
            const data = await fetchTags(type);
            dispatch(setTags(data, type));
        } catch (error) {
            console.error(error);
            dispatch(setTags([], type));
        }
    }
}

export function syncDemos(type) {
     return async ({ dispatch }) => {
         try {
             const data = await fetchRecords({}, type);
             dispatch(syncDemos(data, type));
             dispatch(syncDemos(data, type));
         } catch (error) {
             console.error(error);
             dispatch(syncDemos([], type));
         }
     };
}