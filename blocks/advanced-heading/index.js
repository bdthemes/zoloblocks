import {registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import attributes from './src/attributes';
import Edit from './src/edit';
import Save from './src/save';

registerBlockType(metadata,
	{
		attributes,
		edit:Edit,
		save:Save,
	}
)
