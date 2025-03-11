/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import {
    CardDivider,
    PanelBody,
    TextControl,
    TextareaControl,
    ToggleControl,
    SelectControl,
    BaseControl,
    Button,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { cloneDeep } from 'lodash';
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
    SortableItem,
    SortableControl,
    AdvancedOptions,
    ZoloPanelBody,
    ImageSizes,
} = window.zoloModule;

import objAttributes from './attributes';
import {
    PRESETS,
    HEADER_AREA_BORDER_RADIUS,
    HEADER_AREA_PADDING,
    HEADER_BADGE_BORDER,
    HEADER_AREA_BG,
    BADGE_PADDING,
    BADGE_MARGIN,
    BADGE_BG,
    BADGE_BORDER_RADIUS,
    CONTENT_BORDER_RADIUS,
    CONTENT_BG,
    CONTENT_BORDER,
    CONTENT_PADDING,
    INNER_CONTENT_PADDING,
    CONTENT_MARGIN,
    PHOTO_VOFFSET,
    PHOTO_SIZE,
    PHOTO_BORDER,
    PHOTO_BORDER_RADIUS,
    META_WRAP_MARGIN,
    NAME_MARGIN,
    USERNAME_MARGIN,
    EMAIL_MARGIN,
    BIO_MARGIN,
    ICONS_BG,
    ICONS_HOVER_BG,
    ICONS_SIZE,
    ICONS_SPACING,
    ICONS_BORDER,
    ICONS_BORDER_RADIUS,
    ICONS_PADDING,
    ICONS_MARGIN,
    STATUS_MARGIN,
    FBTN_BG,
    FBTN_BORDER,
    FBTN_BOX_SHADOW,
    FBTN_BORDER_RADIUS,
    FBTN_PADDING,
    FBTN_MARGIN,
    FBTN_HOVER_BG,
    FBTN_HOVER_BOX_SHADOW,
    STATUS_GAP,
    PHOTO_IMG_OVERLAY,
} from './constants';

import {
    BADGE_TYPO,
    BIO_TYPO,
    EMAIL_TYPO,
    LABEL_TYPO,
    NUMBER_TYPO,
    PROFILE_NAME,
    PROFILE_USERNAME,
    BTN_TYPO,
} from './constants/typoPrefixConstants';
import Sortable from './sortable';

