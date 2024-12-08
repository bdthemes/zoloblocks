import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';

const getContextFromSelectedBlocks = () => {
    const { getBlock, getSelectedBlockClientIds } = wp.data.select('core/block-editor');
    const selectedBlocks = getSelectedBlockClientIds().map((clientId) => getBlock(clientId));
    let blockContent = '';
    selectedBlocks.forEach((block) => {
        blockContent += block.attributes.content;
    });
    return blockContent;
};

export function open() {
    return { type: 'OPEN' };
}

export function close() {
    return { type: 'CLOSE' };
}

export function toggle(content = '') {
    return { type: 'TOGGLE',
        payload: { content },
    };
}

export function reset() {
    return { type: 'RESET' };
}

export function setPrompt(prompt) {
    return {
        type: 'SET_PROMPT',
        prompt,
    };
}

export function setContext(context) {
    return {
        type: 'SET_CONTEXT',
        context,
    };
}
export function setLanguage(language) {
    return {
        type: 'SET_LANGUAGE',
        language,
    };
}

export function setBlockContent(blockContent) {
    return {
        type: 'SET_BLOCK_CONTENT',
        blockContent,
    };
}



export function requestAI() {
    return ({ dispatch, select }) => {
        dispatch({ type: 'REQUEST_AI_PENDING' });
        const context = select.getContext();
        const data = { request: select.getPrompt() };
        if (context === 'selected-blocks') {
            data.context = getContextFromSelectedBlocks();
            data.request = select.getBlockContent();
        }
        apiFetch({
            path: '/zolo/v1/openai',
            method: 'POST',
            data,
        })
            .then((res) => {
                dispatch({
                    type: 'REQUEST_AI_SUCCESS',
                    payload: res.response,
                });
                return res.response;
            })
            .catch((err) => {
                dispatch({
                    type: 'REQUEST_AI_ERROR',
                    payload: err?.response || err?.error_code || __('Something went wrong, please, try again…', 'zoloblocks'),
                });
            });
    };
}
