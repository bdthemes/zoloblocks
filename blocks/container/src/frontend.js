document.addEventListener('DOMContentLoaded', function () {
    const zoloParticleContainers = document.querySelectorAll('.zolo-particles');

    if (zoloParticleContainers && zoloParticleContainers.length > 0) {
        zoloParticleContainers.forEach((container) => {
            const id = container.dataset?.id;

            console.log('id', id);

            const particleOptions = container.dataset.options ? JSON.parse(container.dataset.options) : {};
            if (id) {
                particlesJS(id, particleOptions);
            }
        });
    }
});
