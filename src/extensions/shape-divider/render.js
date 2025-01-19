/**
 * WordPress dependencies
 */

import ICONS from './icons';
import ICONS_NEGATIVE from './iconsNegative';

export default function Render({ panelProps }) {
    const { attributes } = panelProps;
    const { shapeDivider, uniqueId } = attributes;
    if(shapeDivider.top.type === 'custom' || shapeDivider.bottom.type === 'custom') {
        return (
            <div className="zolo-shape-divider-custom">
                <img src={shapeDivider.top.image} alt="Top shape divider" className="zolo-shape-divider-custom-top" />
                <img src={shapeDivider.bottom.image} alt="Bottom shape divider" className="zolo-shape-divider-custom-bottom" />
            </div>
        );
    }

    const topKey = `${uniqueId}-top`;
    const bottomKey = `${uniqueId}-bottom`;

    return (
        <>
            {shapeDivider.top.type !== 'none' && (
                <div key={topKey} className={`zolo-shape zolo-shape-top ${uniqueId}`}>
                    {shapeDivider.top.invert ? ICONS_NEGATIVE[shapeDivider.top.type] : ICONS[shapeDivider.top.type]}
                </div>
            )}

            {shapeDivider.bottom.type !== 'none' && (
                <div key={bottomKey} className={`zolo-shape zolo-shape-bottom ${uniqueId}`}>
                    {shapeDivider.bottom.invert ? ICONS_NEGATIVE[shapeDivider.bottom.type] : ICONS[shapeDivider.bottom.type]}
                </div>
            )}
        </>
    );
}
