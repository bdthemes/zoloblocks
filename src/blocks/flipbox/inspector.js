/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
/**
 * Internal depencencies
 */
const {
    ZoloTextControl,
    ZoloTextareaControl,
    ZoloBaseControl,
    ZoloButton,
    ZoloToggleGroupControl,
    ZoloToggleGroupControlOption,
    ZoloToggleControl,
    ZoloSelectControl,
    ZoloCardDivider,
    ResRangeControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    RangeResetControl,
    TypographyDropdown,
    NormalBGControl,
    BoxShadowControl,
    TabPanelControl,
    HeaderTabs,
    AdvancedOptions,
    ZoloIconPicker,
    ZoloPanelBody,
    ResAlignmentControl,
    LinkControl,
    IconicBtnGroup,
    ImageSizes,
    ImageAvatar,
    ObjectFitControl,
} = window.zoloModule;

import objAttributes from './attributes';
import {
    FLIPBLOX_SIDE,
    FLIPBOX_HEIGHT,
    FLIP_EFFECT,
    FLIP_EASING_TYPE,
    FLIP_TRIGGER_TYPE,
    FLIPBOX_BORDER_RADIUS,
    FLIPBOX_ITEMS_PADDING,
    FRONT_ITEMS_BORDER,
    FRONT_ITEMS_ALIGNMENT,
    FRONT_ITEMS_VERTICAL_ALIGNMENT,
    FRONT_ITEMS_BG,
    FRONT_ITEMS_SHADOW,
    BACK_ITEMS_BORDER,
    BACK_ITEMS_ALIGNMENT,
    BACK_ITEMS_VERTICAL_ALIGNMENT,
    BACK_ITEMS_BG,
    FRONT_ICON_SIZE,
    FRONT_ICON_BORDER,
    FRONT_ICON_BORDER_RADIUS,
    FRONT_ICON_BG,
    FRONT_ICON_PADDING,
    FRONT_TITLE_MARGIN,
    BACK_ICON_SIZE,
    BACK_ICON_BORDER,
    BACK_ICON_BG,
    BACK_ITEMS_SHADOW,
    BACK_ICON_BORDER_RADIUS,
    BACK_ICON_PADDING,
    BACK_TITLE_MARGIN,
    BACK_LINK_BORDER,
    BACK_LINK_BORDER_RADIUS,
    BACK_LINK_PADDING,
    BACK_LINK_BG,
    BACK_LINK_HBG,
    FLIPBOX_VERTICAL_ALIGNMENT,
    FLIPBOX_ICON_OPTIONS,
} from './constants';

