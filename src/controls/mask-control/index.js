import { __ } from '@wordpress/i18n';
import { MediaUpload } from '@wordpress/block-editor';

import { ZoloSelectControl, ZoloBaseControl, ZoloButton } from '../core-controls';
import ImageAvatar from '../image-avatar';
import ThumbsControl from '../thumbs-control';
import PopoverControl from '../popover-control';

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
            <PopoverControl
                label={__('Mask Shape', 'zoloblocks')}
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path
                            d="M2 19.9893V2.99264C2 2.44013 2.43656 2 2.96407 2H21.0359C21.5725 2 22 2.4495 22 2.99264V17.0863C22 17.7699 21.3543 18.2475 20.7267 18.0321C19.0896 17.4609 16.0609 16.9833 12.7958 19.315C9.31241 21.7966 5.41064 23.117 2.3638 20.7853C2.12733 20.6073 2 20.2983 2 19.9986V19.9893Z"
                            stroke="#4D4D4D"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                }
            >
                <ThumbsControl
                    value={maskImage}
                    options={MASK_SHAPES}
                    onChange={(selectedOption) =>
                        setAttributes({
                            [`${controlName}MaskImage`]: selectedOption.value,
                            [`${controlName}CustomMaskImage`]: selectedOption.image ? { url: selectedOption.image } : null,
                        })
                    }
                />
            </PopoverControl>
            {maskImage && maskImage !== undefined && maskImage !== '' && (
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
