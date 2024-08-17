import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, ToggleControl, RangeControl, TextareaControl, BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import Select2 from 'react-select';
import objAttributes from './attributes';
import { NAME_TYPOGRAPHY, ROLE_TYPOGRAPHY, DESC_TYPOGRAPHY, COUNT_TYPOGRAPHY } from './constants/typoPrefixConstant';
import QuerySettings from './query-settings';
import {
    PRESETS,
    GRID_COLUMNS,
    COLUMNS_GAP,
    COUNT_PADDING,
    COUNT_MARGIN,
    COUNT_BORDER,
    COUNT_BORDER_RADIUS,
    COUNT_SHADOW,
    //item
    CONTENT_PADDING,
    ITEM_BG,
    ITEM_BORDER,
    ITEM_BORDER_RADIUS,
    ITEM_PADDING,
    ITEM_SHADOW,
    ITEM_HOVER_BG,
    ITEM_HOVER_SHADOW,
    //avatar
    AVATAR_SIZE,
    AVATAR_IMG_SIZE,
    AVATAR_IMG_H_SIZE,
    AVATAR_MASK,
    AVATAR_BORDER,
    AVATAR_BORDER_RADIUS,
    AVATAR_SHADOW,
    AVATAR_PADDING,
    AVATAR_MARGIN,
    ROLE_SPACING,
    DESC_SPACING,
    LINK_SPACING,
    LINK_BG,
    LINK_BORDER,
    LINK_BORDER_RADIUS,
    LINK_SHADOW,
    LINK_PADDING,
    LINK_SPACE,
    Link_ICON_SIZE,
    LINK_HOVER_BG,
    LINK_HOVER_BORDER_RADIUS,
    NAME_TEXT_SHADOW,
    COUNT_SPACING,
    COUNT_BG,
    TEXT_ALIGNMENT,
    META_ALIGNMENT,
} from './constants';
import { DEFAULT_ALIGNS } from '../../../src/global/constants';
import { PHOTO_MASK } from '../../advanced-image/src/constants';

