/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, BaseControl, Button, RangeControl, ButtonGroup, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    ResRangeControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TypographyDropdown,
    NormalBGControl,
    BoxShadowControl,
    ImageAvatar,
    TabPanelControl,
    HeaderTabs,
    LinkControl,
    AdvancedOptions,
    ZoloIconPicker,
    ZoloPanelBody,
} = window.zoloModule;

import Sortable from './sortable';

import objAttributes from './attributes';
import {
    CONTENT_BG,
    CONTENT_PADDING,
    CONTENT_MARGIN,
    CONTENT_BORDER,
    CONTENT_BORDER_RADIUS,
    CONTENT_BOX_SHADOW,
    PHOTO_BG,
    PHOTO_SIZE,
    TEAM_PHOTO_BORDER,
    TEAM_PHOTO_BORDER_RADIUS,
    TEAM_PHOTO_BOX_SHADOW,
    TEAM_PHOTO_MARGIN,
    TEAM_PHOTO_PADDING,
    TEAM_NAME_MARGIN,
    TEAM_DESIGNATION_MARGIN,
    TEAM_SHORT_BIO_MARGIN,
    ICONS_BG,
    ICONS_HOVER_BG,
    ICONS_SIZE,
    ICONS_SPACING,
    ICONS_BORDER,
    ICONS_BORDER_RADIUS,
    ICONS_PADDING,
    ICONS_BOX_SHADOW,
    ICONS_HOVER_BOX_SHADOW,
    ICONS_CONTAINER_PADDING,
    ICONS_CONTAINER_MARGIN,
    DETAIL_PAGE_LINK_BG,
    DETAIL_PAGE_LINK_HOVER_BG,
    DPL_HEIGHT,
    DPL_WIDTH,
    DPL_BORDER,
    DPL_BORDER_RADIUS,
    DPL_PADDING,
    DPL_MARGIN,
    DPL_ICON_SIZE,
    ITEM_BG,
    ITEM_PADDING,
    ITEM_MARGIN,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_BOX_SHADOW,
    FLIPBLOX_SIDE,
    LINK_TYPE
} from './constants';

