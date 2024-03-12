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
//
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected } = props;
    const {
        preview,
        uniqueId,
        parentClasses,
        beforeImage,
        afterImage,
        beforeLabel,
        afterLabel,
        showLabels,
        initialPosition,
        handaleDraggable,
        disableslide,
        slidePositon,
        swipeMode,
        labelOpacity,
    } = attributes;

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
                        onPointerDown={() => setAttributes({ labelOpacity: 0 })}
                        onPointerUp={() => setAttributes({ labelOpacity: 1 })}
                        changePositionOnHover={swipeMode}
                        portrait={slidePositon}
                        disabled={disableslide}
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
                                <ReactCompareSliderImage src={afterImage?.url} alt={afterImage?.title} />
                            </div>
                        }
                    />
                )}
            </div>
        </>
    );
}
