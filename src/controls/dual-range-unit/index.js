import { BaseControl, Button } from '@wordpress/components';
import { link, linkOff } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import ZoloRangeUnit from '../range-unit';

/**
 * Default value shape for the control
 * Keep this outside to avoid re-creation on each render
 */
const DEFAULT_VALUE = {
    linked: true,
    first: undefined,
    second: undefined,
};

const ZoloDualRangeUnit = ({
    label = __('Dual Range', 'zoloblocks'),
    help,
    dualLabel = [__('First', 'zoloblocks'), __('Second', 'zoloblocks')],
    value,
    onChange,
    ...props
}) => {

    const normalizedValue = value ?? DEFAULT_VALUE;
    
    const update = (patch) => {
        onChange({
            ...normalizedValue,
            ...patch,
        });
    };

    const toggleLink = () => {
        update({
            linked: !normalizedValue.linked,
            second: normalizedValue.first,
        });
    };

    return (
        <BaseControl
            label={label}
            help={help}
            className="zb-dual-range-unit"
        >
            <Button
                icon={normalizedValue.linked ? link : linkOff}
                className="zb-dual-range-unit__toggle-link"
                size="small"
                onClick={toggleLink}
                aria-pressed={normalizedValue.linked}
            />

            {normalizedValue.linked ? (
                <ZoloRangeUnit
                    label=""
                    value={normalizedValue.first}
                    onChange={(val) =>
                        update({ first: val, second: val })
                    }
                    {...props}
                />
            ) : (
                <>
                    <ZoloRangeUnit
                        label={dualLabel[0]}
                        value={normalizedValue.first}
                        onChange={(val) =>
                            update({ first: val })
                        }
                        {...props}
                    />
                    <ZoloRangeUnit
                        label={dualLabel[1]}
                        value={normalizedValue.second}
                        onChange={(val) =>
                            update({ second: val })
                        }
                        {...props}
                    />
                </>
            )}
        </BaseControl>
    );
};

export default ZoloDualRangeUnit;
