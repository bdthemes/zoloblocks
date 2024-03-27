/**
 * Internal depencencies
 */
const {
    ResRangeControl,
    ColorControl,
    HeaderTabs,
    ResDimensionsControl,
    NormalBGControl,
    BorderControl,
    BoxShadowControl,
    TypographyDropdown,
    AdvancedOptions,
    ZoloPanelBody,
    IconicBtnGroup,
    ImageAvatar,
    RangeResetControl,
    TabPanelControl,
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
    BUSINESS_ITEM_BG,
    BUSINESS_ITEM_ODD_BG,
    BUSINESS_ITEM_RADIUS,
    BUSINESS_ITEM_BORDER,
    BUSINESS_ITEM_MARGIN,
    BUSINESS_ITEM_PADDING,
    DAYS_BG,
    DAYS_RADIUS,
    DAYS_PADDING,
    TIMES_BG,
    TIMES_RADIUS,
    TIMES_PADDING,
    PRESETOPTION,
} from './constants';

import {} from '../../../src/global/constants';

import { DAYS_TYPO, TIMES_TYPO } from './constants/typoPrefixConstant';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { resMode, preset, businessList, dayColor, timeColor } = attributes;

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
                        <ZoloPanelBody title={__('General', 'zolo-blocks')} firstOpen={true} panelProps={props}>
                            <SelectControl
                                label={__('Preset', 'zolo-blocks')}
                                value={preset}
                                options={PRESETOPTION}
                                onChange={(v) => {
                                    setAttributes({ preset: v });
                                }}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Business List', 'zolo-blocks')} panelProps={props}>
                            <Sortable businessList={businessList} setAttributes={setAttributes} />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item', 'zolo-blocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            {preset == 'zolo-biz-hours-style-2' && (
                                <NormalBGControl
                                    label={__('Background Odd', 'zolo-blocks')}
                                    requiredProps={requiredProps}
                                    controlName={BUSINESS_ITEM_ODD_BG}
                                    noOverlay={true}
                                    noMainBGImg={false}
                                />
                            )}

                            <NormalBGControl
                                requiredProps={requiredProps}
                                controlName={BUSINESS_ITEM_BG}
                                noOverlay={true}
                                noMainBGImg={false}
                            />

                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={BUSINESS_ITEM_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={BUSINESS_ITEM_BORDER}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={BUSINESS_ITEM_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('padding', 'zolo-blocks')}
                                controlName={BUSINESS_ITEM_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Days', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <ColorControl
                                label={__('Color', 'zolo-blocks')}
                                color={dayColor}
                                onChange={(value) =>
                                    setAttributes({
                                        dayColor: value,
                                    })
                                }
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={DAYS_TYPO}
                                requiredProps={requiredProps}
                                max={36}
                            />
                            <NormalBGControl requiredProps={requiredProps} controlName={DAYS_BG} noOverlay={true} noMainBGImg={false} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={DAYS_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={DAYS_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Times', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <ColorControl
                                label={__('Color', 'zolo-blocks')}
                                color={timeColor}
                                onChange={(value) =>
                                    setAttributes({
                                        timeColor: value,
                                    })
                                }
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={TIMES_TYPO}
                                requiredProps={requiredProps}
                                max={36}
                            />
                            <NormalBGControl requiredProps={requiredProps} controlName={TIMES_BG} noOverlay={true} noMainBGImg={false} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={TIMES_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={TIMES_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
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

export default Inspector;
