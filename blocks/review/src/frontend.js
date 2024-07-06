import { createRoot } from '@wordpress/element';
import StarRating from '../../../src/controls/star-rating';

const ReviewFrontend = ({ rating }) => {
    return <StarRating rating={rating} total={5} />;
};

// render on page load
document.addEventListener('DOMContentLoaded', () => {
    const reviewItems = document.querySelectorAll('.zolo-rating');
    if (reviewItems.length) {
        reviewItems.forEach((item) => {
            const ratingValue = item.dataset.rating;
            const root = createRoot(item);
            root.render(<ReviewFrontend rating={ratingValue} />);
        });
    }
});
