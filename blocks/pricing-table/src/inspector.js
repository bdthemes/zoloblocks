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
    AdvancedOptions,
    IconicBtnGroup,
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

const Inspector = ({ attributes, setAttributes }) => {
    const {
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
        //tab & panel
        selectedPanel,
        selectedTab,
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
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <PanelBody
                            title={__('General', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'general' })}
                            opened={selectedPanel === 'general'}
                        >
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
                            <ResAlignmentControl
                                label={__('Alignment', 'zolo-blocks')}
                                controlName={ALIGNENT}
                                requiredProps={requiredProps}
                                alignOptions={DEFAULT_ALIGNS}
                            />
                        </PanelBody>
                        {showRibbon && (
                            <PanelBody
                                title={__('Ribbon', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'ribbon' })}
                                opened={selectedPanel === 'ribbon'}
                            >
                                <TextControl
                                    label={__('Title', 'zolo-blocks')}
                                    value={ribbonTitle}
                                    onChange={(ribbonTitle) => setAttributes({ ribbonTitle })}
                                />
                                <RangeResetControl
                                    label={__('Horizontal Position', 'zolo-blocks')}
                                    controlName={'ribbonXPosition'}
                                    requiredProps={requiredProps}
                                    min={-150}
                                    max={150}
                                    step={1}
                                />
                                <RangeResetControl
                                    label={__('Vertical Position', 'zolo-blocks')}
                                    controlName={'ribbonYPosition'}
                                    requiredProps={requiredProps}
                                    min={-150}
                                    max={150}
                                    step={1}
                                />

                                <RangeResetControl
                                    label={__('Rotate', 'zolo-blocks')}
                                    controlName={'ribbonRotate'}
                                    requiredProps={requiredProps}
                                    min={-180}
                                    max={180}
                                    step={1}
                                />
                                <IconicBtnGroup
                                    label={__('Position', 'zolo-blocks')}
                                    value={ribbonPosition}
                                    onChange={(value) =>
                                        setAttributes({
                                            ribbonPosition: value,
                                        })
                                    }
                                    options={RIBBON_POSITIONS}
                                />
                            </PanelBody>
                        )}

                        <PanelBody
                            title={__('Header', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'header' })}
                            opened={selectedPanel === 'header'}
                        >
                            <TextControl
                                label={__('Title', 'zolo-blocks')}
                                value={titleText}
                                onChange={(titleText) => setAttributes({ titleText })}
                            />
                            <SelectControl
                                label={__('HTML Tag', 'zolo-blocks')}
                                value={titleTagName}
                                options={HEADING}
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

                        <PanelBody
                            title={__('Price', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'price' })}
                            opened={selectedPanel === 'price'}
                        >
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

                        <PanelBody
                            title={__('Features', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'features' })}
                            opened={selectedPanel === 'features'}
                        >
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
                            <PanelBody
                                title={__('Primary Button', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'primaryBtn' })}
                                opened={selectedPanel === 'primaryBtn'}
                            >
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
                            <PanelBody
                                title={__('Chat Button', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'chatBtn' })}
                                opened={selectedPanel === 'chatBtn'}
                            >
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
                        <PanelBody
                            title={__('Item Container', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'itemContainerStyle' })}
                            opened={selectedPanel === 'itemContainerStyle'}
                        >
                            <BorderControl label={__('Border', 'zolo-blocks')} controlName={WRAPPER_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={WRAPPER_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl label="Margin" controlName={WRAPPER_MARGIN} requiredProps={requiredProps} />
                            <ResDimensionsControl label="Padding" controlName={WRAPPER_PADDING} requiredProps={requiredProps} />
                            <BoxShadowControl controlName={WRAPPER_SHADOW} requiredProps={requiredProps} />
                            <BackgroundControl controlName={WRAPPER_BG} requiredProps={requiredProps} />
                        </PanelBody>
                        <PanelBody
                            title={__('Header', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'headerStyle' })}
                            opened={selectedPanel === 'headerStyle'}
                        >
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={TITLE_PADDING}
                                requiredProps={requiredProps}
                            />
                        </PanelBody>
                        <PanelBody
                            title={__('Header Content', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'headerContentStyle' })}
                            opened={selectedPanel === 'headerContentStyle'}
                        >
                            <TypographyDropdown
                                label={__('Title Typography', 'zolo-blocks')}
                                typoPrefixConstant={TITLE_TYPOGRAPHY}
                                requiredProps={requiredProps}
                            />

                            <BorderControl label={__('Border', 'zolo-blocks')} controlName={TITLE_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={TITLE_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={TITLE_TEXT_PADDING}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={TITLE_MARGIN}
                                requiredProps={requiredProps}
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
                            <NormalBGControl noMainBGImg={true} controlName={TITLE_BG} requiredProps={requiredProps} />
                            <TextShadowControl controlName={TITLE_TEXT_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            {showDesc && (
                                <>
                                    <Divider />
                                    <BaseControl>
                                        <h3 className="zolo-devider-title"> {__('Description ', 'zolo-blocks')} </h3>
                                    </BaseControl>

                                    <TypographyDropdown
                                        label="Typography"
                                        typoPrefixConstant={DESC_TYPOGRAPHY}
                                        requiredProps={requiredProps}
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
                                        requiredProps={requiredProps}
                                    />
                                </>
                            )}
                        </PanelBody>
                        <PanelBody
                            title={__('Pricing', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'pricingStyle' })}
                            opened={selectedPanel === 'pricingStyle'}
                        >
                            <TypographyDropdown label="Typography" typoPrefixConstant={PRICE_TYPOGRAPHY} requiredProps={requiredProps} />

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
                                requiredProps={requiredProps}
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
                                        requiredProps={requiredProps}
                                        min={0}
                                        max={100}
                                        step={1}
                                    />
                                    <RangeResetControl
                                        label={__('Position', 'zolo-blocks')}
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
                                        <h3 className="zolo-devider-title"> {__('Suffix ', 'zolo-blocks')} </h3>
                                    </BaseControl>
                                    <RangeResetControl
                                        label={__('Size', 'zolo-blocks')}
                                        controlName={'suffixSize'}
                                        requiredProps={requiredProps}
                                        min={0}
                                        max={100}
                                        step={1}
                                    />
                                    <RangeResetControl
                                        label={__('Position', 'zolo-blocks')}
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
                                        <h3 className="zolo-devider-title"> {__('Orginal Price ', 'zolo-blocks')} </h3>
                                    </BaseControl>

                                    <TypographyDropdown
                                        label="Typography"
                                        typoPrefixConstant={ORGINAL_PRICE_TYPOGRAPHY}
                                        requiredProps={requiredProps}
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
                                        requiredProps={requiredProps}
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
                                        requiredProps={requiredProps}
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
                                        requiredProps={requiredProps}
                                    />
                                </>
                            )}
                        </PanelBody>
                        <PanelBody
                            title={__('Separator', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'separatorStyle' })}
                            opened={selectedPanel === 'separatorStyle'}
                        >
                            <ResRangeControl
                                label={__('Width', 'zolo-blocks')}
                                controlName={SEPARATOR_WIDTH}
                                requiredProps={requiredProps}
                                min={0}
                                max={10}
                                step={1}
                            />
                            <ColorControl
                                label={__('Color', 'zolo-blocks')}
                                color={separatorColor}
                                onChange={(val) =>
                                    setAttributes({
                                        separatorColor: val,
                                    })
                                }
                            />
                        </PanelBody>
                        <PanelBody
                            title={__('Features', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'featuresStyle' })}
                            opened={selectedPanel === 'featuresStyle'}
                        >
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={FEATURE_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                        </PanelBody>
                        <PanelBody
                            title={__('Features Content', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'featuresContentStyle' })}
                            opened={selectedPanel === 'featuresContentStyle'}
                        >
                            {showFeatureHeading && (
                                <>
                                    <TypographyDropdown
                                        label="Title Typography"
                                        typoPrefixConstant={FEATURE_TITLE_TYPOGRAPHY}
                                        requiredProps={requiredProps}
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
                                        requiredProps={requiredProps}
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
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
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
                            <TypographyDropdown label="Typography" typoPrefixConstant={FEATURE_TYPOGRAPHY} requiredProps={requiredProps} />

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
                                requiredProps={requiredProps}
                                controlName={FEATURE_ITEM_GAP}
                                min={0}
                                max={100}
                                step={1}
                            />

                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={FEATURE_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />

                            <CardDivider />
                            <ResDimensionsControl
                                label={__('Icon Padding', 'zolo-blocks')}
                                controlName={FEATURE_ICON_PADDING}
                                requiredProps={requiredProps}
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
                                requiredProps={requiredProps}
                                controlName={FEATURE_ICON_SIZE}
                                min={0}
                                max={100}
                                step={1}
                            />
                            <ResRangeControl
                                label={__('Icon Gap', 'zolo-blocks')}
                                requiredProps={requiredProps}
                                controlName={FEATURE_ICON_GAP}
                                min={0}
                                max={100}
                                step={1}
                            />
                        </PanelBody>

                        {showBtn && (
                            <PanelBody
                                title={__('Primary Button', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'primaryBtnStyle' })}
                                opened={selectedPanel === 'primaryBtnStyle'}
                            >
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={BTN_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={BTN_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={BTN_PADDING}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={BTN_MARGIN}
                                    requiredProps={requiredProps}
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
                                                requiredProps={requiredProps}
                                            />
                                            <BoxShadowControl controlName={BTN_SHADOW} requiredProps={requiredProps} />
                                            <NormalBGControl noMainBGImg={true} controlName={BTN_NORMAL_BG} requiredProps={requiredProps} />
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
                                            <BoxShadowControl controlName={BTN_HOVER_SHADOW} requiredProps={requiredProps} />
                                            <NormalBGControl noMainBGImg={true} controlName={BTN_HOVER_BG} requiredProps={requiredProps} />
                                        </>
                                    }
                                />
                            </PanelBody>
                        )}
                        {showChatBtn && (
                            <PanelBody
                                title={__('Chat Button', 'zolo-blocks')}
                                onToggle={(value) => value === true && setAttributes({ selectedPanel: 'chatBtnStyle' })}
                                opened={selectedPanel === 'chatBtnStyle'}
                            >
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={CBTN_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={CBTN_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={CBTN_PADDING}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={CBTN_MARGIN}
                                    requiredProps={requiredProps}
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
                                                requiredProps={requiredProps}
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
                                            <BoxShadowControl controlName={CBTN_HOVER_SHADOW} requiredProps={requiredProps} />
                                            <NormalBGControl noMainBGImg={true} controlName={CBTN_HOVER_BG} requiredProps={requiredProps} />
                                        </>
                                    }
                                />
                            </PanelBody>
                        )}

                        <PanelBody
                            title={__('Ribbon', 'zolo-blocks')}
                            onToggle={(value) => value === true && setAttributes({ selectedPanel: 'ribbonStyle' })}
                            opened={selectedPanel === 'ribbonStyle'}
                        >
                            <TypographyDropdown label="Typography" typoPrefixConstant={RIBBON_TYPOGRAPHY} requiredProps={requiredProps} />
                            <ColorControl
                                label={__('Color', 'zolo-blocks')}
                                color={ribbonColor}
                                onChange={(val) =>
                                    setAttributes({
                                        ribbonColor: val,
                                    })
                                }
                            />
                            <BorderControl label={__('Border', 'zolo-blocks')} controlName={RIBBON_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={RIBBON_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={RIBBON_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={RIBBON_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <NormalBGControl noMainBGImg={true} controlName={RIBBON_BG} requiredProps={requiredProps} />
                        </PanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions attributes={attributes} setAttributes={setAttributes} requiredProps={requiredProps} />
                    </>
                }
            />
        </InspectorControls>
    );
};

export default Inspector;
