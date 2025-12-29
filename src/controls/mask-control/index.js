import { __ } from '@wordpress/i18n';
import { MediaUpload } from '@wordpress/block-editor';

import { ZoloSelectControl, ZoloBaseControl, ZoloButton } from '../core-controls';
import ImageAvatar from '../image-avatar';

import { MASK_SIZES, MASK_POSITIONS, MASK_REPEATS, MASK_SHAPES } from '../../global/constants';

const MaskControl = ({ controlName, requiredProps }) => {
    const { attributes, setAttributes } = requiredProps;

    const {
        [`${controlName}MaskImage`]: maskImage,
        [`${controlName}CustomMaskImage`]: customMaskImage,
        [`${controlName}MaskSize`]: maskSize,
        [`${controlName}MaskPosition`]: maskPosition,
        [`${controlName}MaskRepeat`]: maskRepeat,
    } = attributes;

    return (
        <>
            <ZoloSelectControl
                label={__('Mask Shape', 'zoloblocks')}
                value={maskImage}
                options={MASK_SHAPES}
                onChange={(v) =>
                    setAttributes({
                        [`${controlName}MaskImage`]: v,
                    })
                }
            />
            {maskImage === 'custom' && (
                <ZoloBaseControl label={__('Custom Mask', 'zoloblocks')} className="zolo-flex-col-control">
                    {customMaskImage ? (
                        <ImageAvatar
                            imageUrl={customMaskImage && customMaskImage.url}
                            onDeleteImage={() =>
                                setAttributes({
                                    [`${controlName}CustomMaskImage`]: null,
                                })
                            }
                            imageId={customMaskImage && customMaskImage.id}
                            onEditImage={(media) => {
                                setAttributes({
                                    [`${controlName}CustomMaskImage`]: media,
                                });
                            }}
                        />
                    ) : (
                        <MediaUpload
                            onSelect={(media) => {
                                setAttributes({
                                    [`${controlName}CustomMaskImage`]: {
                                        id: media.id,
                                        url: media.url,
                                    },
                                });
                            }}
                            allowedTypes={['image']}
                            value={customMaskImage && customMaskImage.id}
                            render={({ open }) => (
                                <ZoloButton className="zolo-image-upload-btn" onClick={open}>
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                                        <path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408" />
                                    </svg>
                                    {__(' Upload Mask', 'zoloblocks')}
                                </ZoloButton>
                            )}
                        />
                    )}
                </ZoloBaseControl>
            )}
            {maskImage && maskImage !== undefined && (
                <>
                    <ZoloSelectControl
                        label={__('Mask Size', 'zoloblocks')}
                        value={maskSize}
                        options={MASK_SIZES}
                        onChange={(v) =>
                            setAttributes({
                                [`${controlName}MaskSize`]: v,
                            })
                        }
                    />

                    <ZoloSelectControl
                        label={__('Mask Position', 'zoloblocks')}
                        value={maskPosition}
                        options={MASK_POSITIONS}
                        onChange={(v) =>
                            setAttributes({
                                [`${controlName}MaskPosition`]: v,
                            })
                        }
                    />

                    <ZoloSelectControl
                        label={__('Mask Repeat', 'zoloblocks')}
                        value={maskRepeat}
                        options={MASK_REPEATS}
                        onChange={(v) =>
                            setAttributes({
                                [`${controlName}MaskRepeat`]: v,
                            })
                        }
                    />
                </>
            )}
        </>
    );
};

export default MaskControl;
