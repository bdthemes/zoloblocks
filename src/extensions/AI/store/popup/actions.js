// : {
//         open() {
//             return {type: 'OPEN'};
//         },
//         close() {
//             return {type: 'CLOSE'};
//         },
//         toggle() {
//             return {type: 'TOGGLE'};
//         },
//         reset() {
//             return {type: 'RESET'};
//         },
//         setPrompt(prompt) {
//             return {
//                 type: 'SET_PROMPT',
//                 prompt,
//                 onConfirm: prompt.onConfirm,
//                 onCancel: prompt.on
//             };
//         }
//     }

export function open() {
    return {type: 'OPEN'};
}

export function close() {
    return {type: 'CLOSE'};
}

export function toggle() {
    return {type: 'TOGGLE'};
}

export function reset() {
    return {type: 'RESET'};
}

export function setPrompt(prompt) {
    return {
        type: 'SET_PROMPT',
        prompt,
    };
}