'use strict';

// Variable to track if the Spline Viewer script has already been loaded
var loadedSpline = false;

// Function to handle Spline Viewer interaction and load the script if not already loaded
const onZoloSplineInteraction = (doc = document, win = window) => {
    // If the Spline script is already loaded, exit the function
    if (loadedSpline === true) return;

    // Mark the script as loaded
    loadedSpline = true;

    // Create a new script element
    let scriptElement = doc.createElement('script');
    scriptElement.src = 'https://unpkg.com/@splinetool/viewer/build/spline-viewer.js';
    scriptElement.type = 'module';

    // Append the script to the body
    doc.body.appendChild(scriptElement);

    // When the script has successfully loaded
    scriptElement.onload = () => {
        // Get all elements with the class 'zolo-spline-loader' within the correct document context
        let splineElements = doc.querySelectorAll('.wp-block-zolo-spline-viewer');

        // If there are any elements with this class
        if (splineElements.length > 0) {
            // Loop through each element
            splineElements.forEach((element) => {
                // Add the 'zolo-spline-loaded' class to each element
                element.classList.add('zolo-spline-loaded');

                // Listen for the 'load' event from the spline-viewer element
                let splineViewer = element.querySelector('spline-viewer');
                if (splineViewer) {
                    //hide #logo that is inside shadowRoot of spline-viewer
                    setTimeout(() => {
                        const shadowRoot = splineViewer.shadowRoot;
                        const logo = shadowRoot.querySelector('#logo');
                        if (logo) {
                            logo.style.display = 'none';
                        }
                    }, 1000);
                }
            });
        }
    };
};

// Function to check if we are inside an iframe (Gutenberg editor context)
const initZoloSpline = () => {
    const iframe = document.querySelector('iframe[name="editor-canvas"]');
    if (iframe) {
        // Use the iframe's contentWindow and contentDocument
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        const iframeWin = iframe.contentWindow;
        onZoloSplineInteraction(iframeDoc, iframeWin);
    } else {
        // Run the script in the regular document context
        onZoloSplineInteraction();
    }
};

// Add various event listeners that trigger the loading of the Spline Viewer script:
// - Mouseover event on the document body (only triggers once)
window.addEventListener('mouseover', initZoloSpline, { once: true });
// - Touchmove event on the document body (only triggers once)
window.addEventListener('touchmove', initZoloSpline, { once: true });
// - Scroll event on the window (only triggers once)
window.addEventListener('scroll', initZoloSpline, { once: true });
// - Keydown event on the document body (only triggers once)
window.addEventListener('keydown', initZoloSpline, { once: true });

// Polyfill for requestIdleCallback in case it's not supported in the browser
var requestIdleCallback =
    window.requestIdleCallback ||
    function (callback) {
        let start = Date.now();
        return setTimeout(function () {
            callback({
                didTimeout: false,
                timeRemaining: function () {
                    return Math.max(0, 50 - (Date.now() - start));
                },
            });
        }, 1);
    };

// Get all elements with the class 'zolo-spline-loader'
let zoloSplineLoaderElements = document.querySelectorAll('.wp-block-zolo-spline-viewer .zolo-spline-loader');

// Loop through each 'zolo-spline-loader' element
zoloSplineLoaderElements.forEach((element) => {
    // If the element has the class 'zolo-loadnow', use requestIdleCallback to load the Spline script
    if (element.classList.contains('zolo-loadnow')) {
        requestIdleCallback(
            () => {
                initZoloSpline();
            },
            { timeout: 1300 }
        );
    }
});
