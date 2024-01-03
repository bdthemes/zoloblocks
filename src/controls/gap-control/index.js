import UnitsBtn from '../units-btn';
import { prefix } from '../../global/constants';
import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import ResetBtn from '../reset-btn';
import LinkUnlink from '../link-unlink';
import ResRange from './range';

const ResGapControl = ({ label, controlName, requiredProps, units = null, max = null }) => {
    const { attributes, setAttributes, resMode } = requiredProps;

    const {
        [`${prefix}${controlName}Gap`]: desktopGap,
        [`${prefix}${controlName}RowGap`]: desktopRowGap,
        [`${prefix}${controlName}ColGap`]: desktopColGap,

        [`${prefix}TAB${controlName}Gap`]: tabGap,
        [`${prefix}TAB${controlName}RowGap`]: tabRowGap,
        [`${prefix}TAB${controlName}ColGap`]: tabColGap,

        [`${prefix}MOB${controlName}Gap`]: mobGap,
        [`${prefix}MOB${controlName}RowGap`]: mobRowGap,
        [`${prefix}MOB${controlName}ColGap`]: mobColGap,

        [`${prefix}${controlName}IsLinked`]: gapIsLinked,

        [`${prefix}${controlName}Unit`]: gapUnit,
        [`${prefix}TAB${controlName}Unit`]: tabGapUnit,
        [`${prefix}MOB${controlName}Unit`]: mobGapUnit,
    } = attributes;

    const [isLinked, setIsLinked] = useState(gapIsLinked);

    const defaultUnits = [
        { label: 'px', value: 'px' },
        { label: 'em', value: 'em' },
        { label: '%', value: '%' },
    ];

    const neededProps = {
        label,
        controlName,
        setAttributes,
        resMode,
        gapIsLinked,
        isLinked,
    };

    const onButtonClick = () => {
        setIsLinked(!isLinked);
    };

    return (
        <div className="zolo-dimensions-control-wraper">
            {resMode == 'Desktop' && (
                <>
                    <UnitsBtn
                        selectedUnit={gapUnit}
                        unitTypes={units || defaultUnits}
                        onClick={(v) =>
                            setAttributes({
                                [`${prefix}${controlName}Unit`]: v,
                            })
                        }
                    >
                        <Button
                            className={`zb-linked-btn ${isLinked ? 'zb-linked-btn-active' : ''}`}
                            icon={<LinkUnlink isLinked={isLinked} />}
                            onClick={onButtonClick}
                        />
                        {(desktopGap || desktopRowGap || desktopColGap) && (
                            <ResetBtn
                                customClass="zb-reset-has-value"
                                onReset={() => {
                                    setAttributes({
                                        [`${prefix}${controlName}Gap`]: '',
                                        [`${prefix}${controlName}RowGap`]: '',
                                        [`${prefix}${controlName}ColGap`]: '',
                                    });
                                }}
                            />
                        )}
                    </UnitsBtn>

                    <ResRange
                        gap={desktopGap}
                        gapAttr={`${prefix}${controlName}Gap`}
                        rowGap={desktopRowGap}
                        rowGapAttr={`${prefix}${controlName}RowGap`}
                        colGap={desktopColGap}
                        colGapAttr={`${prefix}${controlName}ColGap`}
                        controlName={controlName}
                        neededProps={neededProps}
                        max={max}
                    />
                </>
            )}

            {resMode == 'Tablet' && (
                <>
                    <UnitsBtn
                        selectedUnit={tabGapUnit}
                        unitTypes={units || defaultUnits}
                        onClick={(v) =>
                            setAttributes({
                                [`${prefix}TAB${controlName}Unit`]: v,
                            })
                        }
                    >
                        <Button
                            className={`zb-linked-btn ${isLinked ? 'zb-linked-btn-active' : ''}`}
                            icon={<LinkUnlink isLinked={isLinked} />}
                            onClick={onButtonClick}
                        />
                        {(tabGap || tabRowGap || tabColGap) && (
                            <ResetBtn
                                onReset={() => {
                                    setAttributes({
                                        [`${prefix}TAB${controlName}Gap`]: '',
                                        [`${prefix}TAB${controlName}RowGap`]: '',
                                        [`${prefix}TAB${controlName}ColGap`]: '',
                                    });
                                }}
                            />
                        )}
                    </UnitsBtn>

                    <ResRange
                        gap={tabGap}
                        gapAttr={`${prefix}TAB${controlName}Gap`}
                        rowGap={tabRowGap}
                        rowGapAttr={`${prefix}TAB${controlName}RowGap`}
                        colGap={tabColGap}
                        colGapAttr={`${prefix}TAB${controlName}ColGap`}
                        controlName={controlName}
                        neededProps={neededProps}
                        max={max}
                    />
                </>
            )}

            {resMode == 'Mobile' && (
                <>
                    <UnitsBtn
                        selectedUnit={mobGapUnit}
                        unitTypes={units || defaultUnits}
                        onClick={(v) =>
                            setAttributes({
                                [`${prefix}MOB${controlName}Unit`]: v,
                            })
                        }
                    >
                        <Button
                            className={`zb-linked-btn ${isLinked ? 'zb-linked-btn-active' : ''}`}
                            icon={<LinkUnlink isLinked={isLinked} />}
                            onClick={onButtonClick}
                        />
                        {(mobGap || mobRowGap || mobColGap) && (
                            <ResetBtn
                                onReset={() => {
                                    setAttributes({
                                        [`${prefix}MOB${controlName}Gap`]: '',
                                        [`${prefix}MOB${controlName}RowGap`]: '',
                                        [`${prefix}MOB${controlName}ColGap`]: '',
                                    });
                                }}
                            />
                        )}
                    </UnitsBtn>

                    <ResRange
                        gap={mobGap}
                        gapAttr={`${prefix}MOB${controlName}Gap`}
                        rowGap={mobRowGap}
                        rowGapAttr={`${prefix}MOB${controlName}RowGap`}
                        colGap={mobColGap}
                        colGapAttr={`${prefix}MOB${controlName}ColGap`}
                        controlName={controlName}
                        neededProps={neededProps}
                        max={max}
                    />
                </>
            )}
        </div>
    );
};

export default ResGapControl;
