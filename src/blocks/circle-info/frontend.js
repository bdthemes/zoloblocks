/**
 * ZoloBlocks Circle Info Block – Frontend Script
 * Interactive Circular Feature Display
 */

document.addEventListener('DOMContentLoaded', () => {
    /**
     * Initialize circular feature display
     */
    function initCircularFeatureDisplay(container) {
        // Get elements
        const contentDisplay = container.querySelector('.zolo-content-display');
        const featureIcons = container.querySelector('.zolo-feature-icons');
        const dataScript = container.querySelector('.zolo-feature-data');

        if (!contentDisplay || !featureIcons || !dataScript) return;

        let featureData = [];
        let rotationMode = false;
        let rotationSpeed = 20;

        const itemsData = dataScript.getAttribute('data-items');
        const rotationModeData = dataScript.getAttribute('data-rotation-mode');
        const rotationSpeedData = dataScript.getAttribute('data-rotation-speed');

        if (itemsData) {
            featureData = JSON.parse(itemsData);
        }

        if (rotationModeData) {
            rotationMode = rotationModeData === 'true';
        }

        if (rotationSpeedData) {
            rotationSpeed = parseInt(rotationSpeedData) || 20;
        }

        if (!featureData.length) return;

        // Apply rotation if enabled
        if (rotationMode) {
            featureIcons.classList.add('zolo-rotation-enabled');
            featureIcons.style.setProperty('--rotation-speed', `${rotationSpeed}s`);
        }

        /**
         * Update content display with fade effect
         */
        function updateContent(itemId) {
            // Find the feature data
            const feature = featureData.find((item) => item.id == itemId);
            if (!feature) return;

            // Fade out
            contentDisplay.style.opacity = '0';

            // Update content after fade
            setTimeout(() => {
                const title = contentDisplay.querySelector('h3');
                const description = contentDisplay.querySelector('p');

                if (title) title.innerHTML = feature.title || '';
                if (description) description.innerHTML = feature.desc || '';

                // Fade in
                contentDisplay.style.opacity = '1';
            }, 300);
        }

        /**
         * Handle icon click
         */
        featureIcons.addEventListener('click', (e) => {
            const button = e.target.closest('button');
            if (!button) return;

            const listItem = button.parentElement;
            const itemId = listItem.getAttribute('data-item-id');

            // Remove active class from all icons
            featureIcons.querySelectorAll('li').forEach((li) => li.classList.remove('active'));

            // Add active class to clicked icon
            listItem.classList.add('active');

            // Update content
            updateContent(itemId);
        });

        // Set initial state (first icon active)
        const firstIcon = featureIcons.querySelector('li');
        if (firstIcon) {
            firstIcon.classList.add('active');
        }
    }

    /**
     * Initialize all circular feature displays on the page
     */
    const allContainers = document.querySelectorAll('.zolo-circle-info');
    allContainers.forEach((container) => {
        initCircularFeatureDisplay(container);
    });
});
