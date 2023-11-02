import { render } from '@wordpress/element';
import StarRating from '../../../src/controls/star-rating';

// const starRating = ({ rating }) => {
//     return <StarRating rating={rating} total={5} />;
// };

// render on page load
document.addEventListener('DOMContentLoaded', () => {
    const starRatingItems = document.querySelectorAll('.zolo-star-rating');
    console.log(starRatingItems);
    if (starRatingItems.length) {
        starRatingItems.forEach((item) => {
            const ratingValue = item.dataset.rating;
            render(<StarRating rating={ratingValue} total={5} />, item);
        });
    }
});
