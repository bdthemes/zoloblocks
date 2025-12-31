(function() {
    'use strict';

    // Store original body classes to preserve them
    let originalBodyClasses = [];

    // Initialize popup functionality
    function initZoloPopups() {
        const zoloPopups = document.querySelectorAll('.wp-block-zolo-popup-builder');

        if (!zoloPopups || zoloPopups.length === 0) {
            return;
        }

        // Store original body classes if not already stored
        if (originalBodyClasses.length === 0) {
            originalBodyClasses = Array.from(document.body.classList);
        }

        zoloPopups.forEach(function(popup) {
            const type = popup.getAttribute('data-type');
            const delay = popup.getAttribute('data-delay');
            const bgFixed = popup.getAttribute('data-bg-fixed');
            const closeBtn = popup.querySelector('.zolo-popup-close-btn');

            // Show popup with delay
            showPopupWithDelay(popup, delay);

            // Handle close button
            if (closeBtn) {
                closeBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    closePopup(popup, type, bgFixed);
                });
            }

            // Handle escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && popup.style.display !== 'none') {
                    closePopup(popup, type, bgFixed);
                }
            });

            // Handle overlay click
            if (type === 'popup_box' && popup.classList.contains('zolo-popup-overlay')) {
                popup.addEventListener('click', function(e) {
                    if (e.target === popup) {
                        closePopup(popup, type, bgFixed);
                    }
                });
            }
        });
    }

    // Show popup with delay
    function showPopupWithDelay(popup, delay) {
        const delayTime = delay ? parseInt(delay, 10) : 0;

        setTimeout(function() {
            // Add show class for smooth transition
            popup.classList.add('zolo-popup-show');
            popup.style.display = 'flex';

            // Add body class for fixed background if needed
            const type = popup.getAttribute('data-type');
            const bgFixed = popup.getAttribute('data-bg-fixed');

            if (type === 'popup_box' && bgFixed === 'true') {
                addBodyFixedClass();
            }
        }, delayTime);
    }

    // Close popup
    function closePopup(popup, type, bgFixed) {
        // Remove show class for smooth transition
        popup.classList.remove('zolo-popup-show');

        // Hide popup after transition
        setTimeout(function() {
            popup.style.display = 'none';

            // Remove body class if needed
            if (type === 'popup_box' && bgFixed === 'true') {
                removeBodyFixedClass();
            }
        }, 150); // Match CSS transition duration
    }

    // Add body fixed class while preserving other classes
    function addBodyFixedClass() {
        if (!document.body.classList.contains('zolo-popup-fixed')) {
            document.body.classList.add('zolo-popup-fixed');
        }
    }

    // Remove body fixed class while preserving other classes
    function removeBodyFixedClass() {
        document.body.classList.remove('zolo-popup-fixed');
    }

    // Restore original body classes (for static site generation)
    function restoreOriginalBodyClasses() {
        if (originalBodyClasses.length > 0) {
            document.body.className = '';
            originalBodyClasses.forEach(function(className) {
                document.body.classList.add(className);
            });
        }
    }

    // Initialize on DOM content loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initZoloPopups);
    } else {
        initZoloPopups();
    }

    // Also initialize on window load for dynamic content
    window.addEventListener('load', initZoloPopups);

    // Handle dynamic content (AJAX, etc.)
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                const hasNewPopup = Array.from(mutation.addedNodes).some(function(node) {
                    return node.nodeType === 1 && (
                        node.classList.contains('wp-block-zolo-popup-builder') ||
                        node.querySelector && node.querySelector('.wp-block-zolo-popup-builder')
                    );
                });

                if (hasNewPopup) {
                    setTimeout(initZoloPopups, 100);
                }
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Expose functions for external use
    window.ZoloPopup = {
        init: initZoloPopups,
        close: closePopup,
        restoreBodyClasses: restoreOriginalBodyClasses
    };

})();