/**
 * WordPress dependencies
 */

import { __ } from '@wordpress/i18n';
export default function Render({ panelProps }) {
    const { attributes } = panelProps;
    const { uniqueId, zoloParticles } = attributes;

    // const { source, textLabel, imageSource, icon } = zoloParticles;

    return (
        <>
            <div id={`zolo-particles-${uniqueId}`} className='zolo-particles'></div>
        </>
    );
}
