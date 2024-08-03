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

    const {
        active,
        source,
        preset,
        speed,
        disabledDefault,
        textLabel,
    } = zoloCursors;

    // const ball = new Cotton('#ball', {
    //     speed: 1,
    // });





    return (
        <>
            <div className={`zolo-cursor-wrapper cursors-${uniqueId}`}>
                <div className={`zolo-cursor zolo-cursor-${source}`}>
						{textLabel}
					{/* <span className="zolo-cursor-text">{textLabel}</span> */}
					</div>
            </div>
        </>
    );
}
