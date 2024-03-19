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

/**
 * WordPress depencencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { TextControl, ToggleControl, Button, BaseControl, RangeControl, TabPanel } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import objAttributes from './attributes';

import {
    BEFORE_LABEL_BG,
    BEFORE_BORDER,
    BEFORE_RADIUS,
    BEFORE_MARGIN,
    BEFORE_PADDING,
    AFTER_LABEL_BG,
    AFTER_BORDER,
    LINE_THICKNESS,
    LINE_BOX_SHADOW,
    THICKNESS_BG,
    ARROW_BTN_WIDTH,
    ARROW_BTN_HEIGHT,
    ARROW_BTN_BORDER,
    ARROW_BTN_RADIUS,
    ARROW_BTN_BG,
    ARROW_SIZE,
    //option
    SLIDE_POSITION,
    NORMAL_TAB_OPTION,
    NORMAL_CONTROL_OPTION,
} from './constants';

import { DEFAULT_ALIGNS, HEADING, FLEX_ALIGN_OPTIONS, FLEX_HORIZONTAL_OPTIONS } from '../../../src/global/constants';

import { BEFORE_TYPO } from './constants/typoPrefixConstant';
import { set } from 'lodash';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        beforeImage,
        afterImage,
        showLabels,
        disableslide,
        handleDraggable,
        initialPosition,
        slidePositon,
        swipeMode,
        beforeLabel,
        beforeColor,
        afterLabel,
        afterColor,
        labelPositons,
        HorizontalPosition,
        arrowbtnColor,
    } = attributes;

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
                            <BaseControl label={__('Before Image', 'zolo-blocks')}>
                                {beforeImage ? (
                                    <ImageAvatar
                                        imageUrl={beforeImage?.url}
                                        onDeleteImage={() =>
                                            setAttributes({
                                                beforeImage: null,
                                            })
                                        }
                                        imageId={beforeImage && beforeImage.id}
                                        onEditImage={(media) =>
                                            setAttributes({
                                                beforeImage: media,
                                            })
                                        }
                                    />
                                ) : (
                                    <MediaUpload
                                        onSelect={(media) => {
                                            setAttributes({
                                                beforeImage: media,
                                            });
                                        }}
                                        allowedTypes={['image']}
                                        value={beforeImage && beforeImage.id}
                                        render={({ open }) => (
                                            <Button className="zolo-image-upload-btn" onClick={open}>
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                >
                                                    <path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408" />
                                                </svg>
                                                {__(' Upload Photo', 'zolo-blocks')}
                                            </Button>
                                        )}
                                    />
                                )}
                            </BaseControl>
                            <BaseControl label={__('After Image', 'zolo-blocks')}>
                                {afterImage ? (
                                    <ImageAvatar
                                        imageUrl={afterImage?.url}
                                        onDeleteImage={() =>
                                            setAttributes({
                                                afterImage: null,
                                            })
                                        }
                                        imageId={afterImage && afterImage.id}
                                        onEditImage={(media) =>
                                            setAttributes({
                                                afterImage: media,
                                            })
                                        }
                                    />
                                ) : (
                                    <MediaUpload
                                        onSelect={(media) => {
                                            setAttributes({
                                                afterImage: media,
                                            });
                                        }}
                                        allowedTypes={['image']}
                                        value={afterImage && afterImage.id}
                                        render={({ open }) => (
                                            <Button className="zolo-image-upload-btn" onClick={open}>
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                >
                                                    <path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408" />
                                                </svg>
                                                {__(' Upload Photo', 'zolo-blocks')}
                                            </Button>
                                        )}
                                    />
                                )}
                            </BaseControl>
                            <ToggleControl
                                label={__('Show Labels', 'zolo-blocks')}
                                checked={showLabels}
                                onChange={() => setAttributes({ showLabels: !showLabels })}
                            />
                            <ToggleControl
                                label={__('Disable Slide Behavior', 'zolo-blocks')}
                                checked={disableslide}
                                onChange={() => setAttributes({ disableslide: !disableslide, handleDraggable: false, swipeMode: false })}
                            />
                            {!disableslide && (
                                <ToggleControl
                                    label={__('Only Handle Draggable', 'zolo-blocks')}
                                    checked={handleDraggable}
                                    onChange={() => setAttributes({ handleDraggable: !handleDraggable, swipeMode: false })}
                                />
                            )}
                            {!handleDraggable && !disableslide && (
                                <ToggleControl
                                    label={__('Enable Swipe Mode', 'zolo-blocks')}
                                    checked={swipeMode}
                                    onChange={() => setAttributes({ swipeMode: !swipeMode })}
                                />
                            )}
                            <RangeResetControl
                                label={__('Initial Position', 'zolo-blocks')}
                                controlName={'initialPosition'}
                                requiredProps={requiredProps}
                                min={1}
                                max={100}
                                step={1}
                            />
                            <IconicBtnGroup
                                label={__('Slide Position', 'zolo-blocks')}
                                value={slidePositon}
                                onChange={(value) =>
                                    setAttributes({
                                        slidePositon: value,
                                    })
                                }
                                options={SLIDE_POSITION}
                            />
                        </ZoloPanelBody>
                        {showLabels && (
                            <ZoloPanelBody title={__('Labels', 'zolo-blocks')} panelProps={props}>
                                <TextControl
                                    label={__('Before Label')}
                                    value={beforeLabel}
                                    onChange={(v) => setAttributes({ beforeLabel: v })}
                                />
                                <TextControl
                                    label={__('After Label')}
                                    value={afterLabel}
                                    onChange={(v) => setAttributes({ afterLabel: v })}
                                />
                                {slidePositon ? (
                                    <IconicBtnGroup
                                        label={__('Labels Position', 'zolo-blocks')}
                                        value={HorizontalPosition}
                                        onChange={(value) =>
                                            setAttributes({
                                                HorizontalPosition: value,
                                            })
                                        }
                                        options={FLEX_HORIZONTAL_OPTIONS}
                                    />
                                ) : (
                                    <IconicBtnGroup
                                        label={__('Labels Position', 'zolo-blocks')}
                                        value={labelPositons}
                                        onChange={(value) =>
                                            setAttributes({
                                                labelPositons: value,
                                            })
                                        }
                                        options={FLEX_ALIGN_OPTIONS}
                                    />
                                )}
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        {showLabels && (
                            <ZoloPanelBody title={__('Label', 'zolo-blocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    options={NORMAL_TAB_OPTION}
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={beforeColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        beforeColor: value,
                                                    })
                                                }
                                            />
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={BEFORE_LABEL_BG}
                                                noOverlay={true}
                                                noMainBGImg={true}
                                            />

                                            <TypographyDropdown
                                                label={__('Typography', 'zolo-blocks')}
                                                typoPrefixConstant={BEFORE_TYPO}
                                                requiredProps={requiredProps}
                                                max={36}
                                            />
                                            <BorderControl
                                                label={__('Border', 'zolo-blocks')}
                                                controlName={BEFORE_BORDER}
                                                requiredProps={requiredProps}
                                            />

                                            <ResDimensionsControl
                                                label={__('Radius', 'zolo-blocks')}
                                                controlName={BEFORE_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zolo-blocks')}
                                                controlName={BEFORE_MARGIN}
                                                requiredProps={requiredProps}
                                                forBorderRadius={false}
                                            />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zolo-blocks')}
                                                controlName={BEFORE_PADDING}
                                                requiredProps={requiredProps}
                                                forBorderRadius={false}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zolo-blocks')}
                                                color={afterColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        afterColor: value,
                                                    })
                                                }
                                            />
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={AFTER_LABEL_BG}
                                                noOverlay={true}
                                                noMainBGImg={true}
                                            />
                                            <BorderControl
                                                label={__('Border', 'zolo-blocks')}
                                                controlName={AFTER_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}

                        <ZoloPanelBody title={__('Control', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ResRangeControl
                                            label={__('Thickness', 'zolo-blocks')}
                                            controlName={LINE_THICKNESS}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={100}
                                            step={1}
                                        />
                                        <BoxShadowControl
                                            label={__('Box Shadow', 'zolo-blocks')}
                                            controlName={LINE_BOX_SHADOW}
                                            requiredProps={requiredProps}
                                        />
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={THICKNESS_BG}
                                            noOverlay={true}
                                            noMainBGImg={true}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ResRangeControl
                                            label={__('Arrow Size', 'zolo-blocks')}
                                            controlName={ARROW_SIZE}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={100}
                                            step={1}
                                        />
                                        <ColorControl
                                            label={__('Arrow Color', 'zolo-blocks')}
                                            color={arrowbtnColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    arrowbtnColor: value,
                                                })
                                            }
                                        />

                                        <ResRangeControl
                                            label={__('Width', 'zolo-blocks')}
                                            controlName={ARROW_BTN_WIDTH}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={100}
                                            step={1}
                                        />
                                        <ResRangeControl
                                            label={__('Height', 'zolo-blocks')}
                                            controlName={ARROW_BTN_HEIGHT}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={100}
                                            step={1}
                                        />
                                        <BorderControl
                                            label={__('Border', 'zolo-blocks')}
                                            controlName={ARROW_BTN_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Radius', 'zolo-blocks')}
                                            controlName={ARROW_BTN_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={ARROW_BTN_BG}
                                            noOverlay={true}
                                            noMainBGImg={true}
                                        />
                                    </>
                                }
                                options={NORMAL_CONTROL_OPTION}
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
