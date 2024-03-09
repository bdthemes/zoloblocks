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
            render(
                <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={beforeImage?.url} alt="Image one" />}
                    itemTwo={<ReactCompareSliderImage src={afterImage?.url} alt="Image two" />}
                />,
                item
            );
        });
    }
});
