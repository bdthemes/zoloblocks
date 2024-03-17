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
            let beforeImage = JSON.parse(beafslider.dataset.beforeimage);
            let afterImage = JSON.parse(beafslider.dataset.afterimage);
            let disableSliding = stringToBool(beafslider.dataset.disablesliding);
            let swipeMode = stringToBool(beafslider.dataset.swipemode);
            let slidePositon = stringToBool(beafslider.dataset.slidepositon);
            let initialPosition = beafslider.dataset.initialPosition;
            let handleDraggable = stringToBool(beafslider.dataset.handledraggable);
            let beforeLabel = beafslider.dataset.beforelabel;
            let afterLabel = beafslider.dataset.afterlabel;
            let showLabels = stringToBool(beafslider.dataset.showlabels);

            render(
                <ReactCompareSlider
                    changePositionOnHover={swipeMode}
                    portrait={slidePositon}
                    disabled={disableSliding}
                    position={initialPosition}
                    onlyHandleDraggable={handleDraggable}
                    itemOne={
                        <div className="image-item-One">
                            {showLabels && beforeLabel && (
                                <div className="compare-slider-label compare-slider-label-left">{beforeLabel}</div>
                            )}
                            <ReactCompareSliderImage
                                src={beforeImage && (beforeImage?.url || beforeImage)}
                                alt={beforeImage?.title || 'photo'}
                            />
                        </div>
                    }
                    itemTwo={
                        <div className="image-item-two">
                            {showLabels && afterLabel && (
                                <div className="compare-slider-label compare-slider-label-right">{afterLabel}</div>
                            )}
                            <ReactCompareSliderImage
                                src={afterImage && (afterImage?.url || afterImage)}
                                alt={afterImage?.title || 'photo'}
                            />
                        </div>
                    }
                />,
                item
            );
        });
    }
});
