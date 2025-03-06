import { FETCH_DEMOS } from './types';

export const fetchDemos = (demos) => {
    return {
        type: FETCH_DEMOS,
        demos,
    };
};