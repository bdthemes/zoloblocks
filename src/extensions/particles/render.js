/**
 * WordPress dependencies
 */

import { __ } from '@wordpress/i18n';
export default function Render({ panelProps }) {
    const { attributes } = panelProps;
    const { uniqueId } = attributes;
    return (
        <>
            <div id={`zolo-particles-${uniqueId}`} className='zolo-particles'></div>
        </>
    );
}