const {
    ResAlignmentControl,
    ResRangeControl,
    ResCounterControl,
    ResDimensionsControl,
    NormalBGControl,
    BorderControl,
    BoxShadowControl,
    HeaderTabs,
    TabPanelControl,
    ColorControl,
    TypographyDropdown,
    AdvancedOptions,
    ZoloPanelBody,
    ResGapControl,
    TextShadowControl,
    MaskControl,
} = window.zoloModule;
export default function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        authorQuery,
        resMode,
        preset,
        showAvatar,
        showName,
        showRole,
        showDescription,
        showPostCount,
        showSocialLink,
        itemHoverBorderColor,
        nameColor,
        nameHoverColor,
        roleColor,
        descColor,
        linkColor,
        linkHoverColor,
        countColor,

        socialLinks,
    } = attributes;
    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };
    const changePremade = (selected) => {
        setAttributes({ preset: selected });
    };

    //social link
    const authorProfileLink = zoloParams.user_social_link;
    const authorLinks = Object.entries(authorProfileLink).map(([value, label]) => ({ value, label }));

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/post-grid"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <SelectControl
                                label={__('Styles', 'zoloblocks')}
                                value={preset}
                                options={applyFilters('zolo.author.presets', PRESETS)}
                                onChange={(selected) => changePremade(selected)}
                            />

                            {/* <ResAlignmentControl
                                label={__('Meta Alignment', 'zoloblocks')}
                                controlName={META_ALIGNMENT}
                                requiredProps={requiredProps}
                                alignOptions={DEFAULT_ALIGNS}
                            /> */}

                            <ToggleControl
                                label={__('Show Avatar', 'zoloblocks')}
                                checked={showAvatar}
                                onChange={(showAvatar) => setAttributes({ showAvatar })}
                            />
                            <ToggleControl
                                label={__('Show Name', 'zoloblocks')}
                                checked={showName}
                                onChange={(showName) => setAttributes({ showName })}
                            />
                            <ToggleControl
                                label={__('Show Role', 'zoloblocks')}
                                checked={showRole}
                                onChange={(showRole) => setAttributes({ showRole })}
                            />
                            <ToggleControl
                                label={__('Show Description', 'zoloblocks')}
                                checked={showDescription}
                                onChange={(showDescription) => setAttributes({ showDescription })}
                            />
                            <ToggleControl
                                label={__('Show Post Count', 'zoloblocks')}
                                checked={showPostCount}
                                onChange={(showPostCount) => setAttributes({ showPostCount })}
                            />
                            <ToggleControl
                                label={__('Show Social Link', 'zoloblocks')}
                                checked={showSocialLink}
                                onChange={(showSocialLink) => setAttributes({ showSocialLink })}
                            />
                            {showSocialLink && (
                                <BaseControl label={__('Social Links', 'zoloblocks')}>
                                    <Select2
                                        classNamePrefix="zolo-select"
                                        options={authorLinks}
                                        value={socialLinks}
                                        onChange={(socialLinks) => setAttributes({ socialLinks })}
                                        isMulti={true}
                                        closeMenuOnSelect={false}
                                    />
                                </BaseControl>
                            )}

                            {showAvatar && (
                                <SelectControl
                                    label={__('Avatar Size', 'zoloblocks')}
                                    value={authorQuery?.avatarSize}
                                    options={AVATAR_SIZE}
                                    onChange={(avatarSize) => setAttributes({ authorQuery: { ...authorQuery, avatarSize } })}
                                />
                            )}

                            <ResAlignmentControl
                                label={__('Alignment', 'zoloblocks')}
                                controlName={TEXT_ALIGNMENT}
                                requiredProps={requiredProps}
                                alignOptions={DEFAULT_ALIGNS}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Layout', 'zoloblocks')} panelProps={props}>
                            <ResCounterControl
                                label={__('Column', 'zoloblocks')}
                                controlName={GRID_COLUMNS}
                                requiredProps={requiredProps}
                                min={1}
                                max={6}
                                defaults={{
                                    deskRange: 3,
                                    tabRange: 2,
                                    mobRange: 1,
                                }}
                            />
                            <ResGapControl
                                label={__('Gap', 'zoloblocks')}
                                controlName={COLUMNS_GAP}
                                requiredProps={requiredProps}
                                max={100}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Query', 'zoloblocks')} panelProps={props}>
                            <QuerySettings attributes={attributes} setAttributes={setAttributes} />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Items', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={ITEM_BG} noMainBGImg={true} />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={ITEM_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={ITEM_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={ITEM_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl
                                            controlName={ITEM_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={ITEM_HOVER_BG} noMainBGImg={true} />
                                        <ColorControl
                                            label={__('Border Color', 'zoloblocks')}
                                            color={itemHoverBorderColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    itemHoverBorderColor: color,
                                                })
                                            }
                                        />
                                        <BoxShadowControl
                                            controlName={ITEM_HOVER_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                    </>
                                }
                            />
                            <div className="zolo-custom-heading">{__('Content', 'zoloblocks')}</div>
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={CONTENT_PADDING}
                                requiredProps={requiredProps}
                            />
                        </ZoloPanelBody>

                        {showAvatar && (
                            <ZoloPanelBody title={__('Avatar', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ResRangeControl
                                    label={__('Width', 'zoloblocks')}
                                    controlName={AVATAR_IMG_SIZE}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={200}
                                    step={1}
                                />
                                <ResRangeControl
                                    label={__('Hiight', 'zoloblocks')}
                                    controlName={AVATAR_IMG_H_SIZE}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={200}
                                    step={1}
                                />
                                <BorderControl
                                    label={__('Border', 'zoloblocks')}
                                    controlName={AVATAR_BORDER}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={AVATAR_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={AVATAR_PADDING}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={AVATAR_MARGIN}
                                    requiredProps={requiredProps}
                                />

                                <BoxShadowControl controlName={AVATAR_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                                <MaskControl controlName={AVATAR_MASK} requiredProps={requiredProps} />
                            </ZoloPanelBody>
                        )}

                        {showName && (
                            <ZoloPanelBody title={__('Name', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={NAME_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <TextShadowControl controlName={NAME_TEXT_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={nameColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        nameColor: color,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Hover Color', 'zoloblocks')}
                                                color={nameHoverColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        nameHoverColor: color,
                                                    })
                                                }
                                            />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}

                        {showRole && (
                            <ZoloPanelBody title={__('Role', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={ROLE_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={roleColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            roleColor: color,
                                        })
                                    }
                                />
                                <ResRangeControl
                                    label={__('Spacing', 'zoloblocks')}
                                    controlName={ROLE_SPACING}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={200}
                                    step={1}
                                />
                            </ZoloPanelBody>
                        )}

                        {showDescription && (
                            <ZoloPanelBody title={__('Description', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={DESC_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={descColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            descColor: color,
                                        })
                                    }
                                />
                                <ResRangeControl
                                    label={__('Spacing', 'zoloblocks')}
                                    controlName={DESC_SPACING}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={200}
                                    step={1}
                                />
                            </ZoloPanelBody>
                        )}

                        {showPostCount && (
                            <ZoloPanelBody title={__('Post Count', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={COUNT_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={countColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            countColor: color,
                                        })
                                    }
                                />
                                <NormalBGControl requiredProps={requiredProps} controlName={COUNT_BG} noMainBGImg={true} />
                                <BorderControl
                                    label={__('Border', 'zoloblocks')}
                                    controlName={COUNT_BORDER}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={COUNT_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={COUNT_PADDING}
                                    requiredProps={requiredProps}
                                />
                                <ResDimensionsControl
                                    label={__('Margin', 'zoloblocks')}
                                    controlName={COUNT_MARGIN}
                                    requiredProps={requiredProps}
                                />
                                <BoxShadowControl controlName={COUNT_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            </ZoloPanelBody>
                        )}

                        {showSocialLink && (
                            <ZoloPanelBody title={__('Social Link', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <ResRangeControl
                                    label={__('Icon Size', 'zoloblocks')}
                                    controlName={Link_ICON_SIZE}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={200}
                                    step={1}
                                />
                                <ResRangeControl
                                    label={__('Spacing', 'zoloblocks')}
                                    controlName={LINK_SPACING}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={200}
                                    step={1}
                                />
                                <ResGapControl
                                    label={__('Gap', 'zoloblocks')}
                                    controlName={LINK_SPACE}
                                    requiredProps={requiredProps}
                                    max={200}
                                />
                                <ResDimensionsControl
                                    label={__('Padding', 'zoloblocks')}
                                    controlName={LINK_PADDING}
                                    requiredProps={requiredProps}
                                />
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={linkColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        linkColor: color,
                                                    })
                                                }
                                            />
                                            <NormalBGControl requiredProps={requiredProps} controlName={LINK_BG} noMainBGImg={true} />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={LINK_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={LINK_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />

                                            <BoxShadowControl
                                                controlName={LINK_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={linkHoverColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        linkHoverColor: color,
                                                    })
                                                }
                                            />
                                            <NormalBGControl requiredProps={requiredProps} controlName={LINK_HOVER_BG} noMainBGImg={true} />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={LINK_HOVER_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
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
                            block="zolo/post-category"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
