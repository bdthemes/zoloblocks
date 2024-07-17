/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import ICONS from './icons';
import ICONS_NEGATIVE from './iconsNegative';
import './style.scss';

export default function Render({attributes}) {
    // console.log('Render', {props});
    // const { panelProps } = props;
    // const { attributes } = panelProps;
    const { bottomType, bottomInvert, topType, topInvert } = attributes;

    const Top = () => {
        return (
            <div className="zolo-shape-block">
                <div className="zolo-shape zolo-shape-top">{topInvert ? ICONS_NEGATIVE[topType] : ICONS[topType]}</div>
            </div>
        );
    };

    const Bottom = () => {
        return (
            <div className="zolo-shape-block">
                <div className="zolo-shape zolo-shape-bottom">{bottomInvert ? ICONS_NEGATIVE[bottomType] : ICONS[bottomType]}</div>
            </div>
        );
    };

    return { Top, Bottom };
}


