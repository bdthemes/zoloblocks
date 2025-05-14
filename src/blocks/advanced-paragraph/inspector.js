/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    ZoloToggleControl,
    ZoloCardDivider,
    ResRangeControl,
    ResCounterControl,
    ResAlignmentControl,
    ColorControl,
    TypographyDropdown,
    HeaderTabs,
    BorderControl,
    AdvancedOptions,
    ResDimensionsControl,
    BoxShadowControl,
    NormalBGControl,
    TabPanelControl,
    TextShadowControl,
    ZoloPanelBody,
    TextGradientControl,
} = window.zoloModule;

import objAttributes from './attributes';

import { TEXT_TYPO, LINK_TYPO, DROP_CAP_TYPO } from './constants/typoPrefixConstant';
import { TEXT_ALIGN_OPTIONS } from '../../../src/global/constants';

import {
    TEXT_MARGIN,
    COLUMNS,
    COLUMNS_GAP,
    TEXT_ALIGNMENT,
    LINK_BORDER,
    LINK_BOX_SHADOW,
    LINK_BG_COLOR,
    LINK_RADIUS,
    LINK_PADDING,
    HOVER_LINK_BG_COLOR,
    HOVER_LINK_RADIUS,
    HOVER_LINK_PADDING,
    DROP_CAP_SHADOW,
    DROP_CAP_BG_COLOR,
    DROP_CAP_BORDER,
    DROP_CAP_RADIUS,
    DROP_CAP_PADDING,
    DROP_CAP_MARGIN,
    TEXT_GRADIENT_COLOR,
} from './constants';

const { zolo_pro_status } = window.zoloParams;

function Inspector(props) {
    const { attributes, setAttributes } = props;

    const { resMode, dropcap, textColor, linkColor, hoverLinkColor, dropcapColor, hoverLinkBorderColor } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/textarea"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                {__('Show & Hide elements', 'zoloblocks')}
                            </div>
                            <ZoloToggleControl
                                label={__('Dropcap', 'zoloblocks')}
                                checked={dropcap}
                                onChange={() => setAttributes({ dropcap: !dropcap })}
                            />
                            <ZoloCardDivider />
                            <ResCounterControl
                                label={__('Columns', 'zoloblocks')}
                                controlName={COLUMNS}
                                requiredProps={requiredProps}
                                min={1}
                                max={6}
                                defaults={{
                                    deskRange: 1,
                                    tabRange: 1,
                                    mobRange: 1,
                                }}
                            />
                            <ResRangeControl
                                label={__('Gap', 'zoloblocks')}
                                controlName={COLUMNS_GAP}
                                requiredProps={requiredProps}
                                min={0}
                                max={100}
                                step={1}
                            />
                            {!dropcap && (
                                <>
                                    <ZoloCardDivider />
                                    <ResAlignmentControl
                                        label={__('Alignment', 'zoloblocks')}
                                        controlName={TEXT_ALIGNMENT}
                                        requiredProps={requiredProps}
                                        alignOptions={TEXT_ALIGN_OPTIONS}
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Text', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            {zolo_pro_status === 'active' ? (
                                <>
                                    <TextGradientControl
                                        noMainBGImg={true}
                                        controlName={TEXT_GRADIENT_COLOR}
                                        requiredProps={requiredProps}
                                        defaultColor={textColor}
                                        onChangeDefault={(val) => {
                                            setAttributes({
                                                textColor: val,
                                            });
                                        }}
                                    />
                                </>
                            ) : (
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={textColor}
                                    onChange={(val) =>
                                        setAttributes({
                                            textColor: val,
                                        })
                                    }
                                />
                            )}
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={TEXT_TYPO}
                                requiredProps={requiredProps}
                            />
                            <ZoloCardDivider />
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={TEXT_MARGIN}
                                requiredProps={requiredProps}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Link', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={linkColor}
                                            onChange={(color) => setAttributes({ linkColor: color })}
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={LINK_TYPO}
                                            requiredProps={requiredProps}
                                        />
                                        <ZoloCardDivider />
                                        <NormalBGControl controlName={LINK_BG_COLOR} requiredProps={requiredProps} noMainBGImg={true} />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={LINK_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                        <ZoloCardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={LINK_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl
                                            label={__('Box Shadow', 'zoloblocks')}
                                            controlName={LINK_BOX_SHADOW}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Radius', 'zoloblocks')}
                                            controlName={LINK_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={hoverLinkColor}
                                            onChange={(color) => setAttributes({ hoverLinkColor: color })}
                                        />
                                        <NormalBGControl
                                            label={__('Background', 'zoloblocks')}
                                            controlName={HOVER_LINK_BG_COLOR}
                                            requiredProps={requiredProps}
                                            noMainBGImg={true}
                                        />
                                        <ColorControl
                                            label={__('Border Color', 'zoloblocks')}
                                            color={hoverLinkBorderColor}
                                            onChange={(color) => setAttributes({ hoverLinkBorderColor: color })}
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                        {dropcap && (
                            <>
                                <ZoloPanelBody title={__('Drop Cap', 'zoloblocks')} stylePanel={true} panelProps={props}>
                                    <ColorControl
                                        label={__('Color', 'zoloblocks')}
                                        color={dropcapColor}
                                        onChange={(color) => setAttributes({ dropcapColor: color })}
                                    />
                                    <TypographyDropdown
                                        label={__('Typography', 'zoloblocks')}
                                        typoPrefixConstant={DROP_CAP_TYPO}
                                        requiredProps={requiredProps}
                                    />

                                    <TextShadowControl
                                        label={__('Text Shadow', 'zoloblocks')}
                                        controlName={DROP_CAP_SHADOW}
                                        requiredProps={requiredProps}
                                        enableTransition={true}
                                    />
                                    <ZoloCardDivider />
                                    <NormalBGControl controlName={DROP_CAP_BG_COLOR} requiredProps={requiredProps} noMainBGImg={true} />
                                    <ResDimensionsControl
                                        label={__('Padding', 'zoloblocks')}
                                        controlName={DROP_CAP_PADDING}
                                        requiredProps={requiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Margin', 'zoloblocks')}
                                        controlName={DROP_CAP_MARGIN}
                                        requiredProps={requiredProps}
                                    />
                                    <ZoloCardDivider />
                                    <BorderControl
                                        label={__('Border', 'zoloblocks')}
                                        controlName={DROP_CAP_BORDER}
                                        requiredProps={requiredProps}
                                    />
                                    <ResDimensionsControl
                                        label={__('Radius', 'zoloblocks')}
                                        controlName={DROP_CAP_RADIUS}
                                        requiredProps={requiredProps}
                                        forBorderRadius={true}
                                    />
                                </ZoloPanelBody>
                            </>
                        )}
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/adavanced-paragraph"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
