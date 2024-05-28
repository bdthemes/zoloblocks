/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { ToggleControl, TextControl, FormTokenField } from '@wordpress/components';

/**
 * Internal dependencies
 */
import BackgroundControl from '../../controls/background-control';
import ResDimensionsControl from '../../controls/dimensions-control';
import BorderControl from '../../controls/border-control';
import BoxShadowControl from '../../controls/boxshadow-control';
import RangeResetControl from '../../controls/range-reset-control';
import CustomCSSControl from '../../controls/customcss-control';
import OverflowControl from '../../controls/overflow-control';
import PositionControl from '../../controls/position-control';
import PopoverControl from '../../controls/popover-control';
import ZoloPanelBody from '../../controls/zolo-panelbody';
import TabPanelControl from '../../controls/tabpanel-control';
import ResRangeControl from '../../controls/res-range-control';
import ResAlignmentControl from '../../controls/res-alignment-control';
import { applyFilters } from '@wordpress/hooks';
import { DEFAULT_ALIGNS, DEFAULT_ALIGNS_VERTICAL, TRANSLATE_ICON, ROTATE_ICON, SCALE_ICON, SKEW_ICON, FLIP_ICON } from '../constants';
import { zoloArraysMergeIfUniqueValue } from '../../helpers/helper';
// value check
const hasValCheck = (att, attributes) => {
    const { [`zolo_${att}Range`]: deskAtt, [`zolo_TAB${att}Range`]: tabAtt, [`zolo_MOB${att}Range`]: mobAtt } = attributes;
    if (
        (deskAtt !== undefined && deskAtt !== '' && deskAtt !== null && deskAtt !== 'undefined') ||
        (tabAtt !== undefined && tabAtt !== '' && tabAtt !== null && tabAtt !== 'undefined') ||
        (mobAtt !== undefined && mobAtt !== '' && mobAtt !== null && mobAtt !== 'undefined')
    ) {
        return true;
    } else {
        return false;
    }
};

// reset att
const resetAtt = (atts, setAttributes) => {
    atts.forEach((att) => {
        setAttributes({ [`zolo_${att}Range`]: '', [`zolo_TAB${att}Range`]: '', [`zolo_MOB${att}Range`]: '' });
    });
};

