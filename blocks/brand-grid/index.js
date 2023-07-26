import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import attributes from './src/attributes';
import Edit from './src/edit';
import Save from './src/save';
import Context from './src/context';

import './src/style.scss';

registerBlockType( metadata, {
	providesContext: Context,
	attributes,
	edit: Edit,
	save: Save,
} );
