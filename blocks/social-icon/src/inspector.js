/**
 * WordPress dependencies
 */
import {
	InspectorControls,
	__experimentalLinkControl as LinkControl,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import {
	CardDivider,
	PanelBody,
	SelectControl,
	TabPanel,
	TextControl,
	ToggleControl,

} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment, } from '@wordpress/element';


import ResRangeControl from '../../../src/controls/res-range-control';
import Typhography from '../../../src/controls/typography-control';

import objAttributes from './attributes';
import { controls } from '@wordpress/data';
import { set } from 'lodash';
<<<<<<< HEAD
import {SOCIAL_TEXT,COLUMNS_GAP,ROW_GAP,BUTTON_SIZE,BUTTON_ICON_SIZE,BUTTON_HEIGHT,SOCIAL_TYPOGRAPHY} from './constants'
=======
import {SOCIAL_TEXT,COLUMNS_NUMBER,COLUMNS_GAP,ROW_GAP} from './constants'
>>>>>>> 84128bc6c2090871a462b75ba73403d92ef04d9f
import { useEffect } from 'react';

function Inspector (props){

	const { attributes, setAttributes } = props;
	const {
		uniqueId,
		preset,
		resMode,
		resDevice,
        socialText,
		 targetPage,
         customLink,
<<<<<<< HEAD
         socialStyle,
         columnsNumber,
	     socialRepeat,
         socialtodo

=======
         socialStyle
>>>>>>> 84128bc6c2090871a462b75ba73403d92ef04d9f
	} = attributes;

    const resRequiredProps = {
		attributes,
		setAttributes,
		resMode,
		objAttributes,
	};
<<<<<<< HEAD
//     const socialTodo = ()=>{
    
//         setAttributes({ socialRepeat : [... socialRepeat,socialtodo]})
//     }
//    console.log(socialRepeat)
=======
    // it is used for experimental purpose
      const posts = useSelect( ( select ) => {
        return wp.data.select("core/editor").getCurrentPostId();
    }, [] );
     
>>>>>>> 84128bc6c2090871a462b75ba73403d92ef04d9f
    return(
        <InspectorControls key="controls">
                <div className='zolo-panel-control'>
               
                        <TabPanel className="my-tab-panel"
                            activeClass="active-tab"
                            // onSelect={ onSelect }
                            tabs={ [
                                {
                                    name: 'Content',
                                    title: 'Content',
                                    className: 'zolo-tab Content',
                                },
                                {
                                    name: 'Style',
                                    title: 'Style',
                                    className: 'zolo-tab Style',
                                },
                                {
                                    name: 'Advanced',
                                    title: 'Advanced',
                                    className: 'zolo-tab advanced',
                                },
                            ] }>
                            {
                                ( tab ) => (
                                    <div className={'zolo-tab--control' + tab.name}>
                                            {tab.name === "Content" &&(
                                                <>
<<<<<<< HEAD

                                                  <PanelBody title={__('Content', 'zolo-blocks')} 
                                                         initialOpen={true}>
                                                        <SelectControl
                                                                  label={__("Social Text","zolo-blocks")}
=======
                                                  <PanelBody title={__('Content', 'zolo-blocks')} initialOpen={true}>

                                                              <SelectControl
                                                                  label="View"
>>>>>>> 84128bc6c2090871a462b75ba73403d92ef04d9f
                                                                  value={socialText}
                                                                  options={SOCIAL_TEXT}
                                                                  onChange={ ( iconV ) => setAttributes({socialText:iconV}) }
                                                              />
<<<<<<< HEAD
                                              
                                          
                                                  
                                                        <SelectControl
                                                                label={__("columns","zolo-blocks")}
                                                                    value={ columnsNumber }
                                                                    options={ [
                                                                        { label: 'Auto', value: 'Auto' },
                                                                        { label: '1', value: '1' },
                                                                        { label: '2', value: '2' },
                                                                        { label: '3', value: '3' },
                                                                        { label: '4', value: '4' },
                                                                        { label: '5', value: '5' },
                                                                        { label: '6', value: '6' },
                                                                    ] }
                                                                    onChange={ ( size ) => { setAttributes( { columnsNumber:size } ) } }
                                                                />
                                                     
                                                               
                                                   
                                                        
=======

                                                              <ResRangeControl
                                                                label={__(
                                                                    'Columns',
                                                                    'zolo-blocks'
                                                                )}
                                                                controlName={COLUMNS_NUMBER}
                                                                resRequiredProps={
                                                                    resRequiredProps
                                                                }
                                                                min={0}
                                                                max={100}
                                                                step={1}
                                                              />
>>>>>>> 84128bc6c2090871a462b75ba73403d92ef04d9f
                                                              <ResRangeControl
                                                                label={__(
                                                                    'Columns Gap',
                                                                    'zolo-blocks'
                                                                )}
                                                                controlName={COLUMNS_GAP}
                                                                resRequiredProps={
                                                                    resRequiredProps
                                                                }
                                                                min={0}
                                                                max={100}
                                                                step={1}
                                                              />

                                                                <ResRangeControl
                                                                label={__(
                                                                    'Row Gap',
                                                                    'zolo-blocks'
                                                                )}
                                                                controlName={ROW_GAP}
                                                                resRequiredProps={
                                                                    resRequiredProps
                                                                }
                                                                min={0}
                                                                max={100}
                                                                step={1}
                                                              />
                                                      
                                            
                                                            <SelectControl
                                                                label="Target Url"
                                                                value={ targetPage}
                                                                options={ [
                                                                    { label: 'Custom', value: 'Custom' },
                                                                    { label: 'Current page', value: 'Current page' },
                                                                    
                                                                ] }
                                                                onChange={ ( page ) => { setAttributes( { targetPage:page } ) } }
                                                            />
                                                   
                                                         
                                                     
                                                     {'Custom'===targetPage &&
                                                            (<TextControl
                                                               label="CUSTOM LINK"
                                                               value={ customLink }
                                                               onChange={ ( custom ) => setAttributes( { customLink:custom } ) }
                                                           />)
                                                      
                                                     }
                                                      
                                                  </PanelBody>
                                                  

                                                </>
                                            )}

                                            {tab.name === "Style" &&(
                                                <>
                                             <div className="style-wrapper">
                                                <div className="style-title" ><h3>Style</h3></div>
                                                <div className="panel-body" >
                                                <PanelBody
                                                        initialOpen={ true }
                                                        >                                                   
                                                             <SelectControl
                                                                 
                                                                 value={ socialStyle }
                                                                 options={ [
                                                                     { label: 'Flat', value: 'Flat' },
                                                                     { label: 'Framed', value: 'Framed' },
                                                                     { label: 'Gradiant', value: 'Gradiant' },
                                                                     { label: 'Minimal', value: 'Minimal' },
                                                                     { label: 'Boxed Icon', value: 'Boxed Icon' },
                                                                 ] }
                                                                 onChange={ ( style ) => { setAttributes( { socialStyle:style } ) } }
                                                             />
<<<<<<< HEAD

                                                 
                                                    
                                                            <ResRangeControl
                                                                label={__(
                                                                    'Button Size',
                                                                    'zolo-blocks'
                                                                )}
                                                                controlName={BUTTON_SIZE}
                                                                resRequiredProps={
                                                                    resRequiredProps
                                                                }
                                                                min={0}
                                                                max={100}
                                                                step={1}
                                                              />  

                                                            <ResRangeControl
                                                                label={__(
                                                                    'Button Icon Size',
                                                                    'zolo-blocks'
                                                                )}
                                                                controlName={BUTTON_ICON_SIZE}
                                                                resRequiredProps={
                                                                    resRequiredProps
                                                                }
                                                                min={0}
                                                                max={100}
                                                                step={1}
                                                              />  

                                                                <ResRangeControl
                                                                label={__(
                                                                    'Button Height',
                                                                    'zolo-blocks'
                                                                )}
                                                                controlName={BUTTON_HEIGHT}
                                                                resRequiredProps={
                                                                    resRequiredProps
                                                                }
                                                                min={0}
                                                                max={100}
                                                                step={1}
                                                              /> 
                                                              <Typhography
                                                                 label={__("Typhography","zolo-blocks")}
                                                                 typoPrefixConstant ={SOCIAL_TYPOGRAPHY}
                                                                 resRequiredProps={
                                                                    resRequiredProps
                                                                }
                                                                defaultFontSize={14}
                                                              />               
=======
                                                      
>>>>>>> 84128bc6c2090871a462b75ba73403d92ef04d9f
                                                    </PanelBody>
                                                </div>
                                             </div>
                                                    
                                              
                                                </>
                                            )}
                                    </div>
                                )
                            }
                        </TabPanel>
                 
                </div>
        </InspectorControls>

    )


}

export default Inspector;
