/**
 * WordPress dependencies
 */

import { useBlockProps, MediaUpload, MediaPlaceholder, BlockControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useEffect, useRef } from '@wordpress/element';
import { useMergeRefs } from '@wordpress/compose';
import { dispatch } from '@wordpress/data';

/**
 * Internal depencencies
 */
import classnames from 'classnames';

const { classArrayToStr, SidebarOpener, ZoloToolbarGroup, ZoloToolbarButton, ZoloTooltip } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';
//
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected, clientId } = props;
    const { preview, uniqueId, parentClasses, beforeImage, afterImage, comparisonOptions } = attributes;

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.imageComparison} alt={__('Image Comparison Preview', 'zoloblocks')} />;
    }

    const sliderRef = useRef(null);
    useEffect(() => {
        const handleClick = (event) => {
            const childBlock = event?.target?.closest('.wp-block');
            if (!childBlock) {
                return;
            }
            const childBlockID = childBlock?.dataset?.block;
            if (childBlockID) {
                dispatch('core/block-editor').selectBlock(childBlockID);
            }
        };

        const sliderElement = sliderRef.current;

        if (sliderElement) {
            sliderElement.addEventListener('click', handleClick);
        }

        return () => {
            if (sliderElement) {
                sliderElement.removeEventListener('click', handleClick);
            }
        };
    }, [clientId, dispatch]);
    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        ref: useMergeRefs([sliderRef]),
        className: classnames(className, uniqueId, classArrayToStr(parentClasses), comparisonOptions?.slidePositon),
    });
    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <BlockControls>
                {beforeImage && beforeImage.id && (
                    <ZoloToolbarGroup>
                        <MediaUpload
                            onSelect={(media) => {
                                setAttributes({
                                    beforeImage: media,
                                });
                            }}
                            allowedTypes={['image']}
                            value={beforeImage && beforeImage.id}
                            render={({ open }) => (
                                <ZoloTooltip text="Before Image">
                                    <ZoloToolbarButton icon="edit" onClick={open} />
                                </ZoloTooltip>
                            )}
                        />
                    </ZoloToolbarGroup>
                )}
                {afterImage && afterImage.id && (
                    <ZoloToolbarGroup>
                        <MediaUpload
                            onSelect={(media) => {
                                setAttributes({
                                    afterImage: media,
                                });
                            }}
                            allowedTypes={['image']}
                            value={afterImage && afterImage.id}
                            render={({ open }) => (
                                <ZoloTooltip text="After Image">
                                    <ZoloToolbarButton icon="edit" onClick={open} />
                                </ZoloTooltip>
                            )}
                        />
                    </ZoloToolbarGroup>
                )}
            </BlockControls>
            <div {...blockProps}>
                <SidebarOpener clientId={clientId} />
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
                        {beforeImage && !afterImage && <img src={beforeImage?.url} alt={beforeImage?.alt} width="400" height="300" />}
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
                        {afterImage && !beforeImage && <img src={afterImage?.url} alt={afterImage?.alt} width="400" height="300" />}
                    </div>
                </div>

                {beforeImage && afterImage && (
                    <ReactCompareSlider
                        disabled={comparisonOptions?.disableslide}
                        {...(!comparisonOptions?.disableslide && {
                            changePositionOnHover: comparisonOptions?.slideOnHover,
                        })}
                        portrait={comparisonOptions?.slidePositon === 'vertical_direction' ? true : false}
                        position={comparisonOptions?.initialPosition}
                        {...(!comparisonOptions?.disableslide && {
                            onlyHandleDraggable: comparisonOptions?.handleDraggable,
                        })}
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
                                <ReactCompareSliderImage src={beforeImage?.url} alt={beforeImage?.alt} />
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
                                <ReactCompareSliderImage src={afterImage?.url} alt={afterImage?.alt} />
                            </div>
                        }
                    />
                )}
            </div>
        </>
    );
}
