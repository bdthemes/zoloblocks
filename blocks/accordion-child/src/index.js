import { registerBlockType } from '@wordpress/blocks';
import metadata from '../block.json';
import attributes from './attributes';
import Edit from './edit';
import Save from './save';
import Example from './example';
import Context from './context';

import './style.scss';

registerBlockType(metadata, {
    icon: {
        src: 'minus',
    },
    usesContext: Context,
    example: Example,
    attributes,
    edit: Edit,
    save: Save,
});
