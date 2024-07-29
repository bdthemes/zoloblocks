import { addFilter } from '@wordpress/hooks';
// import Inspector from './inspector.js';
import Render from './render';
import './style.scss';
// import Style from './style.js';

import './attributes';

// addFilter('zolo.extensions.controls.shapeDivider', 'zolo/shape-divider', (panels, panelProps) => {
//     panels.push(<Inspector panelProps={panelProps} />);
//     return panels;
// });

addFilter('zolo.extensions.render.shapeDivider', 'zolo/shape-divider', (panels, panelProps) => {
    panels.push(<Render panelProps={panelProps} />);
    return panels;
});

// addFilter('zolo.container.desktopAllStyle', 'zolo/shape-divider', (desktopAllStyle, props) => {
//     const { shapeDividerDesktop } = Style(props);
//     return desktopAllStyle + shapeDividerDesktop;
// });
