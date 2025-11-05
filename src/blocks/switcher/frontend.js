/**
 * Switcher Frontend JavaScript
 * Handles toggle functionality between primary and secondary content
 */

document.addEventListener('DOMContentLoaded', function () {
    const switchers = document.querySelectorAll('.zolo-switcher-wrapper');

    switchers.forEach((switcher) => {
        const checkbox = switcher.querySelector('.zolo-checkbox');
        const primaryText = switcher.querySelector('.zolo-primary-text');
        const secondaryText = switcher.querySelector('.zolo-secondary-text');
        const contentWrapper = switcher.querySelector('.zolo-switcher-content-wrapper');
        
        if (!checkbox || !contentWrapper) {
            return;
        }

        const allSwitcherItems = contentWrapper.querySelectorAll('.zolo-switch-content');
        const primaryContent = allSwitcherItems[0]; // First child block = primary
        const secondaryContent = allSwitcherItems[1]; // Second child block = secondary

        if (!primaryContent || !secondaryContent) {
            return;
        }

        // Initialize: Set active class based on initial state
        const initializeContent = () => {
            const isChecked = checkbox.checked;
            
            // Remove all active classes
            primaryText?.classList.remove('zolo-active');
            secondaryText?.classList.remove('zolo-active');
            primaryContent.classList.remove('zolo-active');
            secondaryContent.classList.remove('zolo-active');

            // Add active class based on checkbox state
            if (isChecked) {
                // Checkbox checked = Secondary active
                secondaryText?.classList.add('zolo-active');
                secondaryContent.classList.add('zolo-active');
            } else {
                // Checkbox unchecked = Primary active
                primaryText?.classList.add('zolo-active');
                primaryContent.classList.add('zolo-active');
            }
        };

        // Initialize on page load
        initializeContent();

        // Toggle function
        const toggleContent = () => {
            const isChecked = checkbox.checked;

            // Remove all active classes
            primaryText?.classList.remove('zolo-active');
            secondaryText?.classList.remove('zolo-active');
            primaryContent.classList.remove('zolo-active');
            secondaryContent.classList.remove('zolo-active');

            // Add active class based on new state
            if (isChecked) {
                secondaryText?.classList.add('zolo-active');
                secondaryContent.classList.add('zolo-active');
            } else {
                primaryText?.classList.add('zolo-active');
                primaryContent.classList.add('zolo-active');
            }
        };

        // Checkbox change event
        checkbox.addEventListener('change', toggleContent);

        // Primary text click
        if (primaryText) {
            primaryText.addEventListener('click', () => {
                if (checkbox.checked) {
                    checkbox.checked = false;
                    toggleContent();
                }
            });
        }

        // Secondary text click
        if (secondaryText) {
            secondaryText.addEventListener('click', () => {
                if (!checkbox.checked) {
                    checkbox.checked = true;
                    toggleContent();
                }
            });
        }
    });
});
