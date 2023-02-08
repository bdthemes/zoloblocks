//internal dependencies controls
import { generateBackgroundAttributes } from '../../../src/helpers/backgroundHelpers';
import { generateBorderAttributies } from '../../../src/helpers/border-helper';
import { generateBoxShadowAttributies } from '../../../src/helpers/boxshadow-helper';
import { generateDimensionAttributes } from '../../../src/helpers/dimension-helper';
import { generateResAlignmentAttributies } from '../../../src/helpers/res-alignment-helper';
import { generateResRangeAttributies } from '../../../src/helpers/res-range-helper';
import { generateTypographyAttributes } from '../../../src/helpers/typoHelpers';
//block constants
import {
	HEADING_ALIGNMENT, HEADING_WIDTH, SUB_TITLE_MARGIN, TITLE_MARGIN, WRAPPER_BG, WRAPPER_BORDER, WRAPPER_MARGIN, WRAPPER_PADDING, WRAPPER_SHADOW
} from './constants';
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


	//style tab attributes
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