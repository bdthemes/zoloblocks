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

// Style filter hooks for desktop, tablet, and mobile
addFilter('zolo.blocksAllStyle', 'zolo/shape-builder', (allStyle, props) => {
    if (props.attributes.enableShapeBuilder) {
        const { shapeBuilderDesktop } = Style(props);
        return allStyle + shapeBuilderDesktop;
    }
    return allStyle;
});

addFilter('zolo.blocksTabStyle', 'zolo/shape-builder', (tabStyle, props) => {
    if (props.attributes.enableShapeBuilder) {
        const { shapeBuilderTablet } = Style(props);
        return tabStyle + shapeBuilderTablet;
    }
    return tabStyle;
});

addFilter('zolo.blocksMobileStyle', 'zolo/shape-builder', (mobileStyle, props) => {
    if (props.attributes.enableShapeBuilder) {
        const { shapeBuilderMobile } = Style(props);
        return mobileStyle + shapeBuilderMobile;
    }
    return mobileStyle;
});
