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
                            <ToggleControl
                                label={__('Show Ribbon', 'zoloblocks')}
                                checked={showRibbon}
                                onChange={() => setAttributes({ showRibbon: !showRibbon })}
                            />
                            <ToggleControl
                                label={__('Show Features', 'zoloblocks')}
                                checked={showFeatures}
                                onChange={() => setAttributes({ showFeatures: !showFeatures })}
                            />
                            <ToggleControl
                                label={__('Show Primary Button', 'zoloblocks')}
                                checked={showBtn}
                                onChange={() => setAttributes({ showBtn: !showBtn })}
                            />
                            <ToggleControl
                                label={__('Show Secondary Button', 'zoloblocks')}
                                checked={showChatBtn}
                                onChange={() => setAttributes({ showChatBtn: !showChatBtn })}
                            />
                            <ResAlignmentControl
                                label={__('Alignment', 'zoloblocks')}
                                controlName={ALIGNENT}
                                requiredProps={requiredProps}
                                alignOptions={DEFAULT_ALIGNS}
                            />
                            {(showBtn || showChatBtn) && (
                                <>
                                    <div className='zolo-flex-row-control-tab'>
                                        <IconicBtnGroup
                                            label={__('Button (PS)', 'zoloblocks')}
                                            value={btnsPosition}
                                            onChange={(value) =>
                                                setAttributes({
                                                    btnsPosition: value,
                                                })
                                            }
                                            options={BTNS_POSITIONS}
                                        />
                                    </div>
                                    <div className='zolo-flex-row-control-tab'>
                                        <IconicBtnGroup
                                            label={__('Button (DR)', 'zoloblocks')}
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
                                    label={__('Title', 'zoloblocks')}
                                    value={ribbonTitle}
                                    onChange={(ribbonTitle) => setAttributes({ ribbonTitle })}
                                />
                                <RangeResetControl
                                    label={__('Horizontal Position', 'zoloblocks')}
                                    controlName={'ribbonXPosition'}
                                    requiredProps={requiredProps}
                                    min={-150}
                                    max={150}
                                    step={1}
                                />
                                <RangeResetControl
                                    label={__('Vertical Position', 'zoloblocks')}
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
                                <IconicBtnGroup
                                    label={__('Position', 'zoloblocks')}
                                    value={ribbonPosition}
                                    onChange={(value) =>
                                        setAttributes({
                                            ribbonPosition: value,
                                        })
                                    }
                                    options={RIBBON_POSITIONS}
                                />
                            </ZoloPanelBody>
                        )}

                        <ZoloPanelBody title={__('Header', 'zoloblocks')} panelProps={props}>
                            <TextControl
                                label={__('Title', 'zoloblocks')}
                                value={titleText}
                                onChange={(titleText) => setAttributes({ titleText })}
                            />
                            <SelectControl
                                label={__('HTML Tag', 'zoloblocks')}
                                value={titleTagName}
                                options={HEADING}
                                onChange={(selected) => setAttributes({ titleTagName: selected })}
                            />

                            <ToggleControl

                                label={__('Show Description', 'zoloblocks')}
                                checked={showDesc}
                                onChange={(showDesc) => setAttributes({ showDesc })}
                            />

                            {showDesc && (
                                <TextareaControl
                                    className='zolo-flex-col-control'
                                    label={__('Description', 'zoloblocks')}
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

                            <ToggleControl label={__('Sale', 'zoloblocks')} checked={sale} onChange={(sale) => setAttributes({ sale })} />

                            {sale && (
                                <TextControl
                                    label={__('Orginal Price', 'zoloblocks')}
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

                        {showFeatures && (
                            <ZoloPanelBody title={__('Features', 'zoloblocks')} panelProps={props}>
                                <ToggleControl
                                    label={__('Show Title', 'zoloblocks')}
                                    checked={showFeatureHeading}
                                    onChange={() =>
                                        setAttributes({
                                            showFeatureHeading: !showFeatureHeading,
                                        })
                                    }
                                />

                                <ToggleControl
                                    label={__('Show Description', 'zoloblocks')}
                                    checked={showFeatureDesc}
                                    onChange={() => setAttributes({ showFeatureDesc: !showFeatureDesc })}
                                />

                                <ToggleControl
                                    label={__('Hide Feature Icon', 'zoloblocks')}
                                    checked={hideFeatureIcon}
                                    onChange={() => setAttributes({ hideFeatureIcon: !hideFeatureIcon })}
                                />

                                {showFeatureHeading && (
                                    <TextControl
                                        label={__('Title', 'zoloblocks')}
                                        value={featureTitle}
                                        onChange={(featureTitle) => setAttributes({ featureTitle })}
                                    />
                                )}

                                {showFeatureDesc && (
                                    <TextareaControl
                                        className='zolo-flex-col-control'
                                        label={__('Description', 'zoloblocks')}
                                        value={featureDesc}
                                        onChange={(featureDesc) => setAttributes({ featureDesc })}
                                    />
                                )}

                                <Sortable features={features} setAttributes={setAttributes} />
                            </ZoloPanelBody>
                        )}

                        {showBtn && (
                            <ZoloPanelBody title={__('Primary Button', 'zoloblocks')} panelProps={props}>
                                <TextControl
                                    label={__('Button Text', 'zoloblocks')}
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
                                    label={__('Button Text', 'zoloblocks')}
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
                            <BorderControl label={__('Border', 'zoloblocks')} controlName={WRAPPER_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={WRAPPER_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl label="Margin" controlName={WRAPPER_MARGIN} requiredProps={requiredProps} />
                            <ResDimensionsControl label="Padding" controlName={WRAPPER_PADDING} requiredProps={requiredProps} />
                            <BoxShadowControl controlName={WRAPPER_SHADOW} requiredProps={requiredProps} />
                            <NormalBGControl requiredProps={requiredProps} controlName={WRAPPER_BG} noMainBGImg={false} />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Header', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={TITLE_PADDING}
                                requiredProps={requiredProps}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Header Content', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TypographyDropdown
                                label={__('Title Typography', 'zoloblocks')}
                                typoPrefixConstant={TITLE_TYPOGRAPHY}
                                requiredProps={requiredProps}
                                max={72}
                            />

                            <BorderControl label={__('Border', 'zoloblocks')} controlName={TITLE_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={TITLE_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
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
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={titleColor}
                                onChange={(val) =>
                                    setAttributes({
                                        titleColor: val,
                                    })
                                }
                            />
                            <NormalBGControl noMainBGImg={true} controlName={TITLE_BG} requiredProps={requiredProps} />
                            <TextShadowControl controlName={TITLE_TEXT_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            {showDesc && (
                                <>
                                    <Divider />
                                    <BaseControl>
                                        <h3 className="zolo-devider-title"> {__('Description ', 'zoloblocks')} </h3>
                                    </BaseControl>

                                    <TypographyDropdown
                                        label="Typography"
                                        typoPrefixConstant={DESC_TYPOGRAPHY}
                                        requiredProps={requiredProps}
                                        max={72}
                                    />

                                    <ColorControl
                                        label={__('Color', 'zoloblocks')}
                                        color={descColor}
                                        onChange={(val) =>
                                            setAttributes({
                                                descColor: val,
                                            })
                                        }
                                    />
                                    <ResDimensionsControl
                                        label={__('Margin', 'zoloblocks')}
                                        controlName={DESC_MARGIN}
                                        requiredProps={requiredProps}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Pricing', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TypographyDropdown
                                label="Typography"
                                typoPrefixConstant={PRICE_TYPOGRAPHY}
                                requiredProps={requiredProps}
                                max={72}
                            />

                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={priceColor}
                                onChange={(val) =>
                                    setAttributes({
                                        priceColor: val,
                                    })
                                }
                            />
                            {preset === 'style-2' && (
                                <>
                                    <NormalBGControl noMainBGImg={true} controlName={PRICE_BG} requiredProps={requiredProps} />
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
                                    <ResDimensionsControl
                                        label={__('Padding', 'zoloblocks')}
                                        controlName={PRICE_PADDING}
                                        requiredProps={requiredProps}
                                    />
                                </>
                            )}
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={PRICE_MARGIN}
                                requiredProps={requiredProps}
                            />

                            {pricePrefix && (
                                <>
                                    <Divider />
                                    <BaseControl>
                                        <h3 className="zolo-devider-title"> {__('PreFix ', 'zoloblocks')} </h3>
                                    </BaseControl>
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
                            )}

                            {priceSuffix && (
                                <>
                                    <Divider />
                                    <BaseControl>
                                        <h3 className="zolo-devider-title"> {__('Suffix ', 'zoloblocks')} </h3>
                                    </BaseControl>
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
                            )}

                            {sale && orginalPrice && (
                                <>
                                    <Divider />
                                    <BaseControl>
                                        <h3 className="zolo-devider-title"> {__('Orginal Price ', 'zoloblocks')} </h3>
                                    </BaseControl>

                                    <TypographyDropdown
                                        label="Typography"
                                        typoPrefixConstant={ORGINAL_PRICE_TYPOGRAPHY}
                                        requiredProps={requiredProps}
                                        max={72}
                                    />

                                    <ColorControl
                                        label={__('Color', 'zoloblocks')}
                                        color={orginalPriceColor}
                                        onChange={(val) =>
                                            setAttributes({
                                                orginalPriceColor: val,
                                            })
                                        }
                                    />
                                    <ResDimensionsControl
                                        label={__('Margin', 'zoloblocks')}
                                        controlName={ORGINAL_PRICE_MARGIN}
                                        requiredProps={requiredProps}
                                    />
                                </>
                            )}

                            {period && (
                                <>
                                    <Divider />
                                    <BaseControl>
                                        <h3 className="zolo-devider-title"> {__('Period', 'zoloblocks')} </h3>
                                    </BaseControl>

                                    <TypographyDropdown
                                        label="Typography"
                                        typoPrefixConstant={PERIOD_TYPOGRAPHY}
                                        requiredProps={requiredProps}
                                        max={72}
                                    />

                                    <ColorControl
                                        label={__('Color', 'zoloblocks')}
                                        color={periodColor}
                                        onChange={(val) =>
                                            setAttributes({
                                                periodColor: val,
                                            })
                                        }
                                    />
                                    <ResDimensionsControl
                                        label={__('Margin', 'zoloblocks')}
                                        controlName={PERIOD_MARGIN}
                                        requiredProps={requiredProps}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Separator', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <ResRangeControl
                                label={__('Width', 'zoloblocks')}
                                controlName={SEPARATOR_WIDTH}
                                requiredProps={requiredProps}
                                min={0}
                                max={10}
                                step={1}
                            />
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={separatorColor}
                                onChange={(val) =>
                                    setAttributes({
                                        separatorColor: val,
                                    })
                                }
                            />
                        </ZoloPanelBody>
                        {showFeatures && (
                            <>
                                <ZoloPanelBody title={__('Features', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                    <ResDimensionsControl
                                        label={__('Padding', 'zoloblocks')}
                                        controlName={FEATURE_PADDING}
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
                                    />
                                </ZoloPanelBody>
                                <ZoloPanelBody title={__('Features Content', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                    {showFeatureHeading && (
                                        <>
                                            <TypographyDropdown
                                                label="Title Typography"
                                                typoPrefixConstant={FEATURE_TITLE_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                                max={72}
                                            />

                                            <ColorControl
                                                label={__('Title Color', 'zoloblocks')}
                                                color={featureTitleColor}
                                                onChange={(val) =>
                                                    setAttributes({
                                                        featureTitleColor: val,
                                                    })
                                                }
                                            />

                                            <Divider />
                                            <BaseControl>
                                                <h3 className="zolo-devider-title"> {__('Description ', 'zoloblocks')} </h3>
                                            </BaseControl>

                                            <TypographyDropdown
                                                label="Typography"
                                                typoPrefixConstant={FEATURE_DESC_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                                max={72}
                                            />

                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={featureDescColor}
                                                onChange={(val) =>
                                                    setAttributes({
                                                        featureDescColor: val,
                                                    })
                                                }
                                            />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={FEATURE_DESC_MARGIN}
                                                requiredProps={requiredProps}
                                                forBorderRadius={false}
                                            />
                                        </>
                                    )}

                                    {showFeatureHeading && (
                                        <>
                                            <Divider />
                                            <BaseControl>
                                                <h3 className="zolo-devider-title"> {__('Feature Lists ', 'zoloblocks')} </h3>
                                            </BaseControl>
                                        </>
                                    )}
                                    <TypographyDropdown
                                        label="Typography"
                                        typoPrefixConstant={FEATURE_TYPOGRAPHY}
                                        requiredProps={requiredProps}
                                        max={72}
                                    />

                                    <ColorControl
                                        label={__('Color', 'zoloblocks')}
                                        color={featureColor}
                                        onChange={(val) =>
                                            setAttributes({
                                                featureColor: val,
                                            })
                                        }
                                    />

                                    <ResRangeControl
                                        label={__('Item Gap', 'zoloblocks')}
                                        requiredProps={requiredProps}
                                        controlName={FEATURE_ITEM_GAP}
                                        min={0}
                                        max={100}
                                        step={1}
                                    />

                                    <ResDimensionsControl
                                        label={__('Margin', 'zoloblocks')}
                                        controlName={FEATURE_MARGIN}
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
                                    />

                                    <CardDivider />
                                    <ColorControl
                                        label={__('Icon Color', 'zoloblocks')}
                                        color={featureIconColor}
                                        onChange={(val) =>
                                            setAttributes({
                                                featureIconColor: val,
                                            })
                                        }
                                    />
                                    <ColorControl
                                        label={__('Icon Background', 'zoloblocks')}
                                        color={featureIconBgColor}
                                        onChange={(val) =>
                                            setAttributes({
                                                featureIconBgColor: val,
                                            })
                                        }
                                    />
                                    <ResRangeControl
                                        label={__('Icon Size', 'zoloblocks')}
                                        requiredProps={requiredProps}
                                        controlName={FEATURE_ICON_SIZE}
                                        min={0}
                                        max={100}
                                        step={1}
                                    />
                                    <ResRangeControl
                                        label={__('Icon Gap', 'zoloblocks')}
                                        requiredProps={requiredProps}
                                        controlName={FEATURE_ICON_GAP}
                                        min={0}
                                        max={100}
                                        step={1}
                                    />
                                    <ResDimensionsControl
                                        label={__('Icon Padding', 'zoloblocks')}
                                        controlName={FEATURE_ICON_PADDING}
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
                                    />
                                </ZoloPanelBody>
                            </>
                        )}

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
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={BTN_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={72}
                                />
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
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={BTN_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
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

                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Text Color', 'zoloblocks')}
                                                color={btnTextColor}
                                                onChange={(val) =>
                                                    setAttributes({
                                                        btnTextColor: val,
                                                    })
                                                }
                                            />

                                            <BoxShadowControl controlName={BTN_SHADOW} requiredProps={requiredProps} />
                                            <NormalBGControl noMainBGImg={true} controlName={BTN_NORMAL_BG} requiredProps={requiredProps} />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Text Color', 'zoloblocks')}
                                                color={btnHoverTextColor}
                                                onChange={(val) =>
                                                    setAttributes({
                                                        btnHoverTextColor: val,
                                                    })
                                                }
                                            />

                                            <BoxShadowControl controlName={BTN_HOVER_SHADOW} requiredProps={requiredProps} />
                                            <NormalBGControl noMainBGImg={true} controlName={BTN_HOVER_BG} requiredProps={requiredProps} />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                        {showChatBtn && (
                            <ZoloPanelBody title={__('Secondary Button', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={CBTN_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                    max={72}
                                />
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
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={CBTN_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
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
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Text Color', 'zoloblocks')}
                                                color={chatBtnColor}
                                                onChange={(val) =>
                                                    setAttributes({
                                                        chatBtnColor: val,
                                                    })
                                                }
                                            />

                                            <BoxShadowControl controlName={CBTN_SHADOW} requiredProps={requiredProps} />
                                            <NormalBGControl
                                                noMainBGImg={true}
                                                controlName={CBTN_NORMAL_BG}
                                                requiredProps={requiredProps}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Text Color', 'zoloblocks')}
                                                color={chatBtnHoverColor}
                                                onChange={(val) =>
                                                    setAttributes({
                                                        chatBtnHoverColor: val,
                                                    })
                                                }
                                            />

                                            <BoxShadowControl controlName={CBTN_HOVER_SHADOW} requiredProps={requiredProps} />
                                            <NormalBGControl noMainBGImg={true} controlName={CBTN_HOVER_BG} requiredProps={requiredProps} />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}

                        <ZoloPanelBody title={__('Ribbon', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TypographyDropdown
                                label="Typography"
                                typoPrefixConstant={RIBBON_TYPOGRAPHY}
                                requiredProps={requiredProps}
                                max={72}
                            />
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={ribbonColor}
                                onChange={(val) =>
                                    setAttributes({
                                        ribbonColor: val,
                                    })
                                }
                            />
                            <BorderControl label={__('Border', 'zoloblocks')} controlName={RIBBON_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={RIBBON_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
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
                            <NormalBGControl noMainBGImg={true} controlName={RIBBON_BG} requiredProps={requiredProps} />
                        </ZoloPanelBody>
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

export default Inspector;
