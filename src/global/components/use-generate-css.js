import { useMemo } from '@wordpress/element';
import { softMinifyCssStrings } from '../../modules';

const useGenerateCSS = (rawStyles) => {
    const { useDeviceList, useDeviceType } = window.zoloModule;
    const deviceList = useDeviceList();
    const deviceType = useDeviceType();

    return useMemo(() => {
        let css = '';
        const [base, responsive] = rawStyles;

        for (let i = 0; i < deviceList.length; i++) {
            const device = deviceList[i];
            if (device?.value === 'base') {
                css += softMinifyCssStrings(base);
                
                if (deviceType === 'Desktop') {
                    break;
                }

                continue;
            }

            if (device?.value) {
                let deviceValue = device?.value;
                let slug = device?.slug;
                let direction = device?.direction || 'max';
                let styles = responsive[slug];

                if (styles){
                    css += `@media all and (${direction}-width: ${deviceValue}) { ${softMinifyCssStrings(styles)} }`;
                }

                if (slug === deviceType && deviceList[i + 1] && parseInt(deviceList[i + 1]?.value) < parseInt(deviceValue)) {
                    break;
                }
            }
        }

        return css;
    }, [rawStyles, deviceList, deviceType]);
};

export default useGenerateCSS;
