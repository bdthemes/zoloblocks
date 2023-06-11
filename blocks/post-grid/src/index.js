import { registerBlockType } from '@wordpress/blocks';
import metadata from '../block.json';
import attributes from './attributes';
import Edit from './edit';
import './style.scss';

registerBlockType(metadata, {
  attributes,
  edit: Edit,
  save: () => null,
});
