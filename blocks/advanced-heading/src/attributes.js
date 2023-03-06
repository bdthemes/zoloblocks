//internal dependencies controls
import { generateBackgroundAttributes } from '../../../src/helpers/backgroundHelpers';
import { generateBorderAttributies } from '../../../src/helpers/border-helper';
import { generateBoxShadowAttributies } from '../../../src/helpers/boxshadow-helper';
import { generateDimensionAttributes } from '../../../src/helpers/dimension-helper';
import { generateTypographyAttributes } from '../../../src/helpers/typoHelpers';
//block constants
import { SUB_TITLE_MARGIN, TITLE_MARGIN, WRAPPER_BG, WRAPPER_BORDER, WRAPPER_MARGIN, WRAPPER_PADDING, WRAPPER_SHADOW } from './constants';
import * as typographyObjs from "./constants/typoPrefixConstant";

const attributes = {
	//Common Attributes
	uniqueId: {
		type: "string",
	},
	resDevice: {
		type: "string",
		default: "Desktop",
	},
	blockStyle: {
		type: "object"
	},

	// //range attributes
	// ...generateResRangeAttributies(HEADING_WIDTH, {
	// 	defaultRange: 100,
	// 	defaultUnit: '%',
	// }),

	// //alignment attributes
	// ...generateResAlignmentAttributies(HEADING_ALIGNMENT, {
	// 	defaultAlign: 'left',
	// }),

	//settings tab
	styles: {
		type: 'string',
		default: "style-1",
	},
	titleText: {
		type: 'string',
		default: "Zolo Block Advanced Heading",
	},
	subTitleText: {
		type: 'string',
		default: "Zolo Block Sub Title",
	},
	titleTagName: {
		type: "string",
		default: "h3",
	},
	subTitleTagName: {
		type: "string",
		default: "p",
	},

	//design tab attributes
	titleColor: {
		type: 'string',
		default: '',
	},
	subTitleColor: {
		type: 'string',
		default: '',
	},
	...generateDimensionAttributes(TITLE_MARGIN),
	...generateDimensionAttributes(SUB_TITLE_MARGIN),
	...generateTypographyAttributes(Object.values(typographyObjs)),

	//advance tab attributes
	...generateDimensionAttributes(WRAPPER_MARGIN),
	...generateDimensionAttributes(WRAPPER_PADDING),
	...generateBackgroundAttributes(WRAPPER_BG, {
		defaultBgGradient: "linear-gradient(45deg, #0066FF 0%, #0A51BB 100%)",
	}),
	...generateBorderAttributies(WRAPPER_BORDER),
	...generateBoxShadowAttributies(WRAPPER_SHADOW),

}
export default attributes;
