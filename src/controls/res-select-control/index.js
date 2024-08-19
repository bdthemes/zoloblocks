import WithResDeviceBtn from '../with-res-device-btn';

import { DEFAULT_ALIGNS } from '../../global/constants';
import classNames from 'classnames';
import ResetBtn from '../reset-btn';
import { SelectControl } from '@wordpress/components';

const ResSelectControl = ({ label, controlName, requiredProps, alignOptions, customClass = '' }) => {
    const { attributes, setAttributes, resMode } = requiredProps;

    const {
        [`${controlName}ZRPSelect`]: desktopSelect,
        [`TAB${controlName}ZRPSelect`]: tabletSelect,
        [`MOB${controlName}ZRPSelect`]: mobileSelect,
    } = attributes;

    const defaultSelect = alignOptions && Array.isArray(alignOptions) ? alignOptions : DEFAULT_ALIGNS;
    return (
        <div className={classNames('zb-res-alignment-control-wrapper', customClass)}>
            {resMode == 'Desktop' && (
                <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName} noResetBtn={true}>
                    {desktopSelect && (
                        <ResetBtn
                            customClass="zb-align-reset-btn"
                            onReset={() => {
                                setAttributes({
                                    [`${controlName}ZRPSelect`]: '',
                                });
                            }}
                        />
                    )}
                    <SelectControl
                        value={desktopSelect}
                        options={defaultSelect}
                        onChange={(newSelect) => {
                            setAttributes({
                                [`${controlName}ZRPSelect`]: newSelect,
                            });
                        }}
                    />
                </WithResDeviceBtn>
            )}

            {resMode == 'Tablet' && (
                <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName} noResetBtn={true}>
                    {tabletSelect && (
                        <ResetBtn
                            customClass="zb-align-reset-btn"
                            onReset={() => {
                                setAttributes({
                                    [`TAB${controlName}ZRPSelect`]: '',
                                });
                            }}
                        />
                    )}
                    <SelectControl
                        value={tabletSelect}
                        options={defaultSelect}
                        onChange={(newSelect) => {
                            setAttributes({
                                [`TAB${controlName}ZRPSelect`]: newSelect,
                            });
                        }}
                    />
                </WithResDeviceBtn>
            )}

            {resMode == 'Mobile' && (
                <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName} noResetBtn={true}>
                    {mobileSelect && (
                        <ResetBtn
                            customClass="zb-align-reset-btn"
                            onReset={() => {
                                setAttributes({
                                    [`MOB${controlName}ZRPSelect`]: '',
                                });
                            }}
                        />
                    )}
                    <SelectControl
                        value={mobileSelect}
                        options={defaultSelect}
                        onChange={(newSelect) => {
                            setAttributes({
                                [`MOB${controlName}ZRPSelect`]: newSelect,
                            });
                        }}
                    />
                </WithResDeviceBtn>
            )}
        </div>
    );
};
export default ResSelectControl;
