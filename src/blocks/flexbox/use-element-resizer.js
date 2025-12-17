import { useEffect, useRef } from '@wordpress/element';

function useElementResize({
    element,
    position = 'right',
    cssProperty = 'maxWidth',
    condition = () => true,
    onResizeEnd = () => {},
}) {
    const resizerRef = useRef(null);
    const handlersRef = useRef({});
    const stateRef = useRef({
        isResizing: false,
        startX: 0,
        startY: 0,
        startValue: 0,
        lastValue: 0,
        originalTransition: '',
    });

    useEffect(() => {
        if (!element || !condition(element)) return;

        const editorDocument =
            window.frames?.['editor-canvas']?.document || window.document;

        const editorWindow =
            window.frames?.['editor-canvas'] || window;

        const bindTargets = new Set([editorDocument]);

        /* -------------------------------------------------
         * Create resizer in BODY
         * ------------------------------------------------- */
        const resizer = editorDocument.createElement('span');
        resizer.className = `zolo-resizer zolo-resizer-${position}`;

        Object.assign(resizer.style, {
            position: 'fixed',
            zIndex: 9999,
            background: 'transparent',
            pointerEvents: 'auto',
        });

        editorDocument.body.appendChild(resizer);
        resizerRef.current = resizer;

        /* -------------------------------------------------
         * Position updater
         * ------------------------------------------------- */
        const updateResizerPosition = () => {
            if (!resizer || !element) return;

            const rect = element.getBoundingClientRect();

            if (position === 'right') {
                Object.assign(resizer.style, {
                    top: `${rect.top}px`,
                    left: `${rect.right - 3}px`,
                    width: '6px',
                    height: `${rect.height}px`,
                    cursor: 'ew-resize',
                });
            }

            if (position === 'left') {
                Object.assign(resizer.style, {
                    top: `${rect.top}px`,
                    left: `${rect.left - 3}px`,
                    width: '6px',
                    height: `${rect.height}px`,
                    cursor: 'ew-resize',
                });
            }

            if (position === 'bottom') {
                Object.assign(resizer.style, {
                    top: `${rect.bottom - 3}px`,
                    left: `${rect.left}px`,
                    width: `${rect.width}px`,
                    height: '6px',
                    cursor: 'ns-resize',
                });
            }
        };

        updateResizerPosition();

        /* -------------------------------------------------
         * Stable Handlers
         * ------------------------------------------------- */

        handlersRef.current.onMouseMove = (e) => {
            if (!stateRef.current.isResizing) return;

            let delta = 0;

            if (position === 'right') {
                delta = e.clientX - stateRef.current.startX;
            } else if (position === 'left') {
                delta = stateRef.current.startX - e.clientX;
            } else if (position === 'bottom') {
                delta = e.clientY - stateRef.current.startY;
            }

            const newValue = Math.max(
                0,
                stateRef.current.startValue + delta
            );

            stateRef.current.lastValue = newValue;
            element.style[cssProperty] = `${newValue}px`;

            updateResizerPosition();
        };

        handlersRef.current.onMouseUp = () => {
            if (!stateRef.current.isResizing) return;

            const { lastValue, originalTransition } = stateRef.current;

            stateRef.current.isResizing = false;

            element.style.removeProperty(cssProperty);
            element.style.transition = originalTransition;

            onResizeEnd(Math.round(lastValue), 'px');

            bindTargets.forEach((doc) => {
                doc.removeEventListener(
                    'mousemove',
                    handlersRef.current.onMouseMove
                );
                doc.removeEventListener(
                    'mouseup',
                    handlersRef.current.onMouseUp
                );
            });
        };

        handlersRef.current.onMouseDown = (e) => {
            e.preventDefault();

            const computedStyle = window.getComputedStyle(element);
            const fallbackValue =
                cssProperty.includes('Width')
                    ? element.getBoundingClientRect().width
                    : element.getBoundingClientRect().height;

            const startValue =
                parseFloat(computedStyle[cssProperty]) || fallbackValue;

            stateRef.current = {
                isResizing: true,
                startX: e.clientX,
                startY: e.clientY,
                startValue,
                lastValue: startValue,
                originalTransition: element.style.transition || '',
            };

            element.style.transition = 'none';

            bindTargets.forEach((doc) => {
                doc.addEventListener(
                    'mousemove',
                    handlersRef.current.onMouseMove
                );
                doc.addEventListener(
                    'mouseup',
                    handlersRef.current.onMouseUp
                );
            });
        };

        resizer.addEventListener(
            'mousedown',
            handlersRef.current.onMouseDown
        );

        /* -------------------------------------------------
         * Track scroll / resize
         * ------------------------------------------------- */
        editorWindow.addEventListener('scroll', updateResizerPosition, true);
        editorWindow.addEventListener('resize', updateResizerPosition);

        /* -------------------------------------------------
         * Cleanup
         * ------------------------------------------------- */
        return () => {
            resizer.removeEventListener(
                'mousedown',
                handlersRef.current.onMouseDown
            );

            bindTargets.forEach((doc) => {
                doc.removeEventListener(
                    'mousemove',
                    handlersRef.current.onMouseMove
                );
                doc.removeEventListener(
                    'mouseup',
                    handlersRef.current.onMouseUp
                );
            });

            editorWindow.removeEventListener(
                'scroll',
                updateResizerPosition,
                true
            );
            editorWindow.removeEventListener(
                'resize',
                updateResizerPosition
            );

            resizer.remove();
        };
    }, [element, position, cssProperty, onResizeEnd, condition]);
}

export default useElementResize;
