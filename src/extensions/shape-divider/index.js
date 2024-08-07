import { addFilter } from '@wordpress/hooks';
import Inspector from './inspector.js';
import Render from './render';
import Style from './style.js';

addFilter('zolo.extensions.controls.shapeDivider', 'zolo/shape-divider', (panels, panelProps) => {
    if (panelProps.attributes.shapeDivider) {
        panels.push(<Inspector panelProps={panelProps} />);
        return panels;
    }
});

addFilter('zolo.extensions.render.shapeDivider', 'zolo/shape-divider', (panels, panelProps) => {
    if (panelProps.attributes.shapeDivider) {
        panels.push(<Render panelProps={panelProps} />);
        return panels;
    }
});

addFilter('zolo.container.desktopAllStyle', 'zolo/shape-divider', (desktopAllStyle, props) => {
    if (props.attributes.shapeDivider) {
        const { shapeDividerDesktop } = Style(props);
        return desktopAllStyle + shapeDividerDesktop;
    }
});
