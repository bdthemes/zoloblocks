import { registerBlockType } from '@wordpress/blocks';
import attributes from './attributes';
import metadata from './block.json';
import Edit from './edit';
import './style.scss';

const { BlockIcons } = window.zoloIcons;

registerBlockType(metadata.name, {
  icon: BlockIcons['post-title'],
  attributes,
  edit: Edit,
  save: () => null,
});


