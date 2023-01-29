//internal dependencies controls
import { generateBackgroundAttributes } from '../../../src/helpers/backgroundHelpers';
import { generateDimensionAttributes } from '../../../src/helpers/dimension-helper';
import { generateResAlignmentAttributies } from '../../../src/helpers/res-alignment-helper';
import { generateResRangeAttributies } from '../../../src/helpers/res-range-helper';
import { generateTypographyAttributes } from '../../../src/helpers/typoHelpers';
//block constants
import {
	HEADING_ALIGNMENT, HEADING_BG, HEADING_PADDING,
	HEADING_WIDTH
} from './constants';
import * as typographyObjs from "./constants/typoPrefixConstant";

const attributes = {

	//range attributes
	...generateResRangeAttributies(HEADING_WIDTH, {
		defaultRange: 100,
		defaultUnit: '%',
	}),

	//alignment attributes
	...generateResAlignmentAttributies(HEADING_ALIGNMENT, {
		defaultAlign: 'left',
	}),

	headingColor: {
		type: 'string',
		default: 'red',
	},

	...generateDimensionAttributes(HEADING_PADDING, {
		top: 10,
		right: 10,
		bottom: 10,
		left: 10,
		isLinked: true,
	}),

	//typography attributes 
	...generateTypographyAttributes(Object.values(typographyObjs)),

	//generate backgroud attribute
	...generateBackgroundAttributes(HEADING_BG, {
		defaultBgGradient: "linear-gradient(45deg, #0066FF 0%, #0A51BB 100%)",
	}),

}
export default attributes;