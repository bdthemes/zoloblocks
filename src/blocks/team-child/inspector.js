/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { TextControl, TextareaControl, BaseControl, Button, CardDivider } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

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
    ImageSizes,
    ResGapControl,
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
    IMAGE_OVERLAY,
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
    ICONS_MARGIN,
    SEPARATOR_TEAM_SIZE,
    SEPARATOR_SPACING_TEAM,
} from './constants';

import {
    TEAM_MEMBER_NAME_TYPOGRAPHY,
    TEAM_MEMBER_DESIGNATION_TYPOGRAPHY,
    TEAM_MEMBER_SHORT_BIO_TYPOGRAPHY,
} from './constants/typoPrefixConstants';

function Inspector(props) {
    const { attributes, setAttributes, block } = props;
    const {
        resMode,
        preset,
        memberPhoto,
        memberName,
        showDesignation,
        memberDesignation,
        addDetailPageLink,
        memberDetailPageLink,
        showSocialProfiles,
        socialProfiles,
        showShortBio,
        memberShortBio,
        nameColor,
        designationColor,
        separatorTeamColor,
        shortBioColor,
        separatorColor,
        iconColor,
        iconHoverColor,
        iconHoverBorderColor,
        detailPageIconColor,
        detailPageIconHoverColor,
        detailIcon,
        imageRes,
    } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    // css filter
    const cssFilters = applyFilters('zolo.extensions.controls.cssFilters', [], block, props);
    const cssFiltersHover = applyFilters('zolo.extensions.controls.cssFiltersHover', [], block, props);

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/team-child"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <BaseControl label={__('Photo', 'zoloblocks')} className="zolo-flex-col-control">
                                {memberPhoto ? (
                                    <ImageAvatar
                                        imageUrl={memberPhoto && memberPhoto.url}
                                        onDeleteImage={() =>
                                            setAttributes({
                                                memberPhoto: null,
                                            })
                                        }
                                        imageId={memberPhoto && memberPhoto.id}
                                        onEditImage={(media) => {
                                            setAttributes({
                                                memberPhoto: {
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
                                                memberPhoto: {
                                                    id: media.id,
                                                    url: media.url,
                                                    alt: media.alt,
                                                    sizes: media.sizes,
                                                    caption: media.caption,
                                                },
                                            });
                                        }}
                                        allowedTypes={['image']}
                                        value={memberPhoto && memberPhoto.id}
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
                                                {__(' Upload Photo', 'zoloblocks')}
                                            </Button>
                                        )}
                                    />
                                )}
                            </BaseControl>
                            <ImageSizes
                                label={__('Resolution', 'zoloblocks')}
                                value={imageRes}
                                onChange={(res) => setAttributes({ imageRes: res })}
                            />
                            <CardDivider />
                            <TextControl
                                label={__('Name', 'zoloblocks')}
                                onChange={(name) =>
                                    setAttributes({
                                        memberName: name,
                                    })
                                }
                                value={memberName}
                                placeholder={__('Name..', 'zoloblocks')}
                            />
                            {showDesignation && (
                                <TextControl
                                    label={__('Designation', 'zoloblocks')}
                                    onChange={(d) =>
                                        setAttributes({
                                            memberDesignation: d,
                                        })
                                    }
                                    value={memberDesignation}
                                    placeholder={__('Designation..', 'zoloblocks')}
                                />
                            )}
                            {showShortBio && (
                                <TextareaControl
                                    className="zolo-flex-col-control"
                                    label={__('Short Bio', 'zoloblocks')}
                                    value={memberShortBio}
                                    onChange={(bio) =>
                                        setAttributes({
                                            memberShortBio: bio,
                                        })
                                    }
                                    placeholder={__('Short Bio..', 'zoloblocks')}
                                />
                            )}
                            {addDetailPageLink && preset !== 'style-4' && preset !== 'style-45' && (
                                <LinkControl
                                    label={__('Link', 'zoloblocks')}
                                    value={memberDetailPageLink}
                                    onChange={(link) =>
                                        setAttributes({
                                            memberDetailPageLink: link,
                                        })
                                    }
                                />
                            )}
                        </ZoloPanelBody>
                        {showSocialProfiles && (
                            <ZoloPanelBody title={__('Social Profiles', 'zoloblocks')} panelProps={props}>
                                <Sortable socialProfiles={socialProfiles} setAttributes={setAttributes} />
                            </ZoloPanelBody>
                        )}
                        {addDetailPageLink && preset !== 'style-4' && (
                            <ZoloPanelBody title={__('Details Page Icon', 'zoloblocks')} panelProps={props}>
                                <ZoloIconPicker
                                    label={__('Select Icon', 'zoloblocks')}
                                    onChange={(icon) => setAttributes({ detailIcon: icon })}
                                    value={detailIcon}
                                />
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Item', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <NormalBGControl requiredProps={requiredProps} controlName={ITEM_BG} noMainBGImg={false} />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={ITEM_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={ITEM_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <CardDivider />
                            <BorderControl label={__('Border', 'zoloblocks')} controlName={ITEM_BORDER} requiredProps={requiredProps} />
                            <BoxShadowControl controlName={ITEM_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={ITEM_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Content', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <NormalBGControl requiredProps={requiredProps} controlName={CONTENT_BG} noMainBGImg={false} />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={CONTENT_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={CONTENT_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <CardDivider />
                            <BorderControl label={__('Border', 'zoloblocks')} controlName={CONTENT_BORDER} requiredProps={requiredProps} />
                            <BoxShadowControl controlName={CONTENT_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={CONTENT_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Photo', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <ResRangeControl
                                label={__('Size', 'zoloblocks')}
                                controlName={PHOTO_SIZE}
                                requiredProps={requiredProps}
                                min={10}
                                max={1000}
                            />
                            <CardDivider />
                            <NormalBGControl requiredProps={requiredProps} controlName={PHOTO_BG} noMainBGImg={true} />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={TEAM_PHOTO_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={TEAM_PHOTO_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <CardDivider />
                            <BorderControl
                                label={__('Border', 'zoloblocks')}
                                controlName={TEAM_PHOTO_BORDER}
                                requiredProps={requiredProps}
                            />
                            <BoxShadowControl controlName={TEAM_PHOTO_BOX_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={TEAM_PHOTO_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />

                            {preset === 'style-5' && (
                                <>
                                    <CardDivider />
                                    <NormalBGControl
                                        label={__('Overlay', 'zoloblocks')}
                                        requiredProps={requiredProps}
                                        controlName={IMAGE_OVERLAY}
                                        noMainBGImg={true}
                                    />
                                </>
                            )}

                            {cssFilters && cssFilters.length > 0 && (
                                <>
                                    <TabPanelControl
                                        options={[
                                            {
                                                value: 'normal',
                                                label: __('Normal', 'zoloblocks'),
                                            },
                                            {
                                                value: 'hover',
                                                label: __('Hover', 'zoloblocks'),
                                            },
                                        ]}
                                        normalComponents={<>{cssFilters}</>}
                                        hoverComponents={<>{cssFiltersHover}</>}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Name', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={nameColor}
                                onChange={(color) =>
                                    setAttributes({
                                        nameColor: color,
                                    })
                                }
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={TEAM_MEMBER_NAME_TYPOGRAPHY}
                                requiredProps={requiredProps}
                            />
                            <CardDivider />
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={TEAM_NAME_MARGIN}
                                requiredProps={requiredProps}
                            />
                        </ZoloPanelBody>
                        {showDesignation && (
                            <ZoloPanelBody title={__('Designation', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={designationColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            designationColor: color,
                                        })
                                    }
                                />
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={TEAM_MEMBER_DESIGNATION_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <CardDivider />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={TEAM_DESIGNATION_MARGIN}
                                    requiredProps={requiredProps}
                                />

                                {/*  Add Separator */}

                                {preset === 'style-4' && (
                                    <>
                                        <div className="zolo-custom-heading">{__('Separator', 'zoloblocks')}</div>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={separatorTeamColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    separatorTeamColor: color,
                                                })
                                            }
                                        />
                                        <ResRangeControl
                                            label={__('Size', 'zoloblocks')}
                                            controlName={SEPARATOR_TEAM_SIZE}
                                            requiredProps={requiredProps}
                                        />
                                        <ResGapControl
                                            label={__('Gap', 'zoloblocks')}
                                            controlName={SEPARATOR_SPACING_TEAM}
                                            requiredProps={requiredProps}
                                            max={200}
                                        />
                                    </>
                                )}
                            </ZoloPanelBody>
                        )}
                        {showShortBio && (
                            <ZoloPanelBody title={__('Short Bio', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={shortBioColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            shortBioColor: color,
                                        })
                                    }
                                />
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={TEAM_MEMBER_SHORT_BIO_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <CardDivider />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={TEAM_SHORT_BIO_MARGIN}
                                    requiredProps={requiredProps}
                                />
                            </ZoloPanelBody>
                        )}
                        {showSocialProfiles && (
                            <>
                                {preset === 'style-1' && (
                                    <ZoloPanelBody
                                        title={__('Social Profiles Container', 'zoloblocks')}
                                        stylePanel={true}
                                        panelProps={props}
                                    >
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={ICONS_CONTAINER_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={ICONS_CONTAINER_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                    </ZoloPanelBody>
                                )}

                                <ZoloPanelBody title={__('Social Profiles', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                    <TabPanelControl
                                        normalComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
                                                    color={iconColor}
                                                    onChange={(color) =>
                                                        setAttributes({
                                                            iconColor: color,
                                                        })
                                                    }
                                                />
                                                {preset === 'default' && (
                                                    <ColorControl
                                                        label={__('Separator Color', 'zoloblocks')}
                                                        color={separatorColor}
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                separatorColor: color,
                                                            })
                                                        }
                                                    />
                                                )}
                                                <ResRangeControl
                                                    label={__('Size', 'zoloblocks')}
                                                    controlName={ICONS_SIZE}
                                                    requiredProps={requiredProps}
                                                />
                                                <CardDivider />
                                                <NormalBGControl requiredProps={requiredProps} controlName={ICONS_BG} noMainBGImg={true} />
                                                <ResDimensionsControl
                                                    label={__('Padding', 'zoloblocks')}
                                                    controlName={ICONS_PADDING}
                                                    requiredProps={requiredProps}
                                                />
                                                {preset !== 'style-1' && (
                                                    <ResDimensionsControl
                                                        label={__('Margin', 'zoloblocks')}
                                                        controlName={ICONS_MARGIN}
                                                        requiredProps={requiredProps}
                                                    />
                                                )}
                                                <CardDivider />
                                                <BorderControl
                                                    label={__('Border', 'zoloblocks')}
                                                    controlName={ICONS_BORDER}
                                                    requiredProps={requiredProps}
                                                    hoverControl={
                                                        <ColorControl
                                                            label={__('Border Color', 'zoloblocks')}
                                                            color={iconHoverBorderColor}
                                                            onChange={(color) =>
                                                                setAttributes({
                                                                    iconHoverBorderColor: color,
                                                                })
                                                            }
                                                        />
                                                    }
                                                />
                                                <BoxShadowControl
                                                    controlName={ICONS_BOX_SHADOW}
                                                    requiredProps={requiredProps}
                                                    enableTransition={false}
                                                />
                                                <ResDimensionsControl
                                                    label={__('Border Radius', 'zoloblocks')}
                                                    controlName={ICONS_BORDER_RADIUS}
                                                    requiredProps={requiredProps}
                                                />
                                                <CardDivider />
                                                <ResRangeControl
                                                    label={__('Spacing', 'zoloblocks')}
                                                    controlName={ICONS_SPACING}
                                                    requiredProps={requiredProps}
                                                />
                                            </>
                                        }
                                        hoverComponents={
                                            <>
                                                <ColorControl
                                                    label={__('Color', 'zoloblocks')}
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
                        {addDetailPageLink && preset !== 'style-4' && preset !== 'style-5' && (
                            <ZoloPanelBody title={__('Details Page Link', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={detailPageIconColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        detailPageIconColor: color,
                                                    })
                                                }
                                            />
                                            <ResRangeControl
                                                label={__('Size', 'zoloblocks')}
                                                controlName={DPL_ICON_SIZE}
                                                requiredProps={requiredProps}
                                            />
                                            <CardDivider />
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={DETAIL_PAGE_LINK_BG}
                                                noMainBGImg={true}
                                            />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={DPL_PADDING}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={DPL_MARGIN}
                                                requiredProps={requiredProps}
                                            />
                                            <CardDivider />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={DPL_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={DPL_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
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
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/team-child"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
