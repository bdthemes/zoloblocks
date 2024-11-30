import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, TextControl, ToggleControl, CardDivider } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';
import {
    TITLE_ALIGN,
    TITLE_PADDING,
    TITLE_MARGIN,
    TITLE_BG,
    TITLE_BORDER,
    TITLE_BORDER_RADIUS,
    TITLE_SHADOW,
    TITLE_TEXT_SHADOW,
    TITLE_TEXT_STROKE,
    TITLE_HOVER_BG,
    TITLE_HOVER_BORDER,
    TITLE_HOVER_BRADIUS,
    TITLE_HOVER_SHADOW,
} from './constants';

import { TITLE_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { DEFAULT_ALIGNS, HEADING } from '../../../src/global/constants';

const {
    TextShadowControl,
    TextStrokeControl,
    ResDimensionsControl,
    NormalBGControl,
    BorderControl,
    BoxShadowControl,
    HeaderTabs,
    TabPanelControl,
    ColorControl,
    TypographyDropdown,
    ResAlignmentControl,
    ZoloIconPicker,
    RangeResetControl,
    AdvancedOptions,
    ZoloPanelBody,
} = window.zoloModule;

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { resMode, paginationType, titleColor, titleHoverColor } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };
    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/post-title"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('Pagination', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <SelectControl
                                label={__('Type', 'zoloblocks')}
                                value={paginationType}
                                options={[
                                    {
                                        label: __('Number', 'zoloblocks'),
                                        value: 'number',
                                    },
                                    {
                                        label: __('Previous/Next', 'zoloblocks'),
                                        value: 'previous-next',
                                    },
                                    {
                                        label: __('Number + Previous/Next', 'zoloblocks'),
                                        value: 'number-previous-next',
                                    }
                                ]}
                                onChange={(paginationType) => setAttributes({ paginationType })}
                            />
                            {
                                attributes?.paginationType?.includes('number') && (
                                    <>
                                        <ToggleControl
                                            label={__('Truncate Pagination Numbers', 'zoloblocks')}
                                            checked={attributes?.truncatePaginationNumbers}
                                            onChange={(value) => setAttributes({ truncatePaginationNumbers: value })}
                                        />
                                        {
                                            attributes?.truncatePaginationNumbers && (
                                                <RangeResetControl
                                                    className="zolo-flex-row-control"
                                                    label={__('items both sides', 'zoloblocks')}
                                                    controlName={'PaginationNumberAmountBothSides'}
                                                    requiredProps={requiredProps}
                                                    min={1}
                                                    max={5}
                                                    step={1}
                                                />
                                            )
                                        }


                                    </>
                                )
                            }
                            {paginationType?.includes('previous-next') && (
                                <>
                                    <SelectControl
                                        label={__('Previous / Next Type', 'zoloblocks')}
                                        options={[
                                            {
                                                label: __('Text', 'zoloblocks'),
                                                value: 'text',
                                            },
                                            {
                                                label: __('Icon', 'zoloblocks'),
                                                value: 'icon',
                                            },
                                            {
                                                label: __('Icon & Text', 'zoloblocks'),
                                                value: 'icon-text',
                                            }
                                        ]}
                                        value={attributes?.paginationNextPrevType}
                                        onChange={(value) => setAttributes({ paginationNextPrevType: value })}
                                    />

                                    {
                                        (attributes?.paginationNextPrevType?.includes('text')) && (
                                            <>
                                                <TextControl
                                                    label={__('Previous Label', 'zoloblocks')}
                                                    value={attributes?.paginationPreviousText}
                                                    onChange={(value) => setAttributes({ paginationPreviousText: value })}
                                                />
                                                <TextControl
                                                    label={__('Next Label', 'zoloblocks')}
                                                    value={attributes?.paginationNextText}
                                                    onChange={(value) => setAttributes({ paginationNextText: value })}
                                                />
                                            </>
                                        )
                                    }
                                    {attributes?.paginationNextPrevType?.includes('icon') && (
                                        <>
                                            <ZoloIconPicker
                                                label={__('Prev Icon', 'zoloblocks')}
                                                value={attributes?.prevIcon}
                                                onChange={value => setAttributes({ prevIcon: value })}
                                            />

                                            <ZoloIconPicker
                                                label={__('Next Icon', 'zoloblocks')}
                                                value={attributes?.nextIcon}
                                                onChange={value => setAttributes({ nextIcon: value })}
                                            />
                                        </>
                                    )}
                                </>
                            )}
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Title', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                options={[
                                    {
                                        value: 'normal',
                                        label: __('Normal', 'zoloblocks'),
                                    },
                                    {
                                        value: 'hover',
                                        label: __('Hover', 'zoloblocks'),
                                    },
                                ]}
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={titleColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    titleColor: color,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={TITLE_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                        />
                                        <TextShadowControl
                                            controlName={TITLE_TEXT_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <TextStrokeControl
                                            controlName={TITLE_TEXT_STROKE}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <CardDivider />
                                        <NormalBGControl requiredProps={requiredProps} controlName={TITLE_BG} noMainBGImg={true} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={TITLE_PADDING}
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
                                        <BoxShadowControl controlName={TITLE_SHADOW} requiredProps={requiredProps} />
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
                                            color={titleHoverColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    titleHoverColor: color,
                                                })
                                            }
                                        />
                                        <NormalBGControl requiredProps={requiredProps} controlName={TITLE_HOVER_BG} noMainBGImg={true} />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={TITLE_HOVER_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl controlName={TITLE_HOVER_SHADOW} requiredProps={requiredProps} />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={TITLE_HOVER_BRADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
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
                            block="zolo/post-title"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
