import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

import { SelectControl } from '@wordpress/components';

import { MASK_SIZES, MASK_POSITIONS, MASK_REPEATS, MASK_SHAPES } from '../../global/constants';

const MaskControl = ({ controlName, requiredProps }) => {
    const { attributes, setAttributes } = requiredProps;

    const {
        [`${controlName}MaskImage`]: maskImage,
        [`${controlName}MaskSize`]: maskSize,
        [`${controlName}MaskPosition`]: maskPosition,
        [`${controlName}MaskRepeat`]: maskRepeat,
    } = attributes;

    return (
        <Fragment>
            <SelectControl
                label={__('Mask Shape', 'zoloblocks')}
                value={maskImage}
                options={MASK_SHAPES}
                onChange={(v) =>
                    setAttributes({
                        [`${controlName}MaskImage`]: v,
                    })
                }
            />
            {maskImage && maskImage !== undefined && (
                <>
                    <SelectControl
                        label={__('Mask Size', 'zoloblocks')}
                        value={maskSize}
                        options={MASK_SIZES}
                        onChange={(v) =>
                            setAttributes({
                                [`${controlName}MaskSize`]: v,
                            })
                        }
                    />

                    <SelectControl
                        label={__('Mask Position', 'zoloblocks')}
                        value={maskPosition}
                        options={MASK_POSITIONS}
                        onChange={(v) =>
                            setAttributes({
                                [`${controlName}MaskPosition`]: v,
                            })
                        }
                    />

                    <SelectControl
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
        </Fragment>
    );
};

export default MaskControl;
