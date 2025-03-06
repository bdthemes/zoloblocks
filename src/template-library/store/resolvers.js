import { fetchDemos } from './actions';
import axios from 'axios';

export function getDemos() {
    return async ({ dispatch }) => {
        const demos = await axios.get('https://zoloblocks.com/demo/wp-json/template-manager/v2/zolo/demos');
        dispatch(fetchDemos(demos.data));

    };
}
// export function getDemos() {