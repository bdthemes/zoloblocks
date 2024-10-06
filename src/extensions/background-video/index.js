import { addFilter } from '@wordpress/hooks';
import './attributes';
// alert('background-video');
import Inspector from './inspector.js';
import Render from './render';
// import Style from './style.js';

addFilter('zolo.extensions.controls.backgroundVideo', 'zolo/background-video', (panels, panelProps) => {
    if (
        panelProps.attributes &&
        (panelProps.attributes?.advBtnBgbackgroundType === 'video' || panelProps.attributes?.mainBgbackgroundType === 'video')
    ) {
        panels.push(<Inspector key={`controls-background-video-${panelProps.attributes.uniqueId}`} panelProps={panelProps} />);
    }
    return panels;
});

addFilter('zolo.blocks.render.hook.before', 'zolo/background-video', (panels, panelProps) => {
    if (
        panelProps.attributes.backgroundVideo &&
        (panelProps.attributes?.advBtnBgbackgroundType === 'video' || panelProps.attributes?.mainBgbackgroundType === 'video')
    ) {
        panels.push(<Render key={`render-background-video-${panelProps.attributes.uniqueId}`} panelProps={panelProps} />);
    }
    return panels;
});


// addFilter('zolo.container.desktopAllStyle', 'zolo/background-video', (desktopAllStyle, props) => {
//     if (props.attributes.shapeDivider) {
//         const { shapeDividerDesktop } = Style(props);
//         return desktopAllStyle + shapeDividerDesktop;
//     }
//     return desktopAllStyle;
// });