import {
    FRONT_TITLE_TYPOGRAPHY,
    FRONT_CONTENT_TYPOGRAPHY,
    BACK_TITLE_TYPOGRAPHY,
    BACK_CONTENT_TYPOGRAPHY,
    BACK_LINK_TYPOGRAPHY,
} from './constants/typoPrefixConstants';
import { DEFAULT_ALIGNS } from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes, flipboxRef } = props;
    const {
        resMode,
        frontIcon,
        backIcon,
        showFrontIcon,
        showFrontTitle,
        frontTitle,
        showFrontContent,
        frontContent,
        showBackIcon,
        showBackTitle,
        backTitle,
        showBackContent,
        showBackLinkBtn,
        showBackLinkBtnIcon,
        backLinkColor,
        backLinkHoverColor,
        backLinkHoverBorderColor,
        backContent,
        buttonText,
        buttonIcon,
        link,
        frontTitleColor,
        backTitleColor,
        frontContentColor,
        backContentColor,
        frontIconColor,
        backIconColor,
        flipEffect,
        flipEasingType,
        flipCustomEasing,
        triggerType,
        frontIconType,
        backIconType,
        frontIconTypeImage,
        backIconTypeImage,
        imageRes,
        objectFit,
        backImageObjectFit,
    } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    const [side, setSide] = useState('front');

    const onBackSideClick = () => {
        if (flipboxRef.current) {
            flipboxRef.current.classList.add('zolo-flip-box_active');
        }
    };

    const removeActiveClass = () => {
        if (flipboxRef.current) {
            flipboxRef.current.classList.remove('zolo-flip-box_active');
        }
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/flipbox"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <ZoloBaseControl label={__('Selected Side', 'zoloblocks')}>
                                <ZoloToggleGroupControl className="zolo-button-group zolo-toggle-box-custom-css">
                                    {FLIPBLOX_SIDE.map((item) => (
                                        <ZoloToggleGroupControlOption
                                            value={item.value}
                                            label={item.label}
                                            isSelected={side === item.value}
                                            className={item.value === side ? 'active' : ''}
                                            onClick={() => {
                                                setSide(item.value);

                                                if (item.value === 'back') {
                                                    onBackSideClick();
                                                } else {
                                                    removeActiveClass();
                                                }
                                            }}
                                        />
                                    ))}
                                </ZoloToggleGroupControl>
                            </ZoloBaseControl>
                            <div className="zolo-custom-heading">{__('Show/hide elements', 'zoloblocks')}</div>
                            {side === 'front' && (
                                <>
                                    <ZoloToggleControl
                                        label={__('Icon', 'zoloblocks')}
                                        checked={showFrontIcon}
                                        onChange={() => {
                                            setAttributes({ showFrontIcon: !showFrontIcon });
                                        }}
                                    />
                                    <ZoloToggleControl
                                        label={__('Title', 'zoloblocks')}
                                        checked={showFrontTitle}
                                        onChange={() => {
                                            setAttributes({ showFrontTitle: !showFrontTitle });
                                        }}
                                    />
                                    <ZoloToggleControl
                                        label={__('Description', 'zoloblocks')}
                                        checked={showFrontContent}
                                        onChange={() => {
                                            setAttributes({
                                                showFrontContent: !showFrontContent,
                                            });
                                        }}
                                    />
                                </>
                            )}
                            {side === 'back' && (
                                <>
                                    <ZoloToggleControl
                                        label={__('Icon', 'zoloblocks')}
                                        checked={showBackIcon}
                                        onChange={() => {
                                            setAttributes({ showBackIcon: !showBackIcon });
                                        }}
                                    />
                                    <ZoloToggleControl
                                        label={__('Title', 'zoloblocks')}
                                        checked={showBackTitle}
                                        onChange={() => {
                                            setAttributes({ showBackTitle: !showBackTitle });
                                        }}
                                    />
                                    <ZoloToggleControl
                                        label={__('Description', 'zoloblocks')}
                                        checked={showBackContent}
                                        onChange={() => {
                                            setAttributes({
                                                showBackContent: !showBackContent,
                                            });
                                        }}
                                    />
                                    <ZoloToggleControl
                                        label={__('Button', 'zoloblocks')}
                                        checked={showBackLinkBtn}
                                        onChange={() => {
                                            setAttributes({
                                                showBackLinkBtn: !showBackLinkBtn,
                                            });
                                        }}
                                    />
                                    {showBackLinkBtn && (
                                        <ZoloToggleControl
                                            label={__('Button Icon', 'zoloblocks')}
                                            checked={showBackLinkBtnIcon}
                                            onChange={() => {
                                                setAttributes({
                                                    showBackLinkBtnIcon: !showBackLinkBtnIcon,
                                                });
                                            }}
                                        />
                                    )}
                                </>
                            )}
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Content', 'zoloblocks')} panelProps={props}>
                            <ZoloBaseControl label={__('Selected Side', 'zoloblocks')}>
                                <ZoloToggleGroupControl className="zolo-button-group zolo-toggle-box-custom-css">
                                    {FLIPBLOX_SIDE.map((item) => (
                                        <ZoloToggleGroupControlOption
                                            value={item.value}
                                            label={item.label}
                                            isSelected={side === item.value}
                                            className={item.value === side ? 'active' : ''}
                                            onClick={() => {
                                                setSide(item.value);

                                                if (item.value === 'back') {
                                                    onBackSideClick();
                                                } else {
                                                    removeActiveClass();
                                                }
                                            }}
                                        />
                                    ))}
                                </ZoloToggleGroupControl>
                            </ZoloBaseControl>
                            {side === 'front' && (
                                <>
                                    {showFrontIcon && (
                                        <>
                                            <div className="zolo-custom-heading">{__('Icon/Image', 'zoloblocks')}</div>
                                            <div className="zolo-flex-row-control-tab">
                                                <IconicBtnGroup
                                                    label={__('Type', 'zoloblocks')}
                                                    value={frontIconType}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            frontIconType: value,
                                                        })
                                                    }
                                                    options={FLIPBOX_ICON_OPTIONS}
                                                />
                                            </div>
                                            {frontIconType === 'icon' && (
                                                <ZoloIconPicker
                                                    label={__('Select Icon', 'zoloblocks')}
                                                    value={frontIcon}
                                                    onChange={(v) => setAttributes({ frontIcon: v })}
                                                />
                                            )}
                                            {frontIconType === 'image' && (
                                                <>
                                                    <ZoloBaseControl label={__('Image', 'zoloblocks')} className="zolo-flex-col-control">
                                                        {frontIconTypeImage ? (
                                                            <ImageAvatar
                                                                imageUrl={frontIconTypeImage && frontIconTypeImage.url}
                                                                onDeleteImage={() =>
                                                                    setAttributes({
                                                                        frontIconTypeImage: null,
                                                                    })
                                                                }
                                                                imageId={frontIconTypeImage && frontIconTypeImage.id}
                                                                onEditImage={(media) => {
                                                                    setAttributes({
                                                                        frontIconTypeImage: {
                                                                            id: media.id,
                                                                            url: media.url,
                                                                            alt: media.alt,
                                                                            sizes: media.sizes,
                                                                            caption: media.caption,
                                                                        },
                                                                    });
                                                                }}
                                                            />
                                                        ) : (
                                                            <MediaUpload
                                                                onSelect={(media) => {
                                                                    setAttributes({
                                                                        frontIconTypeImage: {
                                                                            id: media.id,
                                                                            url: media.url,
                                                                            alt: media.alt,
                                                                            sizes: media.sizes,
                                                                            caption: media.caption,
                                                                        },
                                                                    });
                                                                }}
                                                                allowedTypes={['image']}
                                                                value={frontIconTypeImage && frontIconTypeImage.id}
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
                                                    <ObjectFitControl
                                                        value={objectFit}
                                                        onChange={(objectFit) =>
                                                            setAttributes({
                                                                objectFit: objectFit,
                                                            })
                                                        }
                                                    />
                                                </>
                                            )}
                                        </>
                                    )}

                                    {showFrontTitle && (
                                        <>
                                            <div className="zolo-custom-heading">{__('Title', 'zoloblocks')}</div>
                                            <ZoloTextControl
                                                label={__('Text', 'zoloblocks')}
                                                value={frontTitle}
                                                onChange={(newText) => setAttributes({ frontTitle: newText })}
                                            />
                                        </>
                                    )}
                                    {showFrontContent && (
                                        <>
                                            <div className="zolo-custom-heading">{__('Description', 'zoloblocks')}</div>
                                            <div className="zolo-flex-col-control">
                                                <ZoloTextareaControl
                                                    label={__('Text', 'zoloblocks')}
                                                    value={frontContent}
                                                    onChange={(newText) => setAttributes({ frontContent: newText })}
                                                />
                                            </div>
                                        </>
                                    )}
                                </>
                            )}
                            {side === 'back' && (
                                <>
                                    {showBackIcon && (
                                        <>
                                            <div className="zolo-custom-heading">{__('Icon/Image', 'zoloblocks')}</div>
                                            <div className="zolo-flex-row-control-tab">
                                                <IconicBtnGroup
                                                    label={__('Type', 'zoloblocks')}
                                                    value={backIconType}
                                                    onChange={(value) =>
                                                        setAttributes({
                                                            backIconType: value,
                                                        })
                                                    }
                                                    options={FLIPBOX_ICON_OPTIONS}
                                                />
                                            </div>
                                            {backIconType === 'icon' && (
                                                <ZoloIconPicker
                                                    label={__('Select Icon', 'zoloblocks')}
                                                    value={backIcon}
                                                    onChange={(v) => setAttributes({ backIcon: v })}
                                                />
                                            )}
                                            {backIconType === 'image' && (
                                                <>
                                                    <ZoloBaseControl label={__('Image', 'zoloblocks')} className="zolo-flex-col-control">
                                                        {backIconTypeImage ? (
                                                            <ImageAvatar
                                                                imageUrl={backIconTypeImage && backIconTypeImage.url}
                                                                onDeleteImage={() =>
                                                                    setAttributes({
                                                                        backIconTypeImage: null,
                                                                    })
                                                                }
                                                                imageId={backIconTypeImage && backIconTypeImage.id}
                                                                onEditImage={(media) => {
                                                                    setAttributes({
                                                                        backIconTypeImage: {
                                                                            id: media.id,
                                                                            url: media.url,
                                                                            alt: media.alt,
                                                                            sizes: media.sizes,
                                                                            caption: media.caption,
                                                                        },
                                                                    });
                                                                }}
                                                            />
                                                        ) : (
                                                            <MediaUpload
                                                                onSelect={(media) => {
                                                                    setAttributes({
                                                                        backIconTypeImage: {
                                                                            id: media.id,
                                                                            url: media.url,
                                                                            alt: media.alt,
                                                                            sizes: media.sizes,
                                                                            caption: media.caption,
                                                                        },
                                                                    });
                                                                }}
                                                                allowedTypes={['image']}
                                                                value={backIconTypeImage && backIconTypeImage.id}
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
                                                    <ObjectFitControl
                                                        value={backImageObjectFit}
                                                        onChange={(backImageObjectFit) =>
                                                            setAttributes({
                                                                backImageObjectFit: backImageObjectFit,
                                                            })
                                                        }
                                                    />
                                                </>
                                            )}
                                        </>
                                    )}
                                    {showBackTitle && (
                                        <>
                                            <div className="zolo-custom-heading">{__('Title', 'zoloblocks')}</div>
                                            <ZoloTextControl
                                                label={__('Text', 'zoloblocks')}
                                                value={backTitle}
                                                onChange={(newText) => setAttributes({ backTitle: newText })}
                                            />
                                        </>
                                    )}

                                    {showBackContent && (
                                        <>
                                            <div className="zolo-custom-heading">{__('Description', 'zoloblocks')}</div>
                                            <div className="zolo-flex-col-control">
                                                <ZoloTextareaControl
                                                    label={__('Text', 'zoloblocks')}
                                                    value={backContent}
                                                    onChange={(newText) => setAttributes({ backContent: newText })}
                                                />
                                            </div>
                                        </>
                                    )}
                                    {showBackLinkBtn && (
                                        <>
                                            <div className="zolo-custom-heading">{__('Button', 'zoloblocks')}</div>
                                            <ZoloTextControl
                                                label={__('Text', 'zoloblocks')}
                                                value={buttonText}
                                                onChange={(newText) => setAttributes({ buttonText: newText })}
                                            />
                                            {showBackLinkBtnIcon && (
                                                <ZoloIconPicker
                                                    label={__('Icon', 'zoloblocks')}
                                                    value={buttonIcon}
                                                    onChange={(v) => setAttributes({ buttonIcon: v })}
                                                />
                                            )}
                                            <LinkControl
                                                label={__('URL', 'zoloblocks')}
                                                value={link}
                                                onChange={(value) => setAttributes({ link: value })}
                                            />
                                        </>
                                    )}
                                </>
                            )}
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('General Settings', 'zoloblocks')} panelProps={props}>
                            <div className="zolo-flex-row-control-tab">
                                <IconicBtnGroup
                                    label={__('Trigger Type', 'zoloblocks')}
                                    value={triggerType}
                                    onChange={(value) =>
                                        setAttributes({
                                            triggerType: value,
                                        })
                                    }
                                    options={FLIP_TRIGGER_TYPE}
                                />
                            </div>
                            {triggerType === 'click' && <p>{__('The feature works on the frontend only.', 'zoloblocks')}</p>}
                            <ZoloSelectControl
                                label={__('Flip Effect', 'zoloblocks')}
                                value={flipEffect}
                                options={FLIP_EFFECT}
                                onChange={(flipEffect) => {
                                    setAttributes({ flipEffect });
                                }}
                            />
                            <ZoloCardDivider />
                            <ZoloSelectControl
                                label={__('Easing Type', 'zoloblocks')}
                                value={flipEasingType}
                                options={FLIP_EASING_TYPE}
                                onChange={(flipEasingType) => {
                                    setAttributes({ flipEasingType });
                                }}
                            />
                            {flipEasingType === 'custom' && (
                                <ZoloTextControl
                                    label={__('Custom Easing', 'zoloblocks')}
                                    help={__('Example: cubic-bezier(0.42, 0, 0.58, 1)', 'zoloblocks')}
                                    value={flipCustomEasing}
                                    onChange={(customEasing) => setAttributes({ flipCustomEasing: customEasing })}
                                />
                            )}
                            <RangeResetControl
                                label={__('Duration (ms)', 'zoloblocks')}
                                controlName={'flipDuration'}
                                requiredProps={requiredProps}
                                min={0}
                                max={5000}
                                defaultVal={600}
                                step={1}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Items', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                {__('common', 'zoloblocks')}
                            </div>
                            <ResRangeControl
                                label={__('Height', 'zoloblocks')}
                                controlName={FLIPBOX_HEIGHT}
                                requiredProps={requiredProps}
                                min={200}
                                max={1000}
                                defaultVal={300}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={FLIPBOX_ITEMS_PADDING}
                                requiredProps={requiredProps}
                            />
                            <ZoloCardDivider />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={FLIPBOX_BORDER_RADIUS}
                                requiredProps={requiredProps}
                            />
                            <ZoloCardDivider />
                            <ZoloBaseControl label={__('Selected Side', 'zoloblocks')}>
                                <ZoloToggleGroupControl className="zolo-button-group zolo-toggle-box-custom-css">
                                    {FLIPBLOX_SIDE.map((item) => (
                                        <ZoloToggleGroupControlOption
                                            value={item.value}
                                            label={item.label}
                                            isSelected={side === item.value}
                                            className={item.value === side ? 'active' : ''}
                                            onClick={() => {
                                                setSide(item.value);

                                                if (item.value === 'back') {
                                                    onBackSideClick();
                                                } else {
                                                    removeActiveClass();
                                                }
                                            }}
                                        />
                                    ))}
                                </ZoloToggleGroupControl>
                            </ZoloBaseControl>
                            {side === 'front' && (
                                <>
                                    <NormalBGControl requiredProps={requiredProps} controlName={FRONT_ITEMS_BG} noMainBGImg={false} />
                                    <ZoloCardDivider />
                                    <BorderControl
                                        label={__('Border', 'zoloblocks')}
                                        controlName={FRONT_ITEMS_BORDER}
                                        requiredProps={requiredProps}
                                    />
                                    <BoxShadowControl
                                        controlName={FRONT_ITEMS_SHADOW}
                                        requiredProps={requiredProps}
                                        enableTransition={false}
                                    />
                                    <ZoloCardDivider />
                                    <ResAlignmentControl
                                        label={__('Alignment', 'zoloblocks')}
                                        controlName={FRONT_ITEMS_ALIGNMENT}
                                        requiredProps={requiredProps}
                                        alignOptions={DEFAULT_ALIGNS}
                                    />

                                    <ResAlignmentControl
                                        label={__('Vertical Alignment', 'zoloblocks')}
                                        controlName={FRONT_ITEMS_VERTICAL_ALIGNMENT}
                                        requiredProps={requiredProps}
                                        alignOptions={FLIPBOX_VERTICAL_ALIGNMENT}
                                    />
                                </>
                            )}
                            {side === 'back' && (
                                <>
                                    <NormalBGControl requiredProps={requiredProps} controlName={BACK_ITEMS_BG} noMainBGImg={false} />
                                    <ZoloCardDivider />
                                    <BorderControl
                                        label={__('Border', 'zoloblocks')}
                                        controlName={BACK_ITEMS_BORDER}
                                        requiredProps={requiredProps}
                                    />
                                    <BoxShadowControl
                                        controlName={BACK_ITEMS_SHADOW}
                                        requiredProps={requiredProps}
                                        enableTransition={false}
                                    />
                                    <ZoloCardDivider />
                                    <ResAlignmentControl
                                        label={__('Alignment', 'zoloblocks')}
                                        controlName={BACK_ITEMS_ALIGNMENT}
                                        requiredProps={requiredProps}
                                        alignOptions={DEFAULT_ALIGNS}
                                    />

                                    <ResAlignmentControl
                                        label={__('Vertical Alignment', 'zoloblocks')}
                                        controlName={BACK_ITEMS_VERTICAL_ALIGNMENT}
                                        requiredProps={requiredProps}
                                        alignOptions={FLIPBOX_VERTICAL_ALIGNMENT}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>

                        {(showFrontIcon || showBackIcon) && (
                            <ZoloPanelBody title={__('Icon/Image', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ZoloBaseControl label={__('Selected Side', 'zoloblocks')}>
                                    <ZoloToggleGroupControl className="zolo-button-group zolo-toggle-box-custom-css">
                                        {FLIPBLOX_SIDE.map((item) => (
                                            <ZoloToggleGroupControlOption
                                                value={item.value}
                                                label={item.label}
                                                isSelected={side === item.value}
                                                className={item.value === side ? 'active' : ''}
                                                onClick={() => {
                                                    setSide(item.value);

                                                    if (item.value === 'back') {
                                                        onBackSideClick();
                                                    } else {
                                                        removeActiveClass();
                                                    }
                                                }}
                                            />
                                        ))}
                                    </ZoloToggleGroupControl>
                                </ZoloBaseControl>
                                {side === 'front' && (
                                    <>
                                        {showFrontIcon && (
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={frontIconColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            frontIconColor: color,
                                                        })
                                                    }
                                                />
                                                <ResDimensionsControl
                                                    label={__('Size', 'zoloblocks')}
                                                    controlName={FRONT_ICON_SIZE}
                                                    requiredProps={requiredProps}
                                                />
                                                <ZoloCardDivider />

                                                <NormalBGControl
                                                    requiredProps={requiredProps}
                                                    controlName={FRONT_ICON_BG}
                                                    noMainBGImg={false}
                                                />
                                                <ResDimensionsControl
                                                    label={__('Padding', 'zoloblocks')}
                                                    controlName={FRONT_ICON_PADDING}
                                                    requiredProps={requiredProps}
                                                />
                                                <ZoloCardDivider />
                                                <BorderControl
                                                    label={__('Border', 'zoloblocks')}
                                                    controlName={FRONT_ICON_BORDER}
                                                    requiredProps={requiredProps}
                                                />
                                                <ResDimensionsControl
                                                    label={__('Border Radius', 'zoloblocks')}
                                                    controlName={FRONT_ICON_BORDER_RADIUS}
                                                    requiredProps={requiredProps}
                                                />
                                            </>
                                        )}
                                    </>
                                )}
                                {side === 'back' && (
                                    <>
                                        {showBackIcon && (
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={backIconColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            backIconColor: color,
                                                        })
                                                    }
                                                />
                                                <ResDimensionsControl
                                                    label={__('Size', 'zoloblocks')}
                                                    controlName={BACK_ICON_SIZE}
                                                    requiredProps={requiredProps}
                                                />
                                                <ZoloCardDivider />
                                                <NormalBGControl
                                                    requiredProps={requiredProps}
                                                    controlName={BACK_ICON_BG}
                                                    noMainBGImg={false}
                                                />
                                                <ResDimensionsControl
                                                    label={__('Padding', 'zoloblocks')}
                                                    controlName={BACK_ICON_PADDING}
                                                    requiredProps={requiredProps}
                                                />
                                                <ZoloCardDivider />
                                                <BorderControl
                                                    label={__('Border', 'zoloblocks')}
                                                    controlName={BACK_ICON_BORDER}
                                                    requiredProps={requiredProps}
                                                />
                                                <ResDimensionsControl
                                                    label={__('Border Radius', 'zoloblocks')}
                                                    controlName={BACK_ICON_BORDER_RADIUS}
                                                    requiredProps={requiredProps}
                                                />
                                            </>
                                        )}
                                    </>
                                )}
                            </ZoloPanelBody>
                        )}

                        {(showFrontTitle || showBackTitle) && (
                            <ZoloPanelBody title={__('Title', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ZoloBaseControl label={__('Selected Side', 'zoloblocks')}>
                                    <ZoloToggleGroupControl className="zolo-button-group zolo-toggle-box-custom-css">
                                        {FLIPBLOX_SIDE.map((item) => (
                                            <ZoloToggleGroupControlOption
                                                value={item.value}
                                                label={item.label}
                                                isSelected={side === item.value}
                                                className={item.value === side ? 'active' : ''}
                                                onClick={() => {
                                                    setSide(item.value);

                                                    if (item.value === 'back') {
                                                        onBackSideClick();
                                                    } else {
                                                        removeActiveClass();
                                                    }
                                                }}
                                            />
                                        ))}
                                    </ZoloToggleGroupControl>
                                </ZoloBaseControl>
                                {side === 'front' && (
                                    <>
                                        {showFrontTitle && (
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={frontTitleColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            frontTitleColor: color,
                                                        })
                                                    }
                                                />
                                                <TypographyDropdown
                                                    label={__('Typography', 'zoloblocks')}
                                                    typoPrefixConstant={FRONT_TITLE_TYPOGRAPHY}
                                                    requiredProps={requiredProps}
                                                />
                                                <ZoloCardDivider />
                                                <ResDimensionsControl
                                                    label={__('Margin', 'zoloblocks')}
                                                    controlName={FRONT_TITLE_MARGIN}
                                                    requiredProps={requiredProps}
                                                />
                                            </>
                                        )}
                                    </>
                                )}
                                {side === 'back' && (
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={backTitleColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    backTitleColor: color,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={BACK_TITLE_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                        />
                                        <ZoloCardDivider />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={BACK_TITLE_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                )}
                            </ZoloPanelBody>
                        )}
                        {(showFrontContent || showBackContent) && (
                            <ZoloPanelBody title={__('Description', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ZoloBaseControl label={__('Selected Side', 'zoloblocks')}>
                                    <ZoloToggleGroupControl className="zolo-button-group zolo-toggle-box-custom-css">
                                        {FLIPBLOX_SIDE.map((item) => (
                                            <ZoloToggleGroupControlOption
                                                value={item.value}
                                                label={item.label}
                                                isSelected={side === item.value}
                                                className={item.value === side ? 'active' : ''}
                                                onClick={() => {
                                                    setSide(item.value);

                                                    if (item.value === 'back') {
                                                        onBackSideClick();
                                                    } else {
                                                        removeActiveClass();
                                                    }
                                                }}
                                            />
                                        ))}
                                    </ZoloToggleGroupControl>
                                </ZoloBaseControl>
                                {side === 'front' && (
                                    <>
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={FRONT_CONTENT_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                        />
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={frontContentColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    frontContentColor: color,
                                                })
                                            }
                                        />
                                    </>
                                )}
                                {side === 'back' && (
                                    <>
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={BACK_CONTENT_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                        />
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={backContentColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    backContentColor: color,
                                                })
                                            }
                                        />
                                    </>
                                )}
                            </ZoloPanelBody>
                        )}
                        {showBackLinkBtn && (
                            <ZoloPanelBody title={__('Button', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ZoloBaseControl label={__('Selected Side', 'zoloblocks')}>
                                    <ZoloToggleGroupControl className="zolo-button-group zolo-toggle-box-custom-css">
                                        {FLIPBLOX_SIDE.map((item) => (
                                            <ZoloToggleGroupControlOption
                                                value={item.value}
                                                label={item.label}
                                                isSelected={side === item.value}
                                                className={item.value === side ? 'active' : ''}
                                                onClick={() => {
                                                    setSide(item.value);
                                                    if (item.value === 'back') {
                                                        onBackSideClick();
                                                    } else {
                                                        removeActiveClass();
                                                    }
                                                }}
                                            />
                                        ))}
                                    </ZoloToggleGroupControl>
                                </ZoloBaseControl>
                                {side === 'back' && (
                                    <>
                                        <TabPanelControl
                                            normalComponents={
                                                <>
                                                    <ColorControl
                                                        label={__('Color', 'zoloblocks')}
                                                        color={backLinkColor}
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                backLinkColor: color,
                                                            })
                                                        }
                                                    />
                                                    <TypographyDropdown
                                                        label={__('Typography', 'zoloblocks')}
                                                        typoPrefixConstant={BACK_LINK_TYPOGRAPHY}
                                                        requiredProps={requiredProps}
                                                    />
                                                    <ZoloCardDivider />
                                                    <NormalBGControl
                                                        requiredProps={requiredProps}
                                                        controlName={BACK_LINK_BG}
                                                        noMainBGImg={false}
                                                    />

                                                    <ResDimensionsControl
                                                        label={__('Padding', 'zoloblocks')}
                                                        controlName={BACK_LINK_PADDING}
                                                        requiredProps={requiredProps}
                                                    />
                                                    <ZoloCardDivider />
                                                    <BorderControl
                                                        label={__('Border', 'zoloblocks')}
                                                        controlName={BACK_LINK_BORDER}
                                                        requiredProps={requiredProps}
                                                    />
                                                    <ResDimensionsControl
                                                        label={__('Border Radius', 'zoloblocks')}
                                                        controlName={BACK_LINK_BORDER_RADIUS}
                                                        requiredProps={requiredProps}
                                                    />
                                                </>
                                            }
                                            hoverComponents={
                                                <>
                                                    <ColorControl
                                                        label={__('Color', 'zoloblocks')}
                                                        color={backLinkHoverColor}
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                backLinkHoverColor: color,
                                                            })
                                                        }
                                                    />
                                                    <NormalBGControl
                                                        requiredProps={requiredProps}
                                                        controlName={BACK_LINK_HBG}
                                                        noMainBGImg={false}
                                                    />
                                                </>
                                            }
                                        />
                                    </>
                                )}
                            </ZoloPanelBody>
                        )}
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/flipbox"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
