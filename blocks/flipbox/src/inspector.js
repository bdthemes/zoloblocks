/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import {
    TextControl,
    TextareaControl,
    BaseControl,
    Button,
    ButtonGroup,
    ToggleControl,
    SelectControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

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
} = window.zoloModule;

import objAttributes from './attributes';
import {
    // flipbox
    FLIPBLOX_SIDE,
    FLIPBOX_HEIGHT,
    FLIP_EFFECT,
    FLIP_TRIGGER_TYPE,
    FLIPBOX_BORDER_RADIUS,

    FRONT_ITEMS_BORDER,
    FRONT_ITEMS_PADDING,
    FRONT_ITEMS_BG,
    BACK_ITEMS_BORDER,
    BACK_ITEMS_PADDING,
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
} from './constants';

import {
    FRONT_TITLE_TYPOGRAPHY,
    FRONT_CONTENT_TYPOGRAPHY,
    BACK_TITLE_TYPOGRAPHY,
    BACK_CONTENT_TYPOGRAPHY,
    BACK_LINK_TYPOGRAPHY,
} from './constants/typoPrefixConstants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        selectedSide,
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
        backContent,
        buttonText,
        buttonIcon,
        link,
        linkOpenNewTab,
        frontTitleColor,
        backTitleColor,
        frontContentColor,
        backContentColor,
        frontIconColor,
        backIconColor,
        flipEffect,
        triggerType,
    } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    const flipEffectOptions = FLIP_EFFECT.map((item) => ({
        label: item.label,
        value: item.value,
    }));
    const triggerTypeOptions = FLIP_TRIGGER_TYPE.map((item) => ({
        label: item.label,
        value: item.value,
    }));

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
                                    {FLIPBLOX_SIDE.map((item) => (
                                        <Button
                                            isLarge
                                            isPrimary={selectedSide === item.value}
                                            aria-pressed={selectedSide === item.value}
                                            showBackLinkBtn
                                            onClick={() => setAttributes({ selectedSide: item.value })}
                                        >
                                            {item.label}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </BaseControl>
                            {selectedSide === 'front' && (
                                <>
                                    <ToggleControl
                                        label={__('Show Icon?', 'zolo-blocks')}
                                        checked={showFrontIcon}
                                        onChange={() => {
                                            setAttributes({ showFrontIcon: !showFrontIcon });
                                        }}
                                    />
                                    <ToggleControl
                                        label={__('Show Title?', 'zolo-blocks')}
                                        checked={showFrontTitle}
                                        onChange={() => {
                                            setAttributes({ showFrontTitle: !showFrontTitle });
                                        }}
                                    />
                                    <ToggleControl
                                        label={__('Show Content?', 'zolo-blocks')}
                                        checked={showFrontContent}
                                        onChange={() => {
                                            setAttributes({
                                                showFrontContent: !showFrontContent,
                                            });
                                        }}
                                    />
                                </>
                            )}
                            {selectedSide === 'back' && (
                                <>
                                    <ToggleControl
                                        label={__('Show Icon?', 'zolo-blocks')}
                                        checked={showBackIcon}
                                        onChange={() => {
                                            setAttributes({ showBackIcon: !showBackIcon });
                                        }}
                                    />
                                    <ToggleControl
                                        label={__('Show Title?', 'zolo-blocks')}
                                        checked={showBackTitle}
                                        onChange={() => {
                                            setAttributes({ showBackTitle: !showBackTitle });
                                        }}
                                    />
                                    <ToggleControl
                                        label={__('Show Content?', 'zolo-blocks')}
                                        checked={showBackContent}
                                        onChange={() => {
                                            setAttributes({
                                                showBackContent: !showBackContent,
                                            });
                                        }}
                                    />
                                    <ToggleControl
                                        label={__('Show Button?', 'zolo-blocks')}
                                        checked={showBackLinkBtn}
                                        onChange={() => {
                                            setAttributes({
                                                showBackLinkBtn: !showBackLinkBtn,
                                            });
                                        }}
                                    />
                                    {showBackLinkBtn && (
                                        <ToggleControl
                                            label={__('Show Button Icon?', 'zolo-blocks')}
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
                        {selectedSide === 'front' && (
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
                                                label={__('Front Title', 'zolo-blocks')}
                                                value={frontTitle}
                                                onChange={(newText) => setAttributes({ frontTitle: newText })}
                                            />
                                        )}
                                        {showFrontContent && (
                                            <TextareaControl
                                                label={__('Front Content', 'zolo-blocks')}
                                                value={frontContent}
                                                onChange={(newText) => setAttributes({ frontContent: newText })}
                                            />
                                        )}
                                    </ZoloPanelBody>
                                )}
                            </>
                        )}

                        {selectedSide === 'back' && (
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
                                                label={__('Back Title', 'zolo-blocks')}
                                                value={backTitle}
                                                onChange={(newText) => setAttributes({ backTitle: newText })}
                                            />
                                        )}

                                        {showBackContent && (
                                            <TextareaControl
                                                label={__('Back Content', 'zolo-blocks')}
                                                value={backContent}
                                                onChange={(newText) => setAttributes({ backContent: newText })}
                                            />
                                        )}
                                    </ZoloPanelBody>
                                )}

                                {showBackLinkBtn && (
                                    <ZoloPanelBody title={__('Button', 'zolo-blocks')} initialOpen={false} panelProps={props}>
                                        <TextControl
                                            label={__('Button Text', 'zolo-blocks')}
                                            value={buttonText}
                                            onChange={(newText) => setAttributes({ buttonText: newText })}
                                        />
                                        <TextControl
                                            label={__('Link', 'zolo-blocks')}
                                            value={link}
                                            placeholder="https://your-link.com"
                                            onChange={(newLink) => setAttributes({ link: newLink })}
                                        />
                                        <ToggleControl
                                            label={__('Open in New Tab', 'zolo-blocks')}
                                            checked={linkOpenNewTab}
                                            onChange={() =>
                                                setAttributes({
                                                    linkOpenNewTab: !linkOpenNewTab,
                                                })
                                            }
                                        />
                                        <ZoloIconPicker
                                            label={__('Select Icon', 'zolo-block')}
                                            value={buttonIcon}
                                            onChange={(v) => setAttributes({ buttonIcon: v })}
                                        />
                                    </ZoloPanelBody>
                                )}
                            </>
                        )}

                        {/* general settings  */}
                        <ZoloPanelBody title={__('General Settings', 'zolo-blocks')} initialOpen={false} panelProps={props}>
                            <ResRangeControl
                                label={__('Height', 'zolo-blocks')}
                                controlName={FLIPBOX_HEIGHT}
                                requiredProps={requiredProps}
                                min={200}
                                max={1000}
                                defaultVal={300}
                            />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zolo-blocks')}
                                controlName={FLIPBOX_BORDER_RADIUS}
                                requiredProps={requiredProps}
                            />

                            <SelectControl
                                label={__('Flip Effect', 'zolo-blocks')}
                                value={flipEffect}
                                options={flipEffectOptions}
                                onChange={(flipEffect) => {
                                    setAttributes({ flipEffect });
                                }}
                            />
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
                                options={triggerTypeOptions}
                                onChange={(triggerType) => {
                                    setAttributes({ triggerType });
                                }}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zolo-blocks')} firstOpen={true} panelProps={props}>
                            <BaseControl label={__('Selected Side', 'zolo-blocks')}>
                                <ButtonGroup className="zolo-button-group">
                                    {FLIPBLOX_SIDE.map((item) => (
                                        <Button
                                            isLarge
                                            isPrimary={selectedSide === item.value}
                                            aria-pressed={selectedSide === item.value}
                                            showBackLinkBtn
                                            onClick={() => setAttributes({ selectedSide: item.value })}
                                        >
                                            {item.label}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </BaseControl>
                        </ZoloPanelBody>

                        {selectedSide === 'front' && (
                            <>
                                <ZoloPanelBody title={__('Items', 'zolo-block')} panelProps={props}>
                                    <BorderControl
                                        label={__('Border', 'zolo-blocks')}
                                        controlName={FRONT_ITEMS_BORDER}
                                        requiredProps={requiredProps}
                                    />

                                    <ResDimensionsControl
                                        label={__('Padding', 'zolo-blocks')}
                                        controlName={FRONT_ITEMS_PADDING}
                                        requiredProps={requiredProps}
                                    />
                                    <NormalBGControl requiredProps={requiredProps} controlName={FRONT_ITEMS_BG} noMainBGImg={false} />
                                </ZoloPanelBody>
                                {showFrontIcon && (
                                    <ZoloPanelBody title={__('Icon', 'zolo-block')} panelProps={props}>
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
                                    </ZoloPanelBody>
                                )}
                                {showFrontTitle && (
                                    <ZoloPanelBody title={__('Title', 'zolo-blocks')} stylePanel={true} panelProps={props}>
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
                                    </ZoloPanelBody>
                                )}
                                {showFrontContent && (
                                    <ZoloPanelBody title={__('Content', 'zolo-blocks')} stylePanel={true} panelProps={props}>
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
                                    </ZoloPanelBody>
                                )}
                            </>
                        )}
                        {selectedSide === 'back' && (
                            <>
                                <ZoloPanelBody title={__('Items', 'zolo-block')} panelProps={props}>
                                    <BorderControl
                                        label={__('Border', 'zolo-blocks')}
                                        controlName={BACK_ITEMS_BORDER}
                                        requiredProps={requiredProps}
                                    />

                                    <ResDimensionsControl
                                        label={__('Padding', 'zolo-blocks')}
                                        controlName={BACK_ITEMS_PADDING}
                                        requiredProps={requiredProps}
                                    />
                                    <NormalBGControl requiredProps={requiredProps} controlName={BACK_ITEMS_BG} noMainBGImg={false} />
                                </ZoloPanelBody>
                                {showBackIcon && (
                                    <ZoloPanelBody title={__('Icon', 'zolo-block')} panelProps={props}>
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
                                    </ZoloPanelBody>
                                )}
                                {showBackTitle && (
                                    <ZoloPanelBody title={__('Title', 'zolo-blocks')} stylePanel={true} panelProps={props}>
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
                                    </ZoloPanelBody>
                                )}
                                {showBackContent && (
                                    <ZoloPanelBody title={__('Content', 'zolo-blocks')} stylePanel={true} panelProps={props}>
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
                                    </ZoloPanelBody>
                                )}
                                {showBackLinkBtn && (
                                    <ZoloPanelBody title={__('Button', 'zolo-block')} panelProps={props}>
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
                                        <TypographyDropdown
                                            label={__('Typography', 'zolo-blocks')}
                                            typoPrefixConstant={BACK_LINK_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                        />
                                        <TabPanelControl
                                            normalComponents={
                                                <>
                                                    <ColorControl
                                                        label={__('Color', 'zolo-blocks')}
                                                        color={backLinkColor}
                                                        onChange={(color) =>
                                                            setAttributes({
                                                                backLinkColor: color,
                                                            })
                                                        }
                                                    />
                                                    <NormalBGControl
                                                        requiredProps={requiredProps}
                                                        controlName={BACK_LINK_BG}
                                                        noMainBGImg={false}
                                                    />
                                                </>
                                            }
                                            hoverComponents={
                                                <>
                                                    <ColorControl
                                                        label={__('Color', 'zolo-blocks')}
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
                                    </ZoloPanelBody>
                                )}
                            </>
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
