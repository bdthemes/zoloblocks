/**
 * Internal depencencies
 */

const Style = (props) => {
    const { attributes } = props;
    const { zoloParticles, uniqueId } = attributes;
    const { zIndex } = zoloParticles;

    const particlesStyleDesktop = `
    .${uniqueId} .zolo-particles {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: ${zIndex};
    }
    `;

    return {
        particlesStyleDesktop,
    };
};
export default Style;
