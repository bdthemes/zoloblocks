import { memo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, TextControl, CardDivider, SelectControl } from '@wordpress/components';
import objAttributes from './attributes';
import { applyFilters } from '@wordpress/hooks';

import { TITLE_TYPOGRAPHY, BTN_TYPOGRAPHY } from './constants/typoPrefixConstant';

import {
    GET_TAXONOMIEX,
    //title
    TITLE_MARGIN,
    POST_TITLE_ANIMATION,
    //submit btn
    BTN_PADDING,
    BTN_BORDER_RADIUS,
    BTN_MARGIN,
    BTN_BORDER,
} from './constants';

const {
    ResDimensionsControl,
    BorderControl,
    HeaderTabs,
    ColorControl,
    TypographyDropdown,
    AdvancedOptions,
    ZoloPanelBody,
    TabPanelControl,
    ZoloIconPicker,
} = window.zoloModule;

function Inspector(props) {
    const { attributes, setAttributes, block } = props;
    const {
        resMode,
        showTitle,
        postTitleAnimation,
        titleAnimationTypeBgColor,
        showBtn,
        showCategoryBased,
        selectedTaxonomy,
        previousPost,
        nextPost,
        //title
        titleColor,
        titleHoverColor,
        //prev/next button
        previousPostIcon,
        nextPostIcon,
        btnColor,
        btnBgColor,
        btnHoverColor,
        btnBgHoverColor,
        btnBorderHoverColor,
    } = attributes;
    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    const taxonomiesArray = GET_TAXONOMIEX(zoloParams.get_taxonomies);

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/post-navigation"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                {__('Show/hide elements', 'zoloblocks')}
                            </div>
                            <ToggleControl
                                label={__('Post Title', 'zoloblocks')}
                                checked={showTitle}
                                onChange={(showTitle) => setAttributes({ showTitle })}
                            />
                            <ToggleControl
                                label={__('Prev/Next Button', 'zoloblocks')}
                                checked={showBtn}
                                onChange={(showBtn) => setAttributes({ showBtn })}
                            />
                            <ToggleControl
                                label={__('Category Based', 'zoloblocks')}
                                checked={showCategoryBased}
                                onChange={(showCategoryBased) => setAttributes({ showCategoryBased })}
                            />

                            {showCategoryBased && (
                                <>
                                    <CardDivider />
                                    <SelectControl
                                        label={__('Taxonomies', 'zoloblocks')}
                                        value={selectedTaxonomy}
                                        options={taxonomiesArray}
                                        onChange={(selectedTaxonomy) => setAttributes({ selectedTaxonomy })}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>

                        {showBtn && (
                            <ZoloPanelBody title={__('Content', 'zoloblocks')} panelProps={props}>
                                <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                    {__('Previous Button', 'zoloblocks')}
                                </div>
                                <TextControl
                                    label={__('Text', 'zoloblocks')}
                                    value={previousPost}
                                    onChange={(previousPost) => setAttributes({ previousPost })}
                                />
                                <ZoloIconPicker
                                    label={__('Icon', 'zoloblocks')}
                                    value={previousPostIcon}
                                    onChange={(previousPostIcon) => setAttributes({ previousPostIcon })}
                                />
                                <div className="zolo-custom-heading">{__('Next Button', 'zoloblocks')}</div>
                                <TextControl
                                    label={__('Text', 'zoloblocks')}
                                    value={nextPost}
                                    onChange={(nextPost) => setAttributes({ nextPost })}
                                />
                                <ZoloIconPicker
                                    label={__('Icon', 'zoloblocks')}
                                    value={nextPostIcon}
                                    onChange={(nextPostIcon) => setAttributes({ nextPostIcon })}
                                />
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        
                        {showTitle && (
                            <ZoloPanelBody title={__('Title', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={titleColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        titleColor: color,
                                                    })
                                                }
                                            />
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={TITLE_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                            />
                                            <CardDivider />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={TITLE_MARGIN}
                                                requiredProps={requiredProps}
                                            />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <SelectControl
                                                label={__('Animations', 'zoloblocks')}
                                                value={postTitleAnimation}
                                                options={applyFilters('zolo.postNavigation.titleAnimation', POST_TITLE_ANIMATION)}
                                                onChange={(postTitleAnimation) => setAttributes({ postTitleAnimation })}
                                            />
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={titleHoverColor}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        titleHoverColor: color,
                                                    })
                                                }
                                            />
                                            {postTitleAnimation === 'zolo-post-title-type-1' && (
                                                <>
                                                    <div className="zolo-custom-heading">{__('Animation Type', 'zoloblocks')}</div>
                                                    <ColorControl
                                                        label={__('Background', 'zoloblocks')}
                                                        color={titleAnimationTypeBgColor}
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                titleAnimationTypeBgColor: color,
                                                            })
                                                        }
                                                    />
                                                </>
                                            )}
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}

                        {showBtn && (
                            <ZoloPanelBody title={__('Button', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={btnColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        btnColor: value,
                                                    })
                                                }
                                            />
                                            <TypographyDropdown
                                                label={__('Typography', 'zoloblocks')}
                                                typoPrefixConstant={BTN_TYPOGRAPHY}
                                                requiredProps={requiredProps}
                                                max={36}
                                            />
                                            <CardDivider />
                                            <ColorControl
                                                label={__('Background', 'zoloblocks')}
                                                color={btnBgColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        btnBgColor: value,
                                                    })
                                                }
                                            />
                                            <ResDimensionsControl
                                                label={__('Padding', 'zoloblocks')}
                                                controlName={BTN_PADDING}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Margin', 'zoloblocks')}
                                                controlName={BTN_MARGIN}
                                                requiredProps={requiredProps}
                                            />
                                            <CardDivider />
                                            <BorderControl
                                                label={__('Border', 'zoloblocks')}
                                                controlName={BTN_BORDER}
                                                requiredProps={requiredProps}
                                            />
                                            <ResDimensionsControl
                                                label={__('Border Radius', 'zoloblocks')}
                                                controlName={BTN_BORDER_RADIUS}
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
                                                onChange={(value) =>
                                                    setAttributes({
                                                        btnHoverColor: value,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__('Background', 'zoloblocks')}
                                                color={btnBgHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        btnBgHoverColor: value,
                                                    })
                                                }
                                            />

                                            <ColorControl
                                                label={__('Border', 'zoloblocks')}
                                                color={btnBorderHoverColor}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        btnBorderHoverColor: value,
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
                            block="zolo/post-navigation"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default memo(Inspector);
