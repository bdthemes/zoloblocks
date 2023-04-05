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
         customLink
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
                                    className: 'eb-tab Content',
                                },
                                {
                                    name: 'Style',
                                    title: 'Style',
                                    className: 'eb-tab Style',
                                },
                                {
                                    name: 'Advanced',
                                    title: 'Advanced',
                                    className: 'eb-tab advanced',
                                },
                            ] }>
                            {
                                ( tab ) => (
                                    <div className={'eb-tab--control' + tab.name}>
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
                                    </div>
                                )
                            }
                        </TabPanel>
                 
                </div>
        </InspectorControls>

    )


}

export default Inspector;