export const AdvancedOptions = (props) => {
    const { attributes, setAttributes, requiredProps, block } = props;
    const panelProps = { attributes, setAttributes };

    const {
        responsiveness,
        transformAnimationActive,
        transformRotate3DActive,
        transformRotate3DActiveHover,
        scaleProportionally,
        scaleProportionallyHover,
        transformFlipHorizontal,
        transformFlipVertical,
        transformFlipHorizontalHover,
        transformFlipVerticalHover,
        parentClasses,
        customClass,
        customClasses,
        globalConfig,
        zoloId,
        overflow,
        position,
    } = attributes;

    const handleResponsiveness = (key, value, classname) => {
        let updatedClasses = [...parentClasses, classname];
        //remove class is value is false
        if (value === false) {
            updatedClasses = updatedClasses.filter(function (e) {
                return e !== classname;
            });
        }
        const uniqueClasses = [...new Set(updatedClasses)];
        setAttributes({
            responsiveness: {
                ...responsiveness,
                [key]: value,
            },
            parentClasses: [...uniqueClasses],
        });
    };

    // handle custom classes
    const handleCustomClasses = (classname) => {
        const updatedClassesString = classname.join(' ');
        const updatedClasses = parentClasses.filter(function (e) {
            return e !== customClass;
        });
        setAttributes({
            customClass: updatedClassesString,
            parentClasses: [...updatedClasses, updatedClassesString],
        });
    };

    const panels = (
        <>
            <ZoloPanelBody title={__('Wrapper', 'zoloblocks')} panelProps={props} firstOpen={true} extraPanel={true}>
                {globalConfig?.margin && (
                    <ResDimensionsControl
                        label={__('Margin', 'zoloblocks')}
                        controlName={globalConfig.margin.prefix || 'mainMargin'}
                        requiredProps={requiredProps}
                        forBorderRadius={false}
                        max={200}
                    />
                )}
                {globalConfig?.padding && (
                    <ResDimensionsControl
                        label={__('Padding', 'zoloblocks')}
                        controlName={globalConfig.padding.prefix || 'mainPadding'}
                        requiredProps={requiredProps}
                        forBorderRadius={false}
                        max={200}
                    />
                )}
                <RangeResetControl
                    label={__('Set Z Index ', 'zoloblocks')}
                    controlName={'zIndex'}
                    requiredProps={requiredProps}
                    min={0}
                    max={100}
                    step={1}
                    help={__('Set the z-index for the section', 'zoloblocks')}
                />
                <OverflowControl
                    label={__('Overflow', 'zoloblocks')}
                    value={overflow}
                    onChange={(v) => {
                        setAttributes({ overflow: v });
                    }}
                />
                <PositionControl
                    label={__('Position', 'zoloblocks')}
                    value={position}
                    onChange={(v) => {
                        setAttributes({ position: v });
                    }}
                />

                <div className="zolo-inline-control-wrapper">
                    <TextControl
                        label={__('CSS ID', 'zoloblocks')}
                        className="zolo-css-id"
                        onChange={(value) => {
                            const id = value.replace(/\s/g, '_');
                            setAttributes({ zoloId: id });
                        }}
                        value={zoloId}
                        help={__('Add an ID to the block wrapper.', 'zoloblocks')}
                    />
                    <FormTokenField
                        className="zolo-css-class"
                        label={__('CSS Class', 'zoloblocks')}
                        value={customClasses}
                        onChange={(tokens) => {
                            // replace spaces with dashes
                            const updatedTokens = tokens.map((token) => token.replace(/\s/g, '-'));
                            setAttributes({ customClasses: updatedTokens });
                            handleCustomClasses(updatedTokens);
                        }}
                        help={__('Add custom class(es) to the block. Separate multiple classes with a space.', 'zoloblocks')}
                    />
                </div>
            </ZoloPanelBody>
            {globalConfig?.background && (
                <ZoloPanelBody title={__('Background', 'zoloblocks')} panelProps={props} extraPanel={true}>
                    <BackgroundControl controlName={globalConfig.background.prefix || 'mainBg'} requiredProps={requiredProps} />
                </ZoloPanelBody>
            )}
            {(globalConfig?.border || globalConfig?.borderRadius || globalConfig?.boxShadow) && (
                <ZoloPanelBody title={__('Border', 'zoloblocks')} panelProps={props} extraPanel={true}>
                    {globalConfig?.border && (
                        <BorderControl
                            label={__('Border', 'zoloblocks')}
                            controlName={globalConfig.border.prefix || 'mainBorder'}
                            requiredProps={requiredProps}
                            forBorderRadius={false}
                        />
                    )}

                    {globalConfig?.borderRadius && (
                        <ResDimensionsControl
                            label={__('Border Radius', 'zoloblocks')}
                            controlName={globalConfig.borderRadius.prefix || 'mainBorderRadius'}
                            requiredProps={requiredProps}
                            forBorderRadius={true}
                        />
                    )}
                    {globalConfig?.boxShadow && (
                        <BoxShadowControl
                            controlName={globalConfig.boxShadow.prefix || 'mainBoxShadow'}
                            requiredProps={requiredProps}
                            forBorderRadius={false}
                        />
                    )}
                </ZoloPanelBody>
            )}

            {globalConfig?.responsiveControls && (
                <>
                    <ZoloPanelBody title={__('Responsive Control', 'zoloblocks')} panelProps={props} extraPanel={true}>
                        <ToggleControl
                            label={__('Hide on Desktop', 'zoloblocks')}
                            checked={responsiveness?.hideDesktop || false}
                            onChange={() => handleResponsiveness('hideDesktop', !responsiveness.hideDesktop, 'zolo-hide-desktop')}
                        />
                        <ToggleControl
                            label={__('Hide on Tablet', 'zoloblocks')}
                            checked={responsiveness?.hideTab || false}
                            onChange={() => handleResponsiveness('hideTab', !responsiveness.hideTab, 'zolo-hide-tab')}
                        />
                        <ToggleControl
                            label={__('Hide on Mobile', 'zoloblocks')}
                            checked={responsiveness?.hideMobile || false}
                            onChange={() => handleResponsiveness('hideMobile', !responsiveness.hideMobile, 'zolo-hide-mobile')}
                        />
                    </ZoloPanelBody>
                </>
            )}
            <ZoloPanelBody title={__('Custom CSS', 'zoloblocks')} panelProps={props} extraPanel={true} isNew={true}>
                <CustomCSSControl attributes={attributes} setAttributes={setAttributes} />
            </ZoloPanelBody>
            <ZoloPanelBody title={__('Transform', 'zoloblocks')} panelProps={props} extraPanel={true} isPro={true} isNew={true}>
                <ToggleControl
                    label={__('Transform', 'zoloblocks')}
                    checked={transformAnimationActive}
                    onChange={() => {
                        setAttributes({
                            transformAnimationActive: !transformAnimationActive,
                        });
                        if (!transformAnimationActive) {
                            setAttributes({
                                parentClasses: [...parentClasses, 'zolo-transform-animation'],
                            });
                        } else {
                            setAttributes({
                                parentClasses: parentClasses.filter(function (e) {
                                    return e !== 'zolo-transform-animation';
                                }),
                            });
                        }
                    }}
                />
                {transformAnimationActive && (
                    <TabPanelControl
                        normalComponents={
                            <>
                                <PopoverControl
                                    label={__('Translate', 'zoloblocks')}
                                    icon={TRANSLATE_ICON}
                                    onReset={() => resetAtt(['translateX', 'translateY'], setAttributes)}
                                    hasValue={hasValCheck('translateX', attributes) || hasValCheck('translateY', attributes)}
                                >
                                    <ResRangeControl
                                        label={__('translateX', 'zoloblocks')}
                                        controlName={'translateX'}
                                        requiredProps={requiredProps}
                                        min={-1000}
                                        max={1000}
                                        units={[
                                            { label: __('px', 'zoloblocks'), value: 'px' },
                                            { label: __('%', 'zoloblocks'), value: '%' },
                                        ]}
                                    />
                                    <ResRangeControl
                                        label={__('translateY', 'zoloblocks')}
                                        controlName={'translateY'}
                                        requiredProps={requiredProps}
                                        min={-1000}
                                        max={1000}
                                        units={[
                                            { label: __('px', 'zoloblocks'), value: 'px' },
                                            { label: __('%', 'zoloblocks'), value: '%' },
                                        ]}
                                    />
                                </PopoverControl>
                                <PopoverControl
                                    label={__('Rotate', 'zoloblocks')}
                                    icon={ROTATE_ICON}
                                    isPro={true}
                                    onReset={() =>
                                        resetAtt(
                                            ['transformRotate', 'transformRotateX', 'transformRotateY', 'transformPerspective'],
                                            setAttributes
                                        )
                                    }
                                    hasValue={
                                        hasValCheck('transformRotate', attributes) ||
                                        hasValCheck('transformRotateX', attributes) ||
                                        hasValCheck('transformPerspective', attributes) ||
                                        hasValCheck('transformRotateY', attributes)
                                    }
                                >
                                    <ResRangeControl
                                        label={__('Rotate', 'zoloblocks')}
                                        controlName={'transformRotate'}
                                        requiredProps={requiredProps}
                                        min={-360}
                                        max={360}
                                        noUnits={true}
                                    />
                                    <ToggleControl
                                        label={__('Rotate 3D', 'zoloblocks')}
                                        checked={transformRotate3DActive}
                                        onChange={() => {
                                            setAttributes({
                                                transformRotate3DActive: !transformRotate3DActive,
                                            });
                                        }}
                                    />
                                    {transformRotate3DActive && (
                                        <>
                                            <ResRangeControl
                                                label={__('RotateX(deg)', 'zoloblocks')}
                                                controlName={'transformRotateX'}
                                                requiredProps={requiredProps}
                                                min={-360}
                                                max={360}
                                                noUnits={true}
                                            />
                                            <ResRangeControl
                                                label={__('RotateY(deg)', 'zoloblocks')}
                                                controlName={'transformRotateY'}
                                                requiredProps={requiredProps}
                                                min={-360}
                                                max={360}
                                                noUnits={true}
                                            />
                                            <ResRangeControl
                                                label={__('Perspective(deg)', 'zoloblocks')}
                                                controlName={'transformPerspective'}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={1000}
                                                noUnits={true}
                                            />
                                        </>
                                    )}
                                </PopoverControl>
                                <PopoverControl
                                    label={__('Scale', 'zoloblocks')}
                                    icon={SCALE_ICON}
                                    isPro={true}
                                    onReset={() => resetAtt(['transformScaleX', 'transformScaleY', 'transformScale'], setAttributes)}
                                    hasValue={
                                        hasValCheck('transformScaleX', attributes) ||
                                        hasValCheck('transformScaleY', attributes) ||
                                        hasValCheck('transformScale', attributes)
                                    }
                                >
                                    <ToggleControl
                                        label={__('Keep Proportions', 'zoloblocks')}
                                        checked={scaleProportionally}
                                        onChange={() => {
                                            setAttributes({
                                                scaleProportionally: !scaleProportionally,
                                            });
                                        }}
                                    />
                                    {!scaleProportionally && (
                                        <>
                                            <ResRangeControl
                                                label={__('ScaleX', 'zoloblocks')}
                                                controlName={'transformScaleX'}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={2}
                                                step={0.1}
                                                noUnits={true}
                                            />
                                            <ResRangeControl
                                                label={__('ScaleY', 'zoloblocks')}
                                                controlName={'transformScaleY'}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={2}
                                                step={0.1}
                                                noUnits={true}
                                            />
                                        </>
                                    )}
                                    {scaleProportionally && (
                                        <>
                                            <ResRangeControl
                                                label={__('Scale', 'zoloblocks')}
                                                controlName={'transformScale'}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={2}
                                                step={0.1}
                                                noUnits={true}
                                            />
                                        </>
                                    )}
                                </PopoverControl>
                                <PopoverControl
                                    label={__('Skew', 'zoloblocks')}
                                    icon={SKEW_ICON}
                                    isPro={true}
                                    onReset={() => resetAtt(['transformSkewX', 'transformSkewY'], setAttributes)}
                                    hasValue={hasValCheck('transformSkewX', attributes) || hasValCheck('transformSkewY', attributes)}
                                >
                                    <ResRangeControl
                                        label={__('SkewX (deg)', 'zoloblocks')}
                                        controlName={'transformSkewX'}
                                        requiredProps={requiredProps}
                                        min={-360}
                                        max={360}
                                        noUnits={true}
                                    />
                                    <ResRangeControl
                                        label={__('SkewY (deg)', 'zoloblocks')}
                                        controlName={'transformSkewY'}
                                        requiredProps={requiredProps}
                                        min={-360}
                                        max={360}
                                        noUnits={true}
                                    />
                                </PopoverControl>
                                <PopoverControl
                                    label={__('Flip', 'zoloblocks')}
                                    icon={FLIP_ICON}
                                    isPro={true}
                                    onReset={() => resetAtt(['transformOriginX', 'transformOriginY'], setAttributes)}
                                    hasValue={hasValCheck('transformOriginX', attributes) || hasValCheck('transformOriginY', attributes)}
                                >
                                    <ToggleControl
                                        label={__('Flip Horizontal', 'zoloblocks')}
                                        checked={transformFlipHorizontal}
                                        onChange={() => {
                                            setAttributes({
                                                transformFlipHorizontal: !transformFlipHorizontal,
                                            });
                                        }}
                                    />
                                    <ToggleControl
                                        label={__('Flip Vertical', 'zoloblocks')}
                                        checked={transformFlipVertical}
                                        onChange={() => {
                                            setAttributes({
                                                transformFlipVertical: !transformFlipVertical,
                                            });
                                        }}
                                    />
                                    {(transformFlipHorizontal || transformFlipVertical) && (
                                        <>
                                            <ResAlignmentControl
                                                label={__('X Anchor Point', 'zoloblocks')}
                                                controlName={'transformOriginX'}
                                                requiredProps={requiredProps}
                                                alignOptions={DEFAULT_ALIGNS}
                                            />
                                            <ResAlignmentControl
                                                label={__('Y Anchor Point', 'zoloblocks')}
                                                controlName={'transformOriginY'}
                                                requiredProps={requiredProps}
                                                alignOptions={DEFAULT_ALIGNS_VERTICAL}
                                            />
                                        </>
                                    )}
                                </PopoverControl>
                            </>
                        }
                        hoverComponents={
                            <>
                                <PopoverControl
                                    label={__('Translate', 'zoloblocks')}
                                    icon={TRANSLATE_ICON}
                                    onReset={() => resetAtt(['translateXHover', 'translateYHover'], setAttributes)}
                                    hasValue={hasValCheck('translateXHover', attributes) || hasValCheck('translateYHover', attributes)}
                                >
                                    <ResRangeControl
                                        label={__('translateX', 'zoloblocks')}
                                        controlName={'translateXHover'}
                                        requiredProps={requiredProps}
                                        min={-1000}
                                        max={1000}
                                        units={[
                                            { label: __('px', 'zoloblocks'), value: 'px' },
                                            { label: __('%', 'zoloblocks'), value: '%' },
                                        ]}
                                    />
                                    <ResRangeControl
                                        label={__('translateY', 'zoloblocks')}
                                        controlName={'translateYHover'}
                                        requiredProps={requiredProps}
                                        min={-1000}
                                        max={1000}
                                        units={[
                                            { label: __('px', 'zoloblocks'), value: 'px' },
                                            { label: __('%', 'zoloblocks'), value: '%' },
                                        ]}
                                    />
                                </PopoverControl>
                                <PopoverControl
                                    label={__('Rotate', 'zoloblocks')}
                                    icon={ROTATE_ICON}
                                    onReset={() =>
                                        resetAtt(
                                            [
                                                'transformRotateHover',
                                                'transformRotateXHover',
                                                'transformPerspectiveHover',
                                                'transformPerspective',
                                            ],
                                            setAttributes
                                        )
                                    }
                                    hasValue={
                                        hasValCheck('transformRotateHover', attributes) ||
                                        hasValCheck('transformRotateXHover', attributes) ||
                                        hasValCheck('transformPerspective', attributes) ||
                                        hasValCheck('transformPerspectiveHover', attributes)
                                    }
                                >
                                    <ResRangeControl
                                        label={__('Rotate', 'zoloblocks')}
                                        controlName={'transformRotateHover'}
                                        requiredProps={requiredProps}
                                        min={-360}
                                        max={360}
                                        noUnits={true}
                                    />
                                    <ToggleControl
                                        label={__('Rotate 3D', 'zoloblocks')}
                                        checked={transformRotate3DActiveHover}
                                        onChange={() => {
                                            setAttributes({
                                                transformRotate3DActiveHover: !transformRotate3DActiveHover,
                                            });
                                        }}
                                    />
                                    {transformRotate3DActiveHover && (
                                        <>
                                            <ResRangeControl
                                                label={__('RotateX(deg)', 'zoloblocks')}
                                                controlName={'transformRotateXHover'}
                                                requiredProps={requiredProps}
                                                min={-360}
                                                max={360}
                                                noUnits={true}
                                            />
                                            <ResRangeControl
                                                label={__('RotateY(deg)', 'zoloblocks')}
                                                controlName={'transformRotateYHover'}
                                                requiredProps={requiredProps}
                                                min={-360}
                                                max={360}
                                                noUnits={true}
                                            />
                                            <ResRangeControl
                                                label={__('Perspective(deg)', 'zoloblocks')}
                                                controlName={'transformPerspectiveHover'}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={1000}
                                                noUnits={true}
                                            />
                                        </>
                                    )}
                                </PopoverControl>
                                <PopoverControl label={__('Scale', 'zoloblocks')} icon={SCALE_ICON}>
                                    <ToggleControl
                                        label={__('Keep Proportions', 'zoloblocks')}
                                        checked={scaleProportionallyHover}
                                        onChange={() => {
                                            setAttributes({
                                                scaleProportionallyHover: !scaleProportionallyHover,
                                            });
                                        }}
                                    />
                                    {!scaleProportionallyHover && (
                                        <>
                                            <ResRangeControl
                                                label={__('ScaleX', 'zoloblocks')}
                                                controlName={'transformScaleXHover'}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={2}
                                                step={0.1}
                                                noUnits={true}
                                            />
                                            <ResRangeControl
                                                label={__('ScaleY', 'zoloblocks')}
                                                controlName={'transformScaleYHover'}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={2}
                                                step={0.1}
                                                noUnits={true}
                                            />
                                        </>
                                    )}
                                    {scaleProportionallyHover && (
                                        <>
                                            <ResRangeControl
                                                label={__('Scale', 'zoloblocks')}
                                                controlName={'transformScaleHover'}
                                                requiredProps={requiredProps}
                                                min={0}
                                                max={2}
                                                step={0.1}
                                                noUnits={true}
                                            />
                                        </>
                                    )}
                                </PopoverControl>
                                <PopoverControl label={__('Skew', 'zoloblocks')} icon={SKEW_ICON}>
                                    <ResRangeControl
                                        label={__('SkewX (deg)', 'zoloblocks')}
                                        controlName={'transformSkewXHover'}
                                        requiredProps={requiredProps}
                                        min={-360}
                                        max={360}
                                        noUnits={true}
                                    />
                                    <ResRangeControl
                                        label={__('SkewY (deg)', 'zoloblocks')}
                                        controlName={'transformSkewYHover'}
                                        requiredProps={requiredProps}
                                        min={-360}
                                        max={360}
                                        noUnits={true}
                                    />
                                </PopoverControl>
                                <PopoverControl label={__('Flip', 'zoloblocks')} icon={FLIP_ICON}>
                                    <ToggleControl
                                        label={__('Flip Horizontal', 'zoloblocks')}
                                        checked={transformFlipHorizontalHover}
                                        onChange={() => {
                                            setAttributes({
                                                transformFlipHorizontalHover: !transformFlipHorizontalHover,
                                            });
                                        }}
                                    />
                                    <ToggleControl
                                        label={__('Flip Vertical', 'zoloblocks')}
                                        checked={transformFlipVerticalHover}
                                        onChange={() => {
                                            setAttributes({
                                                transformFlipVerticalHover: !transformFlipVerticalHover,
                                            });
                                        }}
                                    />
                                    {(transformFlipHorizontalHover || transformFlipVerticalHover) && (
                                        <>
                                            <ResAlignmentControl
                                                label={__('X Anchor Point', 'zoloblocks')}
                                                controlName={'transformOriginXHover'}
                                                requiredProps={requiredProps}
                                                alignOptions={DEFAULT_ALIGNS}
                                            />
                                            <ResAlignmentControl
                                                label={__('Y Anchor Point', 'zoloblocks')}
                                                controlName={'transformOriginYHover'}
                                                requiredProps={requiredProps}
                                                alignOptions={DEFAULT_ALIGNS_VERTICAL}
                                            />
                                        </>
                                    )}
                                </PopoverControl>
                                <ResRangeControl
                                    label={__('Transition Duration (ms)', 'zoloblocks')}
                                    controlName={'transitionDuration'}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={10000}
                                    noUnits={true}
                                />
                            </>
                        }
                    />
                )}
            </ZoloPanelBody>
        </>
    );

    return <>{applyFilters('zolo.blocks.extraTab', panels, block, panelProps)}</>;
};
