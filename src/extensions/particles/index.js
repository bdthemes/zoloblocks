import { addFilter } from '@wordpress/hooks';
import Inspector from './inspector.js';
import Render from './render';
import './style.scss';

import './attributes';
import useParticlesInit from './init';

addFilter('zolo.extensions.controls.particles', 'zolo/extensions/particles', (panels, block, panelProps) => {
    if (block !== 'zolo/container') return panels;
    panels.push(<Inspector panelProps={panelProps} />);
    return panels;
});

addFilter('zolo.blocks.render.hook.before', 'zolo/extensions/particles', (panels, panelProps) => {
    if (!panelProps.attributes.zoloParticles.active) return panels;
    setTimeout(() => {
        useParticlesInit(panelProps);
    }, 400);
    panels.push(<Render panelProps={panelProps} />);
    return panels;
});

