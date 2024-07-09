/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useEntityProp } from '@wordpress/core-data';
import { useEffect } from '@wordpress/element';
import { SelectControl, ToggleControl, CardDivider } from '@wordpress/components';
/**
 * Internal depencencies
 */
const {
    ResRangeControl,
    HeaderTabs,
    IconicBtnGroup,
    RangeResetControl,
    ZoloPanelBody,
    TabPanelControl,
    ColorControl,
    NormalBGControl,
    BorderControl,
    ResDimensionsControl,
} = window.zoloModule;

import objAttributes from './attributes';
import {
    CB_TOP_OFFSET,
    CB_LEFT_OFFSET,
    CB_RIGHT_OFFSET,
    PB_WIDTH,
    CONTENT_POS,
    PB_OVERLAY_BG,
    PB_BORDER,
    PB_BRADIUS,
    PB_BG,
    PB_POSITIONS,
    POPUP_TYPES,
    PB_PADDING,
    CLOSE_ICON_BORDER,
    CLOSE_ICON_BRADIUS,
    CLOSE_ICON_PADDING,
    CLOSE_ICON_MARGIN,
    CLOSE_ICON_BG,
    CLOSE_ICON_HOVER_BG,
} from './constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        popupType,
        pushContent,
        infoBoxPosition,
        infiniteRepeat,
        popupBoxPosition,
        enableOverlay,
        fixedBackground,
        isDismissable,
        closeBtnPosition,
        closeBtnColors,
        closeBtnId,
        hideOnDesktop,
        hideOnTablet,
        hideOnMobile,
        repetitionNumber,
        closeBtnSize,
        borderHoverColor,
    } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    const [meta, setMeta] = useEntityProp('postType', 'zolo-popup', 'meta');

    // get current post id
    const postId = wp.data.select('core/editor').getCurrentPostId();

    useEffect(() => {
        setAttributes({ closeBtnId: `zolo-popup-${postId}` });
    }, [postId]);

    useEffect(() => {
        setMeta({
            ...meta,
            zolo_popup_repeat_num: repetitionNumber,
        });
    }, [repetitionNumber]);

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/container"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <SelectControl
                                label={__('Popup Type', 'zoloblocks')}
                                options={POPUP_TYPES}
                                onChange={(v) => {
                                    setAttributes({ popupType: v });
                                }}
                                value={popupType}
                            />
                            {popupType === 'info_bar' && (
                                <ToggleControl
                                    label={__('Push Content', 'zoloblocks')}
                                    checked={pushContent}
                                    onChange={() => setAttributes({ pushContent: !pushContent })}
                                />
                            )}

                            {popupType === 'info_bar' && !pushContent && (
                                <IconicBtnGroup
                                    label={__('Content Position', 'zoloblocks')}
                                    value={infoBoxPosition}
                                    onChange={(value) =>
                                        setAttributes({
                                            infoBoxPosition: value,
                                        })
                                    }
                                    options={CONTENT_POS}
                                />
                            )}
                        </ZoloPanelBody>
                        {popupType === 'popup_box' && (
                            <ZoloPanelBody title={__('Popup Box', 'zoloblocks')} panelProps={props}>
                                <SelectControl
                                    label={__('Position', 'zoloblocks')}
                                    options={PB_POSITIONS}
                                    onChange={(v) => {
                                        setAttributes({ popupBoxPosition: v });
                                    }}
                                    value={popupBoxPosition}
                                />
                                <ResRangeControl
                                    label={__('Width', 'zoloblocks')}
                                    controlName={PB_WIDTH}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={1600}
                                    step={1}
                                />
                                <ToggleControl
                                    label={__('Enable Overlay', 'zoloblocks')}
                                    checked={enableOverlay}
                                    onChange={() => setAttributes({ enableOverlay: !enableOverlay })}
                                />
                                <ToggleControl
                                    label={__('Fixed Background', 'zoloblocks')}
                                    checked={fixedBackground}
                                    onChange={() => setAttributes({ fixedBackground: !fixedBackground })}
                                />
                            </ZoloPanelBody>
                        )}
                        <ZoloPanelBody title={__('Repetition', 'zoloblocks')} panelProps={props}>
                            <ToggleControl
                                label={__('Infinite Repeat', 'zoloblocks')}
                                checked={infiniteRepeat}
                                onChange={() => {
                                    setMeta({
                                        ...meta,
                                        zolo_popup_infinite_repeat: !infiniteRepeat,
                                    });
                                    setAttributes({ infiniteRepeat: !infiniteRepeat });
                                }}
                            />
                            {!infiniteRepeat && (
                                <RangeResetControl
                                    label={__('Repetition Number', 'zoloblocks')}
                                    controlName="repetitionNumber"
                                    min={1}
                                    max={10}
                                    step={1}
                                    requiredProps={requiredProps}
                                />
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Close Button', 'zoloblocks')} panelProps={props}>
                            <ToggleControl
                                label={__('Dismissable', 'zoloblocks')}
                                checked={isDismissable}
                                onChange={() => setAttributes({ isDismissable: !isDismissable })}
                            />
                            {isDismissable && (
                                <>
                                    <SelectControl
                                        label={__('Position', 'zoloblocks')}
                                        options={[
                                            { label: __('Top Right', 'zoloblocks'), value: 'cbp_top_right' },
                                            { label: __('Top Left', 'zoloblocks'), value: 'cbp_top_left' },
                                        ]}
                                        onChange={(v) => {
                                            setAttributes({ closeBtnPosition: v });
                                        }}
                                        value={closeBtnPosition}
                                    />
                                    <ResRangeControl
                                        label={__('Top Offset', 'zoloblocks')}
                                        controlName={CB_TOP_OFFSET}
                                        requiredProps={requiredProps}
                                        min={0}
                                        max={100}
                                        step={1}
                                    />
                                    {closeBtnPosition === 'cbp_top_right' && (
                                        <ResRangeControl
                                            label={__('Right Offset', 'zoloblocks')}
                                            controlName={CB_RIGHT_OFFSET}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={100}
                                            step={1}
                                        />
                                    )}
                                    {closeBtnPosition === 'cbp_top_left' && (
                                        <ResRangeControl
                                            label={__('Left Offset', 'zoloblocks')}
                                            controlName={CB_LEFT_OFFSET}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={100}
                                            step={1}
                                        />
                                    )}
                                </>
                            )}
                            <CardDivider />
                            <div className="zolo-popup-note">
                                <p>
                                    <b>{__('ID: ', 'zoloblocks')}</b>
                                    {closeBtnId}
                                </p>
                            </div>
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody
                            title={popupType === 'popup_box' ? __('Popup Box', 'zoloblocks') : __('Info Box', 'zoloblocks')}
                            stylePanel={true}
                            firstOpen={true}
                            panelProps={props}
                        >
                            <BorderControl label={__('Border', 'zoloblocks')} controlName={PB_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={PB_BRADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={PB_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <NormalBGControl requiredProps={requiredProps} controlName={PB_BG} noMainBGImg={true} />

                            <div className='zolo-custom-heading'>
                                {__('Popup Overlay', 'zoloblocks')}
                            </div>
                            {popupType === 'popup_box' && enableOverlay && (
                                <NormalBGControl
                                    requiredProps={requiredProps}
                                    controlName={PB_OVERLAY_BG}
                                    noMainBGImg={true}
                                    label={__('Background', 'zoloblocks')}
                                />
                            )}
  
                        </ZoloPanelBody>

                        {isDismissable && (
                            <ZoloPanelBody title={__('Close Button', 'zoloblocks')} stylePanel={true} firstOpen={false} panelProps={props}>
                                <RangeResetControl
                                    label={__('Icon Size', 'zoloblocks')}
                                    controlName="closeBtnSize"
                                    min={1}
                                    max={100}
                                    step={1}
                                    requiredProps={requiredProps}
                                />

                                <BorderControl
                                    label={__('Border', 'zoloblocks')}
                                    controlName={CLOSE_ICON_BORDER}
                                    requiredProps={requiredProps}
                                    hoverControl={
                                        <ColorControl
                                            label={__('Border Color', 'zoloblocks')}
                                            color={borderHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    borderHoverColor: value,
                                                })
                                            }
                                        />
                                    }
                                />
                                <ResDimensionsControl
                                    label={__('Border Radius', 'zoloblocks')}
                                    controlName={CLOSE_ICON_BRADIUS}
                                    requiredProps={requiredProps}
                                    forBorderRadius={true}
                                />
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
                           
                                <TabPanelControl
                                    normalComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={closeBtnColors?.normal}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        closeBtnColors: { ...closeBtnColors, normal: value },
                                                    })
                                                }
                                            />
                                             <NormalBGControl requiredProps={requiredProps} controlName={CLOSE_ICON_BG} noMainBGImg={true} />
                                        </>
                                    }
                                    hoverComponents={
                                        <>
                                            <ColorControl
                                                label={__('Color', 'zoloblocks')}
                                                color={closeBtnColors?.hover}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        closeBtnColors: { ...closeBtnColors, hover: value },
                                                    })
                                                }
                                            />
                                             <NormalBGControl requiredProps={requiredProps} controlName={CLOSE_ICON_HOVER_BG} noMainBGImg={true} />
                                        </>
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                    </>
                }
                advancedTab={
                    <ZoloPanelBody title={__('Responsive Visibility', 'zoloblocks')} panelProps={props} firstOpen={true}>
                        <ToggleControl
                            label={__('Hide on Desktop', 'zoloblocks')}
                            checked={hideOnDesktop}
                            onChange={() => setAttributes({ hideOnDesktop: !hideOnDesktop })}
                        />
                        <ToggleControl
                            label={__('Hide on Tablet', 'zoloblocks')}
                            checked={hideOnTablet}
                            onChange={() => setAttributes({ hideOnTablet: !hideOnTablet })}
                        />
                        <ToggleControl
                            label={__('Hide on Mobile', 'zoloblocks')}
                            checked={hideOnMobile}
                            onChange={() => setAttributes({ hideOnMobile: !hideOnMobile })}
                        />
                    </ZoloPanelBody>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
