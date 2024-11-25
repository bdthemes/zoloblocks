import { addFilter } from '@wordpress/hooks';
import Inspector from './inspector.js';
import Render from './render';
import Style from './style.js';
import './style.scss';

addFilter('zolo.extensions.controls.shapeDivider', 'zolo/shape-builder', (panels, panelProps) => {
    if (panelProps.attributes.shapeBuilder) {
        panels.push(<Inspector key={`controls-shape-builder-${panelProps.attributes.uniqueId}`} panelProps={panelProps} />);
    }
    return panels;
});

addFilter('zolo.blocks.render.hook.before', 'zolo/shape-builder', (panels, panelProps) => {
    if (panelProps.attributes.shapeBuilder) {
        panels.push(<Render key={`render-shape-builder-${panelProps.attributes.uniqueId}`} panelProps={panelProps} />);
    }
    return panels;
});

addFilter('zolo.container.desktopAllStyle', 'zolo/shape-builder', (desktopAllStyle, props) => {
    if (props.attributes.shapeBuilder) {
        const { shapeBuilderDesktop } = Style(props);
        return desktopAllStyle + shapeBuilderDesktop;
    }
    return desktopAllStyle;
});
