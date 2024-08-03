/**
 * WordPress dependencies
 */

import { __ } from '@wordpress/i18n';
import Cotton from 'cottonjs';
import { useEffect, useRef } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

export default function Render({ panelProps }) {
    const { attributes, setAttributes } = panelProps;

    const { uniqueId, zoloCursors } = attributes;

    const { active, source, preset, speed, disabledDefault, textLabel, imageSource } = zoloCursors;

    return (
        <>
            <div className={`zolo-cursors cursors-${uniqueId} cursor-type-${source}`}>
                {source === 'default' && <span className="zolo-cursor-default"></span>}
                {source === 'text' && <span className="zolo-cursor-text">{textLabel}</span>}
                {source === 'image' && (
                    <span className="zolo-cursor-image">
                        <img src={imageSource.url} alt={imageSource.alt} />
                    </span>
                )}
            </div>
        </>
    );
}
