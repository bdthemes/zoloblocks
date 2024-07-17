/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import Style from './style';
import ICONS from './icons';
import ICONS_NEGATIVE from './iconsNegative';
import './style.scss';

export default function Render(props) {
    const {panelProps} = props;
    const { attributes, setAttributes } = panelProps;
    const { bottomType, bottomInvert } = attributes;

    return (
        <>
            <div className="zolo-shape-block">
                <div className="zolo-shape zolo-shape-bottom">{bottomInvert ? ICONS_NEGATIVE[bottomType] : ICONS[bottomType]}</div>
            </div>
        </>
    );
}