import {
    TEAM_MEMBER_NAME_TYPOGRAPHY,
    TEAM_MEMBER_DESIGNATION_TYPOGRAPHY,
    TEAM_MEMBER_SHORT_BIO_TYPOGRAPHY,
} from './constants/typoPrefixConstants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        preset,
        showDesignation,
        addDetailPageLink,
        showSocialProfiles,
        showShortBio,
        nameColor,
        designationColor,
        shortBioColor,
        separatorColor,
        iconColor,
        iconHoverColor,
        iconHoverBorderColor,
        detailPageIconColor,
        detailPageIconHoverColor,
        parentClasses,
        isHover,
        flipType,
        selectedSide,
        frontIconOrImage,
        frontIcon,
        frontImageUrl,
        backIconOrImage,
        backIcon,
        backImageUrl,
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
        backContent,
        linkType,
        buttonText,
        buttonIcon,
        buttonIconPos,
        link,
        linkOpenNewTab,
        frontTitleColor,
        backTitleColor,
        frontContentColor,
        backContentColor,
        frontIconColor,
        backIconColor,
        buttonStyle,
        buttonClasses,
        buttonBackground,
        buttonColor,
        frontIconBackground,
        backIconBackground,
        transitionSpeed,
        displayButtonIcon,
        align,
        contentPosition,
        classHook,
    } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
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
                            <BaseControl label={__('Selected Side', 'zolo-blocks')}>
                                <ButtonGroup className="zolo-button-group">
                                    {
                                        FLIPBLOX_SIDE.map((item) => (
                                            <Button
                                                isLarge
                                                isPrimary={selectedSide === item.value}
                                                aria-pressed={selectedSide === item.value}
                                                showBackLinkBtn                                onClick={() => setAttributes({ selectedSide: item.value })}
                                            >
                                                {item.label}
                                            </Button>
                                        ))
                                    }

                                </ButtonGroup>
                            </BaseControl>
                            {selectedSide === "front" && (
                                <>
                                    <ToggleControl
                                        label={__("Show Icon?", "zolo-blocks")}
                                        checked={showFrontIcon}
                                        onChange={() => {
                                            setAttributes({ showFrontIcon: !showFrontIcon });
                                        }}
                                    />
                                    <ToggleControl
                                        label={__("Show Title?", "zolo-blocks")}
                                        checked={showFrontTitle}
                                        onChange={() => {
                                            setAttributes({ showFrontTitle: !showFrontTitle });
                                        }}
                                    />
                                    <ToggleControl
                                        label={__("Show Content?", "zolo-blocks")}
                                        checked={showFrontContent}
                                        onChange={() => {
                                            setAttributes({
                                                showFrontContent: !showFrontContent,
                                            });
                                        }}
                                    />
                                </>
                            )}
                            {selectedSide === "back" && (
                                <>
                                    <ToggleControl
                                        label={__("Show Icon?", "zolo-blocks")}
                                        checked={showBackIcon}
                                        onChange={() => {
                                            setAttributes({ showBackIcon: !showBackIcon });
                                        }}
                                    />
                                    <ToggleControl
                                        label={__("Show Title?", "zolo-blocks")}
                                        checked={showBackTitle}
                                        onChange={() => {
                                            setAttributes({ showBackTitle: !showBackTitle });
                                        }}
                                    />
                                    <ToggleControl
                                        label={__("Show Content?", "zolo-blocks")}
                                        checked={showBackContent}
                                        onChange={() => {
                                            setAttributes({
                                                showBackContent: !showBackContent,
                                            });
                                        }}
                                    />
                                    <ToggleControl
                                        label={__("Show Button?", "zolo-blocks")}
                                        checked={showBackLinkBtn}
                                        onChange={() => {
                                            setAttributes({
                                                showBackLinkBtn: !showBackLinkBtn,
                                            });
                                        }}
                                    />
                                </>
                            )}

                        </ZoloPanelBody>
                        {selectedSide === "front" && (
                            <>
                            {showFrontIcon && (
                                <ZoloPanelBody title={__('Icon', 'zolo-block')} panelProps={props}>
                                    {showFrontIcon && (
                                        <ZoloIconPicker
                                            label={__('Select Icon', 'zolo-block')}
                                            value={frontIcon}
                                            onChange={(v) => setAttributes({ frontIcon: v })}
                                        />
                                    )}
                                </ZoloPanelBody>
                                )}
                               {(showFrontTitle || showFrontContent) && (
                                    <ZoloPanelBody title={__('Flipbox Content', 'zolo-block')} panelProps={props}>
                                        {showFrontTitle && (
                                            <TextControl
                                                label={__("Front Title", "zolo-blocks")}
                                                value={frontTitle}
                                                onChange={(newText) =>
                                                    setAttributes({ frontTitle: newText })
                                                }
                                            />
                                        )}
                                        {showFrontContent && (
                                            <TextareaControl
                                                label={__("Front Content", "zolo-blocks")}
                                                value={frontContent}
                                                onChange={(newText) =>
                                                    setAttributes({ frontContent: newText })
                                                }
                                            />
                                        )}
                                    </ZoloPanelBody>
                                    )}
                            </>
                        )}

                        {selectedSide === "back" && (
                            <>
                                {showBackIcon && (
                                    <ZoloPanelBody title={__('Back Icon', 'zolo-block')} panelProps={props}>
                                        {showBackIcon && (
                                            <ZoloIconPicker
                                                label={__('Select Icon', 'zolo-block')}
                                                value={backIcon}
                                                onChange={(v) => setAttributes({ backIcon: v })}
                                            />
                                        )}
                                    </ZoloPanelBody>
                                )}
                               {(showBackTitle || showBackContent) && (
                                    <ZoloPanelBody title={__('Flipbox Content', 'zolo-block')} panelProps={props}>
                                        {showBackTitle && (
                                            <TextControl
                                                label={__("Back Title", "zolo-blocks")}
                                                value={backTitle}
                                                onChange={(newText) =>
                                                    setAttributes({ backTitle: newText })
                                                }
                                            />
                                        )}

                                        {showBackContent && (
                                            <TextareaControl
                                                label={__("Back Content", "zolo-blocks")}
                                                value={backContent}
                                                onChange={(newText) =>
                                                    setAttributes({ backContent: newText })
                                                }
                                            />
                                        )}
                                    </ZoloPanelBody>
                                )}

                                <ZoloPanelBody
                                    title={__("Link Settings", "zolo-blocks")}
                                    initialOpen={false}
                                    panelProps={props}
                                >
                                    <BaseControl
                                        label={__("Link Type", "zolo-blocks")}
                                        id="zolo-flipbox-link-type"
                                    >
                                        <ButtonGroup id="zolo-flipbox-link-type">
                                            {LINK_TYPE.map((item, index) => (
                                                <Button
                                                    key={index}
                                                    isPrimary={linkType === item.value}
                                                    isSecondary={linkType !== item.value}
                                                    onClick={() => {
                                                        setAttributes({ linkType: item.value })
                                                    }}
                                                >
                                                    {item.label}
                                                </Button>
                                            ))}
                                        </ButtonGroup>
                                    </BaseControl>

                                    <TextControl
                                        label={__("Link", "zolo-blocks")}
                                        value={link}
                                        placeholder="https://your-link.com"
                                        onChange={(newLink) => setAttributes({ link: newLink })}
                                    />
                                    <ToggleControl
                                        label={__("Open in New Tab", "zolo-blocks")}
                                        checked={linkOpenNewTab}
                                        onChange={() =>
                                            setAttributes({
                                                linkOpenNewTab: !linkOpenNewTab,
                                            })
                                        }
                                    />

                                    {linkType === "button" && (
                                        <>
                                            <TextControl
                                                label={__("Button Text", "zolo-blocks")}
                                                value={buttonText}
                                                onChange={(newText) =>
                                                    setAttributes({ buttonText: newText })
                                                }
                                            />
                                            {/* {iconToggle && ( */}
                                            <ZoloIconPicker
                                                label={__('Select Icon', 'zolo-block')}
                                                value={buttonIcon}
                                                onChange={(v) => setAttributes({ buttonIcon: v })}
                                            />
                                        </>
                                    )}
                                </ZoloPanelBody>
                            </>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item', 'zolo-blocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <BorderControl label={__('Border', 'zolo-blocks')} controlName={ITEM_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={ITEM_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={ITEM_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={ITEM_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <NormalBGControl requiredProps={requiredProps} controlName={ITEM_BG} noMainBGImg={false} />
                            <BoxShadowControl controlName={ITEM_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Content', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <BorderControl label={__('Border', 'zolo-blocks')} controlName={CONTENT_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={CONTENT_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={CONTENT_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={CONTENT_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <NormalBGControl requiredProps={requiredProps} controlName={CONTENT_BG} noMainBGImg={false} />
                            <BoxShadowControl controlName={CONTENT_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Photo', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <ResRangeControl
                                label={__('Size', 'zolo-blocks')}
                                controlName={PHOTO_SIZE}
                                requiredProps={requiredProps}
                                min={10}
                                max={1000}
                            />
                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={TEAM_PHOTO_BORDER}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={TEAM_PHOTO_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={TEAM_PHOTO_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={TEAM_PHOTO_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <NormalBGControl requiredProps={requiredProps} controlName={PHOTO_BG} noMainBGImg={true} />
                            <BoxShadowControl controlName={TEAM_PHOTO_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Name', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={TEAM_MEMBER_NAME_TYPOGRAPHY}
                                requiredProps={requiredProps}
                            />
                            <ColorControl
                                label={__('Color', 'zolo-blocks')}
                                color={nameColor}
                                onChange={(color) =>
                                    setAttributes({
                                        nameColor: color,
                                    })
                                }
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={TEAM_NAME_MARGIN}
                                requiredProps={requiredProps}
                            />
                        </ZoloPanelBody>
                        {showDesignation && (
                            <ZoloPanelBody title={__('Designation', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={TEAM_MEMBER_DESIGNATION_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <ColorControl
                                    label={__('Color', 'zolo-blocks')}
                                    color={designationColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            designationColor: color,
                                        })
                                    }
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={TEAM_DESIGNATION_MARGIN}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>
                        )}
                        {showShortBio && (
                            <ZoloPanelBody title={__('Short Bio', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zolo-blocks')}
                                    typoPrefixConstant={TEAM_MEMBER_SHORT_BIO_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <ColorControl
                                    label={__('Color', 'zolo-blocks')}
                                    color={shortBioColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            shortBioColor: color,
                                        })
                                    }
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={TEAM_SHORT_BIO_MARGIN}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>
                        )}
                        {showSocialProfiles && (
                            <>
                                <ZoloPanelBody title={__('Social Profiles Container', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                    <ResDimensionsControl
                                        label={__('Margin', 'zolo-blocks')}
                                        controlName={ICONS_CONTAINER_MARGIN}
                                        requiredProps={requiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Padding', 'zolo-blocks')}
                                        controlName={ICONS_CONTAINER_PADDING}
                                        requiredProps={requiredProps}
                                    />
                                </ZoloPanelBody>
                                <ZoloPanelBody title={__('Social Profiles', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                    {preset === 'default' && (
                                        <ColorControl
                                            label={__('Separator Color', 'zolo-blocks')}
                                            color={separatorColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    separatorColor: color,
                                                })
                                            }
                                        />
                                    )}
                                    <ResRangeControl
                                        label={__('Icon Size', 'zolo-blocks')}
                                        controlName={ICONS_SIZE}
                                        requiredProps={requiredProps}
                                    />
                                    <ResRangeControl
                                        label={__('Icon Spacing', 'zolo-blocks')}
                                        controlName={ICONS_SPACING}
                                        requiredProps={requiredProps}
                                    />
                                    <BorderControl
                                        label={__('Border', 'zolo-blocks')}
                                        controlName={ICONS_BORDER}
                                        requiredProps={requiredProps}
                                        hoverControl={
                                            <ColorControl
                                                label={__('Border Color', 'zolo-blocks')}
                                                color={iconHoverBorderColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        iconHoverBorderColor: color,
                                                    })
                                                }
                                            />
                                        }
                                    />
                                    <ResDimensionsControl
                                        label={__('Border Radius', 'zolo-blocks')}
                                        controlName={ICONS_BORDER_RADIUS}
                                        requiredProps={requiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Padding', 'zolo-blocks')}
                                        controlName={ICONS_PADDING}
                                        requiredProps={requiredProps}
                                    />
                                    <TabPanelControl
                                        normalComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zolo-blocks')}
                                                    color={iconColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            iconColor: color,
                                                        })
                                                    }
                                                />
                                                <NormalBGControl requiredProps={requiredProps} controlName={ICONS_BG} noMainBGImg={true} />
                                                <BoxShadowControl
                                                    controlName={ICONS_BOX_SHADOW}
                                                    requiredProps={requiredProps}
                                                    enableTransition={false}
                                                />
                                            </>
                                        }
                                        hoverComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zolo-blocks')}
                                                    color={iconHoverColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            iconHoverColor: color,
                                                        })
                                                    }
                                                />
                                                <NormalBGControl
                                                    requiredProps={requiredProps}
                                                    controlName={ICONS_HOVER_BG}
                                                    noMainBGImg={true}
                                                />
                                                <BoxShadowControl
                                                    controlName={ICONS_HOVER_BOX_SHADOW}
                                                    requiredProps={requiredProps}
                                                    enableTransition={false}
                                                />
                                            </>
                                        }
                                    />
                                </ZoloPanelBody>
                            </>
                        )}
                        {addDetailPageLink && (
                            <ZoloPanelBody title={__('Details Page Link', 'zolo-blocks')} stylePanel={true} panelProps={props}>
                                <ResRangeControl
                                    label={__('Icon Size', 'zolo-blocks')}
                                    controlName={DPL_ICON_SIZE}
                                    requiredProps={requiredProps}
                                />
                                <ResRangeControl
                                    label={__('Height', 'zolo-blocks')}
                                    controlName={DPL_HEIGHT}
                                    requiredProps={requiredProps}
                                />
                                <ResRangeControl label={__('Width', 'zolo-blocks')} controlName={DPL_WIDTH} requiredProps={requiredProps} />
                                <BorderControl label={__('Border', 'zolo-blocks')} controlName={DPL_BORDER} requiredProps={requiredProps} />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zolo-blocks')}
                                    controlName={DPL_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zolo-blocks')}
                                    controlName={DPL_PADDING}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={DPL_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Icon Color', 'zolo-blocks')}
                                                color={detailPageIconColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        detailPageIconColor: color,
                                                    })
                                                }
                                            />
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={DETAIL_PAGE_LINK_BG}
                                                noMainBGImg={true}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Icon Color', 'zolo-blocks')}
                                                color={detailPageIconHoverColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        detailPageIconHoverColor: color,
                                                    })
                                                }
                                            />
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={DETAIL_PAGE_LINK_HOVER_BG}
                                                noMainBGImg={true}
                                            />
                                        </>
                                    }
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
