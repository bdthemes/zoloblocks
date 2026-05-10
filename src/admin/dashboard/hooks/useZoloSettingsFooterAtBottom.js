import { useLayoutEffect, useState } from '@wordpress/element';

const SCROLL_THRESHOLD_PX = 3;

function getScrollingElement() {
    return document.scrollingElement || document.documentElement;
}

function isDocumentScrolledToBottom() {
    const el = getScrollingElement();
    if (!el) {
        return true;
    }
    const { scrollTop, scrollHeight, clientHeight } = el;
    const maxScroll = scrollHeight - clientHeight;
    if (maxScroll <= SCROLL_THRESHOLD_PX) {
        return true;
    }
    return scrollTop >= maxScroll - SCROLL_THRESHOLD_PX;
}

/**
 * True when the admin page is scrolled to the bottom (or content fits without scrolling).
 * Used to drop the fixed settings footer's top fade/shadow so it sits flush with content.
 */
export default function useZoloSettingsFooterAtBottom() {
    const [atBottom, setAtBottom] = useState(false);

    useLayoutEffect(() => {
        const update = () => {
            setAtBottom(isDocumentScrolledToBottom());
        };

        update();

        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);

        let ro;
        if (typeof ResizeObserver !== 'undefined') {
            ro = new ResizeObserver(update);
            if (document.body) {
                ro.observe(document.body);
            }
        }

        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
            ro?.disconnect();
        };
    }, []);

    return atBottom;
}
