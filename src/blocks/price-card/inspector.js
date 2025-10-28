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
    TextShadowControl,
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

import {
    PRICE_CART,
    PRICE_CART_ALIGN,
    TOGGLE_STYLE,
    CARD_BG,
    CARD_MARGIN,
    CARD_PADDING,
    CARD_BORDER,
    CARD_SHADOW,
    CARD_RADIUS,
    PRIMARY_TEXT_BG,
    PRIMARY_TEXT_PADDING,
    PRIMARY_TEXT_MARGIN,
    PRIMARY_TEXT_BORDER,
    PRIMARY_TEXT_RADIUS,
    PRIMARY_TEXT_SHADOW,
    SECONDARY_TEXT_BG,
    SECONDARY_TEXT_PADDING,
    SECONDARY_TEXT_MARGIN,
    SECONDARY_TEXT_BORDER,
    SECONDARY_TEXT_RADIUS,
    SECONDARY_TEXT_SHADOW,
    PRIMARY_TITLE_BG,
    PRIMARY_TITLE_PADDING,
    PRIMARY_TITLE_MARGIN,
    PRIMARY_TITLE_BORDER,
    PRIMARY_TITLE_RADIUS,
    PRIMARY_TITLE_SHADOW,
    SECONDARY_TITLE_BG,
    SECONDARY_TITLE_PADDING,
    SECONDARY_TITLE_MARGIN,
    SECONDARY_TITLE_BORDER,
    SECONDARY_TITLE_RADIUS,
    SECONDARY_TITLE_SHADOW,
} from './constants';

import { PRIMARY_TEXT_TYPO, SECONDARY_TEXT_TYPO, PRIMARY_TITLE_TYPO, SECONDARY_TITLE_TYPO } from './constants/typoPrefixConstant';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        preset,
        toggleStyle,
        ribbonToggle,
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
        primaryFooterText,
        secondaryFooterText,
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
                            <ZoloSelectControl
                                label={__('Toggle Style', 'zoloblocks')}
                                value={toggleStyle}
                                onChange={(value) => setAttributes({ toggleStyle: value })}
                                options={TOGGLE_STYLE}
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
                                label={__('Toggle Text', 'zoloblocks')}
                                value={primaryTitle}
                                onChange={(value) => setAttributes({ primaryTitle: value })}
                            />
                            <ZoloTextControl
                                label={__('Before Title', 'zoloblocks')}
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
                            <ZoloTextControl
                                label={__('Description', 'zoloblocks')}
                                value={primaryDescription}
                                onChange={(value) => setAttributes({ primaryDescription: value })}
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
                                label={__('Footer Text', 'zoloblocks')}
                                value={primaryFooterText}
                                onChange={(value) => setAttributes({ primaryFooterText: value })}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Secondary', 'zoloblocks')} panelProps={requiredProps}>
                            <ZoloTextControl
                                label={__('Toggle Text', 'zoloblocks')}
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
                            <ZoloTextControl
                                label={__('Description', 'zoloblocks')}
                                value={secondaryDescription}
                                onChange={(value) => setAttributes({ secondaryDescription: value })}
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
                                label={__('Footer Text', 'zoloblocks')}
                                value={secondaryFooterText}
                                onChange={(value) => setAttributes({ secondaryFooterText: value })}
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
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Card', 'zoloblocks')} panelProps={requiredProps}>
                            <NormalBGControl label={__('Background', 'zoloblocks')} controlName={CARD_BG} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={CARD_MARGIN}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={CARD_PADDING}
                                requiredProps={requiredProps}
                            />
                            <ZoloCardDivider />
                            <BorderControl label={__('Border', 'zoloblocks')} controlName={CARD_BORDER} requiredProps={requiredProps} />
                            <BoxShadowControl
                                label={__('Box Shadow', 'zoloblocks')}
                                controlName={CARD_SHADOW}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={CARD_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                        </ZoloPanelBody>
                    </>
                }
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
