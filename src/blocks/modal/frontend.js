document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.zolo-modal');

    modals.forEach((modalContainer) => {
        const triggerButton = modalContainer.querySelector('.zolo-modal-button');
        const overlay = modalContainer.querySelector('.zolo-modal-overlay');
        const closeButton = modalContainer.querySelector('.zolo-modal-close');

        if (!triggerButton || !overlay || !closeButton) return;

        // Move modal overlay to the body (footer) to prevent z-index and overflow issues
        document.body.appendChild(overlay);

        // Open modal
        triggerButton.addEventListener('click', (e) => {
            e.preventDefault();
            overlay.classList.add('is-open');
        });

        // Close modal on close button click
        closeButton.addEventListener('click', (e) => {
            e.preventDefault();
            overlay.classList.remove('is-open');
        });

        // Close modal on overlay background click
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('is-open');
            }
        });
    });
});
