import { render } from '@wordpress/element';

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
            let {
                afterImage,
                beforeImage,
                beforeLabel,
                afterLabel,
                disableslide,
                handleDraggable,
                showLabels,
                slidePositon,
                swipeMode,
                initialPosition,
            } = JSON.parse(beafslider.dataset.allattributes);
            render(
                <ReactCompareSlider
                    changePositionOnHover={stringToBool(swipeMode)}
                    portrait={stringToBool(slidePositon)}
                    disabled={stringToBool(disableslide)}
                    position={initialPosition}
                    onlyHandleDraggable={stringToBool(handleDraggable)}
                    itemOne={
                        <div className="image-item-One">
                            {stringToBool(showLabels) && beforeLabel && (
                                <div className="compare-slider-label compare-slider-label-left">{beforeLabel}</div>
                            )}
                            <ReactCompareSliderImage src={beforeImage && (beforeImage?.url || beforeImage)} alt={beforeImage?.title} />
                        </div>
                    }
                    itemTwo={
                        <div className="image-item-two">
                            {stringToBool(showLabels) && afterLabel && (
                                <div className="compare-slider-label compare-slider-label-right">{afterLabel}</div>
                            )}
                            <ReactCompareSliderImage src={afterImage && (afterImage?.url || afterImage)} alt={afterImage?.title} />
                        </div>
                    }
                />,
                item
            );
        });
    }
});
