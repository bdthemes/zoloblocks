import { createRoot } from '@wordpress/element';
import CountUp from 'react-countup';

// render on page load
document.addEventListener('DOMContentLoaded', () => {
    const animatedCounters = document.querySelectorAll('.animated-counter');
    if (animatedCounters.length > 0) {
        animatedCounters.forEach((counter) => {
            const root = createRoot(counter);
            root.render(<CountUp end={counter.dataset.count || '1000'} duration={3.2} />);
        });
    }
});
