//wrodpress dependencies
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, SelectControl, __experimentalInputControl as InputControl, CardDivider, BaseControl } from '@wordpress/components';
import { applyFilters, MediaUpload } from '@wordpress/hooks';

import { __ } from '@wordpress/i18n';

const {
    HeaderTabs,
    ResAlignmentControl,
    ResRangeControl,
    ColorControl,
    BorderControl,
    ResDimensionsControl,
    TypographyDropdown,
    TabPanelControl,
    NormalBGControl,
    BoxShadowControl,
    LinkControl,
    IconicBtnGroup,
    AdvancedOptions,
    ZoloIconPicker,
    ZoloPanelBody,
    ToggleGroup,
    ResSelectControl,
    ImageAvatar,
    ImageSizes,
} = window.zoloModule;

import { TEXT_ALIGN_OPTIONS, ICON_POSITIONS, ICON_STATUS } from '../../../src/global/constants';

import { desktop, tablet, mobile } from '@wordpress/icons';
import objAttributes from './attributes';

import {
    NAV_MENU_ALIGNMENT,
    NAV_MENU_WRAP_BG,
    NAV_MENU_WRAP_BORDER,
    NAV_MENU_WRAP_BORDER_RADIUS,
    NAV_MENU_WRAP_PADDING,
    NAV_MENU_WRAP_BOX_SHADOW,
    NAV_MENU_ITEM_BG,
    NAV_MENU_ITEM_BORDER,
    NAV_MENU_ITEM_BORDER_RADIUS,
    NAV_MENU_ITEM_PADDING,
    NAV_MENU_ITEM_HOVER_BG,
    NAV_MENU_ITEM_ACTIVE_BG,
    TAB_STATES,
    TAB_MOBILE,
    MB_LOGO_PADDING,
    MB_LOGO_MARGIN,
    MB_LOGO_WIDTH,
    MB_LOGO_HEIGHT,
    HUMBURGER_MENU_ICON_SIZE,
    HUMBURGER_MENU_BG,
    HUMBURGER_MENU_BORDER,
    HUMBURGER_MENU_BORDER_RADIUS,
    HUMBURGER_MENU_PADDING,
    HUMBURGER_MENU_MARGIN,
    HUMBURGER_MENU_BOX_SHADOW,
    HUMBURGER_MENU_HOVER_BG,
    CLOSE_ICON_SIZE,
    CLOSE_ICON_BG,
    CLOSE_ICON_BORDER,
    CLOSE_ICON_BORDER_RADIUS,
    CLOSE_ICON_PADDING,
    CLOSE_ICON_MARGIN,
    CLOSE_ICON_BOX_SHADOW,
    CLOSE_ICON_HOVER_BG,
    MOBILE_MENU_WIDTH,
    MOBILE_MENU_WRAP_BG,
    MOBILE_MENU_WRAP_BORDER,
    MOBILE_MENU_WRAP_BORDER_RADIUS,
    MOBILE_MENU_WRAP_PADDING,
    MOBILE_MENU_WRAP_BOX_SHADOW,
} from './constants';

import { MENU_TYPOGRAPHY, SUB_MENU_TYPOGRAPHY } from './constants/typoPrefixConstant';

