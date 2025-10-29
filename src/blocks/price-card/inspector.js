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
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TypographyDropdown,
    BoxShadowControl,
    HeaderTabs,
    NormalBGControl,
    AdvancedOptions,
    ResAlignmentControl,
    ZoloPanelBody,
    LinkControl,
    ZoloSelectControl,
    TabPanelControl,
    ResRangeControl,
} = window.zoloModule;

import objAttributes from './attributes';

import {
    SWITCH_SPACE,
    SWITCH_WIDTH,
    SWITCH_HEIGHT,
    PRICE_CART_ALIGN,
    TOGGLE_STYLE,
    CARD_BG,
    CARD_MARGIN,
    CARD_PADDING,
    CARD_BORDER,
    CARD_SHADOW,
    CARD_RADIUS,
    BUTTON_BG,
    BUTTON_PADDING,
    BUTTON_BORDER,
    BUTTON_SHADOW,
    BUTTON_RADIUS,
    HOVER_BUTTON_BG,
    HOVER_BUTTON_SHADOW,
} from './constants';

import {
    PRIMARY_TOOGLE_TYPO,
    PRIMARY_BEFORE_TYPO,
    PRIMARY_PREFIX_TYPO,
    PRIMARY_PRICE_TYPO,
    PRIMARY_SUFFIX_TYPO,
    PRIMARY_DES_TYPO,
    PRIMARY_ORIGINAL_PRICE_TYPO,
    PRIMARY_FOOTER_TYPO,
    BUTTON_TYPO,
} from './constants/typoPrefixConstant';

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
        //Primary
        primaryToggleTextColor,
        primaryBeforeTitleColor,
        primaryPrefixColor,
        primaryPriceColor,
        primarySuffixColor,
        primaryDescriptionColor,
        primaryOriginalPriceColor,
        primaryFooterTextColor,
        //Button
        buttonColor,
        hoverButtonColor,
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
                                label={__('Switch Style', 'zoloblocks')}
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
                        <ZoloPanelBody title={__('Switch', 'zoloblocks')} panelProps={requiredProps} firstOpen={true}>
                            <ResRangeControl
                                label={__('Width', 'zoloblocks')}
                                controlName={SWITCH_WIDTH}
                                requiredProps={requiredProps}
                                max={100}
                            />
                            <ResRangeControl
                                label={__('Height', 'zoloblocks')}
                                controlName={SWITCH_HEIGHT}
                                requiredProps={requiredProps}
                                max={100}
                            />
                            <ResRangeControl
                                label={__('Space Between', 'zoloblocks')}
                                controlName={SWITCH_SPACE}
                                requiredProps={requiredProps}
                                max={100}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Card', 'zoloblocks')} panelProps={requiredProps} firstOpen={true}>
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
                        <ZoloPanelBody title={__('Price', 'zoloblocks')} panelProps={requiredProps}>
                            <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                {__('Toggle Text', 'zoloblocks')}
                            </div>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={primaryToggleTextColor}
                                onChange={(value) => setAttributes({ primaryToggleTextColor: value })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={PRIMARY_TOOGLE_TYPO}
                                requiredProps={requiredProps}
                            />

                            <div className="zolo-custom-heading">{__('Before Title', 'zoloblocks')}</div>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={primaryBeforeTitleColor}
                                onChange={(value) => setAttributes({ primaryBeforeTitleColor: value })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={PRIMARY_BEFORE_TYPO}
                                requiredProps={requiredProps}
                            />

                            <div className="zolo-custom-heading">{__('Prefix', 'zoloblocks')}</div>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={primaryPrefixColor}
                                onChange={(value) => setAttributes({ primaryPrefixColor: value })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={PRIMARY_PREFIX_TYPO}
                                requiredProps={requiredProps}
                            />

                            <div className="zolo-custom-heading">{__('Price', 'zoloblocks')}</div>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={primaryPriceColor}
                                onChange={(value) => setAttributes({ primaryPriceColor: value })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={PRIMARY_PRICE_TYPO}
                                requiredProps={requiredProps}
                            />

                            <div className="zolo-custom-heading">{__('Suffix', 'zoloblocks')}</div>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={primarySuffixColor}
                                onChange={(value) => setAttributes({ primarySuffixColor: value })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={PRIMARY_SUFFIX_TYPO}
                                requiredProps={requiredProps}
                            />

                            <div className="zolo-custom-heading">{__('Description', 'zoloblocks')}</div>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={primaryDescriptionColor}
                                onChange={(value) => setAttributes({ primaryDescriptionColor: value })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={PRIMARY_DES_TYPO}
                                requiredProps={requiredProps}
                            />

                            {primaryOriginalPrice && (
                                <>
                                    <div className="zolo-custom-heading">{__('Original Price', 'zoloblocks')}</div>
                                    <ColorControl
                                        label={__('Color', 'zoloblocks')}
                                        color={primaryOriginalPriceColor}
                                        onChange={(value) => setAttributes({ primaryOriginalPriceColor: value })}
                                    />
                                    <TypographyDropdown
                                        label={__('Typography', 'zoloblocks')}
                                        typoPrefixConstant={PRIMARY_ORIGINAL_PRICE_TYPO}
                                        requiredProps={requiredProps}
                                    />
                                </>
                            )}

                            <div className="zolo-custom-heading">{__('Footer Text', 'zoloblocks')}</div>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={primaryFooterTextColor}
                                onChange={(value) => setAttributes({ primaryFooterTextColor: value })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={PRIMARY_FOOTER_TYPO}
                                requiredProps={requiredProps}
                            />
                        </ZoloPanelBody>

                        {/* <ZoloPanelBody title={__('Secondary', 'zoloblocks')} panelProps={requiredProps}>
                            <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                {__('Toggle Text', 'zoloblocks')}
                            </div>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={secondaryToggleTextColor}
                                onChange={(value) => setAttributes({ secondaryToggleTextColor: value })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={SECONDARY_TOOGLE_TYPO}
                                requiredProps={requiredProps}
                            />

                            <div className="zolo-custom-heading">{__('Before Title', 'zoloblocks')}</div>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={secondaryBeforeTitleColor}
                                onChange={(value) => setAttributes({ secondaryBeforeTitleColor: value })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={SECONDARY_BEFORE_TYPO}
                                requiredProps={requiredProps}
                            />

                            <div className="zolo-custom-heading">{__('Prefix', 'zoloblocks')}</div>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={secondaryPrefixColor}
                                onChange={(value) => setAttributes({ secondaryPrefixColor: value })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={SECONDARY_PREFIX_TYPO}
                                requiredProps={requiredProps}
                            />

                            <div className="zolo-custom-heading">{__('Price', 'zoloblocks')}</div>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={secondaryPriceColor}
                                onChange={(value) => setAttributes({ secondaryPriceColor: value })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={SECONDARY_PRICE_TYPO}
                                requiredProps={requiredProps}
                            />

                            <div className="zolo-custom-heading">{__('Suffix', 'zoloblocks')}</div>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={secondarySuffixColor}
                                onChange={(value) => setAttributes({ secondarySuffixColor: value })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={SECONDARY_SUFFIX_TYPO}
                                requiredProps={requiredProps}
                            />

                            <div className="zolo-custom-heading">{__('Description', 'zoloblocks')}</div>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={secondaryDescriptionColor}
                                onChange={(value) => setAttributes({ secondaryDescriptionColor: value })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={SECONDARY_DES_TYPO}
                                requiredProps={requiredProps}
                            />

                            <div className="zolo-custom-heading">{__('Footer Text', 'zoloblocks')}</div>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={secondaryFooterTextColor}
                                onChange={(value) => setAttributes({ secondaryFooterTextColor: value })}
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={SECONDARY_FOOTER_TYPO}
                                requiredProps={requiredProps}
                            />
                        </ZoloPanelBody> */}

                        <ZoloPanelBody title={__('Button', 'zoloblocks')} panelProps={requiredProps}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={buttonColor}
                                            onChange={(value) => setAttributes({ buttonColor: value })}
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={BUTTON_TYPO}
                                            requiredProps={requiredProps}
                                        />

                                        <ZoloCardDivider />

                                        <NormalBGControl
                                            label={__('Background', 'zoloblocks')}
                                            controlName={BUTTON_BG}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={BUTTON_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                        <ZoloCardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={BUTTON_BORDER}
                                            requiredProps={requiredProps}
                                        />

                                        <BoxShadowControl
                                            label={__('Box Shadow', 'zoloblocks')}
                                            controlName={BUTTON_SHADOW}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={BUTTON_RADIUS}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={hoverButtonColor}
                                            onChange={(value) => setAttributes({ hoverButtonColor: value })}
                                        />
                                        <NormalBGControl
                                            label={__('Background', 'zoloblocks')}
                                            controlName={HOVER_BUTTON_BG}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl
                                            label={__('Box Shadow', 'zoloblocks')}
                                            controlName={HOVER_BUTTON_SHADOW}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                }
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
