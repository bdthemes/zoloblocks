import metadata from './block.json';
import attributes from './attributes';
import {registerBlockType} from '@wordpress/blocks';
import Edit from './edit';
import './style.scss';

const { BlockIcons } = window.zoloIcons;

registerBlockType(metadata.name, {
  icon: BlockIcons['post-featured-image'],
  attributes,
  edit: Edit,
  save: () => null,
});
