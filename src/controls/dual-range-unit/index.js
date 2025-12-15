import { BaseControl, Button } from '@wordpress/components';
import { link, linkOff } from '@wordpress/icons';
import ZoloRangeUnit from '../range-unit';
import { __ } from '@wordpress/i18n';

const ZoloDualRangeUnit = ({
    label = __('Dual Range', 'zoloblocks'),
    help,
    dualLabel = [__('First', 'zoloblocks'), __('Second', 'zoloblocks')],
    value = {},
    onChange,
    ...props
}) => {
    const {
        linked = true,
        first,
        second,
    } = value;

    const update = (patch) => {
        onChange({ ...value, ...patch });
    };

    const toggleLink = () => {
        update({
            linked: !linked,
            second: first,
        });
    };

    return (
        <BaseControl label={label} help={help}>
            <div className="zb-dual-range-unit">
                <Button
                    icon={linked ? link : linkOff}
                    size='small'
                    onClick={toggleLink}
                    aria-pressed={linked}
                />

                {linked && (
                    <ZoloRangeUnit
                        value={first}
                        onChange={(val) =>
                            update({ first: val, second: val })
                        }
                        {...props}
                    />
                )}

                {!linked && (
                    <>
                        <ZoloRangeUnit
                            label={dualLabel[0]}
                            value={first}
                            onChange={(val) => update({ first: val })}
                            {...props}
                        />
                        <ZoloRangeUnit
                            label={dualLabel[1]}
                            value={second}
                            onChange={(val) => update({ second: val })}
                            {...props}
                        />
                    </>
                )}
            </div>
        </BaseControl>
    );
};

export default ZoloDualRangeUnit;
