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
import { SelectControl, ToggleControl, Button, BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import objAttributes from './attributes';

import { PRESETS } from './constants';

import { DEFAULT_ALIGNS } from '../../../src/global/constants';

import {} from './constants/typoPrefixConstant';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { preset, resMode, beforeImage, afterImage } = attributes;

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
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Layout', 'zolo-blocks')} panelProps={props}></ZoloPanelBody>

                        <ZoloPanelBody title={__('Add List', 'zolo-blocks')} panelProps={props}></ZoloPanelBody>
                        <ZoloPanelBody title={__('Link Hover Icon', 'zolo-blocks')} panelProps={props}></ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody
                            title={__('Item', 'zolo-blocks')}
                            firstOpen={true}
                            stylePanel={true}
                            panelProps={props}
                        ></ZoloPanelBody>

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
