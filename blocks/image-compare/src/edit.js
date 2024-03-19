/**
 * WordPress dependencies
 */

import { useBlockProps, MediaUpload, MediaPlaceholder, BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton, Tooltip } from '@wordpress/components';
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
    const { preview, uniqueId, parentClasses, beforeImage, afterImage, comparisonOptions } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, uniqueId, classArrayToStr(parentClasses), comparisonOptions?.slidePositon),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.socialLinks} alt={__('List Links Preview', 'zolo-blocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <BlockControls>
                {beforeImage && beforeImage.id && (
                    <ToolbarGroup>
                        <MediaUpload
                            onSelect={(media) => {
                                setAttributes({
                                    beforeImage: media,
                                });
                            }}
                            allowedTypes={['image']}
                            value={beforeImage && beforeImage.id}
                            render={({ open }) => (
                                <Tooltip text="Before Image">
                                    <ToolbarButton icon="edit" onClick={open} />
                                </Tooltip>
                            )}
                        />
                    </ToolbarGroup>
                )}
                {afterImage && afterImage.id && (
                    <ToolbarGroup>
                        <MediaUpload
                            onSelect={(media) => {
                                setAttributes({
                                    afterImage: media,
                                });
                            }}
                            allowedTypes={['image']}
                            value={afterImage && afterImage.id}
                            render={({ open }) => (
                                <Tooltip text="After Image">
                                    <ToolbarButton icon="edit" onClick={open} />
                                </Tooltip>
                            )}
                        />
                    </ToolbarGroup>
                )}
            </BlockControls>
            <div {...blockProps}>
                <div className={classnames(`zolo-image-wrap ${!beforeImage || !afterImage ? 'placeholder' : ''}`)}>
                    <div className="zolo-image-left">
                        {!beforeImage && (
                            <MediaPlaceholder
                                onSelect={(el) => {
                                    setAttributes({ beforeImage: el });
                                }}
                                onSelectURL={(el) =>
                                    setAttributes({
                                        beforeImage: {
                                            url: el,
                                        },
                                    })
                                }
                                allowedTypes={['image']}
                                multiple={false}
                                labels={{ title: 'Before Image' }}
                            />
                        )}
                        {beforeImage && !afterImage && <img src={beforeImage?.url} alt={beforeImage?.title} width="400" height="300" />}
                    </div>
                    <div className="zolo-image-right">
                        {!afterImage && (
                            <MediaPlaceholder
                                onSelect={(el) => {
                                    setAttributes({ afterImage: el });
                                }}
                                onSelectURL={(el) =>
                                    setAttributes({
                                        afterImage: {
                                            url: el,
                                        },
                                    })
                                }
                                allowedTypes={['image']}
                                multiple={false}
                                labels={{ title: 'After Image' }}
                            />
                        )}
                        {afterImage && !beforeImage && <img src={afterImage?.url} alt={afterImage?.title} width="400" height="300" />}
                    </div>
                </div>

                {beforeImage && afterImage && (
                    <ReactCompareSlider
                        changePositionOnHover={comparisonOptions?.slideOnHover}
                        portrait={comparisonOptions?.slidePositon === 'vertical_direction' ? true : false}
                        disabled={comparisonOptions?.disableslide}
                        position={comparisonOptions?.initialPosition}
                        onlyHandleDraggable={comparisonOptions?.handleDraggable}
                        itemOne={
                            <div className="image-item-One ">
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
                                <ReactCompareSliderImage src={beforeImage?.url} alt={beforeImage?.title} />
                            </div>
                        }
                        itemTwo={
                            <div className="image-item-two ">
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
                                <ReactCompareSliderImage src={afterImage?.url} alt={afterImage?.title} />
                            </div>
                        }
                    />
                )}
            </div>
        </>
    );
}
