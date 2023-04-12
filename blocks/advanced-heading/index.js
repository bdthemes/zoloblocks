import {registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import attributes from './src/attributes';
import Edit from './src/edit';
import Save from './src/save';

import "./src/style.scss";

registerBlockType(metadata,
	{
		attributes,
		edit:Edit,
		save:Save,
	}
)
