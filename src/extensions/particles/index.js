import { addFilter } from '@wordpress/hooks';
import Inspector from './inspector.js';
import Render from './render';
import './particles.scss';
import Style from './style.js';
import './attributes';

addFilter('zolo.extensions.controls.particles', 'zolo/extensions/particles', (panels, block, panelProps) => {
    if (block !== 'zolo/container') return panels;
    panels.push(<Inspector key={`controls-particles-${panelProps.attributes.uniqueId}`}  panelProps={panelProps} />);
    return panels;
});

addFilter('zolo.blocks.render.hook.before', 'zolo/extensions/particles', (panels, panelProps) => {
    if (!panelProps.attributes.zoloParticles.active) return panels;
    panels.push(<Render key={`render-particles-${panelProps.attributes.uniqueId}`} panelProps={panelProps} />);
    return panels;
});



addFilter('zolo.container.desktopAllStyle', 'zolo/extensions/particles/styles', (desktopAllStyle, props) => {
    if (!props.attributes.zoloParticles.active) return desktopAllStyle;
    const { particlesStyleDesktop } = Style(props);
    return desktopAllStyle + particlesStyleDesktop;
});
