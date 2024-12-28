/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    SimpleRangeControl,
    ResRangeControl,
    ResCounterControl,
    ResAlignmentControl,
    ColorControl,
    TypographyDropdown,
    HeaderTabs,
    BorderControl,
    AdvancedOptions,
    ResDimensionsControl,
    BoxShadowControl,
    NormalBGControl,
    TabPanelControl,
    TextShadowControl,
    ZoloPanelBody,
    TextGradientControl,
} = window.zoloModule;

import objAttributes from './attributes';

import { TEXT_TYPO, LINK_TYPO, DROP_CAP_TYPO } from './constants/typoPrefixConstant';
import { TEXT_ALIGN_OPTIONS } from '../../../src/global/constants';

import {
    TEXT_MARGIN,
    COLUMNS,
    COLUMNS_GAP,
    TEXT_ALIGNMENT,
    LINK_BORDER,
    LINK_BOX_SHADOW,
    LINK_BG_COLOR,
    LINK_RADIUS,
    LINK_PADDING,
    HOVER_LINK_BG_COLOR,
    HOVER_LINK_RADIUS,
    HOVER_LINK_PADDING,
    DROP_CAP_SHADOW,
    DROP_CAP_BG_COLOR,
    DROP_CAP_BORDER,
    DROP_CAP_RADIUS,
    DROP_CAP_PADDING,
    DROP_CAP_MARGIN,
    TEXT_GRADIENT_COLOR,
} from './constants';
// import { CardDivider, SelectControl, RangeControl, ToggleControl, Button } from '@wordpress/components';
import { SelectControl, ToggleControl,RangeControl, TextControl, TextareaControl, BaseControl, Button, CardDivider } from '@wordpress/components';


function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
        parentClasses,
        content,
        // text Gradient
        textGradientType,
        textGradientColorbackgroundType,
        fileURL,
        fileId,
        trigger,
        loop,
        direction,
        speed,
        resMode,
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
                block="zolo/textarea"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            {fileURL && (
                                <>
                                    <SelectControl
                                        label={__('Play Animation On', 'zoloblocks')}
                                        value={trigger}
                                        options={[
                                            {
                                                label: __('Page Load', 'zoloblocks'),
                                                value: '',
                                            },
                                            {
                                                label: __('Viewport', 'zoloblocks'),
                                                value: 'viewport',
                                            },
                                            {
                                                label: __('Hover', 'zoloblocks'),
                                                value: 'hover',
                                            },
                                            {
                                                label: __('Click', 'zoloblocks'),
                                                value: 'click',
                                            },
                                            {
                                                label: __('Scroll', 'zoloblocks'),
                                                value: 'scroll',
                                            },
                                        ]}
                                        onChange={(value) => setAttributes({ trigger: value })}
                                    />
                                    {trigger !== 'scroll' && (
                                        <>
                                            <SimpleRangeControl
                                                label={__('Speed', 'zoloblocks')}
                                                value={speed}
                                                onChange={(speed) =>
                                                    setAttributes({
                                                        speed,
                                                    })
                                                }
                                                onReset={() =>
                                                    setAttributes({
                                                        speed: undefined,
                                                    })
                                                }
                                                step={0.1}
                                                min={0}
                                                max={10}
                                            />
                                            {/* <RangeControl
                                                label={__('Speed', 'otter-blocks')}
                                                value={speed}
                                                onChange={(val) => setAttributes({ speed: val })}
                                                step={0.1}
                                                min={0}
                                                max={10}
                                            /> */}
                                            <ToggleControl
                                                label={__('Loop', 'zoloblocks')}
                                                checked={!!loop}
                                                onChange={() => setAttributes({ loop: !loop })}
                                            />
                                        </>
                                    )}
                                    <ToggleControl
                                        label={__('Reverse', 'zoloblocks')}
                                        checked={direction === -1}
                                        onChange={() => {
                                            setAttributes({
                                                direction: direction === 1 ? -1 : 1,
                                            });
                                        }}
                                    />
                                    <CardDivider />
                                    <TextControl
                                        label={__('Lottie File', 'zoloblocks')}
                                        value={fileURL}
                                        disabled
                                        onChange={(value) => {
                                            setAttributes({
                                                fileURL: value,
                                            });
                                        }}
                                    />
                                    <Button
                                        variant="primary"
                                        onClick={() => {
                                            setAttributes({
                                                fileURL: undefined,
                                            });
                                        }}
                                    >
                                        {__('Clear', 'zoloblocks')}
                                    </Button>
                                </>
                            )}
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Text', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            Text
                        </ZoloPanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/adavanced-paragraph"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
