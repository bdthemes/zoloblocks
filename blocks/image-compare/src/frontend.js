import { createRoot } from '@wordpress/element';

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

// render on page load
document.addEventListener('DOMContentLoaded', () => {
    const beafsliderItems = document.querySelectorAll('.wp-block-zolo-image-compare');

    function stringToBool(s) {
        return /^(true|1|yes)$/i.test(s);
    }

    if (beafsliderItems.length) {
        beafsliderItems.forEach((item) => {
            const beafslider = item.querySelector('.beaf-slider');

            const comparisonOptions = JSON.parse(beafslider.dataset.comparisonoptions);
            const beforeImage = JSON.parse(beafslider.dataset.beforeimage);
            const afterImage = JSON.parse(beafslider.dataset.afterimage);
            const root = createRoot(item);
            root.render(
                <ReactCompareSlider
                    changePositionOnHover={comparisonOptions?.slideOnHover}
                    portrait={comparisonOptions?.slidePositon === 'vertical_direction' ? true : false}
                    disabled={comparisonOptions?.disableslide}
                    position={comparisonOptions?.initialPosition}
                    onlyHandleDraggable={comparisonOptions?.handleDraggable}
                    itemOne={
                        <div className="image-item-One">
                            {comparisonOptions?.showLabels && comparisonOptions?.beforeLabel && (
                                <div
                                    className={`compare-slider-label compare-slider-label-left ${
                                        comparisonOptions?.slidePositon === 'horizontal_direction'
                                            ? comparisonOptions?.HorizontalPosition
                                            : comparisonOptions?.labelPositons
                                    }`}
                                >
                                    {comparisonOptions?.beforeLabel}
                                </div>
                            )}
                            <ReactCompareSliderImage src={beforeImage && beforeImage?.url} alt={beforeImage?.alt} />
                        </div>
                    }
                    itemTwo={
                        <div className="image-item-two">
                            {comparisonOptions?.showLabels && comparisonOptions?.afterLabel && (
                                <div
                                    className={`compare-slider-label compare-slider-label-right ${
                                        comparisonOptions?.slidePositon === 'horizontal_direction'
                                            ? comparisonOptions?.HorizontalPosition
                                            : comparisonOptions?.labelPositons
                                    }`}
                                >
                                    {comparisonOptions?.afterLabel}
                                </div>
                            )}
                            <ReactCompareSliderImage src={afterImage && afterImage?.url} alt={afterImage?.alt} />
                        </div>
                    }
                />
            );
        });
    }
});
