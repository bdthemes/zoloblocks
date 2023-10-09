/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import {
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl,
    TextareaControl,
    Button,
    ButtonGroup,
    BaseControl,
    TabPanel,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import BackgroundControl from '../../controls/background-control';
import ResDimensionsControl from '../../controls/dimensions-control';
import BorderControl from '../../controls/border-control';
import BoxShadowControl from '../../controls/boxshadow-control';

export const AdvancedOptions = (props) => {
    const { attributes, setAttributes, requiredProps } = props;

    const { uniqueId, customCss, responsiveness, parentClasses, customClass, zoloStyles, globalConfig } = attributes;

    const handleResponsiveness = (key, value, classname) => {
        let updatedClasses = [...parentClasses, classname];
        //remove class is value is false
        if (value === false) {
            updatedClasses = updatedClasses.filter(function (e) {
                return e !== classname;
            });
        }
        const uniqueClasses = [...new Set(updatedClasses)];
        setAttributes({
            responsiveness: {
                ...responsiveness,
                [key]: value,
            },
            parentClasses: [...uniqueClasses],
        });
    };

    const handleCustomClass = (classname) => {
        const updatedClasses = parentClasses.filter(function (e) {
            return e !== customClass;
        });
        setAttributes({
            customClass: classname,
            parentClasses: [...updatedClasses, classname],
        });
    };

    return (
        <>
            <PanelBody title={__('Spacing', 'zolo-blocks')} initialOpen={false}>
                {globalConfig?.margin && (
                    <ResDimensionsControl
                        label={__('Margin', 'zolo-blocks')}
                        controlName={globalConfig.margin.prefix || 'mainMargin'}
                        requiredProps={requiredProps}
                        forBorderRadius={false}
                    />
                )}
                {globalConfig?.padding && (
                    <ResDimensionsControl
                        label={__('Padding', 'zolo-blocks')}
                        controlName={globalConfig.padding.prefix || 'mainPadding'}
                        requiredProps={requiredProps}
                        forBorderRadius={false}
                    />
                )}
            </PanelBody>
            {globalConfig?.background && (
                <PanelBody title={__('Background', 'zolo-blocks')} initialOpen={false}>
                    <BackgroundControl controlName={globalConfig.background.prefix || 'mainBg'} requiredProps={requiredProps} />
                </PanelBody>
            )}
            {(globalConfig?.border || globalConfig?.borderRadius || globalConfig?.boxShadow) && (
                <PanelBody title={__('Border', 'zolo-blocks')} initialOpen={false}>
                    {globalConfig?.border && (
                        <BorderControl
                            label={__('Border', 'zolo-blocks')}
                            controlName={globalConfig.border.prefix || 'mainBorder'}
                            requiredProps={requiredProps}
                            forBorderRadius={false}
                        />
                    )}

                    {globalConfig?.borderRadius && (
                        <ResDimensionsControl
                            label={__('Border Radius', 'zolo-blocks')}
                            controlName={globalConfig.borderRadius.prefix || 'mainBorderRadius'}
                            requiredProps={requiredProps}
                            forBorderRadius={true}
                        />
                    )}
                    {globalConfig?.boxShadow && (
                        <BoxShadowControl
                            controlName={globalConfig.boxShadow.prefix || 'mainBoxShadow'}
                            requiredProps={requiredProps}
                            forBorderRadius={false}
                        />
                    )}
                </PanelBody>
            )}

            {globalConfig?.responsiveControls && (
                <>
                    <PanelBody title={__('Responsive Control', 'zolo-blocks')} initialOpen={false}>
                        <ToggleControl
                            label={__('Hide on Desktop', 'zolo-blocks')}
                            checked={responsiveness?.hideDesktop || false}
                            onChange={() => handleResponsiveness('hideDesktop', !responsiveness.hideDesktop, 'zolo-hide-desktop')}
                        />
                        <ToggleControl
                            label={__('Hide on Tab', 'zolo-blocks')}
                            checked={responsiveness?.hideTab || false}
                            onChange={() => handleResponsiveness('hideTab', !responsiveness.hideTab, 'zolo-hide-tab')}
                        />
                        <ToggleControl
                            label={__('Hide on Mobile', 'zolo-blocks')}
                            checked={responsiveness?.hideMobile || false}
                            onChange={() => handleResponsiveness('hideMobile', !responsiveness.hideMobile, 'zolo-hide-mobile')}
                        />
                    </PanelBody>
                </>
            )}
            <PanelBody title={__('Custom Class', 'zolo-blocks')} initialOpen={false}>
                <TextControl
                    label={__('Add Custom Class', 'zolo-blocks')}
                    onChange={(value) => handleCustomClass(value)}
                    value={customClass}
                    help={__('Add custom class(es) to the block. Separate multiple classes with a space.', 'zolo-blocks')}
                />
            </PanelBody>
        </>
    );
};
