/**
 * WordPress dependencies
 */
import { useEffect, useDeferredValue, useMemo } from '@wordpress/element';

import { softMinifyCssStrings } from '../../helpers/helper';
import { applyFilters } from '@wordpress/hooks';
import useGenerateCSS from './use-generate-css';
import useGlobalStyles from './use-global-styles';

export const GlobalStyleHanlder = (props) => {
    const { attributes = {}, setAttributes, desktopAllStyle = {}, tabAllStyle = {}, mobileAllStyle = {} } = props;
    const {
        uniqueId,
        zoloStyles,
        customCss,
    } = attributes;

    const filteredDesktopAllStyle = applyFilters('zolo_desktop_all_style', desktopAllStyle, props);
    const filteredTabAllStyle = applyFilters('zolo_tab_all_style', tabAllStyle, props);
    const filteredMobileAllStyle = applyFilters('zolo_mobile_all_style', mobileAllStyle, props);
    const [ desktopGlobalStyles, tabGlobalStyles, mobileGlobalStyles ] = useGlobalStyles(attributes);
    
    const blockWriteCss = useDeferredValue(customCss ? customCss.replace(/{{ZOLO}}/g, `.${uniqueId}`) : '');
    
    
    const allStyle = useGenerateCSS([
        filteredDesktopAllStyle + desktopGlobalStyles + blockWriteCss,
        {
            Tablet: filteredTabAllStyle + tabGlobalStyles,
            Mobile: filteredMobileAllStyle + mobileGlobalStyles
        }
    ])
    const softMinifyDeskStrings = softMinifyCssStrings(filteredDesktopAllStyle + desktopGlobalStyles);
    const softMinifyTabStrings = softMinifyCssStrings(filteredTabAllStyle + tabGlobalStyles);
    const softMinifyMobStrings = softMinifyCssStrings(filteredMobileAllStyle + mobileGlobalStyles);

    const styles = useMemo(() => {
        return {
            ...(softMinifyDeskStrings && softMinifyDeskStrings !== '' ? { desktop: softMinifyDeskStrings } : {}),
            ...(softMinifyTabStrings && softMinifyTabStrings !== '' ? { tablet: softMinifyTabStrings } : {}),
            ...(softMinifyMobStrings && softMinifyMobStrings !== '' ? { mobile: softMinifyMobStrings } : {}),
            ...(blockWriteCss && blockWriteCss !== '' ? { customCss: blockWriteCss } : {}),
        };
    }, [softMinifyDeskStrings, softMinifyTabStrings, softMinifyMobStrings]);
    
    // Set All Style in "zoloStyles" Attribute
    useEffect(() => {
        if (JSON.stringify(zoloStyles) !== JSON.stringify(styles)) {
            setAttributes({
                zoloStyles: { ...styles },
            });
        }
    }, [attributes]);

    return (
        <>
            <style>{allStyle}</style>
        </>
    );
};
