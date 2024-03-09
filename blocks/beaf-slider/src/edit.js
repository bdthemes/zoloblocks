/**
 * WordPress dependencies
 */

import { useBlockProps, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
import classnames from 'classnames';

const { classArrayToStr } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected } = props;
    const { preview, uniqueId, parentClasses, beforeImage, afterImage } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, uniqueId, classArrayToStr(parentClasses)),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.socialLinks} alt={__('List Links Preview', 'zolo-blocks')} />;
    }
    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                {beforeImage && afterImage && (
                    <ReactCompareSlider
                        itemOne={<ReactCompareSliderImage src={beforeImage?.url} alt="Image one" />}
                        itemTwo={<ReactCompareSliderImage src={afterImage?.url} alt="Image two" />}
                    />
                )}
            </div>
        </>
    );
}
