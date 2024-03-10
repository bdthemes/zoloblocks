/**
 * Internal depencencies
 */
const {
    ResRangeControl,
    ColorControl,
    TabPanelControl,
    HeaderTabs,
    ResCounterControl,
    ResDimensionsControl,
    ResAlignmentControl,
    NormalBGControl,
    BorderControl,
    BoxShadowControl,
    TypographyDropdown,
    AdvancedOptions,
    ResGapControl,
    ZoloPanelBody,
    IconicBtnGroup,
    ZoloIconPicker,
    ImageAvatar,
} = window.zoloModule;

/**
 * WordPress depencencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import {
    SelectControl,
    TextControl,
    ToggleControl,
    Button,
    BaseControl,
    RangeControl,
    Flex,
    FlexBlock,
    FlexItem,
    TextareaControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import objAttributes from './attributes';

import { CAPTION_ITEM_ALIGNMENT, BEFORE_LABEL_BG, BEFORE_BORDER, BEFORE_RADIUS } from './constants';

import { DEFAULT_ALIGNS, HEADING } from '../../../src/global/constants';

import { BEFORE_TYPO } from './constants/typoPrefixConstant';
import { set } from 'lodash';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        preset,
        resMode,
        beforeImage,
        afterImage,
        showLabels,
        showCaption,
        disableSliding,
        handaleDraggable,
        initialPosition,
        slidePositon,
        swipeMode,
        beforeLabel,
        beforeColor,
        afterLabel,
        labelPositons,
        captionText,
        captionTag,
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
                                        imageUrl={beforeImage && beforeImage.url}
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
                                        imageUrl={afterImage && afterImage.url}
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
                                label={__('Show Caption', 'zolo-blocks')}
                                checked={showCaption}
                                onChange={() => setAttributes({ showCaption: !showCaption })}
                            />
                            <ToggleControl
                                label={__('Disable Slide Behavior', 'zolo-blocks')}
                                checked={disableSliding}
                                onChange={() => setAttributes({ disableSliding: !disableSliding })}
                            />
                            <ToggleControl
                                label={__('Only Handle Draggable', 'zolo-blocks')}
                                checked={handaleDraggable}
                                onChange={() => setAttributes({ handaleDraggable: !handaleDraggable })}
                            />
                            <BaseControl label={__('INITIAL POSITION', 'zolo-block')}>
                                <Flex>
                                    <FlexItem>
                                        <Button
                                            variant="secondary"
                                            icon="image-rotate"
                                            onClick={() => setAttributes({ initialPosition: '' })}
                                        />
                                    </FlexItem>
                                    <FlexBlock>
                                        <RangeControl
                                            value={initialPosition}
                                            onChange={(v) => setAttributes({ initialPosition: v })}
                                            min={1}
                                            max={100}
                                        />
                                    </FlexBlock>
                                </Flex>
                            </BaseControl>
                            <IconicBtnGroup
                                label={__('Slide Position', 'zolo-blocks')}
                                value={slidePositon}
                                onChange={(value) =>
                                    setAttributes({
                                        slidePositon: value,
                                    })
                                }
                                options={[
                                    {
                                        label: __('Horizontal', 'zolo-blocks'),
                                        value: false,
                                    },
                                    {
                                        label: __('Vertical', 'zolo-blocks'),
                                        value: true,
                                    },
                                ]}
                            />
                            <IconicBtnGroup
                                label={__('Swipe Mode', 'zolo-blocks')}
                                value={swipeMode}
                                onChange={(value) =>
                                    setAttributes({
                                        swipeMode: value,
                                    })
                                }
                                options={[
                                    {
                                        label: __('Drag', 'zolo-blocks'),
                                        value: false,
                                    },
                                    {
                                        label: __('Hover', 'zolo-blocks'),
                                        value: true,
                                    },
                                ]}
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
                                <IconicBtnGroup
                                    label={__('Labels Positin', 'zolo-blocks')}
                                    value={labelPositons}
                                    onChange={(value) =>
                                        setAttributes({
                                            labelPositons: value,
                                        })
                                    }
                                    options={[
                                        {
                                            label: __('Top', 'zolo-blocks'),
                                            value: 'flex-start',
                                        },
                                        {
                                            label: __('Center', 'zolo-blocks'),
                                            value: 'center',
                                        },
                                        {
                                            label: __('Bottom', 'zolo-blocks'),
                                            value: 'flex-end',
                                        },
                                    ]}
                                />
                            </ZoloPanelBody>
                        )}
                        {showCaption && (
                            <ZoloPanelBody title={__('Caption', 'zolo-blocks')} panelProps={props}>
                                <TextareaControl
                                    label={__('Caption', 'zolo-blocks')}
                                    value={captionText}
                                    onChange={(v) => setAttributes({ captionText: v })}
                                />

                                <SelectControl
                                    label={__('Select Tag', 'zolo-blocks')}
                                    value={captionTag}
                                    options={HEADING}
                                    onChange={(tag) => {
                                        setAttributes({ captionTag: tag });
                                    }}
                                />
                                <ResAlignmentControl
                                    label={__('Alignment', 'zolo-blocks')}
                                    controlName={CAPTION_ITEM_ALIGNMENT}
                                    requiredProps={requiredProps}
                                    alignOptions={DEFAULT_ALIGNS}
                                />
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Before Label', 'zolo-blocks')} firstOpen={true} stylePanel={true} panelProps={props}>
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
                            <BorderControl label={__('Border', 'zolo-blocks')} controlName={BEFORE_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Radius', 'zolo-blocks')}
                                controlName={BEFORE_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Title', 'zolo-blocks')} stylePanel={true} panelProps={props}></ZoloPanelBody>

                        <ZoloPanelBody title={__('Description', 'zolo-blocks')} stylePanel={true} panelProps={props}></ZoloPanelBody>

                        <ZoloPanelBody title={__('Icon', 'zolo-blocks')} stylePanel={true} panelProps={props}></ZoloPanelBody>

                        <ZoloPanelBody title={__('Link Hover Icon', 'zolo-blocks')} stylePanel={true} panelProps={props}></ZoloPanelBody>
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
