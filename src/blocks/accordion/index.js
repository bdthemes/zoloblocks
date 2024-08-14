import { registerBlockType } from '@wordpress/blocks';
import BlockIcons from '../../global/block-icons';
import attributes from './attributes';
import metadata from './block.json';
import Context from './context';
import deprecated from './deprecated';
import Edit from './edit';
import Save from './save';
import './style.scss';

registerBlockType(metadata, {
    icon: {
        src: BlockIcons['accordion'],
    },
    providesContext: Context,
    attributes,
    edit: Edit,
    save: Save,
    deprecated: [deprecated],
});
