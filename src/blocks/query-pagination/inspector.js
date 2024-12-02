import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, TextControl, ToggleControl, CardDivider } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';
import {
    PAGINATION_ALIGN,
    PAGINATION_PADDING,
    PAGINATION_MARGIN,
    PAGINATION_BG,
    PAGINATION_BORDER,
    PAGINATION_BORDER_RADIUS,
    PAGINATION_SHADOW,
    PAGINATION_HOVER_BG,
    PAGINATION_HOVER_SHADOW,
    PAGINATION_ACTIVE_BG,
    PAGINATION_ACTIVE_SHADOW,
} from './constants';

import { PAGINATION_TYPOGRAPHY } from './constants/typoPrefixConstant';
import { DEFAULT_ALIGNS, HEADING } from '../../../src/global/constants';

const {
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
    const {
        resMode,
        paginationType,
        paginationColor,
        paginationHoverColor,
        paginationHoverBorderColor,
        paginationActiveColor,
        paginationActiveBorderColor,
    } = attributes;

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
                                    },
                                ]}
                                onChange={(paginationType) => setAttributes({ paginationType })}
                            />
                            {attributes?.paginationType?.includes('number') && (
                                <>
                                    <div className="zolo-custom-heading">{__('show/hide elements', 'zoloblocks')}</div>
                                    <ToggleControl
                                        label={__('Truncate Pagination Numbers', 'zoloblocks')}
                                        checked={attributes?.truncatePaginationNumbers}
                                        onChange={(value) => setAttributes({ truncatePaginationNumbers: value })}
                                    />
                                    {attributes?.truncatePaginationNumbers && (
                                        <RangeResetControl
                                            className="zolo-flex-row-control"
                                            label={__('items both sides', 'zoloblocks')}
                                            controlName={'PaginationNumberAmountBothSides'}
                                            requiredProps={requiredProps}
                                            min={1}
                                            max={5}
                                            step={1}
                                        />
                                    )}
                                </>
                            )}
                        </ZoloPanelBody>
                        {paginationType?.includes('previous-next') && (
                            <ZoloPanelBody title={__('Navigation', 'zoloblocks')} panelProps={props}>
                                <SelectControl
                                    label={__('Type', 'zoloblocks')}
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
                                        },
                                    ]}
                                    value={attributes?.paginationNextPrevType}
                                    onChange={(value) => setAttributes({ paginationNextPrevType: value })}
                                />

                                {attributes?.paginationNextPrevType?.includes('text') && (
                                    <>
                                        <CardDivider />
                                        <TextControl
                                            label={__('Prev', 'zoloblocks')}
                                            value={attributes?.paginationPreviousText}
                                            onChange={(value) => setAttributes({ paginationPreviousText: value })}
                                        />
                                        <TextControl
                                            label={__('Next', 'zoloblocks')}
                                            value={attributes?.paginationNextText}
                                            onChange={(value) => setAttributes({ paginationNextText: value })}
                                        />
                                    </>
                                )}
                                {attributes?.paginationNextPrevType?.includes('icon') && (
                                    <>
                                        <div className="zolo-custom-heading">{__('Icons', 'zoloblocks')}</div>
                                        <ZoloIconPicker
                                            label={__('Previous', 'zoloblocks')}
                                            value={attributes?.prevIcon}
                                            onChange={(value) => setAttributes({ prevIcon: value })}
                                        />

                                        <ZoloIconPicker
                                            label={__('Next', 'zoloblocks')}
                                            value={attributes?.nextIcon}
                                            onChange={(value) => setAttributes({ nextIcon: value })}
                                        />
                                    </>
                                )}
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Pagination', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
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
                                    {
                                        value: 'active',
                                        label: __('Active', 'zoloblocks'),
                                    },
                                ]}
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={paginationColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    paginationColor: color,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={PAGINATION_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                        />
                                        <CardDivider />
                                        <NormalBGControl requiredProps={requiredProps} controlName={PAGINATION_BG} noMainBGImg={true} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={PAGINATION_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={PAGINATION_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={PAGINATION_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl controlName={PAGINATION_SHADOW} requiredProps={requiredProps} />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={PAGINATION_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={paginationHoverColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    paginationHoverColor: color,
                                                })
                                            }
                                        />
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={PAGINATION_HOVER_BG}
                                            noMainBGImg={true}
                                        />
                                        <CardDivider />
                                        <ColorControl
                                            label={__('Border Color', 'zoloblocks')}
                                            color={paginationHoverBorderColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    paginationHoverBorderColor: color,
                                                })
                                            }
                                        />
                                        <BoxShadowControl controlName={PAGINATION_HOVER_SHADOW} requiredProps={requiredProps} />
                                    </>
                                }
                                activeComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={paginationActiveColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    paginationActiveColor: color,
                                                })
                                            }
                                        />
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={PAGINATION_ACTIVE_BG}
                                            noMainBGImg={true}
                                        />
                                        <CardDivider />
                                        <ColorControl
                                            label={__('Border Color', 'zoloblocks')}
                                            color={paginationActiveBorderColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    paginationActiveBorderColor: color,
                                                })
                                            }
                                        />
                                        <BoxShadowControl controlName={PAGINATION_ACTIVE_SHADOW} requiredProps={requiredProps} />
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
