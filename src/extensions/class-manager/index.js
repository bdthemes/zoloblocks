import { addFilter } from '@wordpress/hooks';
import Inspector from './inspector';
import "./editor.scss";
import classManagerAttributes from './attributes';

addFilter('zolo.header-tabs.before', 'zolo/class-manager/controls', Inspector, 10);
addFilter('blocks.registerBlockType', 'zolo/class-manager/attributes', classManagerAttributes, 10);