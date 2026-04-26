/**
 * WordPress dependencies
 */
import { applyFilters } from '@wordpress/hooks';

import ICONS from './icons';
import ICONS_NEGATIVE from './iconsNegative';

export default function Render({ panelProps }) {
    const { attributes } = panelProps;
    const { shapeDivider, uniqueId } = attributes;

    const topKey = `${uniqueId}-top`;
    const bottomKey = `${uniqueId}-bottom`;

    if (shapeDivider.top.type === 'custom' || shapeDivider.bottom.type === 'custom') {
        const customLayers = applyFilters('zolo.shapeDivider.customLayers', null, { shapeDivider, uniqueId });
        if (customLayers) {
            return customLayers;
        }
        return null;
    }

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
