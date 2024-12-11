import { createReduxStore, register } from '@wordpress/data';
import reducer from './reducer';
import * as actions from './actions';
const store = createReduxStore('zoloai/popup', {
    reducer,
    actions,
    selectors: {
        isOpen(state) {
            return state.isOpen || true;
        },
        getPrompt(state) {
            return state.prompt || '';
        },
        getContext(state) {
            return state.context || '';
        },
        getResponse(state) {
            return state.response || '';
        },
        getLanguage(state) {
            return state.language || '';
        },
        isLoading(state) {
            return state.loading || false;
        },
        getContent(state) {
            return state.content || '';
        },
        getBlockContent(state) {
            return state.blockContent || '';
        },
    },
});

register(store);
