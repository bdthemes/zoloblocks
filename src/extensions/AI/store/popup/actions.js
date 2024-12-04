
import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';
export function open() {
    return { type: 'OPEN' };
}

export function close() {
    return { type: 'CLOSE' };
}

export function toggle() {
    return { type: 'TOGGLE' };
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

export function requestAI() {
    return ({ dispatch, select }) => {

        dispatch({ type: 'REQUEST_AI_PENDING' });

        const data = { request: select.getPrompt() };

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
