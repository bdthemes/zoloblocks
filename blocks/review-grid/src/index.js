import { registerBlockType } from '@wordpress/blocks';
import metadata from '../block.json';
import attributes from './attributes';
import Edit from './edit';
import Save from './save';
import Context from './context';

import './style.scss';

registerBlockType(metadata, {
	providesContext: Context,
	attributes,
	edit: Edit,
	save: Save,
});
