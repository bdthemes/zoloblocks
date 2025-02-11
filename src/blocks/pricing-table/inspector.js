import { memo } from '@wordpress/element';
//wrodpress dependencies
import { InspectorControls } from '@wordpress/block-editor';
import {
    BaseControl,
    CardDivider,
    __experimentalDivider as Divider,
    SelectControl,
    TextControl,
    TextareaControl,
    ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const {
    BorderControl,
    BoxShadowControl,
    ColorControl,
    ResDimensionsControl,
    TypographyDropdown,
    ResRangeControl,
    ResAlignmentControl,
    TextShadowControl,
    RangeResetControl,
    NormalBGControl,
    HeaderTabs,
    LinkControl,
    TabPanelControl,
    AdvancedOptions,
    IconicBtnGroup,
    ZoloPanelBody,
} = window.zoloModule;

//block attributes
import objAttributes from './attributes';

//block constants
import {
    BTN_BORDER,
    BTN_RADIUS,
    BTN_HOVER_BG,
    BTN_MARGIN,
    BTN_NORMAL_BG,
    BTN_PADDING,
    BTN_SHADOW,
    BTN_HOVER_SHADOW,
    CBTN_BORDER,
    CBTN_RADIUS,
    CBTN_HOVER_BG,
    CBTN_MARGIN,
    CBTN_NORMAL_BG,
    CBTN_PADDING,
    CBTN_SHADOW,
    CBTN_HOVER_SHADOW,
    DESC_MARGIN,
    ALIGNENT,
    FEATURE_DESC_MARGIN,
    FEATURE_ICON_GAP,
    FEATURE_ICON_SIZE,
    FEATURE_ITEM_GAP,
    FEATURE_MARGIN,
    FEATURE_PADDING,
    FEATURE_ICON_PADDING,
    ORGINAL_PRICE_MARGIN,
    PERIOD_MARGIN,
    PRICE_MARGIN,
    PRICE_PADDING,
    PRICE_BG,
    PRICE_BORDER,
    PRICE_BRADIUS,
    TITLE_BORDER,
    TITLE_BORDER_RADIUS,
    TITLE_MARGIN,
    TITLE_PADDING,
    TITLE_TEXT_PADDING,
    TITLE_TEXT_SHADOW,
    TITLE_BG,
    WRAPPER_BG,
    WRAPPER_BORDER,
    WRAPPER_BORDER_RADIUS,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_SHADOW,
    RIBBON_MARGIN,
    RIBBON_PADDING,
    RIBBON_BORDER,
    RIBBON_RADIUS,
    RIBBON_BG,
    RIBBON_POSITIONS,
    SEPARATOR_WIDTH,
    BTNS_POSITIONS,
    BTNS_DIRECTIONS,
    BTNS_MARGIN,
    PRESETS,
} from './constants';
import {
    BTN_TYPOGRAPHY,
    CBTN_TYPOGRAPHY,
    DESC_TYPOGRAPHY,
    FEATURE_DESC_TYPOGRAPHY,
    FEATURE_TITLE_TYPOGRAPHY,
    FEATURE_TYPOGRAPHY,
    ORGINAL_PRICE_TYPOGRAPHY,
    PERIOD_TYPOGRAPHY,
    PRICE_TYPOGRAPHY,
    RIBBON_TYPOGRAPHY,
    TITLE_TYPOGRAPHY,
} from './constants/typoPrefixConstant';

import { DEFAULT_ALIGNS, HEADING } from '../../../src/global/constants';

import Sortable from './sortable';
import { applyFilters } from '@wordpress/hooks';

const Inspector = (props) => {
    const { attributes, setAttributes } = props;
    const {
        preset,
        resMode,
        //header
        titleText,
        titleTagName,
        showDesc,
        descText,
        //price
        pricePrefix,
        price,
        priceSuffix,
        sale,
        orginalPrice,
        period,
        //features
        showFeatures,
        hideFeatureIcon,
        showFeatureHeading,
        showFeatureDesc,
        featureTitle,
        featureDesc,
        features,
        //button
        showBtn,
        buttonText,
        buttonLink,
        showChatBtn,
        chatBtnText,
        chatBtnLink,
        //ribbon
        showRibbon,
        ribbonTitle,
        ribbonPosition,
        //header style
        titleColor,
        titleBgColor,
        descColor,
        //price style
        priceColor,
        orginalPriceColor,
        periodColor,
        //feature style
        featureTitleColor,
        featureDescColor,
        featureColor,
        featureIconColor,
        featureIconBgColor,
        //button style
        btnTextColor,
        btnHoverTextColor,
        btnHoverBorderColor,
        chatBtnColor,
        chatBtnHoverColor,
        chatBtnHoverBorderColor,
        //ribbon style
        ribbonColor,
        separatorColor,
        // extra
        btnsPosition,
        btnsDirection,
    } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/pricing-table"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <SelectControl
                                label={__('Preset', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.pricingTable.presets', PRESETS)}
                                onChange={(preset) => {
                                    setAttributes({ preset });

                                    if (preset === 'style-2') {
                                        setAttributes({
                                            sale: true,
                                        });
                                    }
                                }}
                            />
                            <div className="zolo-custom-heading">{__('Show/hide Elements', 'zoloblocks')}</div>
                            <ToggleControl
                                label={__('Ribbon', 'zoloblocks')}
                                checked={showRibbon}
                                onChange={() => setAttributes({ showRibbon: !showRibbon })}
                            />
                            <ToggleControl
                                label={__('Primary Button', 'zoloblocks')}
                                checked={showBtn}
                                onChange={() => setAttributes({ showBtn: !showBtn })}
                            />
                            <ToggleControl
                                label={__('Secondary Button', 'zoloblocks')}
                                checked={showChatBtn}
                                onChange={() => setAttributes({ showChatBtn: !showChatBtn })}
                            />
                            <CardDivider />
                            <ResAlignmentControl
                                label={__('Alignment', 'zoloblocks')}
                                controlName={ALIGNENT}
                                requiredProps={requiredProps}
                                alignOptions={DEFAULT_ALIGNS}
                            />
                            {(showBtn || showChatBtn) && (
                                <>
                                    <div className="zolo-custom-heading">{__('Buttons', 'zoloblocks')}</div>
                                    <div className="zolo-flex-row-control-tab">
                                        <IconicBtnGroup
                                            label={__('Position', 'zoloblocks')}
                                            value={btnsPosition}
                                            onChange={(value) =>
                                                setAttributes({
                                                    btnsPosition: value,
                                                })
                                            }
                                            options={BTNS_POSITIONS}
                                        />
                                    </div>
                                    <div className="zolo-flex-row-control-tab">
                                        <IconicBtnGroup
                                            label={__('Direction', 'zoloblocks')}
                                            value={btnsDirection}
                                            onChange={(value) =>
                                                setAttributes({
                                                    btnsDirection: value,
                                                })
                                            }
                                            options={BTNS_DIRECTIONS}
                                        />
                                    </div>
                                </>
                            )}
                        </ZoloPanelBody>
                        {showRibbon && (
                            <ZoloPanelBody title={__('Ribbon', 'zoloblocks')} panelProps={props}>
                                <TextControl
                                    label={__('Text', 'zoloblocks')}
                                    value={ribbonTitle}
                                    onChange={(ribbonTitle) => setAttributes({ ribbonTitle })}
                                />
                                <div className="zolo-custom-heading">{__('Positions', 'zoloblocks')}</div>
                                <div className="zolo-flex-row-control-tab">
                                    <IconicBtnGroup
                                        label={__('Direction', 'zoloblocks')}
                                        value={ribbonPosition}
                                        onChange={(value) =>
                                            setAttributes({
                                                ribbonPosition: value,
                                            })
                                        }
                                        options={RIBBON_POSITIONS}
                                    />
                                </div>
                                <RangeResetControl
                                    label={__('Horizontal', 'zoloblocks')}
                                    controlName={'ribbonXPosition'}
                                    requiredProps={requiredProps}
                                    min={-150}
                                    max={150}
                                    step={1}
                                />
                                <RangeResetControl
                                    label={__('Vertical', 'zoloblocks')}
                                    controlName={'ribbonYPosition'}
                                    requiredProps={requiredProps}
                                    min={-150}
                                    max={150}
                                    step={1}
                                />

                                <RangeResetControl
                                    label={__('Rotate', 'zoloblocks')}
                                    controlName={'ribbonRotate'}
                                    requiredProps={requiredProps}
                                    min={-180}
                                    max={180}
                                    step={1}
                                />
                            </ZoloPanelBody>
                        )}

                        <ZoloPanelBody title={__('Header', 'zoloblocks')} panelProps={props}>
                            <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                {__('Title', 'zoloblocks')}
                            </div>
                            <TextControl
                                label={__('Text', 'zoloblocks')}
                                value={titleText}
                                onChange={(titleText) => setAttributes({ titleText })}
                            />
                            <SelectControl
                                label={__('Tag', 'zoloblocks')}
                                value={titleTagName}
                                options={HEADING}
                                onChange={(selected) => setAttributes({ titleTagName: selected })}
                            />

                            <div className="zolo-custom-heading">{__('Description', 'zoloblocks')}</div>
                            <ToggleControl
                                label={__('Description', 'zoloblocks')}
                                checked={showDesc}
                                onChange={(showDesc) => setAttributes({ showDesc })}
                            />

                            {showDesc && (
                                <TextareaControl
                                    className="zolo-flex-col-control"
                                    label={__('Text', 'zoloblocks')}
                                    value={descText}
                                    onChange={(descText) => setAttributes({ descText })}
                                />
                            )}
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Price', 'zoloblocks')} panelProps={props}>
                            <TextControl
                                label={__('Prefix', 'zoloblocks')}
                                value={pricePrefix}
                                onChange={(pricePrefix) => setAttributes({ pricePrefix })}
                                placeholder={__('$', 'zoloblocks')}
                            />
                            <TextControl label={__('Price', 'zoloblocks')} value={price} onChange={(price) => setAttributes({ price })} />
                            <TextControl
                                label={__('Suffix', 'zoloblocks')}
                                value={priceSuffix}
                                onChange={(priceSuffix) => setAttributes({ priceSuffix })}
                            />
                            <CardDivider />
                            <ToggleControl label={__('Sale', 'zoloblocks')} checked={sale} onChange={(sale) => setAttributes({ sale })} />

                            {sale && (
                                <TextControl
                                    label={__('Original Price', 'zoloblocks')}
                                    value={orginalPrice}
                                    onChange={(orginalPrice) => setAttributes({ orginalPrice })}
                                />
                            )}

                            <TextControl
                                label={__('Period', 'zoloblocks')}
                                value={period}
                                onChange={(period) => setAttributes({ period })}
                                help={__('Using comma indicator for multiple lines', 'zoloblocks')}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Features', 'zoloblocks')} panelProps={props}>
                            <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                {__('Show/hide Elements', 'zoloblocks')}
                            </div>
                            <ToggleControl
                                label={__('Title', 'zoloblocks')}
                                checked={showFeatureHeading}
                                onChange={() =>
                                    setAttributes({
                                        showFeatureHeading: !showFeatureHeading,
                                    })
                                }
                            />

                            {showFeatureHeading && (
                                <>
                                    <TextControl
                                        label={__('Text', 'zoloblocks')}
                                        value={featureTitle}
                                        onChange={(featureTitle) => setAttributes({ featureTitle })}
                                    />
                                    <CardDivider />
                                </>
                            )}

                            <ToggleControl
                                label={__('Description', 'zoloblocks')}
                                checked={showFeatureDesc}
                                onChange={() => setAttributes({ showFeatureDesc: !showFeatureDesc })}
                            />

                            {showFeatureDesc && (
                                <TextareaControl
                                    className="zolo-flex-col-control"
                                    label={__('Description', 'zoloblocks')}
                                    value={featureDesc}
                                    onChange={(featureDesc) => setAttributes({ featureDesc })}
                                />
                            )}
                            <div className="zolo-custom-heading">{__('List Items', 'zoloblocks')}</div>
                            <ToggleControl
                                label={__('List', 'zoloblocks')}
                                checked={showFeatures}
                                onChange={() => setAttributes({ showFeatures: !showFeatures })}
                            />
                            {showFeatures && (
                                <>
                                    <ToggleControl
                                        label={__('Hide Icon', 'zoloblocks')}
                                        checked={hideFeatureIcon}
                                        onChange={() => setAttributes({ hideFeatureIcon: !hideFeatureIcon })}
                                    />
                                    <Sortable features={features} setAttributes={setAttributes} />
                                </>
                            )}
                        </ZoloPanelBody>

                        {showBtn && (
                            <ZoloPanelBody title={__('Primary Button', 'zoloblocks')} panelProps={props}>
                                <TextControl
                                    label={__('Text', 'zoloblocks')}
                                    value={buttonText}
                                    onChange={(buttonText) => setAttributes({ buttonText })}
                                />
                                <LinkControl
                                    label={__('URL', 'zoloblocks')}
                                    value={buttonLink}
                                    onChange={(value) => setAttributes({ buttonLink: value })}
                                />
                            </ZoloPanelBody>
                        )}
                        {showChatBtn && (
                            <ZoloPanelBody title={__('Secondary Button', 'zoloblocks')} panelProps={props}>
                                <TextControl
                                    label={__('Text', 'zoloblocks')}
                                    value={chatBtnText}
                                    onChange={(chatBtnText) => setAttributes({ chatBtnText })}
                                />
                                <LinkControl
                                    label={__('URL', 'zoloblocks')}
                                    value={chatBtnLink}
                                    onChange={(value) => setAttributes({ chatBtnLink: value })}
                                />
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item Container', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <NormalBGControl requiredProps={requiredProps} controlName={WRAPPER_BG} noMainBGImg={false} />
                            <ResDimensionsControl label="Margin" controlName={WRAPPER_MARGIN} requiredProps={requiredProps} />
                            <ResDimensionsControl label="Padding" controlName={WRAPPER_PADDING} requiredProps={requiredProps} />
                            <CardDivider />
                            <BorderControl label={__('Border', 'zoloblocks')} controlName={WRAPPER_BORDER} requiredProps={requiredProps} />
                            <BoxShadowControl controlName={WRAPPER_SHADOW} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={WRAPPER_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                        </ZoloPanelBody>
                        {showRibbon && (
                            <>
                                <ZoloPanelBody title={__('Ribbon', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                    <ColorControl
                                        label={__('Color', 'zoloblocks')}
                                        color={ribbonColor}
                                        onChange={(val) =>
                                            setAttributes({
                                                ribbonColor: val,
                                            })
                                        }
                                    />
                                    <TypographyDropdown
                                        label="Typography"
                                        typoPrefixConstant={RIBBON_TYPOGRAPHY}
                                        requiredProps={requiredProps}
                                        max={72}
                                    />
                                    <CardDivider />
                                    <NormalBGControl noMainBGImg={true} controlName={RIBBON_BG} requiredProps={requiredProps} />
                                    <ResDimensionsControl
                                        label={__('Padding', 'zoloblocks')}
                                        controlName={RIBBON_PADDING}
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
                                    />
                                    <ResDimensionsControl
                                        label={__('Margin', 'zoloblocks')}
                                        controlName={RIBBON_MARGIN}
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
                                    />
                                    <CardDivider />
                                    <BorderControl
                                        label={__('Border', 'zoloblocks')}
                                        controlName={RIBBON_BORDER}
                                        requiredProps={requiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Border Radius', 'zoloblocks')}
                                        controlName={RIBBON_RADIUS}
                                        requiredProps={requiredProps}
                                        forBorderRadius={true}
                                    />
                                </ZoloPanelBody>
                            </>
                        )}

                        <ZoloPanelBody title={__('Header', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={TITLE_PADDING}
                                requiredProps={requiredProps}
                            />
                            <TabPanelControl
                                options={[
                                    {
                                        value: 'normal',
                                        label: __('Title', 'zoloblocks-pro'),
                                    },
                                    ...(showDesc
                                        ? [
                                              {
                                                  value: 'hover',
                                                  label: __('Description', 'zoloblocks-pro'),
                                              },
                                          ]
                                        : []),
                                ]}
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={titleColor}
                                            onChange={(val) =>
                                                setAttributes({
                                                    titleColor: val,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={TITLE_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={72}
                                        />
                                        <TextShadowControl
                                            controlName={TITLE_TEXT_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <CardDivider />
                                        <NormalBGControl noMainBGImg={true} controlName={TITLE_BG} requiredProps={requiredProps} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={TITLE_TEXT_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={TITLE_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={TITLE_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={TITLE_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={descColor}
                                            onChange={(val) =>
                                                setAttributes({
                                                    descColor: val,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label="Typography"
                                            typoPrefixConstant={DESC_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={72}
                                        />
                                        <CardDivider />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={DESC_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Pricing', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                options={[
                                    {
                                        value: 'normal',
                                        label: __('Price', 'zoloblocks'),
                                    },
                                    ...(sale && orginalPrice
                                        ? [
                                              {
                                                  value: 'hover',
                                                  label: __('Original/P', 'zoloblocks'),
                                              },
                                          ]
                                        : []),

                                    ...(period
                                        ? [
                                              {
                                                  value: 'active',
                                                  label: __('Period', 'zoloblocks'),
                                              },
                                          ]
                                        : []),
                                ]}
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={priceColor}
                                            onChange={(val) =>
                                                setAttributes({
                                                    priceColor: val,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label="Typography"
                                            typoPrefixConstant={PRICE_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={72}
                                        />
                                        {preset === 'style-2' && (
                                            <>
                                                <CardDivider />
                                                <NormalBGControl noMainBGImg={true} controlName={PRICE_BG} requiredProps={requiredProps} />
                                                <ResDimensionsControl
                                                    label={__('Padding', 'zoloblocks')}
                                                    controlName={PRICE_PADDING}
                                                    requiredProps={requiredProps}
                                                />
                                                <ResDimensionsControl
                                                    label={__('Margin', 'zoloblocks')}
                                                    controlName={PRICE_MARGIN}
                                                    requiredProps={requiredProps}
                                                />
                                                <CardDivider />
                                                <BorderControl
                                                    label={__('Border', 'zoloblocks')}
                                                    controlName={PRICE_BORDER}
                                                    requiredProps={requiredProps}
                                                />
                                                <ResDimensionsControl
                                                    label={__('Border Radius', 'zoloblocks')}
                                                    controlName={PRICE_BRADIUS}
                                                    requiredProps={requiredProps}
                                                    forBorderRadius={true}
                                                />
                                            </>
                                        )}
                                        {preset === 'style-1' && (
                                            <>
                                                <CardDivider />
                                                <ResDimensionsControl
                                                    label={__('Margin', 'zoloblocks')}
                                                    controlName={PRICE_MARGIN}
                                                    requiredProps={requiredProps}
                                                />
                                            </>
                                        )}

                                        <TabPanelControl
                                            options={[
                                                ...(pricePrefix
                                                    ? [
                                                          {
                                                              value: 'normal',
                                                              label: __('Prefix', 'zoloblocks'),
                                                          },
                                                      ]
                                                    : []),
                                                ...(priceSuffix
                                                    ? [
                                                          {
                                                              value: 'hover',
                                                              label: __('Suffix', 'zoloblocks'),
                                                          },
                                                      ]
                                                    : []),
                                            ]}
                                            normalComponents={
                                                <>
                                                    <RangeResetControl
                                                        label={__('Size', 'zoloblocks')}
                                                        controlName={'prefixSize'}
                                                        requiredProps={requiredProps}
                                                        min={0}
                                                        max={72}
                                                        step={1}
                                                    />
                                                    <RangeResetControl
                                                        label={__('Position', 'zoloblocks')}
                                                        controlName={'prefixPosition'}
                                                        requiredProps={requiredProps}
                                                        min={-100}
                                                        max={100}
                                                        step={1}
                                                    />
                                                </>
                                            }
                                            hoverComponents={
                                                <>
                                                    <RangeResetControl
                                                        label={__('Size', 'zoloblocks')}
                                                        controlName={'suffixSize'}
                                                        requiredProps={requiredProps}
                                                        min={0}
                                                        max={100}
                                                        step={1}
                                                    />
                                                    <RangeResetControl
                                                        label={__('Position', 'zoloblocks')}
                                                        controlName={'suffixPosition'}
                                                        requiredProps={requiredProps}
                                                        min={-100}
                                                        max={100}
                                                        step={1}
                                                    />
                                                </>
                                            }
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={orginalPriceColor}
                                                onChange={(val) =>
                                                    setAttributes({
                                                        orginalPriceColor: val,
                                                    })
                                                }
                                            />
                                            <TypographyDropdown
                                                label="Typography"
                                                typoPrefixConstant={ORGINAL_PRICE_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                                max={72}
                                            />
                                            <CardDivider />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={ORGINAL_PRICE_MARGIN}
                                                requiredProps={requiredProps}
                                            />
                                        </>
                                    </>
                                }
                                activeComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={periodColor}
                                            onChange={(val) =>
                                                setAttributes({
                                                    periodColor: val,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label="Typography"
                                            typoPrefixConstant={PERIOD_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={72}
                                        />
                                        <CardDivider />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={PERIOD_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Separator', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={separatorColor}
                                onChange={(val) =>
                                    setAttributes({
                                        separatorColor: val,
                                    })
                                }
                            />
                            <ResRangeControl
                                label={__('Width', 'zoloblocks')}
                                controlName={SEPARATOR_WIDTH}
                                requiredProps={requiredProps}
                                min={0}
                                max={10}
                                step={1}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Features ', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={FEATURE_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <TabPanelControl
                                options={[
                                    ...(showFeatureHeading
                                        ? [
                                              {
                                                  value: 'normal',
                                                  label: __('Title', 'zoloblocks'),
                                              },
                                          ]
                                        : []),
                                    ...(showFeatureDesc
                                        ? [
                                              {
                                                  value: 'hover',
                                                  label: __('Description', 'zoloblocks'),
                                              },
                                          ]
                                        : []),

                                    ...(showFeatures
                                        ? [
                                              {
                                                  value: 'active',
                                                  label: __('Lists', 'zoloblocks'),
                                              },
                                          ]
                                        : []),
                                ]}
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={featureTitleColor}
                                            onChange={(val) =>
                                                setAttributes({
                                                    featureTitleColor: val,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label="Typography"
                                            typoPrefixConstant={FEATURE_TITLE_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={72}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={featureDescColor}
                                            onChange={(val) =>
                                                setAttributes({
                                                    featureDescColor: val,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label="Typography"
                                            typoPrefixConstant={FEATURE_DESC_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={72}
                                        />
                                        <CardDivider />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={FEATURE_DESC_MARGIN}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                    </>
                                }
                                activeComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={featureColor}
                                            onChange={(val) =>
                                                setAttributes({
                                                    featureColor: val,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label="Typography"
                                            typoPrefixConstant={FEATURE_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={72}
                                        />
                                        <CardDivider />

                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={FEATURE_MARGIN}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <CardDivider />
                                        <ResRangeControl
                                            label={__('Item Gap', 'zoloblocks')}
                                            requiredProps={requiredProps}
                                            controlName={FEATURE_ITEM_GAP}
                                            min={0}
                                            max={100}
                                            step={1}
                                        />

                                        <div className="zolo-custom-heading">{__('Icon', 'zoloblocks')}</div>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={featureIconColor}
                                            onChange={(val) =>
                                                setAttributes({
                                                    featureIconColor: val,
                                                })
                                            }
                                        />
                                        <ResRangeControl
                                            label={__('Size', 'zoloblocks')}
                                            requiredProps={requiredProps}
                                            controlName={FEATURE_ICON_SIZE}
                                            min={0}
                                            max={100}
                                            step={1}
                                        />
                                        <CardDivider />
                                        <ColorControl
                                            label={__('Background', 'zoloblocks')}
                                            color={featureIconBgColor}
                                            onChange={(val) =>
                                                setAttributes({
                                                    featureIconBgColor: val,
                                                })
                                            }
                                        />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={FEATURE_ICON_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <CardDivider />
                                        <ResRangeControl
                                            label={__('Gap', 'zoloblocks')}
                                            requiredProps={requiredProps}
                                            controlName={FEATURE_ICON_GAP}
                                            min={0}
                                            max={100}
                                            step={1}
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                        {(showBtn || showChatBtn) && (
                            <ZoloPanelBody title={__('Buttons', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={BTNS_MARGIN}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                            </ZoloPanelBody>
                        )}

                        {showBtn && (
                            <ZoloPanelBody title={__('Primary Button', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={btnTextColor}
                                                onChange={(val) =>
                                                    setAttributes({
                                                        btnTextColor: val,
                                                    })
                                                }
                                            />
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={BTN_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                                max={72}
                                            />
                                            <CardDivider />
                                            <NormalBGControl noMainBGImg={true} controlName={BTN_NORMAL_BG} requiredProps={requiredProps} />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={BTN_PADDING}
                                                requiredProps={requiredProps}
                                                forBorderRadius={false}
                                            />
                                            {btnsDirection === 'column' && (
                                                <ResDimensionsControl
                                                    label={__('Margin', 'zoloblocks')}
                                                    controlName={BTN_MARGIN}
                                                    requiredProps={requiredProps}
                                                    forBorderRadius={false}
                                                />
                                            )}
                                            <CardDivider />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={BTN_BORDER}
                                                requiredProps={requiredProps}
                                                hoverControl={
                                                    <ColorControl
                                                        label={__('Border Color', 'zoloblocks')}
                                                        color={btnHoverBorderColor}
                                                        onChange={(val) =>
                                                            setAttributes({
                                                                btnHoverBorderColor: val,
                                                            })
                                                        }
                                                    />
                                                }
                                            />
                                            <BoxShadowControl controlName={BTN_SHADOW} requiredProps={requiredProps} />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={BTN_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={btnHoverTextColor}
                                                onChange={(val) =>
                                                    setAttributes({
                                                        btnHoverTextColor: val,
                                                    })
                                                }
                                            />

                                            <NormalBGControl noMainBGImg={true} controlName={BTN_HOVER_BG} requiredProps={requiredProps} />
                                            <BoxShadowControl controlName={BTN_HOVER_SHADOW} requiredProps={requiredProps} />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                        {showChatBtn && (
                            <ZoloPanelBody title={__('Secondary Button', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={chatBtnColor}
                                                onChange={(val) =>
                                                    setAttributes({
                                                        chatBtnColor: val,
                                                    })
                                                }
                                            />
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={CBTN_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                                max={72}
                                            />
                                            <CardDivider />
                                            <NormalBGControl
                                                noMainBGImg={true}
                                                controlName={CBTN_NORMAL_BG}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={CBTN_PADDING}
                                                requiredProps={requiredProps}
                                                forBorderRadius={false}
                                            />
                                            {btnsDirection === 'column' && (
                                                <ResDimensionsControl
                                                    label={__('Margin', 'zoloblocks')}
                                                    controlName={CBTN_MARGIN}
                                                    requiredProps={requiredProps}
                                                    forBorderRadius={false}
                                                />
                                            )}
                                            <CardDivider />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={CBTN_BORDER}
                                                requiredProps={requiredProps}
                                                hoverControl={
                                                    <ColorControl
                                                        label={__('Border Color', 'zoloblocks')}
                                                        color={chatBtnHoverBorderColor}
                                                        onChange={(val) =>
                                                            setAttributes({
                                                                chatBtnHoverBorderColor: val,
                                                            })
                                                        }
                                                    />
                                                }
                                            />
                                            <BoxShadowControl controlName={CBTN_SHADOW} requiredProps={requiredProps} />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={CBTN_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={chatBtnHoverColor}
                                                onChange={(val) =>
                                                    setAttributes({
                                                        chatBtnHoverColor: val,
                                                    })
                                                }
                                            />

                                            <NormalBGControl noMainBGImg={true} controlName={CBTN_HOVER_BG} requiredProps={requiredProps} />
                                            <BoxShadowControl controlName={CBTN_HOVER_SHADOW} requiredProps={requiredProps} />
                                        </>
                                    }
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
                            block="zolo/pricing-table"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
};

export default memo(Inspector);
