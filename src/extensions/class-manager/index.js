import { addFilter } from '@wordpress/hooks';
import Inspector from './inspector';
import "./editor.scss";
import classManagerAttributes from './attributes';
import withClassManagerWrapperProp from './add-class';
import "./edit";

addFilter('zolo.header-tabs.before', 'zolo/class-manager/controls', Inspector, 10);
addFilter('blocks.registerBlockType', 'zolo/class-manager/attributes', classManagerAttributes, 10);
addFilter('editor.BlockListBlock', 'zolo/class-manager/addClass', withClassManagerWrapperProp, 10);