function Inspector(props) {
    const { attributes, setAttributes, block } = props;
    const {
        preset,
        resMode,
        showBadge,
        badgeText,
        showPhoto,
        photo,
        showName,
        name,
        showUsername,
        username,
        showEmail,
        email,
        showBio,
        bio,
        showStatus,
        statusItems,
        showFollowButton,
        followButtonText,
        followButtonLink,
        showSocialProfiles,
        socialProfiles,
        badgeColor,
        nameColor,
        usernameColor,
        emailColor,
        bioColor,
        labelColor,
        numberColor,
        btnColor,
        btnHoverColor,
        btnHoverBorderColor,
        iconColor,
        iconHoverColor,
        iconHoverBorderColor,
        imageRes,
    } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    const deepCloneStatusItems = cloneDeep(statusItems);

    // css filter
    const cssFilters = applyFilters('zolo.extensions.controls.cssFilters', [], block, props);

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/profile-card"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <SelectControl
                                label={__('Preset', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.profileCard.presets', PRESETS)}
                                onChange={(v) => {
                                    setAttributes({
                                        preset: v,
                                    });
                                }}
                            />
                            <div className="zolo-custom-heading">
                                <h2>{__('Show/Hide elements', 'zoloblocks')}</h2>
                            </div>
                            <ToggleControl
                                label={__('Badge', 'zoloblocks')}
                                checked={showBadge}
                                onChange={() =>
                                    setAttributes({
                                        showBadge: !showBadge,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Photo', 'zoloblocks')}
                                checked={showPhoto}
                                onChange={() =>
                                    setAttributes({
                                        showPhoto: !showPhoto,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Name', 'zoloblocks')}
                                checked={showName}
                                onChange={() =>
                                    setAttributes({
                                        showName: !showName,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Username', 'zoloblocks')}
                                checked={showUsername}
                                onChange={() =>
                                    setAttributes({
                                        showUsername: !showUsername,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Email', 'zoloblocks')}
                                checked={showEmail}
                                onChange={() =>
                                    setAttributes({
                                        showEmail: !showEmail,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Bio', 'zoloblocks')}
                                checked={showBio}
                                onChange={() =>
                                    setAttributes({
                                        showBio: !showBio,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Status', 'zoloblocks')}
                                checked={showStatus}
                                onChange={() =>
                                    setAttributes({
                                        showStatus: !showStatus,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Follow Button', 'zoloblocks')}
                                checked={showFollowButton}
                                onChange={() =>
                                    setAttributes({
                                        showFollowButton: !showFollowButton,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Social Profiles', 'zoloblocks')}
                                checked={showSocialProfiles}
                                onChange={() =>
                                    setAttributes({
                                        showSocialProfiles: !showSocialProfiles,
                                    })
                                }
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Content', 'zoloblocks')} panelProps={props}>
                            {showBadge && (
                                <>
                                    <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                        {__('Badge', 'zoloblocks')}
                                    </div>
                                    <TextControl
                                        label={__('Text', 'zoloblocks')}
                                        value={badgeText}
                                        onChange={(text) =>
                                            setAttributes({
                                                badgeText: text,
                                            })
                                        }
                                        placeholder={__('Enter Badge Text', 'zoloblocks')}
                                    />
                                </>
                            )}
                            {showPhoto && (
                                <>
                                    <div className="zolo-custom-heading">{__('Photo', 'zoloblocks')}</div>
                                    <BaseControl label={__('Select', 'zoloblocks')} className="zolo-flex-col-control">
                                        {photo ? (
                                            <ImageAvatar
                                                imageUrl={photo && photo.url}
                                                imageId={photo && photo.id}
                                                onDeleteImage={() =>
                                                    setAttributes({
                                                        photo: null,
                                                    })
                                                }
                                                onEditImage={(media) =>
                                                    setAttributes({
                                                        photo: {
                                                            id: media.id,
                                                            url: media.url,
                                                            alt: media.alt,
                                                            sizes: media.sizes,
                                                            caption: media.caption,
                                                        },
                                                    })
                                                }
                                            />
                                        ) : (
                                            <MediaUpload
                                                onSelect={(media) => {
                                                    setAttributes({
                                                        photo: {
                                                            id: media.id,
                                                            url: media.url,
                                                            alt: media.alt,
                                                            sizes: media.sizes,
                                                            caption: media.caption,
                                                        },
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
                                                        {__(' Upload Photo', 'zoloblocks')}
                                                    </Button>
                                                )}
                                            />
                                        )}
                                    </BaseControl>
                                    <ImageSizes
                                        label={__('Resolution', 'zoloblocks')}
                                        value={imageRes}
                                        onChange={(value) =>
                                            setAttributes({
                                                imageRes: value,
                                            })
                                        }
                                    />
                                </>
                            )}
                            {showName && (
                                <>
                                    <div className="zolo-custom-heading">{__('Name', 'zoloblocks')}</div>
                                    <TextControl
                                        label={__('Text', 'zoloblocks')}
                                        onChange={(value) =>
                                            setAttributes({
                                                name: value,
                                            })
                                        }
                                        value={name}
                                        placeholder={__('Name..', 'zoloblocks')}
                                    />
                                </>
                            )}
                            {showUsername && (
                                <>
                                    <div className="zolo-custom-heading">{__('Username', 'zoloblocks')}</div>
                                    <TextControl
                                        label={__('Text', 'zoloblocks')}
                                        onChange={(value) =>
                                            setAttributes({
                                                username: value,
                                            })
                                        }
                                        value={username}
                                        placeholder={__('Username..', 'zoloblocks')}
                                    />
                                </>
                            )}
                            {showEmail && (
                                <>
                                    <div className="zolo-custom-heading">{__('Email', 'zoloblocks')}</div>
                                    <TextControl
                                        label={__('Text', 'zoloblocks')}
                                        onChange={(value) =>
                                            setAttributes({
                                                email: value,
                                            })
                                        }
                                        value={email}
                                        placeholder={__('Email..', 'zoloblocks')}
                                    />
                                </>
                            )}
                            {showBio && (
                                <>
                                    <div className="zolo-custom-heading">{__('Bio', 'zoloblocks')}</div>
                                    <TextareaControl
                                        className="zolo-flex-col-control"
                                        label={__('Text', 'zoloblocks')}
                                        value={bio}
                                        onChange={(value) =>
                                            setAttributes({
                                                bio: value,
                                            })
                                        }
                                        placeholder={__('Bio..', 'zoloblocks')}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                        {showStatus && (
                            <ZoloPanelBody title={__('Status', 'zoloblocks')} panelProps={props}>
                                <SortableControl defaultItems={statusItems} attributeName="statusItems" setAttributes={setAttributes}>
                                    {deepCloneStatusItems &&
                                        deepCloneStatusItems.map((item, index) => {
                                            return (
                                                <div className="dnd-container no-trash" key={index}>
                                                    <SortableItem key={item.id} id={item.id}>
                                                        <PanelBody title={item.label} initialOpen={false}>
                                                            <TextControl
                                                                label={__('Number', 'zoloblocks')}
                                                                value={item && item.number}
                                                                onChange={(value) => {
                                                                    let newStatusItems = [...deepCloneStatusItems];
                                                                    newStatusItems[index].number = value;
                                                                    setAttributes({
                                                                        statusItems: newStatusItems,
                                                                    });
                                                                }}
                                                                placeholder={__('Counter Number..', 'zoloblocks')}
                                                            />
                                                            <TextControl
                                                                label={__('Label', 'zoloblocks')}
                                                                value={item && item.label}
                                                                onChange={(value) => {
                                                                    let newStatusItems = [...deepCloneStatusItems];
                                                                    newStatusItems[index].label = value;
                                                                    setAttributes({
                                                                        statusItems: newStatusItems,
                                                                    });
                                                                }}
                                                                placeholder={__('Counter Label..', 'zoloblocks')}
                                                            />
                                                        </PanelBody>
                                                    </SortableItem>
                                                </div>
                                            );
                                        })}
                                </SortableControl>
                            </ZoloPanelBody>
                        )}
                        <ZoloPanelBody title={__('Follow Button', 'zoloblocks')} panelProps={props}>
                            {showFollowButton && (
                                <>
                                    <TextControl
                                        label={__('Text', 'zoloblocks')}
                                        onChange={(v) =>
                                            setAttributes({
                                                followButtonText: v,
                                            })
                                        }
                                        value={followButtonText}
                                        placeholder={__('Text..', 'zoloblocks')}
                                    />
                                    <LinkControl
                                        label={__('URL', 'zoloblocks')}
                                        value={followButtonLink}
                                        onChange={(value) =>
                                            setAttributes({
                                                followButtonLink: value,
                                            })
                                        }
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                        {showSocialProfiles && (
                            <ZoloPanelBody title={__('Social Profiles', 'zoloblocks')} panelProps={props}>
                                <Sortable socialProfiles={socialProfiles} setAttributes={setAttributes} />
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        {preset !== 'style-1' && (
                            <ZoloPanelBody title={__('Header Area', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                                <NormalBGControl requiredProps={requiredProps} controlName={HEADER_AREA_BG} noMainBGImg={true} />
                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={HEADER_AREA_PADDING}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <CardDivider />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={HEADER_AREA_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                            </ZoloPanelBody>
                        )}

                        {showBadge && (
                            <ZoloPanelBody title={__('Header Badge', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={badgeColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            badgeColor: color,
                                        })
                                    }
                                />
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={BADGE_TYPO}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                <CardDivider />
                                <NormalBGControl requiredProps={requiredProps} controlName={BADGE_BG} noMainBGImg={true} />
                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={BADGE_PADDING}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />

                                {preset === 'style-1' && (
                                    <ResDimensionsControl
                                        label={__('Margin', 'zoloblocks')}
                                        controlName={BADGE_MARGIN}
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
                                    />
                                )}
                                <CardDivider />
                                <BorderControl
                                    label={__('Border', 'zoloblocks')}
                                    controlName={HEADER_BADGE_BORDER}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={BADGE_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                            </ZoloPanelBody>
                        )}

                        <ZoloPanelBody
                            // title={__('Content Area', 'zoloblocks')}
                            title={preset === 'style-1' ? __('Item Wrapper', 'zoloblocks') : __('Content Area', 'zoloblocks')}
                            stylePanel={true}
                            panelProps={props}
                        >
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
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={CONTENT_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />

                            {preset === 'style-1' && (
                                <>
                                    <div className="zolo-custom-heading">{__('Content')}</div>
                                    <ResDimensionsControl
                                        label={__('Padding', 'zoloblocks')}
                                        controlName={INNER_CONTENT_PADDING}
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>

                        {showPhoto && (
                            <ZoloPanelBody title={__('Photo', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ResRangeControl label={__('Size', 'zoloblocks')} controlName={PHOTO_SIZE} requiredProps={requiredProps} />
                                <CardDivider />
                                <BorderControl
                                    label={__('Border', 'zoloblocks')}
                                    controlName={PHOTO_BORDER}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={PHOTO_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                {preset !== 'style-1' && (
                                    <>
                                        <CardDivider />
                                        <ResRangeControl
                                            label={__('Vertical Offset', 'zoloblocks')}
                                            controlName={PHOTO_VOFFSET}
                                            requiredProps={requiredProps}
                                            min={-250}
                                            max={250}
                                        />
                                    </>
                                )}
                                {preset === 'style-1' && (
                                    <>
                                        <div className="zolo-custom-heading">{__('Overlay')}</div>
                                        <NormalBGControl requiredProps={requiredProps} controlName={PHOTO_IMG_OVERLAY} noMainBGImg={true} />
                                        <div className="zolo-custom-heading">{__('Meta Wrapper')}</div>
                                        <ResDimensionsControl
                                            label={__(' Margin', 'zoloblocks')}
                                            controlName={META_WRAP_MARGIN}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                    </>
                                )}
                                <CardDivider />
                                {cssFilters && cssFilters.length > 0 && cssFilters}
                            </ZoloPanelBody>
                        )}

                        {showName && (
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
                                    typoPrefixConstant={PROFILE_NAME}
                                    requiredProps={requiredProps}
                                />
                                <CardDivider />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={NAME_MARGIN}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                            </ZoloPanelBody>
                        )}

                        {showUsername && (
                            <ZoloPanelBody title={__('Username', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={usernameColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            usernameColor: color,
                                        })
                                    }
                                />
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={PROFILE_USERNAME}
                                    requiredProps={requiredProps}
                                    max={64}
                                />
                                <CardDivider />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={USERNAME_MARGIN}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                            </ZoloPanelBody>
                        )}

                        {showEmail && (
                            <ZoloPanelBody title={__('Email', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={emailColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            emailColor: color,
                                        })
                                    }
                                />
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={EMAIL_TYPO}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                <CardDivider />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={EMAIL_MARGIN}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                            </ZoloPanelBody>
                        )}

                        {showBio && (
                            <ZoloPanelBody title={__('Bio', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={bioColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            bioColor: color,
                                        })
                                    }
                                />
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={BIO_TYPO}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                <CardDivider />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={BIO_MARGIN}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                            </ZoloPanelBody>
                        )}

                        {showStatus && (
                            <ZoloPanelBody title={__('Status', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                    {__('Number')}
                                </div>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={numberColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            numberColor: color,
                                        })
                                    }
                                />
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={NUMBER_TYPO}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                <div className="zolo-custom-heading">{__('Label')}</div>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={labelColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            labelColor: color,
                                        })
                                    }
                                />
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={LABEL_TYPO}
                                    requiredProps={requiredProps}
                                    max={36}
                                />
                                <CardDivider />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={STATUS_MARGIN}
                                    requiredProps={requiredProps}
                                    forBorderRadius={false}
                                />
                                <ResRangeControl label={__('Gap', 'zoloblocks')} controlName={STATUS_GAP} requiredProps={requiredProps} />
                            </ZoloPanelBody>
                        )}

                        {showFollowButton && (
                            <ZoloPanelBody title={__('Follow Button', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={btnColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        btnColor: color,
                                                    })
                                                }
                                            />
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={BTN_TYPO}
                                                requiredProps={requiredProps}
                                                max={36}
                                            />
                                            <CardDivider />
                                            <NormalBGControl requiredProps={requiredProps} controlName={FBTN_BG} noMainBGImg={false} />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={FBTN_PADDING}
                                                requiredProps={requiredProps}
                                                forBorderRadius={false}
                                            />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={FBTN_MARGIN}
                                                requiredProps={requiredProps}
                                                forBorderRadius={false}
                                            />
                                            <CardDivider />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={FBTN_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <BoxShadowControl
                                                controlName={FBTN_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={FBTN_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={btnHoverColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        btnHoverColor: color,
                                                    })
                                                }
                                            />
                                            <CardDivider />
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={FBTN_HOVER_BG}
                                                noMainBGImg={false}
                                            />
                                            <BoxShadowControl
                                                controlName={FBTN_HOVER_BOX_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                            <ColorControl
                                                label={__('Border Color', 'zoloblocks')}
                                                color={btnHoverBorderColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        btnHoverBorderColor: color,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}

                        {showSocialProfiles && (
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
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={ICONS_MARGIN}
                                                requiredProps={requiredProps}
                                            />
                                            <CardDivider />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={ICONS_BORDER}
                                                requiredProps={requiredProps}
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
                                            <ColorControl
                                                label={__('Border Color', 'zoloblocks')}
                                                color={iconHoverBorderColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        iconHoverBorderColor: color,
                                                    })
                                                }
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
                            block="zolo/profile-card"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
