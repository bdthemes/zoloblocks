/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { TextControl, TextareaControl, BaseControl, Button, ButtonGroup, ToggleControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

/**
 * Internal depencencies
 */
const {
    ResRangeControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    RangeResetControl,
    TypographyDropdown,
    NormalBGControl,
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
                        <ZoloPanelBody title={__('General', 'zolo-blocks')} firstOpen={true} panelProps={props}>
                            <BaseControl label={__('Selected Side', 'zolo-blocks')}>
                                <ButtonGroup className="zolo-button-group">
                                    {FLIPBLOX_SIDE.map((item) => (
                                        <Button
                                            isLarge
                                            variant={side === item.value ? 'primary' : 'secondary'}
                                            aria-pressed={side === item.value}
                                            showBackLinkBtn
                                            onClick={() => {
                                                setSide(item.value);

                                                if (item.value === 'back') {
                                                    onBackSideClick();
                                                } else {
                                                    removeActiveClass();
                                                }
                                            }}
                                        >
                                            {item.label}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </BaseControl>
                            {side === 'front' && (
                                <>
                                    <ToggleControl
                                        label={__('Show Icon', 'zolo-blocks')}
                                        checked={showFrontIcon}
                                        onChange={() => {
                                            setAttributes({ showFrontIcon: !showFrontIcon });
                                        }}
                                    />
                                    <ToggleControl
                                        label={__('Show Title', 'zolo-blocks')}
                                        checked={showFrontTitle}
                                        onChange={() => {
                                            setAttributes({ showFrontTitle: !showFrontTitle });
                                        }}
                                    />
                                    <ToggleControl
                                        label={__('Show Description', 'zolo-blocks')}
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
                                    <ToggleControl
                                        label={__('Show Icon', 'zolo-blocks')}
                                        checked={showBackIcon}
                                        onChange={() => {
                                            setAttributes({ showBackIcon: !showBackIcon });
                                        }}
                                    />
                                    <ToggleControl
                                        label={__('Show Title', 'zolo-blocks')}
                                        checked={showBackTitle}
                                        onChange={() => {
                                            setAttributes({ showBackTitle: !showBackTitle });
                                        }}
                                    />
                                    <ToggleControl
                                        label={__('Show Description', 'zolo-blocks')}
                                        checked={showBackContent}
                                        onChange={() => {
                                            setAttributes({
                                                showBackContent: !showBackContent,
                                            });
                                        }}
                                    />
                                    <ToggleControl
                                        label={__('Show Button', 'zolo-blocks')}
                                        checked={showBackLinkBtn}
                                        onChange={() => {
                                            setAttributes({
                                                showBackLinkBtn: !showBackLinkBtn,
                                            });
                                        }}
                                    />
                                    {showBackLinkBtn && (
                                        <ToggleControl
                                            label={__('Show Button Icon', 'zolo-blocks')}
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

                        <ZoloPanelBody title={__('Flipbox Content', 'zolo-block')} panelProps={props}>
                            <BaseControl label={__('Selected Side', 'zolo-blocks')}>
                                <ButtonGroup className="zolo-button-group">
                                    {FLIPBLOX_SIDE.map((item) => (
                                        <Button
                                            isLarge
                                            variant={side === item.value ? 'primary' : 'secondary'}
                                            aria-pressed={side === item.value}
                                            showBackLinkBtn
                                            onClick={() => {
                                                setSide(item.value);

                                                if (item.value === 'back') {
                                                    onBackSideClick();
                                                } else {
                                                    removeActiveClass();
                                                }
                                            }}
                                        >
                                            {item.label}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </BaseControl>
                            {side === 'front' && (
                                <>
                                    {showFrontIcon && (
                                        <>
                                            <IconicBtnGroup
                                                label={__('Icon Type', 'zolo-blocks')}
                                                value={frontIconType}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        frontIconType: value,
                                                    })
                                                }
                                                options={FLIPBOX_ICON_OPTIONS}
                                            />
                                            {frontIconType === 'icon' && (
                                                <ZoloIconPicker
                                                    label={__('Select Icon', 'zolo-block')}
                                                    value={frontIcon}
                                                    onChange={(v) => setAttributes({ frontIcon: v })}
                                                />
                                            )}
                                            {frontIconType === 'image' && (
                                                <>
                                                    <BaseControl label={__('Image', 'zolo-blocks')}>
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
                                                    <ImageSizes
                                                        label={__('Image Resolution', 'zolo-blocks')}
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
                                        <TextControl
                                            label={__('Title', 'zolo-blocks')}
                                            value={frontTitle}
                                            onChange={(newText) => setAttributes({ frontTitle: newText })}
                                        />
                                    )}
                                    {showFrontContent && (
                                        <TextareaControl
                                            label={__('Description', 'zolo-blocks')}
                                            value={frontContent}
                                            onChange={(newText) => setAttributes({ frontContent: newText })}
                                        />
                                    )}
                                </>
                            )}
                            {side === 'back' && (
                                <>
                                    {showBackIcon && (
                                        <>
                                            <IconicBtnGroup
                                                label={__('Icon Type', 'zolo-blocks')}
                                                value={backIconType}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        backIconType: value,
                                                    })
                                                }
                                                options={FLIPBOX_ICON_OPTIONS}
                                            />
                                            {backIconType === 'icon' && (
                                                <ZoloIconPicker
                                                    label={__('Select Icon', 'zolo-block')}
                                                    value={frontIcon}
                                                    onChange={(v) => setAttributes({ frontIcon: v })}
                                                />
                                            )}
                                            {backIconType === 'image' && (
                                                <>
                                                    <BaseControl label={__('Image', 'zolo-blocks')}>
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
                                                    <ImageSizes
                                                        label={__('Image Resolution', 'zolo-blocks')}
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
                                        <TextControl
                                            label={__('Title', 'zolo-blocks')}
                                            value={backTitle}
                                            onChange={(newText) => setAttributes({ backTitle: newText })}
                                        />
                                    )}

                                    {showBackContent && (
                                        <TextareaControl
                                            label={__('Description', 'zolo-blocks')}
                                            value={backContent}
                                            onChange={(newText) => setAttributes({ backContent: newText })}
                                        />
                                    )}
                                    {showBackLinkBtn && (
                                        <>
                                            <TextControl
                                                label={__('Button Text', 'zolo-blocks')}
                                                value={buttonText}
                                                onChange={(newText) => setAttributes({ buttonText: newText })}
                                            />
                                            <LinkControl
                                                label={__('URL', 'zolo-blocks')}
                                                value={link}
                                                onChange={(value) => setAttributes({ link: value })}
                                            />
                                            {showBackLinkBtnIcon && (
                                                <ZoloIconPicker
                                                    label={__('Select Icon', 'zolo-block')}
                                                    value={buttonIcon}
                                                    onChange={(v) => setAttributes({ buttonIcon: v })}
                                                />
                                            )}
                                        </>
                                    )}
                                </>
                            )}
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('General Settings', 'zolo-blocks')} panelProps={props}>
                            <SelectControl
                                label={__('Flip Effect', 'zolo-blocks')}
                                value={flipEffect}
                                options={FLIP_EFFECT}
                                onChange={(flipEffect) => {
                                    setAttributes({ flipEffect });
                                }}
                            />
                            <SelectControl
                                label={__('Easing Type', 'zolo-blocks')}
                                value={flipEasingType}
                                options={FLIP_EASING_TYPE}
                                onChange={(flipEasingType) => {
                                    setAttributes({ flipEasingType });
                                }}
                            />
                            {flipEasingType === 'custom' && (
                                <TextControl
                                    label={__('Custom Easing', 'zolo-blocks')}
                                    help={__('Example: cubic-bezier(0.42, 0, 0.58, 1)', 'zolo-blocks')}
                                    value={flipCustomEasing}
                                    onChange={(customEasing) => setAttributes({ flipCustomEasing: customEasing })}
                                />
                            )}
                            <RangeResetControl
                                label={__('Duration (ms)', 'zolo-blocks')}
                                controlName={'flipDuration'}
                                requiredProps={requiredProps}
                                min={0}
                                max={5000}
                                defaultVal={600}
                                step={1}
                            />

                            <SelectControl
                                label={__('Trigger Type', 'zolo-blocks')}
                                value={triggerType}
                                options={FLIP_TRIGGER_TYPE}
                                onChange={(triggerType) => {
                                    setAttributes({ triggerType });
                                }}
                                help={triggerType === 'click' ? __('The feature works on the frontend only.', 'zolo-blocks') : ''}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Items', 'zolo-block')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <ResRangeControl
                                label={__('Height', 'zolo-blocks')}
                                controlName={FLIPBOX_HEIGHT}
                                requiredProps={requiredProps}
                                min={200}
                                max={1000}
                                defaultVal={300}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={FLIPBOX_ITEMS_PADDING}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={FLIPBOX_BORDER_RADIUS}
                                requiredProps={requiredProps}
                            />
                            <BaseControl label={__('Selected Side', 'zolo-blocks')}>
                                <ButtonGroup className="zolo-button-group">
                                    {FLIPBLOX_SIDE.map((item) => (
                                        <Button
                                            isLarge
                                            variant={side === item.value ? 'primary' : 'secondary'}
                                            aria-pressed={side === item.value}
                                            showBackLinkBtn
                                            onClick={() => {
                                                setSide(item.value);

                                                if (item.value === 'back') {
                                                    onBackSideClick();
                                                } else {
                                                    removeActiveClass();
                                                }
                                            }}
                                        >
                                            {item.label}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </BaseControl>
                            {side === 'front' && (
                                <>
                                    <BorderControl
                                        label={__('Border', 'zolo-blocks')}
                                        controlName={FRONT_ITEMS_BORDER}
                                        requiredProps={requiredProps}
                                    />

                                    <ResAlignmentControl
                                        label={__('Alignment', 'zolo-blocks')}
                                        controlName={FRONT_ITEMS_ALIGNMENT}
                                        requiredProps={requiredProps}
                                        alignOptions={DEFAULT_ALIGNS}
                                    />

                                    <ResAlignmentControl
                                        label={__('Vertical Alignment', 'zolo-blocks')}
                                        controlName={FRONT_ITEMS_VERTICAL_ALIGNMENT}
                                        requiredProps={requiredProps}
                                        alignOptions={FLIPBOX_VERTICAL_ALIGNMENT}
                                    />
                                    <NormalBGControl requiredProps={requiredProps} controlName={FRONT_ITEMS_BG} noMainBGImg={false} />
                                </>
                            )}
                            {side === 'back' && (
                                <>
                                    <BorderControl
                                        label={__('Border', 'zolo-blocks')}
                                        controlName={BACK_ITEMS_BORDER}
                                        requiredProps={requiredProps}
                                    />

                                    <ResAlignmentControl
                                        label={__('Alignment', 'zolo-blocks')}
                                        controlName={BACK_ITEMS_ALIGNMENT}
                                        requiredProps={requiredProps}
                                        alignOptions={DEFAULT_ALIGNS}
                                    />

                                    <ResAlignmentControl
                                        label={__('Vertical Alignment', 'zolo-blocks')}
                                        controlName={BACK_ITEMS_VERTICAL_ALIGNMENT}
                                        requiredProps={requiredProps}
                                        alignOptions={FLIPBOX_VERTICAL_ALIGNMENT}
                                    />
                                    <NormalBGControl requiredProps={requiredProps} controlName={BACK_ITEMS_BG} noMainBGImg={false} />
                                </>
                            )}
                        </ZoloPanelBody>

                        {(showFrontIcon || showBackIcon) && (
                            <ZoloPanelBody title={__('Icon/Image', 'zolo-block')} stylePanel={true} panelProps={props}>
                                <BaseControl label={__('Selected Side', 'zolo-blocks')}>
                                    <ButtonGroup className="zolo-button-group">
                                        {FLIPBLOX_SIDE.map((item) => (
                                            <Button
                                                isLarge
                                                variant={side === item.value ? 'primary' : 'secondary'}
                                                aria-pressed={side === item.value}
                                                showBackLinkBtn
                                                onClick={() => {
                                                    setSide(item.value);

                                                    if (item.value === 'back') {
                                                        onBackSideClick();
                                                    } else {
                                                        removeActiveClass();
                                                    }
                                                }}
                                            >
                                                {item.label}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </BaseControl>
                                {side === 'front' && (
                                    <>
                                        {showFrontIcon && (
                                            <>
                                                <ResDimensionsControl
                                                    label={__('Size', 'zolo-blocks')}
                                                    controlName={FRONT_ICON_SIZE}
                                                    requiredProps={requiredProps}
                                                />
                                                <BorderControl
                                                    label={__('Border', 'zolo-blocks')}
                                                    controlName={FRONT_ICON_BORDER}
                                                    requiredProps={requiredProps}
                                                />
                                                <ResDimensionsControl
                                                    label={__('Border Radius', 'zolo-blocks')}
                                                    controlName={FRONT_ICON_BORDER_RADIUS}
                                                    requiredProps={requiredProps}
                                                />
                                                <ResDimensionsControl
                                                    label={__('Padding', 'zolo-blocks')}
                                                    controlName={FRONT_ICON_PADDING}
                                                    requiredProps={requiredProps}
                                                />
                                                <ColorControl
                                                    label={__('Color', 'zolo-blocks')}
                                                    color={frontIconColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            frontIconColor: color,
                                                        })
                                                    }
                                                />
                                                <NormalBGControl
                                                    requiredProps={requiredProps}
                                                    controlName={FRONT_ICON_BG}
                                                    noMainBGImg={false}
                                                />
                                            </>
                                        )}
                                    </>
                                )}
                                {side === 'back' && (
                                    <>
                                        {showBackIcon && (
                                            <>
                                                <ResDimensionsControl
                                                    label={__('Size', 'zolo-blocks')}
                                                    controlName={BACK_ICON_SIZE}
                                                    requiredProps={requiredProps}
                                                />
                                                <BorderControl
                                                    label={__('Border', 'zolo-blocks')}
                                                    controlName={BACK_ICON_BORDER}
                                                    requiredProps={requiredProps}
                                                />
                                                <ResDimensionsControl
                                                    label={__('Border Radius', 'zolo-blocks')}
                                                    controlName={BACK_ICON_BORDER_RADIUS}
                                                    requiredProps={requiredProps}
                                                />
                                                <ResDimensionsControl
                                                    label={__('Padding', 'zolo-blocks')}
                                                    controlName={BACK_ICON_PADDING}
                                                    requiredProps={requiredProps}
                                                />
                                                <ColorControl
                                                    label={__('Color', 'zolo-blocks')}
                                                    color={backIconColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            backIconColor: color,
                                                        })
                                                    }
                                                />
                                                <NormalBGControl
                                                    requiredProps={requiredProps}
                                                    controlName={BACK_ICON_BG}
                                                    noMainBGImg={false}
                                                />
                                            </>
                                        )}
                                    </>
                                )}
                            </ZoloPanelBody>
                        )}

                        {(showFrontTitle || showBackTitle) && (
                            <ZoloPanelBody title={__('Title', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <BaseControl label={__('Selected Side', 'zolo-blocks')}>
                                    <ButtonGroup className="zolo-button-group">
                                        {FLIPBLOX_SIDE.map((item) => (
                                            <Button
                                                isLarge
                                                variant={side === item.value ? 'primary' : 'secondary'}
                                                aria-pressed={side === item.value}
                                                showBackLinkBtn
                                                onClick={() => {
                                                    setSide(item.value);

                                                    if (item.value === 'back') {
                                                        onBackSideClick();
                                                    } else {
                                                        removeActiveClass();
                                                    }
                                                }}
                                            >
                                                {item.label}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </BaseControl>
                                {side === 'front' && (
                                    <>
                                        {showFrontTitle && (
                                            <>
                                                <TypographyDropdown
                                                    label={__('Typography', 'zolo-blocks')}
                                                    typoPrefixConstant={FRONT_TITLE_TYPOGRAPHY}
                                                    requiredProps={requiredProps}
                                                />
                                                <ColorControl
                                                    label={__('Color', 'zolo-blocks')}
                                                    color={frontTitleColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            frontTitleColor: color,
                                                        })
                                                    }
                                                />
                                                <ResDimensionsControl
                                                    label={__('Margin', 'zolo-blocks')}
                                                    controlName={FRONT_TITLE_MARGIN}
                                                    requiredProps={requiredProps}
                                                />
                                            </>
                                        )}
                                    </>
                                )}
                                {side === 'back' && (
                                    <>
                                        <TypographyDropdown
                                            label={__('Typography', 'zolo-blocks')}
                                            typoPrefixConstant={BACK_TITLE_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                        />
                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
                                            color={backTitleColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    backTitleColor: color,
                                                })
                                            }
                                        />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zolo-blocks')}
                                            controlName={BACK_TITLE_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                )}
                            </ZoloPanelBody>
                        )}
                        {(showFrontContent || showBackContent) && (
                            <ZoloPanelBody title={__('Description', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <BaseControl label={__('Selected Side', 'zolo-blocks')}>
                                    <ButtonGroup className="zolo-button-group">
                                        {FLIPBLOX_SIDE.map((item) => (
                                            <Button
                                                isLarge
                                                variant={side === item.value ? 'primary' : 'secondary'}
                                                aria-pressed={side === item.value}
                                                showBackLinkBtn
                                                onClick={() => {
                                                    setSide(item.value);

                                                    if (item.value === 'back') {
                                                        onBackSideClick();
                                                    } else {
                                                        removeActiveClass();
                                                    }
                                                }}
                                            >
                                                {item.label}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </BaseControl>
                                {side === 'front' && (
                                    <>
                                        <TypographyDropdown
                                            label={__('Typography', 'zolo-blocks')}
                                            typoPrefixConstant={FRONT_CONTENT_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                        />
                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
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
                                            label={__('Typography', 'zolo-blocks')}
                                            typoPrefixConstant={BACK_CONTENT_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                        />
                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
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
                            <ZoloPanelBody title={__('Button', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <BaseControl label={__('Selected Side', 'zolo-blocks')}>
                                    <ButtonGroup className="zolo-button-group">
                                        {FLIPBLOX_SIDE.map((item) => (
                                            <Button
                                                isLarge
                                                variant={side === item.value ? 'primary' : 'secondary'}
                                                aria-pressed={side === item.value}
                                                showBackLinkBtn
                                                onClick={() => {
                                                    setSide(item.value);
                                                    if (item.value === 'back') {
                                                        onBackSideClick();
                                                    } else {
                                                        removeActiveClass();
                                                    }
                                                }}
                                            >
                                                {item.label}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </BaseControl>
                                {side === 'back' && (
                                    <>
                                        <TypographyDropdown
                                            label={__('Typography', 'zolo-blocks')}
                                            typoPrefixConstant={BACK_LINK_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                        />
                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
                                            color={backLinkColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    backLinkColor: color,
                                                })
                                            }
                                        />
                                        <ColorControl
                                            label={__('Hover Color', 'zolo-blocks')}
                                            color={backLinkHoverColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    backLinkHoverColor: color,
                                                })
                                            }
                                        />
                                        <BorderControl
                                            label={__('Border', 'zolo-blocks')}
                                            controlName={BACK_LINK_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zolo-blocks')}
                                            controlName={BACK_LINK_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zolo-blocks')}
                                            controlName={BACK_LINK_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                        <TabPanelControl
                                            normalComponents={
                                                <>
                                                    <NormalBGControl
                                                        requiredProps={requiredProps}
                                                        controlName={BACK_LINK_BG}
                                                        noMainBGImg={false}
                                                    />
                                                </>
                                            }
                                            hoverComponents={
                                                <>
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
