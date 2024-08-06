import { addFilter } from '@wordpress/hooks';
import Inspector from './inspector.js';
import Render from './render';
import './style.scss';
import { useEffect } from '@wordpress/element';
import Style from './style.js';

import './attributes';
import useCursorInit from './init';

addFilter('zolo.extensions.controls.cursors', 'zolo/extensions/cursors', (panels, block, panelProps) => {
    panels.push(<Inspector panelProps={panelProps} />);
    return panels;
});

addFilter('zolo.extensions.render.cursors', 'zolo/extensions/cursors', (panels, panelProps) => {
    if (!panelProps.attributes.zoloCursors.active) return panels;
    setTimeout(() => {
        useCursorInit(panelProps.attributes, panelProps.attributes.uniqueId);
    }, 400);
    panels.push(<Render panelProps={panelProps} />);
    return panels;
});

addFilter('zolo.container.desktopAllStyle', 'zolo/shape-divider', (desktopAllStyle, props) => {
    if (props.attributes.zoloCursors) {
        const { zoloCursorsDesktop } = Style(props);
        return desktopAllStyle + zoloCursorsDesktop;
    }
});
