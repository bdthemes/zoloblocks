import { useSelect } from '@wordpress/data';
import { store as editorStore } from '@wordpress/editor';

const useDeviceType = () => {
    const { deviceType } = useSelect((select) => {
        return {
            deviceType: select(editorStore).getDeviceType(),
        };
    }, []);

    return deviceType || 'Desktop';
}

export default useDeviceType;