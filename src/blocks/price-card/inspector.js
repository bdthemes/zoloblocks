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
    IconicBtnGroup,
} = window.zoloModule;

import objAttributes from './attributes';

import {
    SWITCHER_SPACE,
    SWITCHER_WIDTH,
    SWITCHER_HEIGHT,
    SWITCHER_BORDER_RADIUS,
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
    RIBBON_BG,
    RIBBON_PADDING,
    RIBBON_BORDER,
    RIBBON_SHADOW,
    RIBBON_RADIUS,
    SWITCHER_BG,
    SWITCHER_SHADOW,
    SWITCHER_BORDER,
    ACTIVE_SWITCHER_BG,
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
    RIBBON_TYPO,
} from './constants/typoPrefixConstant';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        preset,
        toggleStyle,
        ribbonToggle,
        ribbonText,
        ribbonColor,
        switchColor,
        activeSwitchColor,
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
        // Button Toggle
        buttonToggle,
        primaryButtonText,
        primaryButtonLink,
        secondaryButtonText,
        secondaryButtonLink,
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
        buttonSize,
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
                            {/* <ZoloSelectControl
                                label={__('Preset', 'zoloblocks')}
                                value={preset}
                                onChange={(value) => setAttributes({ preset: value })}
                                options={[
                                    { label: __('Preset 1', 'zoloblocks'), value: 'preset-one' },
                                    { label: __('Preset 2', 'zoloblocks'), value: 'preset-two' },
                                ]}
                            /> */}
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
                            {ribbonToggle && (
                                <ZoloTextControl
                                    label={__('Ribbon Text', 'zoloblocks')}
                                    value={ribbonText}
                                    onChange={(value) => setAttributes({ ribbonText: value })}
                                />
                            )}

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
                            <div className='zolo-flex-col-control'>
                                <IconicBtnGroup
                                    label={__('Button Size', 'zoloblocks')}
                                    value={attributes?.buttonSize}
                                    onChange={(value) => setAttributes({ buttonSize: value })}
                                    options={[
                                        { value: 'full-width', label: __('Full Width', 'zoloblocks') },
                                        { value: 'fit-content', label: __('Fit Content', 'zoloblocks') },
                                    ]}
                                    isDeselectable
                                />
                            </div>

                            <ZoloToggleControl
                                label={__('Different Buttons for Each Mode', 'zoloblocks')}
                                checked={buttonToggle}
                                onChange={(value) => setAttributes({ buttonToggle: value })}
                            />

                            {!buttonToggle ? (
                                <>
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
                                </>
                            ) : (
                                <>
                                    <div className="zolo-custom-heading">{__('Primary Button', 'zoloblocks')}</div>
                                    <ZoloTextControl
                                        label={__('Text', 'zoloblocks')}
                                        value={primaryButtonText}
                                        onChange={(value) => setAttributes({ primaryButtonText: value })}
                                    />
                                    <LinkControl
                                        label={__('Link', 'zoloblocks')}
                                        value={primaryButtonLink}
                                        onChange={(value) => setAttributes({ primaryButtonLink: value })}
                                    />

                                    <div className="zolo-custom-heading">{__('Secondary Button', 'zoloblocks')}</div>
                                    <ZoloTextControl
                                        label={__('Text', 'zoloblocks')}
                                        value={secondaryButtonText}
                                        onChange={(value) => setAttributes({ secondaryButtonText: value })}
                                    />
                                    <LinkControl
                                        label={__('Link', 'zoloblocks')}
                                        value={secondaryButtonLink}
                                        onChange={(value) => setAttributes({ secondaryButtonLink: value })}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Switcher', 'zoloblocks')} panelProps={requiredProps} firstOpen={true}>
                            <TabPanelControl
                                options={[
                                    {
                                        value: 'normal',
                                        label: __('Switch', 'zoloblocks'),
                                    },
                                    {
                                        value: 'hover',
                                        label: __('Label', 'zoloblocks'),
                                    },
                                ]}
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Knob Color', 'zoloblocks')}
                                            color={switchColor}
                                            onChange={(value) => setAttributes({ switchColor: value })}
                                        />

                                        <NormalBGControl
                                            label={__('Background', 'zoloblocks')}
                                            controlName={SWITCHER_BG}
                                            requiredProps={requiredProps}
                                            noMainBGImg={true}
                                        />

                                        <ResRangeControl
                                            label={__('Width', 'zoloblocks')}
                                            controlName={SWITCHER_WIDTH}
                                            requiredProps={requiredProps}
                                            min={30}
                                            max={100}
                                            units={['px', '%']}
                                        />
                                        <ResRangeControl
                                            label={__('Height', 'zoloblocks')}
                                            controlName={SWITCHER_HEIGHT}
                                            requiredProps={requiredProps}
                                            min={20}
                                            max={100}
                                            units={['px']}
                                        />

                                        <ZoloCardDivider />

                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={SWITCHER_BORDER}
                                            requiredProps={requiredProps}
                                        />

                                        <BoxShadowControl
                                            label={__('Box Shadow', 'zoloblocks')}
                                            controlName={SWITCHER_SHADOW}
                                            requiredProps={requiredProps}
                                        />

                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={SWITCHER_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>



                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Card', 'zoloblocks')} panelProps={requiredProps}>
                            <NormalBGControl
                                label={__('Background', 'zoloblocks')}
                                controlName={CARD_BG}
                                requiredProps={requiredProps}
                                noMainBGImg={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={CARD_PADDING}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={CARD_MARGIN}
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
                                            noMainBGImg={true}
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
                                            noMainBGImg={true}
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
                        {ribbonToggle && (
                            <ZoloPanelBody title={__('Ribbon', 'zoloblocks')} panelProps={requiredProps}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={ribbonColor}
                                    onChange={(value) => setAttributes({ ribbonColor: value })}
                                />
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={RIBBON_TYPO}
                                    requiredProps={requiredProps}
                                />
                                <ZoloCardDivider />
                                <NormalBGControl
                                    label={__('Background', 'zoloblocks')}
                                    controlName={RIBBON_BG}
                                    requiredProps={requiredProps}
                                    noMainBGImg={true}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={RIBBON_PADDING}
                                    requiredProps={requiredProps}
                                />
                                <ZoloCardDivider />
                                <BorderControl
                                    label={__('Border', 'zoloblocks')}
                                    controlName={RIBBON_BORDER}
                                    requiredProps={requiredProps}
                                />
                                <BoxShadowControl
                                    label={__('Box Shadow', 'zoloblocks')}
                                    controlName={RIBBON_SHADOW}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={RIBBON_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                            </ZoloPanelBody>
                        )}
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
