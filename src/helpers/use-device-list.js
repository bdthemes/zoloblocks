import { useMemo } from '@wordpress/element';
const useDeviceList = () => {
    const { defaultDeviceList } = window.zoloModule;
    return useMemo(() => {
        return defaultDeviceList;
    }, [defaultDeviceList]);
}

export default useDeviceList;