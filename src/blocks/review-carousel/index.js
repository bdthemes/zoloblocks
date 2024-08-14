import { registerBlockType } from '@wordpress/blocks';
import attributes from './attributes';
import metadata from './block.json';
import Context from './context';
import deprecated from './deprecated';
import Edit from './edit';
import Save from './save';

import BlockIcons from '../../global/block-icons';
import './editor.scss';
import './style.scss';

registerBlockType(metadata, {
    icon: {
        src: BlockIcons['review-carousel'],
    },
    providesContext: Context,
    attributes,
    edit: Edit,
    save: Save,
    deprecated: [deprecated],
});
