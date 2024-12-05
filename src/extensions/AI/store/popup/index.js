import { createReduxStore, register } from '@wordpress/data';
import  reducer from './reducer';
import * as actions from './actions';
const store = createReduxStore('zoloai/popup', {
    reducer,
    actions,
    selectors: {
        isOpen(state) {
            return state.isOpen || false;
        },
        getPrompt(state) {
            return state.prompt || '';
        },
        getResponse(state) {
            return state.response || '';
        },
        isLoading(state) {
            return state.loading || false;
        },
    },
});

register(store);
