import { useSelect } from '@wordpress/data';
const useDeviceType = () => {
    const { deviceType } = useSelect((select) => {
        return {
            deviceType: select(editorStore).getDeviceType(),
        };
    }, []);

    return deviceType || 'Desktop';
}

export default useDeviceType;