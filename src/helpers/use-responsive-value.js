import { useCallback } from '@wordpress/element';
import getValue from './get-responsive-value';
import createValue from './create-responsive-value';
const useResponsiveValue = (attributes) => {
    const { useDeviceType } = window.zoloModule;
    const device = useDeviceType();

    const getResponsiveValue = useCallback(
        (controlName) =>
            getValue(attributes, controlName, device),
        [attributes, device]
    );

    const createResponsiveValue = useCallback(
        (controlName, value) =>
            createValue(attributes, controlName, value, device),
        [attributes, device]
    );

    return [
        getResponsiveValue,
        createResponsiveValue
    ];
};

export default useResponsiveValue;