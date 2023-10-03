import { render } from '@wordpress/element';
import CountUp from 'react-countup';
// import CountUp from 'react-countup';
// const CounterFrontend = ({ count }) => {
//     return <CountUp isCounting end={count} duration={3.2} />;
// };

console.log('counter frontend');

// // render on page load
document.addEventListener('DOMContentLoaded', () => {
    const animatedCounters = document.querySelectorAll('.animated-counter');

    console.log('animatedCounters', animatedCounters);
    if (animatedCounters.length > 0) {
        animatedCounters.forEach((counter) => {
            render(<CountUp end={counter.dataset.count} duration={3.2} />, counter);
        });
    }
});
