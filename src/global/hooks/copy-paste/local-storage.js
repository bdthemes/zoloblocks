const getZoloEditorLocalStorage = (key = false) => {
    if (!window.localStorage) {
        return null;
    }

    if (!key) {
        return localStorage;
    }

    const zoloSettingState = localStorage.getItem(key);

    if (zoloSettingState) {
        return JSON.parse(zoloSettingState);
    }

    return null;
};

export default getZoloEditorLocalStorage;
