import Cotton from 'cottonjs';

const useCursorInit = (attributes, uniqueId) => {
    // Validate inputs
    if (typeof attributes !== 'object' || !attributes) {
        console.error('Invalid attributes object');
        return;
    }
    if (typeof uniqueId !== 'string') {
        console.error('Invalid uniqueId');
        return;
    }

    const { zoloCursors = {} } = attributes;
    const { active, source, preset, speed, disabledDefault } = zoloCursors;


    try {
        const cursors = new Cotton('.cursors-' + uniqueId, {
            scene: `.wp-block.${uniqueId}`,
        });

        // Optionally, add more code to handle cursors initialization logic
    } catch (error) {
        console.error('Error initializing Cotton cursors:', error);
    }
};

export default useCursorInit;
