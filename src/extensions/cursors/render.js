/**
 * WordPress dependencies
 */

import { __ } from '@wordpress/i18n';
import Cotton from 'cottonjs';
import { useEffect, useRef } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
const { DisplayZoloIcon } = window.zoloModule;
export default function Render({ panelProps }) {
    const { attributes, setAttributes } = panelProps;

    const { uniqueId, zoloCursors } = attributes;

    const { active, source, preset, speed, disabledDefault, textLabel, imageSource, icon } = zoloCursors;
    console.log('zoloCursors', icon);

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
