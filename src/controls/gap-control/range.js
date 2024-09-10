import { useEffect, useState } from '@wordpress/element';
import { prefix } from '../../global/constants';
import WithResDeviceBtn from '../with-res-device-btn';
import { __ } from '@wordpress/i18n';
import { RangeControl } from '@wordpress/components';

const ResRange = ({ gap, gapAttr, rowGap, rowGapAttr, colGap, colGapAttr, neededProps, max = null }) => {
    const { label, setAttributes, controlName, isLinked } = neededProps;

    useEffect(() => {
        setAttributes({
            [`${prefix}${controlName}IsLinked`]: isLinked,
        });
    }, [isLinked]);

    return (
        <div className="zb-dimension-container zolo-gap-control">
            <WithResDeviceBtn label={label} requiredProps={neededProps} controlName={controlName}>
                <div className={`input-container ${isLinked ? 'input-grouped' : 'input-separated'}`}>
                    {isLinked && (
                        <RangeControl
                            value={gap}
                            onChange={(value) =>
                                setAttributes({
                                    [gapAttr]: value,
                                })
                            }
                            max={max || 100}
                        />
                    )}
                    {!isLinked && (
                        <>
                            <div className="input-wrap">
                                <RangeControl
                                    className="zolo-flex-col-control"
                                    label={__('Row', 'zoloblocks')}
                                    value={rowGap}
                                    onChange={(v) =>
                                        setAttributes({
                                            [rowGapAttr]: v,
                                        })
                                    }
                                    min={0}
                                    max={max || 100}
                                />
                                <RangeControl
                                    className="zolo-flex-col-control"
                                    label={__('Column', 'zoloblocks')}
                                    value={colGap}
                                    onChange={(v) =>
                                        setAttributes({
                                            [colGapAttr]: v,
                                        })
                                    }
                                    min={0}
                                    max={max || 100}
                                />
                            </div>
                        </>
                    )}
                </div>
            </WithResDeviceBtn>
        </div>
    );
};

export default ResRange;
