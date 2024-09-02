import { createRoot } from 'react-dom/client';
import StarRating from '../../../src/controls/star-rating';

// const starRating = ({ rating }) => {
//     return <StarRating rating={rating} total={5} />;
// };

// render on page load
document.addEventListener('DOMContentLoaded', () => {
    const starRatingItems = document.querySelectorAll('.zolo-star-rating');
    if (starRatingItems.length) {
        starRatingItems.forEach((item, index) => {
            const ratingValue = item.dataset.rating || 5;
            const root = createRoot(item);
            root.render(<StarRating key={index} rating={ratingValue} total={5} />);
        });
    }
});
