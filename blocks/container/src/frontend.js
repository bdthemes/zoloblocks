import { createRoot, render } from '@wordpress/element';
import Particleslib from './particles';

Document.addEventListener('DOMContentLoaded', () => {
    const particles = document.querySelectorAll('.particles');
    console.log(particles);
    if (particles.length) {
        particles.forEach((item) => {
            render(<Particleslib id="tsparticles" />, item);
        });
    }
});
