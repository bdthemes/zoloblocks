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
            let attributes = JSON.parse(beafslider.dataset.attributes);
            const { disableSliding, swipeMode, slidePositon, initialPosition, handaleDraggable } = attributes;

            render(
                <ReactCompareSlider
                    disabled={disableSliding}
                    changePositionOnHover={swipeMode}
                    portrait={slidePositon}
                    position={initialPosition}
                    onlyHandleDraggable={handaleDraggable}
                    itemOne={<ReactCompareSliderImage src={beforeImage?.url} alt={beforeImage?.title} />}
                    itemTwo={<ReactCompareSliderImage src={afterImage?.url} alt={afterImage?.title} />}
                />,
                item
            );
        });
    }
});
