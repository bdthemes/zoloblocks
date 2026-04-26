import { applyFilters } from '@wordpress/hooks';
import { optionTwo, optionThree } from './options';

const particlesInit = (panelProps, editorWindow) => {
    const { attributes, setAttributes } = panelProps;
    const { uniqueId } = attributes;
    if (typeof attributes !== 'object' || !attributes) {
        console.error('Invalid attributes object');
        return;
    }
    if (typeof uniqueId !== 'string') {
        console.error('Invalid uniqueId');
        return;
    }
    const { zoloParticles } = attributes;
    const { particleOptions, preset, colors, speed } = zoloParticles;
    const { shapes, direction, shapeSize, customOptions } = particleOptions;
    const color = colors && colors.map((item) => item.color);

    const mainOptionsFree = {
        ...(preset === 'dust_wind' && {
            ...optionTwo,
            particles: {
                ...optionTwo?.particles,
                color: {
                    value: color && color.length > 0 && color[0] !== '' ? color : optionTwo?.particles.color?.value || '#000000',
                },
                size: {
                    ...optionTwo?.particles?.size,
                    value: shapeSize ? shapeSize : optionTwo?.particles.size?.value,
                },
                shape: {
                    ...optionTwo?.particles?.shape,
                    type: shapes !== undefined && shapes.length > 0 && shapes[0] !== '' ? shapes : ['circle'],
                },
                move: {
                    ...optionTwo?.particles?.move,
                    direction: direction || 'none',
                    speed: speed || optionTwo?.particles?.move?.speed,
                },
            },
        }),
        ...(preset === 'flying_bubble' && {
            particles: {
                ...optionThree?.particles,
                color: {
                    value: color && color.length > 0 && color[0] !== '' ? color : optionThree?.particles.color?.value || '#000000',
                },
                size: {
                    ...optionThree?.particles?.size,
                    value: shapeSize ? shapeSize : optionThree?.particles.size?.value,
                },
                shape: {
                    ...optionThree?.particles?.shape,
                    type: shapes !== undefined && shapes.length > 0 && shapes[0] !== '' ? shapes : ['circle'],
                },
                move: {
                    ...optionThree?.particles?.move,
                    direction: direction || 'none',
                    speed: speed || optionThree?.particles?.move?.speed,
                },
            },
            ...(preset === 'flying_bubble' && { interactivity: optionThree?.interactivity }),
        }),
        retina_detect: true,
    };

    const mainOptions =
        preset === 'dust_wind' || preset === 'flying_bubble'
            ? mainOptionsFree
            : applyFilters('zolo.particles.editorConfig', null, { preset, zoloParticles, attributes });

    if (particleOptions === null || particleOptions === undefined) {
        setAttributes({
            zoloParticles: {
                ...zoloParticles,
                particleOptions:
                    preset === 'custom_options' && customOptions
                        ? applyFilters('zolo.particles.customEditorConfig', false, { customOptions })
                        : preset !== 'custom_options' && mainOptions,
            },
        });
    }

    let optionData;
    if (preset === 'custom_options') {
        optionData = applyFilters('zolo.particles.customEditorConfig', false, { customOptions });
    } else {
        optionData = mainOptions;
    }

    if (!optionData) {
        return;
    }

    try {
        const { particlesJS } = editorWindow;
        particlesJS(`zolo-particles-${uniqueId}`, optionData);
    } catch (error) {
        console.error('Error initializing particles effects:', error);
    }
};

export default particlesInit;
