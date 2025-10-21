/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { ZoloToggleControl, ZoloSelectControl, ZoloTextControl } from '../../controls/core-controls';

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
import PopoverControl from '../../controls/popover-control';
import ZoloPanelBody from '../../controls/zolo-panelbody';
import ResRangeControl from '../../controls/res-range-control';
import IconicBtnGroup from '../../controls/iconic-btn-group';
import ResSelectControl from '../../controls/res-select-control';
import { applyFilters } from '@wordpress/hooks';
import CreatableSelect from 'react-select/creatable';

import {
    TRANSLATE_ICON,
    ICON_HPOSITIONS,
    VPOSITIONS,
    CONTENT_POSITIONS,
    CONTENT_WIDTH,
} from '../constants';

import { popoverHasAttrVal } from '../../helpers/helper';

export const AdvancedOptions = (props) => {
    const { attributes, setAttributes, requiredProps, block } = props;
    const panelProps = { attributes, setAttributes, requiredProps };

    const {
        responsiveness,
        parentClasses,
        customClass,
        customClasses,
        globalConfig,
        zoloId,
        overflow,
        position,
        widthTypeZRPSelect,
        TABwidthTypeZRPSelect,
        MOBwidthTypeZRPSelect,
        resMode,
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

    const displayPanels = applyFilters('zolo.blocks.displayConditions', [], panelProps);
    const animationPanels = applyFilters('zolo.blocks.extraTab.animationPanels', [], block, panelProps);
    const cursorsPanel = applyFilters('zolo.extensions.controls.cursors', [], block, panelProps);
    const particles = applyFilters('zolo.extensions.controls.particles', [], block, panelProps);
    const tilt = applyFilters('zolo.extensions.controls.tilt', [], block, panelProps);
    const interactions = applyFilters('zolo.extensions.controls.interactions', [], block, panelProps);
    const backgroundParallax = applyFilters('zolo.extensions.controls.backgroundParallax', [], block, panelProps);
    const transform = applyFilters('zolo.extensions.controls.transform', [], block, panelProps);

    return (
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
                    label={__('Set Z Index', 'zoloblocks')}
                    controlName={'zIndex'}
                    requiredProps={requiredProps}
                    min={-100}
                    max={100}
                    step={1}
                    help={__('Set the z-index for the section', 'zoloblocks')}
                />
                {block !== 'zolo/container' && (
                    <div className="zolo-control-container zolo-single-control">
                        <ResSelectControl
                            label={__('Width', 'zoloblocks')}
                            controlName={'widthType'}
                            requiredProps={requiredProps}
                            alignOptions={CONTENT_WIDTH}
                        />
                        {(resMode === 'Desktop' && widthTypeZRPSelect === 'custom') ||
                        (resMode === 'Mobile' && MOBwidthTypeZRPSelect === 'custom') ||
                        (resMode === 'Tablet' && TABwidthTypeZRPSelect === 'custom') ? (
                            <ResRangeControl
                                label={__('Custom Width', 'zoloblocks')}
                                controlName={'customWidth'}
                                requiredProps={requiredProps}
                                max={1000}
                                noUnits={false}
                            />
                        ) : null}
                    </div>
                )}

                <OverflowControl
                    label={__('Overflow', 'zoloblocks')}
                    value={overflow}
                    onChange={(v) => {
                        setAttributes({ overflow: v });
                    }}
                />
                <PopoverControl
                    label={__('Position', 'zoloblocks')}
                    icon={TRANSLATE_ICON}
                    onReset={() =>
                        setAttributes({
                            position: {
                                value: '',
                                horizontalOrientation: {
                                    direction: 'left',
                                    offset: undefined,
                                    unit: 'px',
                                },
                                verticalOrientation: {
                                    direction: 'top',
                                    offset: undefined,
                                    unit: 'px',
                                },
                            },
                        })
                    }
                    hasValue={
                        popoverHasAttrVal(position.value, true, 'static') ||
                        popoverHasAttrVal(position.verticalOrientation.direction, true, 'top') ||
                        popoverHasAttrVal(position.horizontalOrientation.direction, true, 'left') ||
                        popoverHasAttrVal(position.verticalOrientation.unit, true, 'px') ||
                        popoverHasAttrVal(position.horizontalOrientation.unit, true, 'px')
                    }
                >
                    <div className="zolo-flex-row-control">
                        <ZoloSelectControl
                            label={__('Position', 'zoloblocks')}
                            options={CONTENT_POSITIONS}
                            onChange={(v) =>
                                setAttributes({
                                    position: {
                                        ...position,
                                        value: v,
                                    },
                                })
                            }
                            value={position.value}
                        />
                    </div>
                    {(position.value === 'absolute' || position.value === 'fixed') && (
                        <>
                            <IconicBtnGroup
                                label={__('Vertical Orientation', 'zoloblocks')}
                                value={position.verticalOrientation.direction}
                                onChange={(direction) => {
                                    setAttributes({
                                        position: {
                                            ...position,
                                            verticalOrientation: {
                                                ...position.verticalOrientation,
                                                direction,
                                            },
                                        },
                                    });
                                }}
                                options={VPOSITIONS}
                            />
                            {position.verticalOrientation.direction === 'top' && (
                                <>
                                    <ResRangeControl
                                        label={__('Offset', 'zoloblocks')}
                                        controlName={'positionTop'}
                                        requiredProps={requiredProps}
                                        min={-500}
                                        max={500}
                                        noUnits={false}
                                    />
                                </>
                            )}
                            {position.verticalOrientation.direction === 'bottom' && (
                                <>
                                    <ResRangeControl
                                        label={__('Offset', 'zoloblocks')}
                                        controlName={'positionBottom'}
                                        requiredProps={requiredProps}
                                        min={-500}
                                        max={500}
                                        noUnits={false}
                                    />
                                </>
                            )}
                            <IconicBtnGroup
                                label={__('Horizontal Orientation', 'zoloblocks')}
                                value={position.horizontalOrientation.direction}
                                onChange={(direction) => {
                                    setAttributes({
                                        position: {
                                            ...position,
                                            horizontalOrientation: {
                                                ...position.horizontalOrientation,
                                                direction,
                                            },
                                        },
                                    });
                                }}
                                options={ICON_HPOSITIONS}
                            />
                            {position.horizontalOrientation.direction === 'left' && (
                                <>
                                    <ResRangeControl
                                        label={__('Offset', 'zoloblocks')}
                                        controlName={'positionLeft'}
                                        requiredProps={requiredProps}
                                        min={-500}
                                        max={500}
                                        noUnits={false}
                                    />
                                </>
                            )}
                            {position.horizontalOrientation.direction === 'right' && (
                                <>
                                    <ResRangeControl
                                        label={__('Offset', 'zoloblocks')}
                                        controlName={'positionRight'}
                                        requiredProps={requiredProps}
                                        min={-500}
                                        max={500}
                                        noUnits={false}
                                    />
                                </>
                            )}
                        </>
                    )}
                </PopoverControl>
                <div className="zolo-inline-control-wrapper">
                    <ZoloTextControl
                        label={__('CSS ID', 'zoloblocks')}
                        className="zolo-css-id"
                        onChange={(value) => {
                            const id = value.replace(/\s/g, '_');
                            setAttributes({ zoloId: id });
                        }}
                        value={zoloId}
                        help={__('Add custom ID to the block WITHOUT the Pound key. e.g: my-id', 'zoloblocks')}
                    />
                    <div className="zolo-css-class-control">
                        <h3 className="zolo-control-label">{__('CSS Classes', 'zoloblocks')}</h3>
                        <CreatableSelect
                            className="zolo-css-class"
                            isMulti
                            onChange={(value) => {
                                setAttributes({ customClasses: value });
                                handleCustomClasses(value.map((v) => v.value));
                            }}
                            value={customClasses}
                            options={[]}
                            help={__(
                                'Add custom class(es) to the block WITHOUT the dot. e.g: my-class. Separate multiple classes with a space.',
                                'zoloblocks'
                            )}
                            noOptionsMessage={() => __('Type to add a new class', 'zoloblocks')}
                            placeholder={() => __('Type and press enter to add a new class', 'zoloblocks')}
                            styles={{
                                container: (provided, state) => ({
                                    ...provided,
                                    width: '100%',
                                }),
                                control: (provided, state) => ({
                                    ...provided,
                                    minHeight: '35px',
                                }),
                                indicatorSeparator: (provided, state) => ({
                                    ...provided,
                                    display: 'none',
                                }),
                                dropdownIndicator: (provided, state) => ({
                                    ...provided,
                                    display: 'none',
                                }),
                                clearIndicator: (provided, state) => ({
                                    ...provided,
                                    display: 'none',
                                }),
                                multiValue: (provided, state) => ({
                                    ...provided,
                                    backgroundColor: '#f5f5f5',
                                }),
                            }}
                        />
                        {/* <span className="components-base-control__help">
                            {__(
                                'Add custom class(es) to the block WITHOUT the dot. e.g: my-class. Separate multiple classes with a space.',
                                'zoloblocks'
                            )}
                        </span> */}
                    </div>
                </div>
            </ZoloPanelBody>
            {globalConfig?.background && (
                <ZoloPanelBody title={__('Background', 'zoloblocks')} panelProps={props} extraPanel={true}>
                    <div className="zolo-flex-col-control">
                        <BackgroundControl
                            controlName={globalConfig.background.prefix || 'mainBg'}
                            requiredProps={requiredProps}
                            particles={particles}
                            video={block === 'zolo/container' || block === 'zolo/slide' ? true : false}
                            backgroundParallax={backgroundParallax}
                        />
                    </div>
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
                    <ZoloPanelBody title={__('Display Condition', 'zoloblocks')} panelProps={props} extraPanel={true}>
                        <ZoloToggleControl
                            label={__('Hide on Desktop', 'zoloblocks')}
                            checked={responsiveness?.hideDesktop || false}
                            onChange={() => handleResponsiveness('hideDesktop', !responsiveness.hideDesktop, 'zolo-hide-desktop')}
                        />
                        <ZoloToggleControl
                            label={__('Hide on Tablet', 'zoloblocks')}
                            checked={responsiveness?.hideTab || false}
                            onChange={() => handleResponsiveness('hideTab', !responsiveness.hideTab, 'zolo-hide-tab')}
                        />
                        <ZoloToggleControl
                            label={__('Hide on Mobile', 'zoloblocks')}
                            checked={responsiveness?.hideMobile || false}
                            onChange={() => handleResponsiveness('hideMobile', !responsiveness.hideMobile, 'zolo-hide-mobile')}
                        />
                        {displayPanels && displayPanels.length > 0 && displayPanels}
                    </ZoloPanelBody>
                </>
            )}
            {cursorsPanel && cursorsPanel.length > 0 && cursorsPanel}
            {tilt && tilt.length > 0 && tilt}
            {interactions && interactions.length > 0 && interactions}
            {/* Transform animation */}
            {transform && transform.length > 0 && transform}
            {animationPanels && animationPanels.length > 0 && animationPanels}
            <ZoloPanelBody title={__('Custom CSS', 'zoloblocks')} panelProps={props} extraPanel={true} isNew={true}>
                <CustomCSSControl attributes={attributes} setAttributes={setAttributes} />
            </ZoloPanelBody>
        </>
    );
};
