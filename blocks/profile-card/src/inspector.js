/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { CardDivider, PanelBody, TextControl, TextareaControl, ToggleControl, BaseControl, Button } from '@wordpress/components';
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
    IconPicker,
    TabPanelControl,
    HeaderTabs,
    LinkControl,
    SortableItem,
    SortableControl,
} = window.zoloModule;

import objAttributes from './attributes';
import {
    HEADER_AREA_BORDER_RADIUS,
    HEADER_AREA_PADDING,
    HEADER_BADGE_BORDER,
    HEADER_AREA_BG,
    BADGE_PADDING,
    BADGE_BG,
    BADGE_BORDER_RADIUS,
    CONTENT_BORDER_RADIUS,
    CONTENT_BG,
    CONTENT_BORDER,
    CONTENT_PADDING,
    CONTENT_MARGIN,
    PHOTO_VOFFSET,
    PHOTO_SIZE,
    PHOTO_BORDER,
    PHOTO_BORDER_RADIUS,
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
import { Fragment } from 'react';
import Sortable from './sortable';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
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
    } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    const setProfileIcon = (value, index) => {
        let profile = [...socialProfiles];
        profile[index] = {
            ...profile[index],
            icon: { ...value },
        };
        setAttributes({ socialProfiles: [...profile] });
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                generalTab={
                    <>
                        <PanelBody title={__('Layout', 'zolo-blocks')} initialOpen={false}>
                            <ToggleControl
                                label={__('Show Badge', 'zolo-blocks')}
                                checked={showBadge}
                                onChange={() =>
                                    setAttributes({
                                        showBadge: !showBadge,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Photo', 'zolo-blocks')}
                                checked={showPhoto}
                                onChange={() =>
                                    setAttributes({
                                        showPhoto: !showPhoto,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Name', 'zolo-blocks')}
                                checked={showName}
                                onChange={() =>
                                    setAttributes({
                                        showName: !showName,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Username', 'zolo-blocks')}
                                checked={showUsername}
                                onChange={() =>
                                    setAttributes({
                                        showUsername: !showUsername,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Email', 'zolo-blocks')}
                                checked={showEmail}
                                onChange={() =>
                                    setAttributes({
                                        showEmail: !showEmail,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Bio', 'zolo-blocks')}
                                checked={showBio}
                                onChange={() =>
                                    setAttributes({
                                        showBio: !showBio,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Status', 'zolo-blocks')}
                                checked={showStatus}
                                onChange={() =>
                                    setAttributes({
                                        showStatus: !showStatus,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Follow Button', 'zolo-blocks')}
                                checked={showFollowButton}
                                onChange={() =>
                                    setAttributes({
                                        showFollowButton: !showFollowButton,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Social Profiles', 'zolo-blocks')}
                                checked={showSocialProfiles}
                                onChange={() =>
                                    setAttributes({
                                        showSocialProfiles: !showSocialProfiles,
                                    })
                                }
                            />
                        </PanelBody>
                        <PanelBody title={__('Content', 'zolo-blocks')} initialOpen={false}>
                            {showBadge && (
                                <TextControl
                                    label={__('Badge Text', 'zolo-blocks')}
                                    value={badgeText}
                                    onChange={(text) =>
                                        setAttributes({
                                            badgeText: text,
                                        })
                                    }
                                    placeholder={__('Enter Badge Text', 'zolo-blocks')}
                                />
                            )}
                            {showPhoto && (
                                <BaseControl label={__('Photo', 'zolo-blocks')}>
                                    {photo ? (
                                        <ImageAvatar
                                            imageUrl={photo && photo.url}
                                            imageId={photo && photo.id}
                                            onDeleteImage={() =>
                                                setAttributes({
                                                    photo: null,
                                                })
                                            }
                                            onEditImage={(url, id) =>
                                                setAttributes({
                                                    photo: {
                                                        url,
                                                        id,
                                                    },
                                                })
                                            }
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
                            )}
                            {showName && (
                                <TextControl
                                    label={__('Name', 'zolo-blocks')}
                                    onChange={(value) =>
                                        setAttributes({
                                            name: value,
                                        })
                                    }
                                    value={name}
                                    placeholder={__('Name..', 'zolo-blocks')}
                                />
                            )}
                            {showUsername && (
                                <TextControl
                                    label={__('Username', 'zolo-blocks')}
                                    onChange={(value) =>
                                        setAttributes({
                                            username: value,
                                        })
                                    }
                                    value={username}
                                    placeholder={__('Username..', 'zolo-blocks')}
                                />
                            )}
                            {showEmail && (
                                <TextControl
                                    label={__('Email', 'zolo-blocks')}
                                    onChange={(value) =>
                                        setAttributes({
                                            email: value,
                                        })
                                    }
                                    value={email}
                                    placeholder={__('Email..', 'zolo-blocks')}
                                />
                            )}
                            {showBio && (
                                <TextareaControl
                                    label={__('Bio', 'zolo-blocks')}
                                    value={bio}
                                    onChange={(value) =>
                                        setAttributes({
                                            bio: value,
                                        })
                                    }
                                    placeholder={__('Bio..', 'zolo-blocks')}
                                />
                            )}
                        </PanelBody>
                        {showStatus && (
                            <PanelBody title={__('Status', 'zolo-blocks')} initialOpen={false}>
                                <SortableControl defaultItems={statusItems} attributeName="statusItems" setAttributes={setAttributes}>
                                    {statusItems &&
                                        statusItems.map((item, index) => {
                                            return (
                                                <div className="dnd-container no-trash" key={index}>
                                                    <SortableItem key={item.id} id={item.id}>
                                                        <PanelBody title={item.label} initialOpen={false}>
                                                            <TextControl
                                                                label={__('Number', 'zolo-blocks')}
                                                                value={item && item.number}
                                                                onChange={(value) => {
                                                                    let newStatusItems = [...statusItems];
                                                                    newStatusItems[index].number = value;
                                                                    setAttributes({
                                                                        statusItems: newStatusItems,
                                                                    });
                                                                }}
                                                                placeholder={__('Counter Number..', 'zolo-blocks')}
                                                            />
                                                            <TextControl
                                                                label={__('Label', 'zolo-blocks')}
                                                                value={item && item.label}
                                                                onChange={(value) => {
                                                                    let newStatusItems = [...statusItems];
                                                                    newStatusItems[index].label = value;
                                                                    setAttributes({
                                                                        statusItems: newStatusItems,
                                                                    });
                                                                }}
                                                                placeholder={__('Counter Label..', 'zolo-blocks')}
                                                            />
                                                        </PanelBody>
                                                    </SortableItem>
                                                </div>
                                            );
                                        })}
                                </SortableControl>
                            </PanelBody>
                        )}
                        <PanelBody title={__('Follow Button', 'zolo-blocks')} initialOpen={false}>
                            {showFollowButton && (
                                <Fragment>
                                    <TextControl
                                        label={__('Text', 'zolo-blocks')}
                                        onChange={(v) =>
                                            setAttributes({
                                                followButtonText: v,
                                            })
                                        }
                                        value={followButtonText}
                                        placeholder={__('text..', 'zolo-blocks')}
                                    />
                                    <LinkControl
                                        label={__('URL', 'zolo-blocks')}
                                        value={followButtonLink}
                                        onChange={(value) =>
                                            setAttributes({
                                                followButtonLink: value,
                                            })
                                        }
                                    />
                                </Fragment>
                            )}
                        </PanelBody>
                        {showSocialProfiles && (
                            <PanelBody title={__('Social Profiles', 'zolo-blocks')} initialOpen={false}>
                                <Sortable socialProfiles={socialProfiles} setAttributes={setAttributes} />
                            </PanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <PanelBody title={__('Header Area', 'zolo-blocks')} initialOpen={false}>
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={HEADER_AREA_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={HEADER_AREA_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <NormalBGControl requiredProps={requiredProps} controlName={HEADER_AREA_BG} noMainBGImg={true} />
                        </PanelBody>
                        <PanelBody title={__('Header Badge', 'zolo-blocks')} initialOpen={false}>
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={BADGE_TYPO}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={BADGE_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={HEADER_BADGE_BORDER}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={BADGE_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ColorControl
                                label={__('Color', 'zolo-blocks')}
                                color={badgeColor}
                                onChange={(color) =>
                                    setAttributes({
                                        badgeColor: color,
                                    })
                                }
                            />
                            <NormalBGControl requiredProps={requiredProps} controlName={BADGE_BG} noMainBGImg={true} />
                        </PanelBody>
                        <PanelBody title={__('Content Area', 'zolo-blocks')} initialOpen={false}>
                            <NormalBGControl requiredProps={requiredProps} controlName={CONTENT_BG} noMainBGImg={false} />
                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={CONTENT_BORDER}
                                requiredProps={requiredProps}
                            />
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
                        </PanelBody>
                        <PanelBody title={__('Photo', 'zolo-blocks')} initialOpen={false}>
                            <ResRangeControl
                                label={__('Size', 'zolo-blocks')}
                                controlName={PHOTO_SIZE}
                                requiredProps={requiredProps}
                            />
                            <ResRangeControl
                                label={__('Vertical Offset', 'zolo-blocks')}
                                controlName={PHOTO_VOFFSET}
                                requiredProps={requiredProps}
                                min={-250}
                                max={250}
                            />
                            <BorderControl
                                label={__('Border', 'zolo-blocks')}
                                controlName={PHOTO_BORDER}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={PHOTO_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                        </PanelBody>
                        <PanelBody title={__('Name', 'zolo-blocks')} initialOpen={false}>
                            <ColorControl
                                label={__('Color', 'zolo-blocks')}
                                color={nameColor}
                                onChange={(color) =>
                                    setAttributes({
                                        nameColor: color,
                                    })
                                }
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={PROFILE_NAME}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={NAME_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                        </PanelBody>
                        <PanelBody title={__('Username', 'zolo-blocks')} initialOpen={false}>
                            <ColorControl
                                label={__('Color', 'zolo-blocks')}
                                color={usernameColor}
                                onChange={(color) =>
                                    setAttributes({
                                        usernameColor: color,
                                    })
                                }
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={PROFILE_USERNAME}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={USERNAME_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                        </PanelBody>
                        <PanelBody title={__('Email', 'zolo-blocks')} initialOpen={false}>
                            <ColorControl
                                label={__('Color', 'zolo-blocks')}
                                color={emailColor}
                                onChange={(color) =>
                                    setAttributes({
                                        emailColor: color,
                                    })
                                }
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={EMAIL_TYPO}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={EMAIL_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                        </PanelBody>
                        <PanelBody title={__('Bio', 'zolo-blocks')} initialOpen={false}>
                            <ColorControl
                                label={__('Color', 'zolo-blocks')}
                                color={bioColor}
                                onChange={(color) =>
                                    setAttributes({
                                        bioColor: color,
                                    })
                                }
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={BIO_TYPO}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={BIO_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                        </PanelBody>
                        <PanelBody title={__('Status', 'zolo-blocks')} initialOpen={false}>
                            <ColorControl
                                label={__('Number Color', 'zolo-blocks')}
                                color={numberColor}
                                onChange={(color) =>
                                    setAttributes({
                                        numberColor: color,
                                    })
                                }
                            />
                            <TypographyDropdown
                                label={__('Number Typography', 'zolo-blocks')}
                                typoPrefixConstant={NUMBER_TYPO}
                                requiredProps={requiredProps}
                            />
                            <CardDivider />
                            <ColorControl
                                label={__('Label Color', 'zolo-blocks')}
                                color={labelColor}
                                onChange={(color) =>
                                    setAttributes({
                                        labelColor: color,
                                    })
                                }
                            />
                            <TypographyDropdown
                                label={__('Label Typography', 'zolo-blocks')}
                                typoPrefixConstant={LABEL_TYPO}
                                requiredProps={requiredProps}
                            />
                            <CardDivider />
                            <ResRangeControl
                                label={__('Items Gap', 'zolo-blocks')}
                                controlName={STATUS_GAP}
                                requiredProps={requiredProps}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={STATUS_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                        </PanelBody>
                        <PanelBody title={__('Follow Button', 'zolo-blocks')} initialOpen={false}>
                            <TypographyDropdown
                                label={__('Typography', 'zolo-blocks')}
                                typoPrefixConstant={BTN_TYPO}
                                requiredProps={requiredProps}
                            />
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
                                            color={btnColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    btnColor: color,
                                                })
                                            }
                                        />
                                        <NormalBGControl requiredProps={requiredProps} controlName={FBTN_BG} noMainBGImg={false} />
                                        <BorderControl
                                            label={__('Border', 'zolo-blocks')}
                                            controlName={FBTN_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zolo-blocks')}
                                            controlName={FBTN_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                        <BoxShadowControl
                                            controlName={FBTN_BOX_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
                                            color={btnHoverColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    btnHoverColor: color,
                                                })
                                            }
                                        />
                                        <ColorControl
                                            label={__('Border Color', 'zolo-blocks')}
                                            color={btnHoverBorderColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    btnHoverBorderColor: color,
                                                })
                                            }
                                        />
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
                                    </>
                                }
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zolo-blocks')}
                                controlName={FBTN_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zolo-blocks')}
                                controlName={FBTN_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                        </PanelBody>
                        {showSocialProfiles && (
                            <PanelBody title={__('Social Profiles', 'zolo-blocks')} initialOpen={false}>
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
                                <ResDimensionsControl
                                    label={__('Margin', 'zolo-blocks')}
                                    controlName={ICONS_MARGIN}
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
                                            <NormalBGControl
                                                requiredProps={requiredProps}
                                                controlName={ICONS_BG}
                                                noMainBGImg={true}
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
                                            <ColorControl
                                                label={__('Border Color', 'zolo-blocks')}
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
                            </PanelBody>
                        )}
                    </>
                }
                advancedTab={<></>}
            />
        </InspectorControls>
    );
}

export default Inspector;
