/**
 * WordPress dependencies
 */

import { __ } from '@wordpress/i18n';
export default function Render({ panelProps }) {
    const { attributes } = panelProps;

    const { uniqueId, zoloCursors } = attributes;

    const { source, textLabel, imageSource, icon } = zoloCursors;

    return (
        <>
            <div id="particles-js"></div>
        </>
    );
}
