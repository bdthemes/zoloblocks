import { memo } from '@wordpress/element';
/**
 * Internal depencencies
 */
const {
    ColorControl,
    HeaderTabs,
    ResDimensionsControl,
    NormalBGControl,
    BorderControl,
    TypographyDropdown,
    AdvancedOptions,
    ZoloPanelBody,
    TabPanelControl,
    ResRangeControl,
} = window.zoloModule;
import Sortable from './sortable';

/**
 * WordPress depencencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import objAttributes from './attributes';

import {
    ITEM_GAP,
    BUSINESS_ITEM_BG,
    BUSINESS_ITEM_ODD_BG,
    BUSINESS_ITEM_RADIUS,
    BUSINESS_ITEM_BORDER,
    BUSINESS_ITEM_MARGIN,
    BUSINESS_ITEM_PADDING,
    DAYS_BG,
    DAYS_RADIUS,
    DAYS_PADDING,
    //closed day
    CLOSED_DAYS_BG,
    CLOSED_DAYS_RADIUS,
    CLOSED_DAYS_PADDING,
    TIMES_BG,
    TIMES_RADIUS,
    TIMES_PADDING,
    //closed time
    CLOSED_TIMES_BG,
    CLOSED_TIMES_RADIUS,
    CLOSED_TIMES_PADDING,
    PRESETOPTION,
    PANEL_OPTION,
    TIME_OPTION,
    DAYS_OPTION,
} from './constants';

import {} from '../../../src/global/constants';

import { DAYS_TYPO, TIMES_TYPO, CLOSED_DAYS_TYPO, CLOSED_TIMES_TYPO } from './constants/typoPrefixConstant';
import { CardDivider } from '@wordpress/components';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { resMode, preset, businessList, dayColor, CloseddayColor, timeColor, timeclosedColor, separatColor } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    /**
     * Preset
     */

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <SelectControl
                                label={__('Preset', 'zoloblocks')}
                                value={preset}
                                options={PRESETOPTION}
                                onChange={(v) => {
                                    setAttributes({ preset: v });
                                }}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Business List', 'zoloblocks')} panelProps={props}>
                            <Sortable businessList={businessList} setAttributes={setAttributes} />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            {preset == 'zolo-biz-hours-style-1' && (
                                <NormalBGControl
                                    requiredProps={requiredProps}
                                    controlName={BUSINESS_ITEM_BG}
                                    noOverlay={false}
                                    noMainBGImg={false}
                                />
                            )}
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={BUSINESS_ITEM_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={BUSINESS_ITEM_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <CardDivider />
                            <BorderControl
                                label={__('Border', 'zoloblocks')}
                                controlName={BUSINESS_ITEM_BORDER}
                                requiredProps={requiredProps}
                            />

                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={BUSINESS_ITEM_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <CardDivider />
                            <ResRangeControl label={__('Gap', 'zoloblocks')} controlName={ITEM_GAP} requiredProps={requiredProps} />

                            {preset === 'zolo-biz-hours-style-2' && (
                                <TabPanelControl
                                    options={PANEL_OPTION}
                                    normalComponents={
                                        <NormalBGControl
                                            label={__('Background', 'zoloblocks')}
                                            requiredProps={requiredProps}
                                            controlName={BUSINESS_ITEM_ODD_BG}
                                            noOverlay={false}
                                            noMainBGImg={false}
                                        />
                                    }
                                    hoverComponents={
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={BUSINESS_ITEM_BG}
                                            noOverlay={false}
                                            noMainBGImg={false}
                                        />
                                    }
                                />
                            )}
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Days', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                options={DAYS_OPTION}
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={dayColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    dayColor: value,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={DAYS_TYPO}
                                            requiredProps={requiredProps}
                                            max={36}
                                        />

                                        <CardDivider />
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={DAYS_BG}
                                            noOverlay={false}
                                            noMainBGImg={true}
                                        />

                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={DAYS_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <CardDivider />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={DAYS_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={CloseddayColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    CloseddayColor: value,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={CLOSED_DAYS_TYPO}
                                            requiredProps={requiredProps}
                                            max={36}
                                        />
                                        <CardDivider />
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={CLOSED_DAYS_BG}
                                            noOverlay={false}
                                            noMainBGImg={true}
                                        />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={CLOSED_DAYS_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <CardDivider />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={CLOSED_DAYS_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Times', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={timeColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    timeColor: value,
                                                })
                                            }
                                        />
                                        <ColorControl
                                            label={__('Separator Color', 'zoloblocks')}
                                            color={separatColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    separatColor: value,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={TIMES_TYPO}
                                            requiredProps={requiredProps}
                                            max={36}
                                        />

                                        <CardDivider />

                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={TIMES_BG}
                                            noOverlay={false}
                                            noMainBGImg={true}
                                        />

                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={TIMES_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <CardDivider />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={TIMES_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={timeclosedColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    timeclosedColor: value,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={CLOSED_TIMES_TYPO}
                                            requiredProps={requiredProps}
                                            max={36}
                                        />
                                        <CardDivider />

                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={CLOSED_TIMES_BG}
                                            noOverlay={false}
                                            noMainBGImg={true}
                                        />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={CLOSED_TIMES_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <CardDivider />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={CLOSED_TIMES_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                                options={TIME_OPTION}
                            />
                        </ZoloPanelBody>
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
}

export default memo(Inspector);
