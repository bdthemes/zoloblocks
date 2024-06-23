/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { TextControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';


/**
 * Internal depencencies
 */
const {
    ResRangeControl,
    ColorControl,
    TypographyDropdown,
    HeaderTabs,
    BorderControl,
    AdvancedOptions,
    ZoloIconPicker,
    ResDimensionsControl,
    NormalBGControl,
    ZoloPanelBody,
} = window.zoloModule;

import objAttributes from './attributes';

import { } from './constants/typoPrefixConstant';
import {

} from './constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        showLabel,
        textpathContent,
    textPathType
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
                block="zolo/textarea"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <TextControl
                                label={__('Text','zoloblocks')}
                                value={textpathContent}
                                onChange={ (v) => setAttributes({textpathContent:v})}
                            />
                          
                                <SelectControl
                                    label={__('Path Type','zoloblocks')}
                                    value={textPathType}
                                    options={ [
                                        { label: __('wave'), value: 'M 0 50  C 100 0, 300 0, 400 50 S 700 100, 800 50V 100 H 0 Z'},
                                        {label:__('Circle'),value:'M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50'},
                                        {label:__('Line'),value:'M 10,30 L 90,30'},
                                        
                                        
                                       
                                    ] }
                                    onChange={ (v) => setAttributes({textPathType:v}) }
                                />
                       
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Content', 'zoloblocks')} panelProps={props}>
                           

                           
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                  
                            <ZoloPanelBody title={__('Label', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            
                            </ZoloPanelBody>
                  

                        <ZoloPanelBody
                            title={__('Field', 'zoloblocks')}
                            stylePanel={true}
                            panelProps={props}
                            firstOpen={showLabel ? false : true}
                        >
                          
                         

                        </ZoloPanelBody>
                        
                            <ZoloPanelBody title={__('Icon', 'zoloblocks')} stylePanel={true} panelProps={props}>
                           
                            </ZoloPanelBody>
                     
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/textpath"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
