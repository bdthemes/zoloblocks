// particles js
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

import { render } from '@wordpress/element';

document.addEventListener('DOMContentLoaded', function () {
    const zoloParticleContainers = document.querySelectorAll('.zolo-particles-background');

    if (zoloParticleContainers && zoloParticleContainers.length > 0) {
        zoloParticleContainers.forEach((container) => {
            // generate unique id
            const id = 'zolo-particles-' + Math.random().toString(36).substring(7); // random string
            const particleOptions = container.dataset.options ? JSON.parse(container.dataset.options) : {};

            if (container) {
                render(<Particles id={id} options={particleOptions} height="100%" width="100%" />, container);

                initParticlesEngine(async (engine) => {
                    await loadSlim(engine);
                });
            }
        });
    }
});
