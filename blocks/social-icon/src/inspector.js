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


import objAttributes from './attributes';
import { controls } from '@wordpress/data';
import { set } from 'lodash';
import {SOCIAL_TEXT,COLUMNS_NUMBER,COLUMNS_GAP,ROW_GAP} from './constants'
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
         socialStyle
	} = attributes;

    const resRequiredProps = {
		attributes,
		setAttributes,
		resMode,
		objAttributes,
	};
    // it is used for experimental purpose
      const posts = useSelect( ( select ) => {
        return wp.data.select("core/editor").getCurrentPostId();
    }, [] );
     
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
                                                  <PanelBody title={__('Content', 'zolo-blocks')} initialOpen={true}>

                                                              <SelectControl
                                                                  label="View"
                                                                  value={socialText}
                                                                  options={SOCIAL_TEXT}
                                                                  onChange={ ( iconV ) => setAttributes({socialText:iconV}) }
                                                              />

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
                                             <div className="style-wrapper" style={{width:'100%',display:"flex"}}>
                                                <div className="style-title" style={{width:'50%'}}><h3>Style</h3></div>
                                                <div className="panel-body" style={{width:'50%'}}>
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
