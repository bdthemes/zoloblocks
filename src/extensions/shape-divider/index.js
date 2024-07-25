import { addFilter } from '@wordpress/hooks';
import Inspector from './inspector.js';
import Render from './render';
import Style from './style.js';
import './style.scss';


addFilter('zolo.extensions.controls.shapeDivider', 'zolo/shape-divider', (panels, panelProps) => {
    panels.push(<Inspector panelProps={panelProps} />);
    return panels;
});


addFilter('zolo.extensions.render.shapeDivider.top', 'zolo/shape-divider', (panels, panelProps) => {
    const { Top } = Render(panelProps);
    panels.push(<Top />);
    return panels;
});

addFilter('zolo.extensions.render.shapeDivider.bottom', 'zolo/shape-divider', (panels, panelProps) => {
    const { Bottom } = Render(panelProps);
    panels.push(<Bottom />);
    return panels;
});



addFilter('zolo.container.desktopAllStyle', 'zolo/shape-divider', (desktopAllStyle, props) => {
    const { shapeDividerDesktop } = Style(props);
    return desktopAllStyle + shapeDividerDesktop;
});
