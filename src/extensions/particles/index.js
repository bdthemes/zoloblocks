import { addFilter } from '@wordpress/hooks';
// alert('particles');
// import Inspector from './inspector.js';
import Render from './render';
import './style.scss';
// import Style from './style.js';

import './attributes';
import useParticlesInit from './init';

// addFilter('zolo.extensions.controls.cursors', 'zolo/extensions/cursors', (panels, block, panelProps) => {
//     panels.push(<Inspector panelProps={panelProps} />);
//     return panels;
// });

addFilter('zolo.blocks.render.hook.before', 'zolo/extensions/particles', (panels, panelProps) => {
    //skip accordion child, brand child, email, fancy list child,  map
    if (!panelProps.attributes.zoloParticles.active) return panels;
    setTimeout(() => {
        useParticlesInit(panelProps.attributes, panelProps.attributes.uniqueId);
    }, 400);
    panels.push(<Render panelProps={panelProps} />);
    return panels;
});


// addFilter('zolo.container.desktopAllStyle', 'zolo/extensions/cursors', (desktopAllStyle, props) => {
//     if (props.attributes.zoloCursors) {
//         const { zoloCursorsDesktop } = Style(props);
//         return desktopAllStyle + zoloCursorsDesktop;
//     }
//     return desktopAllStyle;
// });

