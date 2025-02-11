import { useSelect } from '@wordpress/data';
const useDeviceType = () => {
    const { deviceType } = useSelect((select) => {
        return {
            deviceType: select('core/editor').getDeviceType(),
        };
    }, []);

    return deviceType || 'Desktop';
}

export default useDeviceType;