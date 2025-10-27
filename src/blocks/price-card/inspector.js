/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */

const {
    ZoloToggleControl,
    ZoloCardDivider,
    ZoloTextControl,
    ResRangeControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TypographyDropdown,
    ZoloIconPicker,
    BoxShadowControl,
    HeaderTabs,
    NormalBGControl,
    AdvancedOptions,
    ResAlignmentControl,
    ZoloPanelBody,
    TabPanelControl,
    LinkControl,
    IconicBtnGroup,
    ZoloSelectControl,
} = window.zoloModule;

import objAttributes from './attributes';

import { PRICE_CART, PRICE_CART_ALIGN } from './constants';

import {} from './constants/typoPrefixConstant';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        preset,
        ribbonToggle,
        buttonToggle,
        primaryTitle,
        secondaryTitle,
        // Primary
        primaryPriceTitle,
        primaryPrefix,
        primaryPrice,
        primarySuffix,
        primaryShowOriginalPrice,
        primaryOriginalPrice,
        primaryDescription,
        // Secondary
        secondaryPriceTitle,
        secondaryPrefix,
        secondaryPrice,
        secondarySuffix,
        secondaryShowOriginalPrice,
        secondaryOriginalPrice,
        secondaryDescription,
        // Common Button
        buttonText,
        buttonLink,
    } = attributes;

    const requiredProps = {
        resMode,
        attributes,
        setAttributes,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/price-cart"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={requiredProps} firstOpen={true}>
                            <ZoloSelectControl
                                label={__('Preset', 'zoloblocks')}
                                value={preset}
                                onChange={(value) => setAttributes({ preset: value })}
                                options={[
                                    { label: __('Preset 1', 'zoloblocks'), value: 'preset1' },
                                    { label: __('Preset 2', 'zoloblocks'), value: 'preset2' },
                                ]}
                            />
                            <div className="zolo-custom-heading">{__('Show/hide Elements', 'zoloblocks')}</div>
                            <ZoloToggleControl
                                label={__('Ribbon', 'zoloblocks')}
                                checked={ribbonToggle}
                                onChange={(value) => setAttributes({ ribbonToggle: value })}
                            />

                            <ResAlignmentControl
                                label={__('Alignment', 'zoloblocks')}
                                controlName={PRICE_CART_ALIGN}
                                requiredProps={requiredProps}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Primary', 'zoloblocks')} panelProps={requiredProps}>
                            <ZoloTextControl
                                label={__('Title', 'zoloblocks')}
                                value={primaryTitle}
                                onChange={(value) => setAttributes({ primaryTitle: value })}
                            />
                            <ZoloTextControl
                                label={__('Price Title', 'zoloblocks')}
                                value={primaryPriceTitle}
                                onChange={(value) => setAttributes({ primaryPriceTitle: value })}
                            />
                            <ZoloTextControl
                                label={__('Prefix', 'zoloblocks')}
                                value={primaryPrefix}
                                onChange={(value) => setAttributes({ primaryPrefix: value })}
                            />
                            <ZoloTextControl
                                label={__('Price', 'zoloblocks')}
                                value={primaryPrice}
                                onChange={(value) => setAttributes({ primaryPrice: value })}
                            />
                            <ZoloTextControl
                                label={__('Suffix', 'zoloblocks')}
                                value={primarySuffix}
                                onChange={(value) => setAttributes({ primarySuffix: value })}
                            />
                            <ZoloToggleControl
                                label={__('Original Price', 'zoloblocks')}
                                checked={primaryShowOriginalPrice}
                                onChange={(value) => setAttributes({ primaryShowOriginalPrice: value })}
                            />
                            {primaryShowOriginalPrice && (
                                <ZoloTextControl
                                    label={__('Original Price', 'zoloblocks')}
                                    value={primaryOriginalPrice}
                                    onChange={(value) => setAttributes({ primaryOriginalPrice: value })}
                                />
                            )}
                            <ZoloTextControl
                                label={__('Description', 'zoloblocks')}
                                value={primaryDescription}
                                onChange={(value) => setAttributes({ primaryDescription: value })}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Secondary', 'zoloblocks')} panelProps={requiredProps}>
                            <ZoloTextControl
                                label={__('Title', 'zoloblocks')}
                                value={secondaryTitle}
                                onChange={(value) => setAttributes({ secondaryTitle: value })}
                            />
                            <ZoloTextControl
                                label={__('Price Title', 'zoloblocks')}
                                value={secondaryPriceTitle}
                                onChange={(value) => setAttributes({ secondaryPriceTitle: value })}
                            />
                            <ZoloTextControl
                                label={__('Prefix', 'zoloblocks')}
                                value={secondaryPrefix}
                                onChange={(value) => setAttributes({ secondaryPrefix: value })}
                            />
                            <ZoloTextControl
                                label={__('Price', 'zoloblocks')}
                                value={secondaryPrice}
                                onChange={(value) => setAttributes({ secondaryPrice: value })}
                            />
                            <ZoloTextControl
                                label={__('Suffix', 'zoloblocks')}
                                value={secondarySuffix}
                                onChange={(value) => setAttributes({ secondarySuffix: value })}
                            />
                            <ZoloToggleControl
                                label={__('Original Price', 'zoloblocks')}
                                checked={secondaryShowOriginalPrice}
                                onChange={(value) => setAttributes({ secondaryShowOriginalPrice: value })}
                            />
                            {secondaryShowOriginalPrice && (
                                <ZoloTextControl
                                    label={__('Original Price', 'zoloblocks')}
                                    value={secondaryOriginalPrice}
                                    onChange={(value) => setAttributes({ secondaryOriginalPrice: value })}
                                />
                            )}
                            <ZoloTextControl
                                label={__('Description', 'zoloblocks')}
                                value={secondaryDescription}
                                onChange={(value) => setAttributes({ secondaryDescription: value })}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Button', 'zoloblocks')} panelProps={requiredProps}>
                            <ZoloTextControl
                                label={__('Text', 'zoloblocks')}
                                value={buttonText}
                                onChange={(value) => setAttributes({ buttonText: value })}
                            />
                            <LinkControl
                                label={__('Link', 'zoloblocks')}
                                value={buttonLink}
                                onChange={(value) => setAttributes({ buttonLink: value })}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={<></>}
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/price-cart"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
