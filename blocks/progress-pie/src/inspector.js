/**
 * WordPress dependencies
 */
import {useEffect} from '@wordpress/element';
import { InspectorControls, } from '@wordpress/block-editor';
import { ToggleControl, TextControl, RangeControl} from '@wordpress/components';
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
    AdvancedOptions,
    ZoloPanelBody,
    SimpleRangeControl ,
    PopoverControl,
} = window.zoloModule;

import objAttributes from './attributes';

import { NUMBER_TYPO,TITLE_TYPO} from './constants/typoPrefixConstant';
import { PROGRESS_BAR_SIZE,CIRCLE_OPTION,PROGRESS_ALIGN } from './constants';
import { DEFAULT_ALIGNS} from '../../../src/global/constants';



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
        progressRound,
        //test 
        toggleProgressColor,
        progressTopColor,
        progressBottomColor,
        //end test
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
    useEffect(()=>{
        !toggleProgressColor && setAttributes({progressTopColor: ''})
        !toggleProgressColor &&  setAttributes({progressBottomColor: ''})
        toggleProgressColor &&  setAttributes({progressBarColor: ''})
    },[progressTopColor,toggleProgressColor,progressBottomColor,])
    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/prgress-pie"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                        <RangeControl
                                label={__('Progress Percent','zoloblocks')}
                                value={progressValue}
                                onChange={ (v) => setAttributes({progressValue:v})}
                                min={0}
                                max={100}
                            /> 
                        <RangeControl
                            label={__('Progress Duration (s)','zoloblocks')}
                            value={progressDuration}
                            onChange={ (v) => setAttributes({progressDuration:v})}
                            min={0}
                            max={20}
                            /> 
                            <SimpleRangeControl label={__('Progress percent Size','zoloblocks')}
                             onChange={(v)=>setAttributes({progressSize:v})} value={progressSize} 
                              onReset={()=>setAttributes({progressSize:''})}  min={1} max={100} step={1} 
                              noUnits={true} 
                              /> 
                             <SimpleRangeControl 
                                label={__('Progress Fill Size','zoloblocks')} 
                                onChange={(v)=>setAttributes({progressFillSize:v})} 
                                value={progressFillSize} 
                                onReset={()=>setAttributes({progressFillSize:''})}  
                                min={1} max={100} step={1} 
                                noUnits={true} />  
                        <ToggleControl
                            label={__('Enable Title','zoloblocks')}
                            checked={toggleLabel}
                            onChange={ () => setAttributes({toggleLabel:!toggleLabel}) }
                        />

                    </ZoloPanelBody>
                        {toggleLabel && ( 
                            <ZoloPanelBody title={__('Title', 'zoloblocks')} panelProps={props}>
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
                  
                         <ResRangeControl
                            label={__('Progress Size', 'zoloblocks')}
                            controlName={PROGRESS_BAR_SIZE}
                            requiredProps={requiredProps}
                            min={0}
                            max={500}
                            step={1}
                        />

                            <ResAlignmentControl
                                label={__('Alignment', 'zoloblocks')}
                                controlName={PROGRESS_ALIGN}
                                requiredProps={requiredProps}
                                alignOptions={DEFAULT_ALIGNS}
                            />
                           <ToggleControl
                               label={__('Enable Progress Round','zoloblocks')}
                               checked={ progressRound}
                               onChange={ () => setAttributes({progressRound:!progressRound}) }
                           />
                        <PopoverControl label={__('Progress Percent Color')} children={
                        <>
                            {!toggleProgressColor && ( 
                                <ColorControl
                                    label={__('Progress percent Color', 'zoloblocks')}
                                    color={progressBarColor}
                                    onChange={(color) =>
                                    setAttributes({progressBarColor: color})
                                }
                                />)} 
                            
                                {/* test */}
                                {toggleProgressColor && (
                                    <>
                                    
                                    <ColorControl
                                        label={__('Progress Top Color', 'zoloblocks')}
                                        color={progressTopColor}
                                        onChange={(color) =>{
                                        setAttributes({progressTopColor: color})
                                    }
                                    }
                                />
                                <ColorControl
                                    label={__('Progress Bottom Color', 'zoloblocks')}
                                    color={progressBottomColor}
                                    onChange={(color) =>
                                    setAttributes({progressBottomColor: color})
                                    }
                                />
                          </>
                        )}
                            <ToggleControl
                            label={__('Enable Multiple Color','zoloblocks')}
                            checked={ toggleProgressColor }
                            onChange={ () => setAttributes({toggleProgressColor:!toggleProgressColor}) }
                        />
                      {/* end */}
                                </>
                        }/>
                      
                        <ColorControl
                            label={__('Progress Fill Color', 'zoloblocks')}
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
                                    {toggleLabel &&  (<>
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
                                    </>)}
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
