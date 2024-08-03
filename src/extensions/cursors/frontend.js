import Cotton from 'cottonjs';
document.addEventListener('DOMContentLoaded', function () {
    const zoloCursors = document.querySelectorAll('.zolo-block');
    // const zoloCursors = document.querySelectorAll('.zolo-cursor-wrapper');
    if (zoloCursors && zoloCursors.length > 0) {
        zoloCursors.forEach((cursor) => {
            const cursorOptions = cursor.dataset.cursors;
            if (!cursorOptions) return;
            const cursorData = JSON.parse(cursorOptions);
            const { cursorId, cursorType, speed, cursorDisabled, cursorLabel } = cursorData;
                const ball = new Cotton(`.zolo-cursors`, {
                    speed: speed,
                    disabledDefault: cursorDisabled,
                    textLabel: cursorLabel,
                });

        });
    }
});
