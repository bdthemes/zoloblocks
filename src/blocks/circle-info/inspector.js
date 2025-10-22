/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import {} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import Sortable from './sortable';

/**
 * Internal depencencies
 */

const {
    ZoloToggleControl,
    ZoloCardDivider,
    ZoloTextControl,
    ResRangeControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TypographyDropdown,
    ZoloIconPicker,
    BoxShadowControl,
    HeaderTabs,
    NormalBGControl,
    AdvancedOptions,
    ZoloBaseControl,
    ResAlignmentControl,
    ZoloPanelBody,
    TabPanelControl,
    LinkControl,
    IconicBtnGroup,
    ZoloTextareaControl,
    ZoloSelectControl,
    ZoloRangeControl,
    ImageAvatar,
    ZoloButton,
    ImageSizes,
} = window.zoloModule;

import objAttributes from './attributes';

import { MAIN_IMAGE_WIDTH, MAIN_IMAGE_HEIGHT, MAIN_IMAGE_BORDER, MAIN_IMAGE_SHADOW, MAIN_IMAGE_RADIUS } from './constants';

import {} from './constants/typoPrefixConstant';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { resMode, photo, imageRes, circleItems, layerType } = attributes;

    const requiredProps = {
        resMode,
        attributes,
        setAttributes,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/circle-info"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('Circle', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <ZoloBaseControl label={__('Photo', 'zoloblocks')} className="zolo-flex-col-control">
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
                                                photo: {
                                                    id: media.id,
                                                    url: media.url,
                                                    sizes: media.sizes,
                                                    alt: media.alt,
                                                    caption: media.caption,
                                                },
                                            });
                                        }}
                                        allowedTypes={['image']}
                                        value={photo && photo.id}
                                        render={({ open }) => (
                                            <ZoloButton className="zolo-image-upload-btn" onClick={open}>
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                >
                                                    <path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408" />
                                                </svg>
                                                {__(' Upload Photo', 'zoloblocks')}
                                            </ZoloButton>
                                        )}
                                    />
                                )}
                            </ZoloBaseControl>

                            <ImageSizes
                                label={__('Resolution', 'zoloblocks')}
                                value={imageRes}
                                onChange={(value) =>
                                    setAttributes({
                                        imageRes: value,
                                    })
                                }
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Circle Item', 'zoloblocks')} firstOpen={false} panelProps={props}>
                            <Sortable circleItems={circleItems} attributes={attributes} setAttributes={setAttributes} />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Main Circle', 'zoloblocks')} firstOpen={false} panelProps={props}>
                            <TabPanelControl normalComponents={<></>} hoverComponents={<></>} />
                        </ZoloPanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/circle-info"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
