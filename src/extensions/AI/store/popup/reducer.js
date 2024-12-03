
function reducer (state = { isOpen: false }, action) {
    switch (action.type) {
        case 'OPEN':
            return { isOpen: true };
        case 'CLOSE':
            return { isOpen: false };
        case 'TOGGLE':
            return { isOpen: !state.isOpen };
        case 'RESET':
            return { isOpen: false };
        case 'SET_PROMPT':
            return {
                isOpen: true,
                prompt: action.prompt,
                onConfirm: action.onConfirm,
                onCancel: action.onCancel,
            };

        default:
            return state;
    }
};

export default reducer;