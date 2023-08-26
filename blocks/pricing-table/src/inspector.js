//wrodpress dependencies
import { InspectorControls } from '@wordpress/block-editor';
import {
    BaseControl,
    CardDivider,
    __experimentalDivider as Divider,
    PanelBody,
    SelectControl,
    TextControl,
    TextareaControl,
    ToggleControl,
} from '@wordpress/components';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

const {
    BackgroundControl,
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
    FEATURE_ALIGN,
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
    STYLES,
    TITLE_BORDER,
    TITLE_BORDER_RADIUS,
    TITLE_MARGIN,
    TITLE_PADDING,
    TITLE_TAG,
    TITLE_TEXT_SHADOW,
    WRAPPER_BG,
    WRAPPER_BORDER,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_SHADOW,
    RIBBON_MARGIN,
    RIBBON_PADDING,
    RIBBON_BORDER,
    RIBBON_RADIUS,
    RIBBON_BG,
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

import { DEFAULT_ALIGNS } from '../../../src/global/constants';

import Sortable from './sortable';

const Inspector = ({ attributes, setAttributes }) => {
    const {
        resMode,
        //layout
        styles,
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
    } = attributes;

    const resRequiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    const changePremade = (selected) => {
        setAttributes({ styles: selected });
        switch (selected) {
            case 'style-1':
                setAttributes({
                    showFeatureHeading: true,
                    showRibbon: true,
                    showDesc: true,
                });
                break;
            case 'style-2':
                setAttributes({
                    showFeatureHeading: false,
                    showRibbon: false,
                    showDesc: false,
                });
                break;
            case 'style-3':
                setAttributes({
                    showFeatureHeading: false,
                    showRibbon: false,
                    showDesc: false,
                });
                break;
            default:
                return false;
        }
    };

    const featureItemAdd = () => {
        const count = features.length + 1;
        const featuresList = [
            ...features,
            {
                text: `List Item #${count}`,
                icon: {
                    'fa-check': {
                        name: 'check',
                        source: 'fontawesome',
                        type: 'fas',
                    },
                },
                color: '#03bb89',
            },
        ];
        setAttributes({ features: featuresList });
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                generalTab={
                    <>
                        <PanelBody title={__('Layout', 'zolo-blocks')} initialOpen={false}>
                            <SelectControl
                                label={__('Preset Designs', 'zolo-blocks')}
                                value={styles}
                                options={applyFilters('zolo_pricing_table_style_filter', STYLES) || STYLES}
                                onChange={(selected) => changePremade(selected)}
                            />

                            <ToggleControl
                                label={__('Show Ribbon', 'zolo-blocks')}
                                checked={showRibbon}
                                onChange={() => setAttributes({ showRibbon: !showRibbon })}
                            />

                            <ToggleControl
                                label={__('Show Primary Button', 'zolo-blocks')}
                                checked={showBtn}
                                onChange={() => setAttributes({ showBtn: !showBtn })}
                            />
                            <ToggleControl
                                label={__('Show Chat Button', 'zolo-blocks')}
                                checked={showChatBtn}
                                onChange={() => setAttributes({ showChatBtn: !showChatBtn })}
                            />
                        </PanelBody>
                        {showRibbon && (
                            <PanelBody title={__('Ribbon', 'zolo-blocks')} initialOpen={false}>
                                <TextControl
                                    label={__('Title', 'zolo-blocks')}
                                    value={ribbonTitle}
                                    onChange={(ribbonTitle) => setAttributes({ ribbonTitle })}
                                />

                                <RangeResetControl
                                    label={__('Horizontal Position', 'zolo-blocks')}
                                    controlName={'ribbonXPosition'}
                                    resRequiredProps={resRequiredProps}
                                    min={-150}
                                    max={150}
                                    step={1}
                                />

                                <RangeResetControl
                                    label={__('Vertical Position', 'zolo-blocks')}
                                    controlName={'ribbonYPosition'}
                                    resRequiredProps={resRequiredProps}
                                    min={-150}
                                    max={150}
                                    step={1}
                                />

                                <RangeResetControl
                                    label={__('Rotate', 'zolo-blocks')}
                                    controlName={'ribbonRotate'}
                                    resRequiredProps={resRequiredProps}
                                    min={-180}
                                    max={180}
                                    step={1}
                                />
                            </PanelBody>
                        )}

                        <PanelBody title={__('Header', 'zolo-blocks')} initialOpen={false}>
                            <TextControl
                                label={__('Title', 'zolo-blocks')}
                                value={titleText}
                                onChange={(titleText) => setAttributes({ titleText })}
                            />
                            <SelectControl
                                label={__('HTML Tag', 'zolo-blocks')}
                                value={titleTagName}
                                options={TITLE_TAG}
                                onChange={(selected) => setAttributes({ titleTagName: selected })}
                            />
                            <ToggleControl
                                label={__('Show Description', 'zolo-blocks')}
                                checked={showDesc}
                                onChange={(showDesc) => setAttributes({ showDesc })}
                            />

                            {showDesc && (
                                <TextareaControl
                                    label={__('Description', 'zolo-blocks')}
                                    value={descText}
                                    onChange={(descText) => setAttributes({ descText })}
                                />
                            )}
                        </PanelBody>

                        <PanelBody title={__('Price', 'zolo-blocks')} initialOpen={false}>
                            <TextControl
                                label={__('Prefix', 'zolo-blocks')}
                                value={pricePrefix}
                                onChange={(pricePrefix) => setAttributes({ pricePrefix })}
                                placeholder={__('$', 'zolo-blocks')}
                            />

                            <TextControl label={__('Price', 'zolo-blocks')} value={price} onChange={(price) => setAttributes({ price })} />

                            <TextControl
                                label={__('Suffix', 'zolo-blocks')}
                                value={priceSuffix}
                                onChange={(priceSuffix) => setAttributes({ priceSuffix })}
                            />

                            <ToggleControl label={__('Sale', 'zolo-blocks')} checked={sale} onChange={(sale) => setAttributes({ sale })} />

                            {sale && (
                                <TextControl
                                    label={__('Orginal Price', 'zolo-blocks')}
                                    value={orginalPrice}
                                    onChange={(orginalPrice) => setAttributes({ orginalPrice })}
                                />
                            )}

                            <TextControl
                                label={__('Period', 'zolo-blocks')}
                                value={period}
                                onChange={(period) => setAttributes({ period })}
                                help={__('Using comma indicator for multiple lines', 'zolo-blocks')}
                            />
                        </PanelBody>

                        <PanelBody title={__('Features', 'zolo-blocks')} initialOpen={false}>
                            <ResAlignmentControl
                                label={__('Alignment', 'zolo-blocks')}
                                controlName={FEATURE_ALIGN}
                                resRequiredProps={resRequiredProps}
                                alignOptions={DEFAULT_ALIGNS}
                            />

                            <ToggleControl
                                label={__('Show Title', 'zolo-blocks')}
                                checked={showFeatureHeading}
                                onChange={() =>
                                    setAttributes({
                                        showFeatureHeading: !showFeatureHeading,
                                    })
                                }
                            />

                            <ToggleControl
                                label={__('Show Description', 'zolo-blocks')}
                                checked={showFeatureDesc}
                                onChange={() => setAttributes({ showFeatureDesc: !showFeatureDesc })}
                            />

                            {showFeatureHeading && (
                                <TextControl
                                    label={__('Title', 'zolo-blocks')}
                                    value={featureTitle}
                                    onChange={(featureTitle) => setAttributes({ featureTitle })}
                                />
                            )}

                            {showFeatureDesc && (
                                <TextareaControl
                                    label={__('Description', 'zolo-blocks')}
                                    value={featureDesc}
                                    onChange={(featureDesc) => setAttributes({ featureDesc })}
                                />
                            )}

                            <Sortable features={features} setAttributes={setAttributes} />
                        </PanelBody>

                        {showBtn && (
                            <PanelBody title={__('Primary Button', 'zolo-blocks')} initialOpen={false}>
                                <TextControl
                                    label={__('Button Text', 'zolo-blocks')}
                                    value={buttonText}
                                    onChange={(buttonText) => setAttributes({ buttonText })}
                                />
                                <LinkControl
                                    label={__('URL', 'zolo-blocks')}
                                    value={buttonLink}
                                    onChange={(value) => setAttributes({ buttonLink: value })}
                                />
                            </PanelBody>
                        )}
                        {showChatBtn && (
                            <PanelBody title={__('Chat Button', 'zolo-blocks')} initialOpen={false}>
                                <TextControl
                                    label={__('Button Text', 'zolo-blocks')}
                                    value={chatBtnText}
                                    onChange={(chatBtnText) => setAttributes({ chatBtnText })}
                                />
                                <LinkControl
                                    label={__('URL', 'zolo-blocks')}
                                    value={chatBtnLink}
                                    onChange={(value) => setAttributes({ chatBtnLink: value })}
                                />
                            </PanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <PanelBody title={__('Container', 'zolo-blocks')} initialOpen={false}>
                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={WRAPPER_BORDER}
                                resRequiredProps={resRequiredProps}
                            />
                            <BoxShadowControl controlName={WRAPPER_SHADOW} resRequiredProps={resRequiredProps} />
                            <BackgroundControl controlName={WRAPPER_BG} resRequiredProps={resRequiredProps} />
                            <ResDimensionsControl label="Margin" controlName={WRAPPER_MARGIN} resRequiredProps={resRequiredProps} />
                            <ResDimensionsControl label="Padding" controlName={WRAPPER_PADDING} resRequiredProps={resRequiredProps} />
                        </PanelBody>
                        <PanelBody title={__('Header', 'zolo-blocks')} initialOpen={false}>
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={TITLE_TYPOGRAPHY}
                                resRequiredProps={resRequiredProps}
                            />

                            <ColorControl
                                label={__('Color', 'zolo-blocks')}
                                color={titleColor}
                                onChange={(val) =>
                                    setAttributes({
                                        titleColor: val,
                                    })
                                }
                            />

                            <ColorControl
                                label={__('Background', 'zolo-blocks')}
                                color={titleBgColor}
                                onChange={(val) =>
                                    setAttributes({
                                        titleBgColor: val,
                                    })
                                }
                            />

                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={TITLE_PADDING}
                                resRequiredProps={resRequiredProps}
                            />

                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={TITLE_MARGIN}
                                resRequiredProps={resRequiredProps}
                            />

                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={TITLE_BORDER}
                                resRequiredProps={resRequiredProps}
                            />

                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={TITLE_BORDER_RADIUS}
                                resRequiredProps={resRequiredProps}
                                forBorderRadius={true}
                            />

                            <TextShadowControl
                                controlName={TITLE_TEXT_SHADOW}
                                resRequiredProps={resRequiredProps}
                                enableTransition={false}
                            />

                            {showDesc && (
                                <>
                                    <Divider />
                                    <BaseControl>
                                        <h3 className="zolo-devider-title"> {__('Description ', 'zolo-blocks')} </h3>
                                    </BaseControl>

                                    <TypographyDropdown
                                        label="Typography"
                                        typoPrefixConstant={DESC_TYPOGRAPHY}
                                        resRequiredProps={resRequiredProps}
                                    />

                                    <ColorControl
                                        label={__('Color', 'zolo-blocks')}
                                        color={descColor}
                                        onChange={(val) =>
                                            setAttributes({
                                                descColor: val,
                                            })
                                        }
                                    />
                                    <ResDimensionsControl
                                        label={__('Margin', 'zolo-blocks')}
                                        controlName={DESC_MARGIN}
                                        resRequiredProps={resRequiredProps}
                                    />
                                </>
                            )}
                        </PanelBody>

                        <PanelBody title={__('Pricing', 'zolo-blocks')} initialOpen={false}>
                            <TypographyDropdown
                                label="Typography"
                                typoPrefixConstant={PRICE_TYPOGRAPHY}
                                resRequiredProps={resRequiredProps}
                            />

                            <ColorControl
                                label={__('Color', 'zolo-blocks')}
                                color={priceColor}
                                onChange={(val) =>
                                    setAttributes({
                                        priceColor: val,
                                    })
                                }
                            />

                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={PRICE_MARGIN}
                                resRequiredProps={resRequiredProps}
                            />

                            {pricePrefix && (
                                <>
                                    <Divider />
                                    <BaseControl>
                                        <h3 className="zolo-devider-title"> {__('PreFix ', 'zolo-blocks')} </h3>
                                    </BaseControl>
                                    <RangeResetControl
                                        label={__('Size', 'zolo-blocks')}
                                        controlName={'prefixSize'}
                                        resRequiredProps={resRequiredProps}
                                        min={0}
                                        max={100}
                                        step={1}
                                    />
                                    <RangeResetControl
                                        label={__('Position', 'zolo-blocks')}
                                        controlName={'prefixPosition'}
                                        resRequiredProps={resRequiredProps}
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
                                        <h3 className="zolo-devider-title"> {__('Suffix ', 'zolo-blocks')} </h3>
                                    </BaseControl>
                                    <RangeResetControl
                                        label={__('Size', 'zolo-blocks')}
                                        controlName={'suffixSize'}
                                        resRequiredProps={resRequiredProps}
                                        min={0}
                                        max={100}
                                        step={1}
                                    />
                                    <RangeResetControl
                                        label={__('Position', 'zolo-blocks')}
                                        controlName={'suffixPosition'}
                                        resRequiredProps={resRequiredProps}
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
                                        <h3 className="zolo-devider-title"> {__('Orginal Price ', 'zolo-blocks')} </h3>
                                    </BaseControl>

                                    <TypographyDropdown
                                        label="Typography"
                                        typoPrefixConstant={ORGINAL_PRICE_TYPOGRAPHY}
                                        resRequiredProps={resRequiredProps}
                                    />

                                    <ColorControl
                                        label={__('Color', 'zolo-blocks')}
                                        color={orginalPriceColor}
                                        onChange={(val) =>
                                            setAttributes({
                                                orginalPriceColor: val,
                                            })
                                        }
                                    />
                                    <ResDimensionsControl
                                        label={__('Margin', 'zolo-blocks')}
                                        controlName={ORGINAL_PRICE_MARGIN}
                                        resRequiredProps={resRequiredProps}
                                    />
                                </>
                            )}

                            {period && (
                                <>
                                    <Divider />
                                    <BaseControl>
                                        <h3 className="zolo-devider-title"> {__('Period', 'zolo-blocks')} </h3>
                                    </BaseControl>

                                    <TypographyDropdown
                                        label="Typography"
                                        typoPrefixConstant={PERIOD_TYPOGRAPHY}
                                        resRequiredProps={resRequiredProps}
                                    />

                                    <ColorControl
                                        label={__('Color', 'zolo-blocks')}
                                        color={periodColor}
                                        onChange={(val) =>
                                            setAttributes({
                                                periodColor: val,
                                            })
                                        }
                                    />
                                    <ResDimensionsControl
                                        label={__('Margin', 'zolo-blocks')}
                                        controlName={PERIOD_MARGIN}
                                        resRequiredProps={resRequiredProps}
                                    />
                                </>
                            )}
                        </PanelBody>

                        <PanelBody title={__('Features', 'zolo-blocks')} initialOpen={false}>
                            {showFeatureHeading && (
                                <>
                                    <TypographyDropdown
                                        label="Title Typography"
                                        typoPrefixConstant={FEATURE_TITLE_TYPOGRAPHY}
                                        resRequiredProps={resRequiredProps}
                                    />

                                    <ColorControl
                                        label={__('Title Color', 'zolo-blocks')}
                                        color={featureTitleColor}
                                        onChange={(val) =>
                                            setAttributes({
                                                featureTitleColor: val,
                                            })
                                        }
                                    />

                                    <Divider />
                                    <BaseControl>
                                        <h3 className="zolo-devider-title"> {__('Description ', 'zolo-blocks')} </h3>
                                    </BaseControl>

                                    <TypographyDropdown
                                        label="Typography"
                                        typoPrefixConstant={FEATURE_DESC_TYPOGRAPHY}
                                        resRequiredProps={resRequiredProps}
                                    />

                                    <ColorControl
                                        label={__('Color', 'zolo-blocks')}
                                        color={featureDescColor}
                                        onChange={(val) =>
                                            setAttributes({
                                                featureDescColor: val,
                                            })
                                        }
                                    />
                                    <ResDimensionsControl
                                        label={__('Margin', 'zolo-blocks')}
                                        controlName={FEATURE_DESC_MARGIN}
                                        resRequiredProps={resRequiredProps}
                                        forBorderRadius={true}
                                    />
                                </>
                            )}

                            {showFeatureHeading && (
                                <>
                                    <Divider />
                                    <BaseControl>
                                        <h3 className="zolo-devider-title"> {__('Feature Lists ', 'zolo-blocks')} </h3>
                                    </BaseControl>
                                </>
                            )}
                            <TypographyDropdown
                                label="Typography"
                                typoPrefixConstant={FEATURE_TYPOGRAPHY}
                                resRequiredProps={resRequiredProps}
                            />

                            <ColorControl
                                label={__('Color', 'zolo-blocks')}
                                color={featureColor}
                                onChange={(val) =>
                                    setAttributes({
                                        featureColor: val,
                                    })
                                }
                            />

                            <ResRangeControl
                                label={__('Item Gap', 'zolo-blocks')}
                                resRequiredProps={resRequiredProps}
                                controlName={FEATURE_ITEM_GAP}
                                min={0}
                                max={100}
                                step={1}
                            />

                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={FEATURE_MARGIN}
                                resRequiredProps={resRequiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={FEATURE_PADDING}
                                resRequiredProps={resRequiredProps}
                                forBorderRadius={false}
                            />
                            <CardDivider />
                            <ResDimensionsControl
                                label={__('Icon Padding', 'zolo-blocks')}
                                controlName={FEATURE_ICON_PADDING}
                                resRequiredProps={resRequiredProps}
                                forBorderRadius={false}
                            />
                            <ColorControl
                                label={__('Icon Color', 'zolo-blocks')}
                                color={featureIconColor}
                                onChange={(val) =>
                                    setAttributes({
                                        featureIconColor: val,
                                    })
                                }
                            />
                            <ColorControl
                                label={__('Icon Background', 'zolo-blocks')}
                                color={featureIconBgColor}
                                onChange={(val) =>
                                    setAttributes({
                                        featureIconBgColor: val,
                                    })
                                }
                            />
                            <ResRangeControl
                                label={__('Icon Size', 'zolo-blocks')}
                                resRequiredProps={resRequiredProps}
                                controlName={FEATURE_ICON_SIZE}
                                min={0}
                                max={100}
                                step={1}
                            />
                            <ResRangeControl
                                label={__('Icon Gap', 'zolo-blocks')}
                                resRequiredProps={resRequiredProps}
                                controlName={FEATURE_ICON_GAP}
                                min={0}
                                max={100}
                                step={1}
                            />
                        </PanelBody>

                        {showBtn && (
                            <PanelBody title={__('Primary Button', 'zolo-blocks')} initialOpen={false}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={BTN_TYPOGRAPHY}
                                    resRequiredProps={resRequiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={BTN_RADIUS}
                                    resRequiredProps={resRequiredProps}
                                    forBorderRadius={true}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={BTN_PADDING}
                                    resRequiredProps={resRequiredProps}
                                    forBorderRadius={false}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={BTN_MARGIN}
                                    resRequiredProps={resRequiredProps}
                                    forBorderRadius={false}
                                />
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Text Color', 'zolo-blocks')}
                                                color={btnTextColor}
                                                onChange={(val) =>
                                                    setAttributes({
                                                        btnTextColor: val,
                                                    })
                                                }
                                            />
                                            <BorderControl
                                                label={__('Border', 'zolo-blocks')}
                                                controlName={BTN_BORDER}
                                                resRequiredProps={resRequiredProps}
                                            />
                                            <BoxShadowControl controlName={BTN_SHADOW} resRequiredProps={resRequiredProps} />
                                            <NormalBGControl
                                                noMainBGImg={true}
                                                controlName={BTN_NORMAL_BG}
                                                resRequiredProps={resRequiredProps}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Text Color', 'zolo-blocks')}
                                                color={btnHoverTextColor}
                                                onChange={(val) =>
                                                    setAttributes({
                                                        btnHoverTextColor: val,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Border Color', 'zolo-blocks')}
                                                color={btnHoverBorderColor}
                                                onChange={(val) =>
                                                    setAttributes({
                                                        btnHoverBorderColor: val,
                                                    })
                                                }
                                            />
                                            <BoxShadowControl controlName={BTN_HOVER_SHADOW} resRequiredProps={resRequiredProps} />
                                            <NormalBGControl
                                                noMainBGImg={true}
                                                controlName={BTN_HOVER_BG}
                                                resRequiredProps={resRequiredProps}
                                            />
                                        </>
                                    }
                                />
                            </PanelBody>
                        )}
                        {showChatBtn && (
                            <PanelBody title={__('Chat Button', 'zolo-blocks')} initialOpen={false}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={CBTN_TYPOGRAPHY}
                                    resRequiredProps={resRequiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={CBTN_RADIUS}
                                    resRequiredProps={resRequiredProps}
                                    forBorderRadius={true}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={CBTN_PADDING}
                                    resRequiredProps={resRequiredProps}
                                    forBorderRadius={false}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={CBTN_MARGIN}
                                    resRequiredProps={resRequiredProps}
                                    forBorderRadius={false}
                                />

                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Text Color', 'zolo-blocks')}
                                                color={chatBtnColor}
                                                onChange={(val) =>
                                                    setAttributes({
                                                        chatBtnColor: val,
                                                    })
                                                }
                                            />
                                            <BorderControl
                                                label={__('Border', 'zolo-blocks')}
                                                controlName={CBTN_BORDER}
                                                resRequiredProps={resRequiredProps}
                                            />
                                            <BoxShadowControl controlName={CBTN_SHADOW} resRequiredProps={resRequiredProps} />
                                            <NormalBGControl
                                                noMainBGImg={true}
                                                controlName={CBTN_NORMAL_BG}
                                                resRequiredProps={resRequiredProps}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Text Color', 'zolo-blocks')}
                                                color={chatBtnHoverColor}
                                                onChange={(val) =>
                                                    setAttributes({
                                                        chatBtnHoverColor: val,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Border Color', 'zolo-blocks')}
                                                color={chatBtnHoverBorderColor}
                                                onChange={(val) =>
                                                    setAttributes({
                                                        chatBtnHoverBorderColor: val,
                                                    })
                                                }
                                            />
                                            <BoxShadowControl controlName={CBTN_HOVER_SHADOW} resRequiredProps={resRequiredProps} />
                                            <NormalBGControl
                                                noMainBGImg={true}
                                                controlName={CBTN_HOVER_BG}
                                                resRequiredProps={resRequiredProps}
                                            />
                                        </>
                                    }
                                />
                            </PanelBody>
                        )}

                        <PanelBody title={__('Ribbon', 'zolo-blocks')} initialOpen={false}>
                            <TypographyDropdown
                                label="Typography"
                                typoPrefixConstant={RIBBON_TYPOGRAPHY}
                                resRequiredProps={resRequiredProps}
                            />
                            <ColorControl
                                label={__('Color', 'zolo-blocks')}
                                color={ribbonColor}
                                onChange={(val) =>
                                    setAttributes({
                                        ribbonColor: val,
                                    })
                                }
                            />
                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={RIBBON_BORDER}
                                resRequiredProps={resRequiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={RIBBON_RADIUS}
                                resRequiredProps={resRequiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={RIBBON_PADDING}
                                resRequiredProps={resRequiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={RIBBON_MARGIN}
                                resRequiredProps={resRequiredProps}
                                forBorderRadius={false}
                            />
                            <NormalBGControl noMainBGImg={true} controlName={RIBBON_BG} resRequiredProps={resRequiredProps} />
                        </PanelBody>
                    </>
                }
                advancedTab={<></>}
            />
        </InspectorControls>
    );
};

export default Inspector;
