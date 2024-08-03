import Cotton from 'cottonjs';
document.addEventListener('DOMContentLoaded', function () {
    // const zoloCursors = document.querySelectorAll('.zolo-block');
    const zoloCursors = document.querySelectorAll('.zolo-cursor-wrapper');
    if (zoloCursors && zoloCursors.length > 0) {
        zoloCursors.forEach((cursor) => {
            const cursorId = cursor.getAttribute('data-unique-id');
            const cursorType = cursor.getAttribute('data-cursor-type');
            const cursorSpeed = cursor.getAttribute('data-cursor-speed');
            const cursorLabel = cursor.getAttribute('data-cursor-label');
            const cursorDisabled = cursor.getAttribute('data-cursor-disabled');

            if (cursorType && cursorType !== 'none') {
                const ball = new Cotton(`.cursors-${cursorId}`, {
                    speed: cursorSpeed,
                    disabledDefault: cursorDisabled,
                    textLabel: cursorLabel,
                });
            }
        });
    }
});
