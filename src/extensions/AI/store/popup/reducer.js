const initialState = {
    isOpen: false,
    prompt: '',
    response: '',
    loading: false,
    content: '',
    onConfirm: () => {},
    onCancel: () => {},
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'OPEN':
            return { ...state, isOpen: true };
        case 'CLOSE':
            return { ...state, isOpen: false };
        case 'TOGGLE':
            return { ...state, isOpen: !state.isOpen, content: action.payload.content };
        case 'SET_PROMPT':
            return { ...state, prompt: action.prompt };
        case 'SET_RESPONSE':
            return { ...state, response: action.response };
        case 'SET_CONTEXT':
            return { ...state, context: action.context };
        case 'REQUEST_AI_PENDING':
            return { ...state, loading: true };
        case 'REQUEST_AI_SUCCESS': {
            return {
                ...state,
                loading: false,
                response: action.payload || '',
            };
        }
        case 'REQUEST_AI_ERROR':
            return {
                ...state,
                loading: false,
                response: action.payload || '',
            };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

export default reducer;
