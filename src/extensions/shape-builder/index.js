import { addFilter } from '@wordpress/hooks';
import './attributes';
import './style.scss';
import './editor.scss';
import Inspector from './inspector.js';
import Render from './render';
import Style from './style.js';

addFilter('zolo.extensions.controls.shapeBuilder', 'zolo/shape-builder', (panels, panelProps) => {
    panels.push(<Inspector key={`controls-shape-builder-${panelProps.attributes.uniqueId}`} panelProps={panelProps} />);
    return panels;
});

addFilter('zolo.blocks.render.hook.before', 'zolo/shape-builder', (panels, panelProps) => {
    if (panelProps?.attributes?.enableShapeBuilder) {
        panels.push(<Render key={`render-shape-builder-${panelProps.attributes.uniqueId}`} panelProps={panelProps} />);
    }
    return panels;
});