/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import {
    ToggleControl,
    TextControl,
    RangeControl,
    SelectControl,
    Button,
    BaseControl,
    __experimentalAlignmentMatrixControl as AlignmentMatrixControl,
} from '@wordpress/components';
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
    IconicBtnGroup,
    AdvancedOptions,
    ZoloPanelBody,
    ImageAvatar,
    ImageSizes,
} = window.zoloModule;

import objAttributes from './attributes';

import { TITLE_TYPO } from './constants/typoPrefixConstant';
import {
    LAYOUTS,
    PHOTO_ALIGN,
    CAPTION_ALIGN,
    STAR_SIZE,
    TITLE_GAP,
    ITEMS_ALIGN,
    HOVER_EFFECTS,
    MASK_SHAPES,
    MASK_POSITIONS,
    MASK_SIZES,
    MASK_REPEATS,
} from './constants';
import { DEFAULT_ALIGNS, FLEX_HORIZONTAL_OPTIONS, HEADING, ICON_POSITIONS } from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        photo,
        layout,
        ocPosition,
        imageRes,
        hoverEffect,
        imgAlt,
        showCaption,
        caption,
        maskShape,
        maskSize,
        maskPosition,
        maskRepeat,
        rating,
        showTitle,
        title,
        titleTag,
        titleColor,
        titlePosition,
        activeStarColor,
        inactiveStarColor,
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
                        <ZoloPanelBody title={__('General', 'zolo-blocks')} firstOpen={true} panelProps={props}>
                            <BaseControl label={__('Image', 'zolo-blocks')}>
                                {photo ? (
                                    <ImageAvatar
                                        imageUrl={photo && photo.url}
                                        onDeleteImage={() =>
                                            setAttributes({
                                                photo: null,
                                            })
                                        }
                                        imageId={photo && photo.id}
                                        onEditImage={(media) => {
                                            setAttributes({
                                                photo: media,
                                            });
                                        }}
                                    />
                                ) : (
                                    <MediaUpload
                                        onSelect={(media) => {
                                            setAttributes({
                                                photo: media,
                                            });
                                        }}
                                        allowedTypes={['image']}
                                        value={photo && photo.id}
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
                            <IconicBtnGroup
                                label={__('Layout', 'zolo-blocks')}
                                value={layout}
                                onChange={(value) =>
                                    setAttributes({
                                        layout: value,
                                    })
                                }
                                options={LAYOUTS}
                            />

                            {layout === 'overlay' && (
                                <AlignmentMatrixControl
                                    label={__('Content Position', 'zolo-blocks')}
                                    value={ocPosition}
                                    onChange={(v) => {
                                        setAttributes({ ocPosition: v });
                                    }}
                                />
                            )}

                            <ResAlignmentControl
                                label={__('Alignment', 'zolo-blocks')}
                                controlName={PHOTO_ALIGN}
                                requiredProps={requiredProps}
                                alignOptions={DEFAULT_ALIGNS}
                            />
                            <ImageSizes
                                label={__('Image Resolution', 'zolo-blocks')}
                                value={imageRes}
                                onChange={(value) =>
                                    setAttributes({
                                        imageRes: value,
                                    })
                                }
                            />
                            <TextControl
                                label={__('Alt Text', 'zolo-blocks')}
                                onChange={(v) => setAttributes({ imgAlt: v })}
                                value={imgAlt || photo?.alt}
                                placeholder={__('Enter alt text', 'zolo-blocks')}
                            />
                            <SelectControl
                                label={__('Hover Effect', 'zolo-blocks')}
                                value={hoverEffect}
                                options={HOVER_EFFECTS}
                                onChange={(v) => {
                                    setAttributes({ hoverEffect: v });
                                }}
                            />
                            <ToggleControl
                                label={__('Enable Caption', 'zolo-blocks')}
                                checked={showCaption}
                                onChange={() => setAttributes({ showCaption: !showCaption })}
                            />
                        </ZoloPanelBody>
                        {showCaption && (
                            <ZoloPanelBody title={__('Caption', 'zolo-blocks')} panelProps={props}>
                                <TextControl
                                    label={__('Caption', 'zolo-blocks')}
                                    value={caption || photo?.caption}
                                    onChange={(v) => setAttributes({ caption: v })}
                                    placeholder={__('Enter caption', 'zolo-blocks')}
                                />
                                <ResAlignmentControl
                                    label={__('Alignment', 'zolo-blocks')}
                                    controlName={CAPTION_ALIGN}
                                    requiredProps={requiredProps}
                                    alignOptions={DEFAULT_ALIGNS}
                                />
                            </ZoloPanelBody>
                        )}
                        <ZoloPanelBody title={__('Mask', 'zolo-blocks')} panelProps={props}>
                            <SelectControl
                                label={__('Mask Shape', 'zolo-blocks')}
                                value={maskShape}
                                options={MASK_SHAPES}
                                onChange={(v) => setAttributes({ maskShape: v })}
                            />
                            {maskShape !== 'none' && maskShape !== undefined && (
                                <>
                                    <SelectControl
                                        label={__('Mask Size', 'zolo-blocks')}
                                        value={maskSize}
                                        options={MASK_SIZES}
                                        onChange={(v) => setAttributes({ maskSize: v })}
                                    />

                                    <SelectControl
                                        label={__('Mask Position', 'zolo-blocks')}
                                        value={maskPosition}
                                        options={MASK_POSITIONS}
                                        onChange={(v) => setAttributes({ maskSize: v })}
                                    />

                                    <SelectControl
                                        label={__('Mask Repeat', 'zolo-blocks')}
                                        value={maskRepeat}
                                        options={MASK_REPEATS}
                                        onChange={(v) => setAttributes({ maskRepeat: v })}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Star', 'zolo-blocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <ResRangeControl
                                label={__('Size', 'zolo-blocks')}
                                controlName={STAR_SIZE}
                                requiredProps={requiredProps}
                                min={1}
                                max={100}
                                step={1}
                            />

                            <TabPanelControl
                                options={[
                                    {
                                        value: 'normal',
                                        label: __('Active', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'hover',
                                        label: __('Inactive', 'zolo-blocks'),
                                    },
                                ]}
                                normalComponents={
                                    <ColorControl
                                        label={__('Active Stars', 'zolo-blocks')}
                                        color={activeStarColor}
                                        onChange={(color) => setAttributes({ activeStarColor: color })}
                                    />
                                }
                                hoverComponents={
                                    <ColorControl
                                        label={__('Inactive Stars', 'zolo-blocks')}
                                        color={inactiveStarColor}
                                        onChange={(color) => setAttributes({ inactiveStarColor: color })}
                                    />
                                }
                            />
                        </ZoloPanelBody>
                        {showTitle && (
                            <ZoloPanelBody title={__('Title', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={TITLE_TYPO}
                                    requiredProps={requiredProps}
                                />
                                <ColorControl
                                    label={__('Color', 'zolo-blocks')}
                                    color={titleColor}
                                    onChange={(color) => setAttributes({ titleColor: color })}
                                />
                                <ResRangeControl
                                    label={__('Title Gap', 'zolo-blocks')}
                                    controlName={TITLE_GAP}
                                    requiredProps={requiredProps}
                                    min={1}
                                    max={100}
                                    step={1}
                                />
                            </ZoloPanelBody>
                        )}
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
