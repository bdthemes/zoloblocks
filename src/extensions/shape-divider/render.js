/**
 * WordPress dependencies
 */

import ICONS from './icons';
import ICONS_NEGATIVE from './iconsNegative';

export default function Render({ panelProps }) {
    const { attributes } = panelProps;
    const { shapeDivider, uniqueId } = attributes;

    function fetchSvgContent(url) {
        if (zoloParams?.zolo_pro_status !== 'active') {
            return '';
        }
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, false); // Synchronous request
        xhr.send(null);
        if (xhr.status === 200) {
            return xhr.responseText;
        }
        return '';
    }

    const SvgRenderer = ({ url, position }) => {
        const svgContent = fetchSvgContent(url);
        if (!svgContent) {
            return null;
        }

        return (
            <div
                className={`zolo-shape zolo-shape-custom zolo-shape-${position} ${uniqueId}`}
                dangerouslySetInnerHTML={{ __html: svgContent }}
            />
        );
    };

    const topKey = `${uniqueId}-top`;
    const bottomKey = `${uniqueId}-bottom`;

    if (shapeDivider.top.type === 'custom' || (shapeDivider.bottom.type === 'custom' && zoloParams?.zolo_pro_status === 'active')) {
        return (
            <>
                {shapeDivider.top.type === 'custom' && <SvgRenderer position="top" url={shapeDivider.top.image} />}
                {shapeDivider.bottom.type === 'custom' && <SvgRenderer position="bottom" url={shapeDivider.bottom.image} />}
            </>
        );
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
