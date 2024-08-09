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
                if(cursorId){
                     const cursors = new Cotton(`.${cursorId} .zolo-cursors`, {
                         speed: speed,
                         disabledDefault: cursorDisabled,
                         textLabel: cursorLabel,
                         scene: `.zolo-block.${cursorId}`,
                     });
                }

        });
    }
});
