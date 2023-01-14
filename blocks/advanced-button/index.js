import { registerBlockType } from '@wordpress/blocks';
//import "./src/style.scss";
import Save from "./src/save";
import metadata from './block.json';
import attributes from './src/attributes';
import Edit from "./src/edit";
import Example from './src/example';
import Save from "./src/save";
registerBlockType(
	{ name, ...metadata },
	{
		attributes,
		edit:Edit,
		save:Save,
		example: Example,
	}
);
