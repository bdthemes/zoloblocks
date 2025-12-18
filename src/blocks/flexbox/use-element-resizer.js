import { useEffect, useRef } from '@wordpress/element';

function useElementResize({
    element,
    position = 'right', // 'left' | 'right' | 'bottom'
    value,              // '20%' | '400px' | '80vw'
    onResizeStart = () => {},
    onResizeEnd = () => {},
    condition = () => true,
}) {
    const stateRef = useRef(null);

    useEffect(() => {
        if (!element || !value || !condition(element)) return;

        const doc =
            window.frames?.['editor-canvas']?.document || window.document;
        const win =
            window.frames?.['editor-canvas'] || window;

        const bindTargets = new Set([doc, window.document]);

        /* -------------------------------------------------
         * Parse unit only (geometry comes from layout)
         * ------------------------------------------------- */
        const parseUnit = (val) => {
            const match = /(px|%|vw)$/.exec(val);
            return match ? match[1] : null;
        };

        const unit = parseUnit(value);
        if (!unit) return;

        /* -------------------------------------------------
         * Helpers
         * ------------------------------------------------- */
        const getContainerWidth = () =>
            element.parentElement?.getBoundingClientRect().width || 1;

        const pxToPercent = (px) =>
            Math.max(
                0,
                Math.min(100, (px / getContainerWidth()) * 100)
            );

        const pxToUnitString = (px) => {
            if (unit === 'px') {
                return `${Math.round(px)}px`;
            }
            if (unit === '%') {
                return `${pxToPercent(px).toFixed(2)}%`;
            }
            if (unit === 'vw') {
                return `${((px / win.innerWidth) * 100).toFixed(2)}vw`;
            }
            return `${px}px`;
        };

        const clamp = (v, min, max) =>
            Math.max(min, Math.min(max, v));

        /* -------------------------------------------------
         * Create resizer handle
         * ------------------------------------------------- */
        const resizer = doc.createElement('span');
        resizer.className = `zolo-resizer zolo-resizer-${position}`;

        Object.assign(resizer.style, {
            position: 'fixed',
            zIndex: 9999,
            width: position === 'bottom' ? '100%' : '6px',
            height: position === 'bottom' ? '6px' : '100%',
            cursor:
                position === 'bottom' ? 'ns-resize' : 'ew-resize',
        });

        doc.body.appendChild(resizer);

        const updateResizerPosition = () => {
            const rect = element.getBoundingClientRect();

            if (position === 'right') {
                Object.assign(resizer.style, {
                    top: `${rect.top}px`,
                    left: `${rect.right - 3}px`,
                    height: `${rect.height}px`,
                });
            }

            if (position === 'left') {
                Object.assign(resizer.style, {
                    top: `${rect.top}px`,
                    left: `${rect.left - 3}px`,
                    height: `${rect.height}px`,
                });
            }

            if (position === 'bottom') {
                Object.assign(resizer.style, {
                    top: `${rect.bottom - 3}px`,
                    left: `${rect.left}px`,
                    width: `${rect.width}px`,
                });
            }
        };

        updateResizerPosition();

        /* -------------------------------------------------
         * Tooltip (% visual feedback)
         * ------------------------------------------------- */
        const tooltip = doc.createElement('div');
        Object.assign(tooltip.style, {
            position: 'fixed',
            padding: '4px 8px',
            background: '#1e1e1e',
            color: '#fff',
            fontSize: '12px',
            borderRadius: '4px',
            pointerEvents: 'none',
            display: 'none',
            zIndex: 10000,
        });

        doc.body.appendChild(tooltip);

        /* -------------------------------------------------
         * Events
         * ------------------------------------------------- */
        const onMouseDown = (e) => {
            e.preventDefault();

            const rect = element.getBoundingClientRect();
            const renderedWidth = rect.width;

            const maxPx =
                unit === '%' ? getContainerWidth() : win.innerWidth;

            stateRef.current = {
                startX: e.clientX,
                startY: e.clientY,
                startWidth: renderedWidth,
                maxPx,
            };

            tooltip.style.display = 'block';

            onResizeStart({
                percent: pxToPercent(renderedWidth),
            });

            doc.body.style.userSelect = 'none';

            bindTargets.forEach((t) => {
                t.addEventListener('mousemove', onMouseMove);
                t.addEventListener('mouseup', onMouseUp);
            });

            window.addEventListener('blur', onMouseUp);
        };

        const onMouseMove = (e) => {
            const state = stateRef.current;
            if (!state) return;

            /* ---------------------------------------------
             * Direction-aware delta
             * --------------------------------------------- */
            let rawDelta;

            if (position === 'left') {
                rawDelta = state.startX - e.clientX;
            } else if (position === 'right') {
                rawDelta = e.clientX - state.startX;
            } else {
                rawDelta = e.clientY - state.startY;
            }

            /* ---------------------------------------------
             * Flexbox symmetric compensation
             * --------------------------------------------- */
            const compensatedDelta =
                position === 'bottom'
                    ? rawDelta
                    : rawDelta * 2;

            const intendedPx = clamp(
                state.startWidth + compensatedDelta,
                0,
                state.maxPx
            );

            /* visual-only constraint */
            element.style.maxWidth = `${intendedPx}px`;

            /* re-sync from real layout */
            const realPx =
                element.getBoundingClientRect().width;

            const percent = pxToPercent(realPx);
            tooltip.textContent = `${percent.toFixed(1)}%`;
            tooltip.style.left = `${e.clientX + 12}px`;
            tooltip.style.top = `${e.clientY + 12}px`;

            updateResizerPosition();
        };

        const onMouseUp = () => {
            const state = stateRef.current;
            if (!state) return;

            tooltip.style.display = 'none';
            doc.body.style.userSelect = '';

            const realPx =
                element.getBoundingClientRect().width;

            /* remove temporary inline style */
            element.style.removeProperty('max-width');

            onResizeEnd(pxToUnitString(realPx));

            stateRef.current = null;

            bindTargets.forEach((t) => {
                t.removeEventListener('mousemove', onMouseMove);
                t.removeEventListener('mouseup', onMouseUp);
            });

            window.removeEventListener('blur', onMouseUp);
        };

        resizer.addEventListener('mousedown', onMouseDown);

        win.addEventListener('scroll', updateResizerPosition, true);
        win.addEventListener('resize', updateResizerPosition);

        /* -------------------------------------------------
         * Cleanup
         * ------------------------------------------------- */
        return () => {
            resizer.remove();
            tooltip.remove();

            bindTargets.forEach((t) => {
                t.removeEventListener('mousemove', onMouseMove);
                t.removeEventListener('mouseup', onMouseUp);
            });

            window.removeEventListener('blur', onMouseUp);

            win.removeEventListener('scroll', updateResizerPosition, true);
            win.removeEventListener('resize', updateResizerPosition);
        };
    }, [element, position, value, onResizeStart, onResizeEnd, condition]);
}

export default useElementResize;
