import { render } from '@wordpress/element';
const { StarRating } = window.zoloModule;

const Frontend = () => {
	return <StarRating rating={2} total={5} />;
};
render(<Frontend />, document.getElementById('zolo-rating'));
