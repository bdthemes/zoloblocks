/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { TextControl, SelectControl,ToggleControl } from '@wordpress/components';
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
    LinkControl,
    ResAlignmentControl
} = window.zoloModule;

import objAttributes from './attributes';

import { } from './constants/typoPrefixConstant';
import {TEXTPATH_ALIGN} from './constants';
import { DEFAULT_ALIGNS} from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        showLabel,
        textpathContent,
        textPathType,
        pathlink,
        textPathShow
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
                                    {label:__('Circle'),value:'M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50'},
                                    {label:__('Line'),value:'M50,50 Q250,100 400,50'},
                                        
                                ] }
                             onChange={ (v) => setAttributes({textPathType:v}) }
                            />
                          <LinkControl
                            label={__('URL', 'zoloblocks')}
                            value={pathlink}
                            onChange={(value) => setAttributes({ pathlink: value })}
                            />
                            <ResAlignmentControl
                                label={__('Alignment', 'zoloblocks')}
                                controlName={TEXTPATH_ALIGN}
                                requiredProps={requiredProps}
                                alignOptions={DEFAULT_ALIGNS}
                           />
                             <ToggleControl
                                label={__('Show Path','zoloblocks')}
                                checked={ textPathShow}
                                 onChange={ () => setAttributes({textPathShow:!textPathShow}) }
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
