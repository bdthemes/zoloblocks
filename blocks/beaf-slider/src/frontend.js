import { render } from '@wordpress/element';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

// render on page load
document.addEventListener('DOMContentLoaded', () => {
    const beafsliderItems = document.querySelectorAll('.wp-block-zolo-beaf-slider');

    if (beafsliderItems.length) {
        beafsliderItems.forEach((item) => {
            const beafslider = item.querySelector('.beaf-slider');
            let beforeImage = JSON.parse(beafslider.dataset.beforeimage);
            let afterImage = JSON.parse(beafslider.dataset.afterimage);
            let disableSliding = !!beafslider.dataset.disablesliding;
            let swipeMode = !!beafslider.dataset.swipeMode;
            let slidePositon = !!beafslider.dataset.slidePositon;
            let initialPosition = beafslider.dataset.initialPosition;
            let handaleDraggable = !!beafslider.dataset.handaledraggable;
            let beforeLabel = beafslider.dataset.beforelabel;
            let afterLabel = beafslider.dataset.afterlabel;
            let showLabels = !!beafslider.dataset.showlabels;
            console.log(disableSliding);
            render(
                <ReactCompareSlider
                    changePositionOnHover={swipeMode}
                    portrait={slidePositon}
                    // disabled={disableSliding}
                    position={initialPosition}
                    onlyHandleDraggable={handaleDraggable}
                    itemOne={
                        <div className="imageitemOne">
                            {showLabels && beforeLabel && (
                                <div className="compare-slider-label compare-slider-label-left">{beforeLabel}</div>
                            )}
                            <ReactCompareSliderImage src={beforeImage?.url} alt={beforeImage?.title} />
                        </div>
                    }
                    itemTwo={
                        <div className="imageitemtwo">
                            {showLabels && afterLabel && (
                                <div className="compare-slider-label compare-slider-label-right">{afterLabel}</div>
                            )}
                            <div className="compare-slider-label compare-slider-label-right">{afterLabel}</div>
                            <ReactCompareSliderImage src={afterImage?.url} alt={afterImage?.title} />
                        </div>
                    }
                />,
                item
            );
        });
    }
});
