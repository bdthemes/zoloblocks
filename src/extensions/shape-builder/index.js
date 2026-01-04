import { addFilter } from '@wordpress/hooks';
import './attributes';
import './style.scss';
import Inspector from './inspector.js';
import Render from './render';
import Style from './style.js';

addFilter('zolo.extensions.controls.shapeBuilder', 'zolo/shape-builder', (panels, panelProps) => {
    if (panelProps.attributes.shapeBuilder) {
        panels.push(<Inspector key={`controls-shape-builder-${panelProps.attributes.uniqueId}`} panelProps={panelProps} />);
    }
    return panels;
});

addFilter('zolo.blocks.render.hook.before', 'zolo/shape-builder', (panels, panelProps) => {
    if (panelProps.attributes.shapeBuilder?.enabled) {
        panels.push(<Render key={`render-shape-builder-${panelProps.attributes.uniqueId}`} panelProps={panelProps} />);
    }
    return panels;
});

addFilter('zolo.container.desktopAllStyle', 'zolo/shape-builder', (desktopAllStyle, props) => {
    if (!props.attributes.shapeBuilder?.enabled) return desktopAllStyle;
    const { shapeBuilderDesktop } = Style(props);
    return desktopAllStyle + shapeBuilderDesktop;
});

addFilter('zolo.container.tabletAllStyle', 'zolo/shape-builder', (tabletAllStyle, props) => {
    if (!props.attributes.shapeBuilder?.enabled) return tabletAllStyle;
    const { shapeBuilderTablet } = Style(props);
    return tabletAllStyle + shapeBuilderTablet;
});

addFilter('zolo.container.mobileAllStyle', 'zolo/shape-builder', (mobileAllStyle, props) => {
    if (!props.attributes.shapeBuilder?.enabled) return mobileAllStyle;
    const { shapeBuilderMobile } = Style(props);
    return mobileAllStyle + shapeBuilderMobile;
});
