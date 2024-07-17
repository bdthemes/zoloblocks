/**
 * WordPress dependencies
 */

import ICONS from './icons';
import ICONS_NEGATIVE from './iconsNegative';

export default function Render({ attributes }) {
    const { bottomType, bottomInvert, topType, topInvert } = attributes;

    const Top = () => {
        return (
            <div className="zolo-shape zolo-shape-top">{topInvert ? ICONS_NEGATIVE[topType] : ICONS[topType]}</div>
        );
    };

    const Bottom = () => {
        return (
            <div className="zolo-shape zolo-shape-bottom">{bottomInvert ? ICONS_NEGATIVE[bottomType] : ICONS[bottomType]}</div>
        );
    };

    return { Top, Bottom };
}


