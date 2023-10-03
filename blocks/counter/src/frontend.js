import { render } from '@wordpress/element';
import CountUp from 'react-countup';

// render on page load
document.addEventListener('DOMContentLoaded', () => {
    const animatedCounters = document.querySelectorAll('.animated-counter');

    console.log('animatedCounters', animatedCounters);
    if (animatedCounters.length > 0) {
        animatedCounters.forEach((counter) => {
            render(<CountUp end={counter.dataset.count} duration={3.2} />, counter);
        });
    }
});
