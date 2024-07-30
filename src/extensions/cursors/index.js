import { addFilter } from '@wordpress/hooks';
import Inspector from './inspector.js';
import Render from './render';
import './style.scss';
// import Style from './style.js';

import './attributes';
import useCursorInit from './init';

addFilter('zolo.extensions.controls.cursors', 'zolo/extensions/cursors', (panels, block,  panelProps) => {
    panels.push(<Inspector panelProps={panelProps} />);
    return panels;
});
addFilter('zolo.extensions.init.cursors', 'zolo/extensions/cursors', (panels, panelProps) => {
    panels.push(useCursorInit(panelProps.attributes, panelProps.attributes.uniqueId));
    return panels;
});
addFilter('zolo.extensions.render.cursors', 'zolo/extensions/shape-divider', (panels, panelProps) => {
    panels.push(<Render panelProps={panelProps} />);
    return panels;
});


// addFilter('zolo.container.desktopAllStyle', 'zolo/shape-divider', (desktopAllStyle, props) => {
//     const { shapeDividerDesktop } = Style(props);
//     return desktopAllStyle + shapeDividerDesktop;
// });
