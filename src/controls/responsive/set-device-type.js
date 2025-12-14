import { dispatch } from '@wordpress/data';
import { store as editorStore } from '@wordpress/editor';

export const setDeviceType = (value) => {
    dispatch(editorStore).setDeviceType(value);
};