/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { ToggleControl, TextControl, RangeControl, SelectControl, Button, BaseControl, CardDivider } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    ResAlignmentControl,
    ResRangeControl,
    ColorControl,
    TypographyDropdown,
    HeaderTabs,
    TabPanelControl,
    IconicBtnGroup,
    AdvancedOptions,
    ZoloPanelBody,
    ZoloIconPicker,
    ImageAvatar,
    ImageSizes,
    ObjectFitControl,
    ResDimensionsControl,
    BorderControl,
    NormalBGControl,
    SimpleRangeControl 
} = window.zoloModule;

import objAttributes from './attributes';

import { NUMBER_TYPO,
    TITLE_TYPO} from './constants/typoPrefixConstant';
import { PROGRESS_BAR_SIZE,CIRCLE_OPTION,PROGRESS_ALIGN } from './constants';
import { FLEX_HORIZONTAL_OPTIONS, HEADING, ICON_POSITIONS ,DEFAULT_ALIGNS} from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        progressValue,
        progressTitle,
        toggleLabel,
        progressSize,
        progressDuration,
        progressBarColor,
        progressFillColor, 
        progressFillSize,
        numberColor,
        titleColor,
        circleColor
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
                block="zolo/prgress-pie"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                              <ToggleControl
                                  label={__('Enable Title','zoloblocks')}
                                  checked={toggleLabel}
                                  onChange={ () => setAttributes({toggleLabel:!toggleLabel}) }
                              />
                         
                               <ResRangeControl
                                    label={__('Progress Size', 'zoloblocks')}
                                    controlName={PROGRESS_BAR_SIZE}
                                    requiredProps={requiredProps}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                        </ZoloPanelBody>
                        {toggleLabel && ( 
                            <ZoloPanelBody title={__('Content', 'zoloblocks')} panelProps={props}>
                                   <TextControl
                                       label={__('Title','zoloblocks')}
                                       value={ progressTitle}
                                       onChange={ (v) => setAttributes({progressTitle:v}) }
                                   />
                                  
                        </ZoloPanelBody>
                    )}
                       
                   
                    </>
                }
                styleTab={
                    <>
                    <ZoloPanelBody title={__('Progress', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>  
                    <ResAlignmentControl
                        label={__('Alignment', 'zoloblocks')}
                        controlName={PROGRESS_ALIGN}
                        requiredProps={requiredProps}
                        alignOptions={DEFAULT_ALIGNS}
                    />
                    <RangeControl
                        label={__('Progress Percent','zoloblocks')}
                        value={progressValue}
                        onChange={ (v) => setAttributes({progressValue:v})}
                        min={0}
                        max={100}
                        /> 
                       <RangeControl
                        label={__('Progress Duratin','zoloblocks')}
                        value={progressDuration}
                        onChange={ (v) => setAttributes({progressDuration:v})}
                        min={0}
                        max={20}
                        /> 
                        <SimpleRangeControl label={__('Size','zoloblocks')} onChange={(v)=>setAttributes({progressSize:v})} value={progressSize}  onReset={()=>setAttributes({progressSize:''})}  min={1} max={10} step={1} noUnits={true} /> 
                        <ColorControl
                            label={__('Color', 'zoloblocks')}
                             color={progressBarColor}
                             onChange={(color) =>
                             setAttributes({progressBarColor: color,})
                             }
                        />
                    </ZoloPanelBody>
                    <ZoloPanelBody title={__('Progress Fill', 'zoloblocks')} stylePanel={true} panelProps={props}>  
                    <SimpleRangeControl label={__('Size','zoloblocks')} onChange={(v)=>setAttributes({progressFillSize:v})} value={progressFillSize}  onReset={()=>setAttributes({progressFillSize:''})}  min={1} max={10} step={1} noUnits={true} /> 
                    <ColorControl
                            label={__('Color', 'zoloblocks')}
                             color={progressFillColor}
                             onChange={(color) =>
                             setAttributes({progressFillColor: color,})
                             }
                        />
                    </ZoloPanelBody>
                    <ZoloPanelBody title={__('Circle', 'zoloblocks')} stylePanel={true} panelProps={props}>
                    <ColorControl
                        label={__('Circle Color', 'zoloblocks')}
                        color={circleColor}
                        onChange={(value) =>
                        setAttributes({circleColor: value,})
                        }
                        />
                    
                    <TabPanelControl
                                options={CIRCLE_OPTION}
                                normalComponents={
                                    <>
                                         <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={NUMBER_TYPO}
                                            requiredProps={requiredProps}
                                            max={36}
                                        />
                                        
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={numberColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    numberColor: value,
                                                })
                                            }
                                        />

                                    </>
                                }
                                hoverComponents={
                                    <>
                                       <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={TITLE_TYPO}
                                            requiredProps={requiredProps}
                                            max={36}
                                        />
                                          
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={titleColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    titleColor: value,
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
                            requiredProps={requiredProps}
                            block="zolo/progress-pie"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
