import { memo } from '@wordpress/element';
/**
 * WordPress dependencies
 */

import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, TextControl, RangeControl, CardDivider } from '@wordpress/components';

import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    ResAlignmentControl,
    ResRangeControl,
    ColorControl,
    TypographyDropdown,
    HeaderTabs,
    TabPanelControl,
    AdvancedOptions,
    ZoloPanelBody,
    SimpleRangeControl,
    PopoverControl,
} = window.zoloModule;

import objAttributes from './attributes';

import { NUMBER_TYPO, TITLE_TYPO } from './constants/typoPrefixConstant';
import { PROGRESS_BAR_SIZE, CIRCLE_OPTION, NUMBER_SPACE, NUMBER_BOTTOM_SPACE } from './constants';
import { DEFAULT_ALIGNS } from '../../../src/global/constants';
import MultiColor from './multicolor';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { resMode, progressPie, progPieMultiColor } = attributes;
    const {
        value,
        duration,
        title,
        toggleLabel,
        size,
        round,
        prefix,
        suffix,
        toggleSuffixPrefix,
        fillColor,
        fillSize,
        numberColor,
        titleColor,
        circleColor,
        suffixColor,
        prefixColor,
    } = progressPie;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/prgress-pie"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <div className="zolo-custom-heading">{__('show/hide elementts', 'zoloblocks')}</div>
                            <ToggleControl
                                label={__('Label', 'zoloblocks')}
                                checked={toggleLabel === undefined ? true : toggleLabel}
                                onChange={(v) =>
                                    setAttributes({
                                        progressPie: { ...progressPie, toggleLabel: v },
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Suffix & Prefix', 'zoloblocks')}
                                checked={toggleSuffixPrefix === undefined ? true : toggleSuffixPrefix}
                                onChange={(v) =>
                                    setAttributes({
                                        progressPie: { ...progressPie, toggleSuffixPrefix: v },
                                    })
                                }
                            />
                            <div className="zolo-custom-heading">{__('Progress', 'zoloblocks')}</div>
                            <div className="zolo-flex-col-control">
                                <RangeControl
                                    label={__('Percent (%)', 'zoloblocks')}
                                    value={value}
                                    onChange={(v) =>
                                        setAttributes({
                                            progressPie: { ...progressPie, value: v },
                                        })
                                    }
                                    min={0}
                                    max={100}
                                />
                            </div>
                            <div className="zolo-flex-col-control">
                                <SimpleRangeControl
                                    label={__('Percent Thickness', 'zoloblocks')}
                                    onChange={(v) =>
                                        setAttributes({
                                            progressPie: { ...progressPie, size: v },
                                        })
                                    }
                                    value={size}
                                    onReset={() =>
                                        setAttributes({
                                            progressPie: { ...progressPie, size: '' },
                                        })
                                    }
                                    min={1}
                                    max={100}
                                    step={1}
                                    noUnits={true}
                                />
                            </div>
                            <div className="zolo-flex-col-control">
                                <SimpleRangeControl
                                    label={__('Fill Thickness', 'zoloblocks')}
                                    onChange={(v) =>
                                        setAttributes({
                                            progressPie: { ...progressPie, fillSize: v },
                                        })
                                    }
                                    value={fillSize}
                                    onReset={() =>
                                        setAttributes({
                                            progressPie: { ...progressPie, fillSize: '' },
                                        })
                                    }
                                    min={1}
                                    max={100}
                                    step={1}
                                    noUnits={true}
                                />
                            </div>
                            <div className="zolo-flex-col-control">
                                <RangeControl
                                    label={__('Duration (s)', 'zoloblocks')}
                                    value={duration}
                                    onChange={(v) => setAttributes({ progressPie: { ...progressPie, duration: v } })}
                                    min={0}
                                    max={20}
                                />
                            </div>
                        </ZoloPanelBody>
                        {(toggleSuffixPrefix == undefined || toggleSuffixPrefix == true) && (
                            <ZoloPanelBody title={__('Suffix & Prefix', 'zoloblocks')} panelProps={props}>
                                <TextControl
                                    label={__('Suffix', 'zoloblocks')}
                                    value={suffix}
                                    onChange={(v) =>
                                        setAttributes({
                                            progressPie: { ...progressPie, suffix: v },
                                        })
                                    }
                                    placeholder={__('%', 'zoloblocks')}
                                />
                                <TextControl
                                    label={__('Prefix', 'zoloblocks')}
                                    value={prefix}
                                    onChange={(v) =>
                                        setAttributes({
                                            progressPie: { ...progressPie, prefix: v },
                                        })
                                    }
                                    placeholder={__('$', 'zoloblocks')}
                                />
                            </ZoloPanelBody>
                        )}

                        {(toggleLabel == undefined || toggleLabel == true) && (
                            <ZoloPanelBody title={__('Label', 'zoloblocks')} panelProps={props}>
                                <TextControl
                                    label={__('Text', 'zoloblocks')}
                                    value={title}
                                    onChange={(v) =>
                                        setAttributes({
                                            progressPie: { ...progressPie, title: v },
                                        })
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Progress', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <PopoverControl
                                label={__('Percent Color', 'zoloblocks')}
                                children={
                                    <>
                                        <MultiColor progPieMultiColor={progPieMultiColor} setAttributes={setAttributes} />
                                    </>
                                }
                            />

                            <ColorControl
                                label={__('Fill Color', 'zoloblocks')}
                                color={fillColor}
                                onChange={(color) =>
                                    setAttributes({
                                        progressPie: { ...progressPie, fillColor: color },
                                    })
                                }
                            />
                            <CardDivider />
                            <ResRangeControl
                                label={__('Size', 'zoloblocks')}
                                controlName={PROGRESS_BAR_SIZE}
                                requiredProps={requiredProps}
                                min={0}
                                max={500}
                                step={1}
                            />
                            <CardDivider />
                            <ToggleControl
                                label={__('Rounded', 'zoloblocks')}
                                checked={round}
                                onChange={() =>
                                    setAttributes({
                                        progressPie: { ...progressPie, round: !round },
                                    })
                                }
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Content', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <ColorControl
                                label={__('Background', 'zoloblocks')}
                                color={circleColor}
                                onChange={(value) =>
                                    setAttributes({
                                        progressPie: { ...progressPie, circleColor: value },
                                    })
                                }
                            />

                            <TabPanelControl
                                options={CIRCLE_OPTION}
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={numberColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    progressPie: { ...progressPie, numberColor: value },
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={NUMBER_TYPO}
                                            requiredProps={requiredProps}
                                        />
                                        <CardDivider />
                                        <ResRangeControl
                                            label={__('Bottom Spacing', 'zoloblocks')}
                                            controlName={NUMBER_BOTTOM_SPACE}
                                            requiredProps={requiredProps}
                                        />

                                        {toggleSuffixPrefix && (
                                            <>
                                                <div className="zolo-custom-heading">{__('Suffix & Prefix', 'zoloblocks')}</div>
                                                {suffix !== '' && (
                                                    <ColorControl
                                                        label={__('Suffix Color', 'zoloblocks')}
                                                        color={suffixColor}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                progressPie: { ...progressPie, suffixColor: value },
                                                            })
                                                        }
                                                    />
                                                )}
                                                {prefix !== '' && (
                                                    <ColorControl
                                                        label={__('Prefix Color', 'zoloblocks')}
                                                        color={prefixColor}
                                                        onChange={(value) =>
                                                            setAttributes({
                                                                progressPie: { ...progressPie, prefixColor: value },
                                                            })
                                                        }
                                                    />
                                                )}
                                                <ResRangeControl
                                                    label={__('Spacing', 'zoloblocks')}
                                                    controlName={NUMBER_SPACE}
                                                    requiredProps={requiredProps}
                                                />
                                            </>
                                        )}
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        {toggleLabel && (
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={titleColor}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            progressPie: { ...progressPie, titleColor: value },
                                                        })
                                                    }
                                                />
                                                <TypographyDropdown
                                                    label={__('Typography', 'zoloblocks')}
                                                    typoPrefixConstant={TITLE_TYPO}
                                                    requiredProps={requiredProps}
                                                    max={36}
                                                />
                                            </>
                                        )}
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
                            block="zolo/progress-pie"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
export default memo(Inspector);
