/**
 * WordPress dependencies
 */

import ICONS from './icons';
import ICONS_NEGATIVE from './iconsNegative';

export default function Render({ attributes }) {
    const { shapeDivider, uniqueId } = attributes;

    const Top = () => {
        return (
            <div className={`zolo-shape zolo-shape-top ${uniqueId}`}>
                {shapeDivider.top.invert ? ICONS_NEGATIVE[shapeDivider.top.type] : ICONS[shapeDivider.top.type]}
            </div>
        );
    };

    const Bottom = () => {
        return (
            <div className={`zolo-shape zolo-shape-bottom ${uniqueId}`}>
                {shapeDivider.bottom.invert ? ICONS_NEGATIVE[shapeDivider.bottom.type] : ICONS[shapeDivider.bottom.type]}
            </div>
        );
    };

    return { Top, Bottom };
}
