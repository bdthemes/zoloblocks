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
            <div className={`zolo-cursors cursors-${uniqueId} cursor-type-${source}`}>
                {source === 'default' && <span className="zolo-cursor-default"></span>}
                {source === 'text' && <span className="zolo-cursor-text">{textLabel}</span>}
                {source === 'image' && <img className="zolo-cursor-image" src={imageSource.url} alt={imageSource.alt} />}
                {source === 'icon' && <DisplayZoloIcon icon={icon} size={20} color="#ff6847" />}
            </div>
        </>
    );
}
