import { render } from '@wordpress/element';
import { CountUp } from 'use-count-up';

const CounterFrontend = ({ counterNumber }) => {
    return <CountUp isCounting end={counterNumber} duration={3.2} />;
};

// render on page load
document.addEventListener('DOMContentLoaded', () => {
    const counterItems = document.querySelectorAll('.counter');
    if (counterItems.length) {
        counterItems.forEach((item) => {
            const countValue = item.dataset.count;
            render(<CountUp isCounting end={countValue} duration={3.2} />, item);
        });
    }
});
