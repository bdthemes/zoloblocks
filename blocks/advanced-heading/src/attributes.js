//internal dependencies controls
import { generateResRangeAttributies } from '../../../src/helpers/res-range-helper';
import {generateResAlignmentAttributies} from '../../../src/helpers/res-alignment-helper';
import {generateDimensionAttributes} from '../../../src/helpers/dimension-helper';
//block constants
import {
	HEADING_WIDTH,
	HEADING_ALIGNMENT,
	HEADING_PADDING
} from './constants';

const attributes ={

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

}

export default attributes;