import { render } from '@wordpress/element';
import StarRating from '../../../src/controls/star-rating';

const Frontend = () => {
	return <StarRating rating={2} total={5} />;
};
render(<Frontend />, document.getElementById('zolo-rating'));
