import { useEffect, useRef } from '@wordpress/element';

function useElementResize({
    element,
    position = 'right',
    cssProperty = 'maxWidth',
    condition = () => { return true },
    onResizeEnd = () => { }
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

        const editorDocument = window.frames?.['editor-canvas']?.document || window.document;

        // Always bind to both to avoid iframe boundary issues
        const bindTargets = new Set([editorDocument]);

        const resizer = editorDocument.createElement('span');
        resizer.className = `zolo-resizer zolo-resizer-${position}`;

        Object.assign(resizer.style, {
            position: 'absolute',
            zIndex: 9999,
            background: 'transparent',
        });

        if (position === 'right' || position === 'left') {
            Object.assign(resizer.style, {
                top: 0,
                width: '6px',
                height: '100%',
                cursor: 'ew-resize',
                [position]: '-3px',
            });
        }

        if (position === 'bottom') {
            Object.assign(resizer.style, {
                left: 0,
                height: '6px',
                width: '100%',
                cursor: 'ns-resize',
                bottom: '-3px',
            });
        }

        // Ensure positioning context
        const computed = editorDocument.defaultView.getComputedStyle(element);
        if (computed.position === 'static') {
            element.style.position = 'relative';
        }

        element.appendChild(resizer);
        resizerRef.current = resizer;

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

            // Disable transition during drag
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

            resizer.remove();
        };
    }, [element, position, cssProperty, onResizeEnd]);
}

export default useElementResize;
