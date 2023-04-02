/**
 * WordPress dependencies
 */
import {
	InspectorControls,
	__experimentalLinkControl as LinkControl,
} from '@wordpress/block-editor';
import {
	CardDivider,
	PanelBody,
	SelectControl,
	TabPanel,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';


import objAttributes from './attributes';

function Inspector (props){

	const { attributes, setAttributes } = props;
	const {
		uniqueId,
		preset,
		resMode,
		resDevice,
		
	} = attributes;

    const resRequiredProps = {
		attributes,
		setAttributes,
		resMode,
		objAttributes,
	};

    return(
        <InspectorControls key="controls">
                <div className='zolo-panel-control'>
               
                        <TabPanel className="my-tab-panel"
                            activeClass="active-tab"
                            // onSelect={ onSelect }
                            tabs={ [
                                {
                                    name: 'settings',
                                    title: 'Settings',
                                    className: 'eb-tab settings',
                                },
                                {
                                    name: 'design',
                                    title: 'Design',
                                    className: 'eb-tab design',
                                },
                                {
                                    name: 'advanced',
                                    title: 'Advanced',
                                    className: 'eb-tab advanced',
                                },
                            ] }>
                            {
                                ( tab ) => <p>{ tab.title }</p>
                            }
                        </TabPanel>
                 
                </div>
        </InspectorControls>

    )


}
