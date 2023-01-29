import {
	__experimentalBorderBoxControl as BorderBoxControl
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const BorderControl = () => {

	return (

		<BorderBoxControl
			label={__('Border Color', 'zolo-blocks')}
			value={borderObj}
			onChange={(newBorder) => {
				setAttributes({ borderObj: newBorder })
			}}
		/>
	)

}

export default BorderControl;