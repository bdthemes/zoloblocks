import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, ToggleControl, RangeControl, TextareaControl, BaseControl, CardDivider } from '@wordpress/components';
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
    COUNT_BG,
    TEXT_ALIGNMENT,
} from './constants';
import { DEFAULT_ALIGNS } from '../../../src/global/constants';

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
} = window.zoloModule;
export default function Inspector(props) {
    const { attributes, setAttributes, block } = props;
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
    const maskFeatures = applyFilters('zolo.blocks.controls.author.mask', [], props, 'zolo/author');

    // css filter
    const cssFilters = applyFilters('zolo.extensions.controls.cssFilters', [], block, props);

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/author"
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
                            <div className="zolo-custom-heading">{__('show/hide elements', 'zoloblocks')}</div>
                            <ToggleControl
                                label={__('Avatar', 'zoloblocks')}
                                checked={showAvatar}
                                onChange={(showAvatar) => setAttributes({ showAvatar })}
                            />
                            {showAvatar && (
                                <>
                                    <SelectControl
                                        label={__('Resolution', 'zoloblocks')}
                                        value={authorQuery?.avatarSize}
                                        options={AVATAR_SIZE}
                                        onChange={(avatarSize) => setAttributes({ authorQuery: { ...authorQuery, avatarSize } })}
                                    />
                                    <CardDivider />
                                </>
                            )}
                            <ToggleControl
                                label={__('Name', 'zoloblocks')}
                                checked={showName}
                                onChange={(showName) => setAttributes({ showName })}
                            />
                            <ToggleControl
                                label={__('Role', 'zoloblocks')}
                                checked={showRole}
                                onChange={(showRole) => setAttributes({ showRole })}
                            />
                            <ToggleControl
                                label={__('Description', 'zoloblocks')}
                                checked={showDescription}
                                onChange={(showDescription) => setAttributes({ showDescription })}
                            />
                            <ToggleControl
                                label={__('Post Count', 'zoloblocks')}
                                checked={showPostCount}
                                onChange={(showPostCount) => setAttributes({ showPostCount })}
                            />
                            <ToggleControl
                                label={__('Social Link', 'zoloblocks')}
                                checked={showSocialLink}
                                onChange={(showSocialLink) => setAttributes({ showSocialLink })}
                            />
                            {showSocialLink && (
                                <BaseControl label={__('Social Links', 'zoloblocks')} className="zolo-flex-col-control">
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
                            <CardDivider />
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
                                options={[
                                    { label: __('Item', 'zoloblocks'), value: 'normal' },
                                    { label: __('Content', 'zoloblocks'), value: 'hover' },
                                ]}
                                normalComponents={
                                    <>
                                        <NormalBGControl requiredProps={requiredProps} controlName={ITEM_BG} noMainBGImg={true} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={ITEM_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={ITEM_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl
                                            controlName={ITEM_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={ITEM_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={CONTENT_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                }
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
                                <CardDivider />
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
                                <CardDivider />
                                <BorderControl
                                    label={__('Border', 'zoloblocks')}
                                    controlName={AVATAR_BORDER}
                                    requiredProps={requiredProps}
                                />
                                <BoxShadowControl controlName={AVATAR_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={AVATAR_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />

                                {maskFeatures && maskFeatures.length > 0 && maskFeatures}
                                <CardDivider />
                                {cssFilters && cssFilters.length > 0 && cssFilters}
                            </ZoloPanelBody>
                        )}

                        {showName && (
                            <ZoloPanelBody title={__('Name', 'zoloblocks')} stylePanel={true} panelProps={props}>
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
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={NAME_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                            />
                                            <TextShadowControl
                                                controlName={NAME_TEXT_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
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
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={roleColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            roleColor: color,
                                        })
                                    }
                                />
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={ROLE_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <CardDivider />
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
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={descColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            descColor: color,
                                        })
                                    }
                                />
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={DESC_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <CardDivider />
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
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={countColor}
                                    onChange={(color) =>
                                        setAttributes({
                                            countColor: color,
                                        })
                                    }
                                />
                                <TypographyDropdown
                                    label={__('Typography', 'zoloblocks')}
                                    typoPrefixConstant={COUNT_TYPOGRAPHY}
                                    requiredProps={requiredProps}
                                />
                                <CardDivider />
                                <NormalBGControl requiredProps={requiredProps} controlName={COUNT_BG} noMainBGImg={true} />
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
                                <CardDivider />
                                <BorderControl
                                    label={__('Border', 'zoloblocks')}
                                    controlName={COUNT_BORDER}
                                    requiredProps={requiredProps}
                                />
                                <BoxShadowControl controlName={COUNT_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={COUNT_BORDER_RADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
                            </ZoloPanelBody>
                        )}

                        {showSocialLink && (
                            <ZoloPanelBody title={__('Social Link', 'zoloblocks')} stylePanel={true} panelProps={props}>
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
                                            <ResRangeControl
                                                label={__('Size', 'zoloblocks')}
                                                controlName={Link_ICON_SIZE}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={200}
                                                step={1}
                                            />
                                            <CardDivider />
                                            <NormalBGControl requiredProps={requiredProps} controlName={LINK_BG} noMainBGImg={true} />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={LINK_PADDING}
                                                requiredProps={requiredProps}
                                            />
                                            <CardDivider />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={LINK_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <BoxShadowControl
                                                controlName={LINK_SHADOW}
                                                requiredProps={requiredProps}
                                                enableTransition={false}
                                            />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={LINK_BORDER_RADIUS}
                                                requiredProps={requiredProps}
                                                forBorderRadius={true}
                                            />

                                            <CardDivider />
                                            <ResGapControl
                                                label={__('Gap', 'zoloblocks')}
                                                controlName={LINK_SPACE}
                                                requiredProps={requiredProps}
                                                max={200}
                                            />
                                            <ResRangeControl
                                                label={__('Spacing', 'zoloblocks')}
                                                controlName={LINK_SPACING}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={200}
                                                step={1}
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
                            block="zolo/author"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
