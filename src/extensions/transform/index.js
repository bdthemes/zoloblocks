import { addFilter } from '@wordpress/hooks';
import Inspector from './inspector.js';
import './style.scss';
// import Style from './style.js';
addFilter('zolo.extensions.controls.transform', 'zolo/transform', (panels, block, panelProps) => {
        panels.push(<Inspector key={`transform-controls-${panelProps?.attributes?.uniqueId}`} panelProps={panelProps} />);
    return panels;
});
// addFilter('zolo.slide.desktopAllStyle', 'zolo/transform', (desktopAllStyle, props) => {
//     if (props.attributes.transform) {
//         const { StyleTransform } = Style(props);
//         return desktopAllStyle + StyleTransform;
//     }
//     return desktopAllStyle;
// });