import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, ToggleControl, TextControl, CardDivider } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import objAttributes from './attributes';
import { TEXT_TYPOGRAPHY, AUTHOR_TYPOGRAPHY, DATE_TYPOGRAPHY } from './constants/typoPrefixConstant';
import {
    PRESETS,
    AVATAR_SIZE,
    GRID_COLUMNS,
    COLUMNS_GAP,
    ITEM_BG,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_PADDING,
    ITEM_SHADOW,
    //meta
    META_SPACING,
    AVATAR_HW_SIZE,
    AVATAR_BORDER,
    AVATAR_BORDER_RADIUS,
    AVATAR_PADDING,
    AVATAR_MARGIN,
    AVATAR_SHADOW,
    DATE_MARGIN,
} from './constants';

const {
    ResDimensionsControl,
    NormalBGControl,
    BorderControl,
    BoxShadowControl,
    HeaderTabs,
    ColorControl,
    TypographyDropdown,
    AdvancedOptions,
    ZoloPanelBody,
    ResGapControl,
    ResCounterControl,
    RangeResetControl,
    ResRangeControl,
    TabPanelControl,
} = window.zoloModule;
export default function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        preset,
        showTitle,
        showText,
        textLimit,
        showAuthor,
        authorMiddleText,
        avatarSize,
        showDate,
        textColor,
        authorColor,
        authorHoverColor,
        dateColor,
    } = attributes;
    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };
    const changePremade = (selected) => {
        setAttributes({ preset: selected });
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/post-grid"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>

                            <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                {__('Show/hide elements', 'zoloblocks')}
                            </div>
                            {showAuthor && (
                                <>
                                    <ToggleControl
                                        label={__('Title', 'zoloblocks')}
                                        checked={showTitle}
                                        onChange={(showTitle) => setAttributes({ showTitle })}
                                    />

                                    {showTitle && (
                                        <>
                                            <TextControl
                                                label={__('Middle Text', 'zoloblocks')}
                                                value={authorMiddleText}
                                                onChange={(value) => setAttributes({ authorMiddleText: value })}
                                            />
                                            <CardDivider />
                                        </>
                                    )}
                                </>
                            )}

                            <ToggleControl
                                label={__('Date', 'zoloblocks')}
                                checked={showDate}
                                onChange={(showDate) => setAttributes({ showDate })}
                            />

                            <ToggleControl
                                label={__('Author', 'zoloblocks')}
                                checked={showAuthor}
                                onChange={(showAuthor) => setAttributes({ showAuthor })}
                            />
                            {showAuthor && (
                                <>
                                    <SelectControl
                                        label={__('Resolution', 'zoloblocks')}
                                        value={avatarSize}
                                        options={AVATAR_SIZE}
                                        onChange={(avatarSize) => setAttributes({ avatarSize })}
                                    />
                                    <CardDivider />
                                </>
                            )}
                            <ToggleControl
                                label={__('Text', 'zoloblocks')}
                                checked={showText}
                                onChange={(showText) => setAttributes({ showText })}
                            />
                            {showText && (
                                <>
                                    <RangeResetControl
                                        label={__('Limit', 'zoloblocks')}
                                        controlName={'textLimit'}
                                        requiredProps={requiredProps}
                                        min={1}
                                        max={100}
                                        step={1}
                                    />
                                    <CardDivider />
                                </>
                            )}
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Grid', 'zoloblocks')} panelProps={props}>
                            <ResCounterControl
                                label={__('Column', 'zoloblocks')}
                                controlName={GRID_COLUMNS}
                                requiredProps={requiredProps}
                                min={1}
                                max={6}
                                defaults={{
                                    deskRange: 3,
                                    tabRange: 2,
                                    mobRange: 1,
                                }}
                            />
                            <ResGapControl
                                label={__('Gap', 'zoloblocks')}
                                controlName={COLUMNS_GAP}
                                requiredProps={requiredProps}
                                max={200}
                            />
                        </ZoloPanelBody>

                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Items', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <NormalBGControl requiredProps={requiredProps} controlName={ITEM_BG} noMainBGImg={true} />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={ITEM_PADDING}
                                requiredProps={requiredProps}
                            />
                            <CardDivider />
                            <BorderControl label={__('Border', 'zoloblocks')} controlName={ITEM_BORDER} requiredProps={requiredProps} />
                            <BoxShadowControl controlName={ITEM_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={ITEM_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                        </ZoloPanelBody>
                        {showAuthor && (
                            <ZoloPanelBody title={__('Author', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    options={[
                                        {
                                            value: 'normal',
                                            label: __('Avatar', 'zoloblocks-pro'),
                                        },
                                        {
                                            value: 'hover',
                                            label: __('Name/Title', 'zoloblocks-pro'),
                                        },
                                    ]}
                                    normalComponents={
                                        <>
                                            <ResRangeControl
                                                label={__('Size', 'zoloblocks')}
                                                controlName={AVATAR_HW_SIZE}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={200}
                                                step={1}
                                            />
                                            <CardDivider />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={AVATAR_PADDING}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={AVATAR_MARGIN}
                                                requiredProps={requiredProps}
                                            />
                                            <CardDivider />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={AVATAR_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <BoxShadowControl
                                                controlName={AVATAR_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={AVATAR_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={authorColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        authorColor: color,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Hover Color', 'zoloblocks')}
                                                color={authorHoverColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        authorHoverColor: color,
                                                    })
                                                }
                                            />
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={AUTHOR_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}

                        {showDate && (
                            <ZoloPanelBody title={__('Date', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={dateColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            dateColor: color,
                                        })
                                    }
                                />
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={DATE_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <CardDivider />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={DATE_MARGIN}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>
                        )}

                        {showText && (
                            <ZoloPanelBody title={__('Text', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={textColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            textColor: color,
                                        })
                                    }
                                />
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={TEXT_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <CardDivider />
                                <ResRangeControl
                                    label={__('Spacing', 'zoloblocks')}
                                    controlName={META_SPACING}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={500}
                                    step={1}
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
                            block="zolo/post-comments-form"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
