/**
 * WordPress dependencies
 */
import {
	InspectorControls,
	__experimentalLinkControl as LinkControl,
    RichText
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import {
	CardDivider,
	FlexItem,
	PanelBody,
	SelectControl,
	TabPanel,
	TextControl,
	ToggleControl,
  

} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment, } from '@wordpress/element';


import ResRangeControl from '../../../src/controls/res-range-control';
import TypographyControl from '../../../src/controls/typography-control'

import objAttributes from './attributes';
import { controls } from '@wordpress/data';
import { set } from 'lodash';
import {SOCIAL_TEXT,COLUMNS_GAP,ROW_GAP,BUTTON_SIZE,BUTTON_ICON_SIZE,BUTTON_HEIGHT} from './constants'
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
         socialStyle,
<<<<<<< HEAD
         columnsNumber
=======
         columnsNumber,
	     socialRepeat,
         socialColor,
         socialButton

>>>>>>> 36ebbea47ca49f7234eebc8271eb7c368cfbc978
	} = attributes;

    const resRequiredProps = {
		attributes,
		setAttributes,
		resMode,
		objAttributes,
	};


    //Experimental 

//     const textItem = ( 
//     <div className={`zb-reapter-${uniqueId}`}>
//     <TextControl
//     label="social reapet"
//     value={socialButton}
//     onChange={ ( v ) => setAttributes( { socialButton:v} ) }
    
<<<<<<< HEAD
// />
//     </div>
// )
   
    // const addItem =()=> setAttributes({socialRepeat:[...socialRepeat,textItem]});
     
  
           
   
   console.log(socialRepeat)
=======
<<<<<<< HEAD
     
=======
   
>>>>>>> 36ebbea47ca49f7234eebc8271eb7c368cfbc978
>>>>>>> 971e92b8197684f0f40eea1207d28112248b8a8f
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
                                                  <PanelBody title={__('Content', 'zolo-blocks')} initialOpen={true}>
                                                    <div className="social-text-wrap">
                                                        <div className="view-label"><h3>view</h3></div>
                                                        <div className="view-control">
                                                        <SelectControl
=======
                                                  <PanelBody title={__('Content', 'zolo-blocks')} 
                                                         initialOpen={true}>

                                                        {/* {socialRepeat && socialRepeat.map((social,i)=>(
                                                            
                                                            <span key={i}>{social}</span>
                                                           
                                                        ))} */}
                                                      
                                                           
                                                    
                                                        <button onClick={addItem}>Add Item</button>
                                                  
                                                        <SelectControl
                                                                  label={__("Social Text","zolo-blocks")}
>>>>>>> 36ebbea47ca49f7234eebc8271eb7c368cfbc978
                                                                  value={socialText}
                                                                  options={SOCIAL_TEXT}
                                                                  onChange={ ( iconV ) => setAttributes({socialText:iconV}) }
                                                              />
<<<<<<< HEAD
                                                        </div>
                                                    </div>
                                                   <div className="columns-wrap">
                                                        <div className="columns-label">
                                                            <h3>columns</h3>
                                                        </div>
                                                        <div className="columns-number">
                                                        <SelectControl
=======
                                              
                                                       
                                                  
                                                        <SelectControl
                                                                label={__("columns","zolo-blocks")}
>>>>>>> 36ebbea47ca49f7234eebc8271eb7c368cfbc978
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
<<<<<<< HEAD
                                                        </div>
                                                   </div>
                                                              
=======
                                                     
>>>>>>> 36ebbea47ca49f7234eebc8271eb7c368cfbc978
                                                               
                                                   
                                                        
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
                                                      
<<<<<<< HEAD
                                                         <div className="zb-target-wrap">
                                                            <div className="zb-target-label">
                                                                <h3>Target Url</h3>
                                                            </div>
                                                            <div className="zb-target-control">
=======
                                                        
>>>>>>> 36ebbea47ca49f7234eebc8271eb7c368cfbc978
                                                                <SelectControl
                                                                    value={ targetPage}
                                                                    options={ [
                                                                        { label: 'Custom', value: 'Custom' },
                                                                        { label: 'Current page', value: 'Current page' },
                                                                        
                                                                    ] }
                                                                    onChange={ ( page ) => { setAttributes( { targetPage:page } ) } }
                                                                />
<<<<<<< HEAD
                                                            </div>
                                                         </div>
                                                            
=======
                                                         
>>>>>>> 36ebbea47ca49f7234eebc8271eb7c368cfbc978
                                                   
                                                         
                                                     
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
                                       
                                                <PanelBody
                                                        initialOpen={ true }
                                                        >  
<<<<<<< HEAD
                                                <div className="style-wrapper">
                                                <div className="style-title" ><h3>Style</h3></div>
                                                    <div className="panel-body" >                                                 
=======
                                                                                            
>>>>>>> 36ebbea47ca49f7234eebc8271eb7c368cfbc978
                                                             <SelectControl
                                                                 label={__("Style","zolo-blocks")}
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
                                                    </div>
                                                </div>
=======
                                                 
>>>>>>> 36ebbea47ca49f7234eebc8271eb7c368cfbc978
                                                    
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
<<<<<<< HEAD
                                                              />                
=======
                                                              />  
                                                            <TypographyControl
                                                              label={__('Typography','zolo-blocks')}
                                                              resRequiredProps={resRequiredProps}
                                                              defaultFontSize={14}
                                                            />
                                                           
                                                            
                                                           
                                                                <SelectControl
                                                                    label="Color"
                                                                    value={ socialColor}
                                                                    options={ [
                                                                        { label: 'Custom Color', value: 'Custom Color' },
                                                                        { label: 'Original Color', value: 'Original Color' },
                                                                        
                                                                    ] }
                                                                    onChange={ ( color ) => { setAttributes( { socialColor: color } ) } }
                                                                />
                                                      
>>>>>>> 36ebbea47ca49f7234eebc8271eb7c368cfbc978
                                                    </PanelBody>
                                            
                                              
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
