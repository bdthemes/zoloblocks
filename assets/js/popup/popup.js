(function () {
    const FIXED_CLASS = 'zolo-popup-fixed';
    const SHOW_CLASS = 'zolo-popup-show';
    const EXPIRY_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

    function safeGet(key) {
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : null;
        } catch (e) {
            return null;
        }
    }

    function safeSet(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            /* ignore storage errors */
        }
    }

    function safeRemove(key) {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            /* ignore */
        }
    }

    function processPopups() {
        const zoloPopups = document.querySelectorAll('.wp-block-zolo-popup-builder');
        if (!zoloPopups || zoloPopups.length === 0) return;

        zoloPopups.forEach(function (popup, index) {
            // stable key per popup: prefer data-popup-id, otherwise page path + index
            const popupIdAttr = popup.getAttribute('data-popup-id');
            const popupKeyId = popupIdAttr ? popupIdAttr : window.location.pathname + '|zolo-popup-' + index;
            const storageKey = 'zolo_popup_closed_' + popupKeyId;

            // skip showing if closed recently
            const closedRecord = safeGet(storageKey);
            if (closedRecord && closedRecord.closedAt) {
                if (Date.now() - closedRecord.closedAt < EXPIRY_MS) {
                    // keep hidden
                    return;
                } else {
                    // expired; allow showing again
                    safeRemove(storageKey);
                }
            }

            const type = popup.getAttribute('data-type');
            const bgFixed = popup.getAttribute('data-bg-fixed');
            const closeBtn = popup.querySelector('.zolo-popup-close-btn');

            // show popup by adding CSS class (preserves inline styles / avoids flash)
            popup.classList.add(SHOW_CLASS);

            // add fixed body class if necessary (safe via classList)
            if (type === 'popup_box' && bgFixed === 'true') {
                if (document.body.classList && document.body.classList.add) {
                    document.body.classList.add(FIXED_CLASS);
                } else {
                    if (!new RegExp('\\b' + FIXED_CLASS + '\\b').test(document.body.className)) {
                        document.body.className = (document.body.className + ' ' + FIXED_CLASS).trim();
                    }
                }
            }

            if (closeBtn) {
                closeBtn.addEventListener('click', function () {
                    // hide popup
                    popup.classList.remove(SHOW_CLASS);

                    // remove fixed class if set
                    if (type === 'popup_box' && bgFixed === 'true') {
                        if (document.body.classList && document.body.classList.remove) {
                            document.body.classList.remove(FIXED_CLASS);
                        } else {
                            document.body.className = document.body.className
                                .replace(new RegExp('\\b' + FIXED_CLASS + '\\b', 'g'), '')
                                .replace(/\s{2,}/g, ' ')
                                .trim();
                        }
                    }

                    // persist closed state for 7 days
                    safeSet(storageKey, { closedAt: Date.now() });
                });
            }
        });
    }

    // Run as early as possible: DOMContentLoaded if loading, otherwise run immediately
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', processPopups);
    } else {
        processPopups();
    }
})();
