import { useEffect } from '@wordpress/element';
import Cotton from 'cottonjs';
const useCursorInit = (attributes, uniqueId) => {
    const { zoloCursors } = attributes;
    const { active, source, preset, speed, disabledDefault } = zoloCursors;
    const ball = new Cotton('.cursors-' + uniqueId + '.ball', {
        scene: `.wp-block.${uniqueId}`,
    });
};

export default useCursorInit;