const Inspector = (props) => {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        navItemTextColor,
        navItemTextHoverColor,
        navItemTextActiveColor,
        navItemBorderHoverColor,
        navItemBorderActiveColor,
        humburgerMenuColor,
        humburgerMenuHoverColor,
        humburgerMenuBorderHoverColor,
        closeIconColor,
        closeIconHoverColor,
        closeIconBorderHoverColor,
        brandPhoto,
        imageRes,
        humbergerIcon,
    } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/navmenu"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <ToggleGroup
                                label={__('Breakpoint', 'zoloblocks')}
                                value={attributes?.menuBreakpoint}
                                onChange={(value) => setAttributes({ menuBreakpoint: value })}
                                options={[
                                    { value: 'desktop', label: 'Desktop', icon: desktop },
                                    { value: 'tablet', label: 'Tablet', icon: tablet },
                                    { value: 'mobile', label: 'Mobile', icon: mobile },
                                ]}
                                isDeselectable
                            />

                            <ResAlignmentControl
                                label={__('Alignment', 'zoloblocks')}
                                controlName={NAV_MENU_ALIGNMENT}
                                requiredProps={requiredProps}
                                alignOptions={TEXT_ALIGN_OPTIONS}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Mobile Menu Settings', 'zoloblocks')} panelProps={props}>
                            <BaseControl label={__('Logo', 'zoloblocks')} className="zolo-flex-col-control">
                                {brandPhoto ? (
                                    <ImageAvatar
                                        imageUrl={brandPhoto && brandPhoto.url}
                                        onDeleteImage={() =>
                                            setAttributes({
                                                brandPhoto: null,
                                            })
                                        }
                                        imageId={brandPhoto && brandPhoto.id}
                                        onEditImage={(media) =>
                                            setAttributes({
                                                brandPhoto: media,
                                            })
                                        }
                                    />
                                ) : (
                                    <MediaUpload
                                        onSelect={(media) => {
                                            setAttributes({
                                                brandPhoto: media,
                                            });
                                        }}
                                        allowedTypes={['image']}
                                        value={brandPhoto && brandPhoto.id}
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
                            <CardDivider />
                            <ZoloIconPicker
                                label={__('Icon', 'zoloblocks')}
                                value={humbergerIcon}
                                onChange={(value) => {
                                    setAttributes({
                                        humbergerIcon: value,
                                    });
                                }}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Menu Wrapper', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <NormalBGControl requiredProps={requiredProps} controlName={NAV_MENU_WRAP_BG} noMainBGImg={false} />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={NAV_MENU_WRAP_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <CardDivider />
                            <BorderControl
                                label={__('Border', 'zoloblocks')}
                                controlName={NAV_MENU_WRAP_BORDER}
                                requiredProps={requiredProps}
                            />
                            <BoxShadowControl controlName={NAV_MENU_WRAP_BOX_SHADOW} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={NAV_MENU_WRAP_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Menu Items', 'zoloblocks')} panelProps={props}>
                            <TabPanelControl
                                options={TAB_STATES}
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={navItemTextColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    navItemTextColor: value,
                                                })
                                            }
                                        />

                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={MENU_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={36}
                                        />
                                        <CardDivider />
                                        <NormalBGControl requiredProps={requiredProps} controlName={NAV_MENU_ITEM_BG} noMainBGImg={false} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={NAV_MENU_ITEM_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={NAV_MENU_ITEM_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl controlName={NAV_MENU_ITEM_PADDING} requiredProps={requiredProps} />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={NAV_MENU_ITEM_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={navItemTextHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    navItemTextHoverColor: value,
                                                })
                                            }
                                        />

                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={NAV_MENU_ITEM_HOVER_BG}
                                            noMainBGImg={false}
                                        />

                                        <ColorControl
                                            label={__('Border Color', 'zoloblocks')}
                                            color={navItemBorderHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    navItemBorderHoverColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                                activeComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={navItemTextActiveColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    navItemTextActiveColor: value,
                                                })
                                            }
                                        />
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={NAV_MENU_ITEM_ACTIVE_BG}
                                            noMainBGImg={false}
                                        />
                                        <ColorControl
                                            label={__('Border Color', 'zoloblocks')}
                                            color={navItemBorderActiveColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    navItemBorderActiveColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Mobile Menu', 'zoloblocks')} panelProps={props}>
                            <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                {__('Wrapper', 'zoloblocks')}
                            </div>
                            <ResRangeControl
                                label={__('Width', 'zoloblocks')}
                                controlName={MOBILE_MENU_WIDTH}
                                requiredProps={requiredProps}
                                min={0}
                                max={500}
                                step={1}
                            />
                            <CardDivider />
                            <NormalBGControl requiredProps={requiredProps} controlName={MOBILE_MENU_WRAP_BG} noMainBGImg={false} />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={MOBILE_MENU_WRAP_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <CardDivider />
                            <BorderControl
                                label={__('Border', 'zoloblocks')}
                                controlName={MOBILE_MENU_WRAP_BORDER}
                                requiredProps={requiredProps}
                            />
                            <BoxShadowControl controlName={MOBILE_MENU_WRAP_BOX_SHADOW} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={MOBILE_MENU_WRAP_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <TabPanelControl
                                options={TAB_MOBILE}
                                normalComponents={
                                    <>
                                        <ResRangeControl
                                            label={__('Width', 'zoloblocks')}
                                            controlName={MB_LOGO_WIDTH}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={300}
                                            step={1}
                                        />
                                        <CardDivider />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={MB_LOGO_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={MB_LOGO_MARGIN}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={humburgerMenuColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    humburgerMenuColor: value,
                                                })
                                            }
                                        />
                                        <ResRangeControl
                                            label={__('Size', 'zoloblocks')}
                                            controlName={HUMBURGER_MENU_ICON_SIZE}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={100}
                                            step={1}
                                        />
                                        <CardDivider />
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={HUMBURGER_MENU_BG}
                                            noMainBGImg={false}
                                        />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={HUMBURGER_MENU_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={HUMBURGER_MENU_MARGIN}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={HUMBURGER_MENU_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl controlName={HUMBURGER_MENU_BOX_SHADOW} requiredProps={requiredProps} />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={HUMBURGER_MENU_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                        <div className="zolo-custom-heading">{__('Hover', 'zoloblocks')}</div>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={humburgerMenuHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    humburgerMenuHoverColor: value,
                                                })
                                            }
                                        />
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={HUMBURGER_MENU_HOVER_BG}
                                            noMainBGImg={false}
                                        />
                                        <ColorControl
                                            label={__('Border Color', 'zoloblocks')}
                                            color={humburgerMenuBorderHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    humburgerMenuBorderHoverColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                                activeComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={closeIconColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    closeIconColor: value,
                                                })
                                            }
                                        />
                                        <ResRangeControl
                                            label={__('Size', 'zoloblocks')}
                                            controlName={CLOSE_ICON_SIZE}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={100}
                                            step={1}
                                        />
                                        <CardDivider />
                                        <NormalBGControl requiredProps={requiredProps} controlName={CLOSE_ICON_BG} noMainBGImg={false} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={CLOSE_ICON_PADDING}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={CLOSE_ICON_MARGIN}
                                            requiredProps={requiredProps}
                                            forBorderRadius={false}
                                        />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={CLOSE_ICON_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl controlName={CLOSE_ICON_BOX_SHADOW} requiredProps={requiredProps} />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={CLOSE_ICON_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />

                                        <div className="zolo-custom-heading">{__('Hover', 'zoloblocks')}</div>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={closeIconHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    closeIconHoverColor: value,
                                                })
                                            }
                                        />
                                        <NormalBGControl
                                            requiredProps={requiredProps}
                                            controlName={CLOSE_ICON_HOVER_BG}
                                            noMainBGImg={false}
                                        />
                                        <ColorControl
                                            label={__('Border Color', 'zoloblocks')}
                                            color={closeIconBorderHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    closeIconBorderHoverColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={{
                                attributes,
                                setAttributes,
                                resMode: attributes?.resMode,
                                objAttributes,
                            }}
                            block="zolo/navmenu"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
};

export default Inspector;
