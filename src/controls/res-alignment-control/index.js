import WithResDeviceBtn from '../with-res-device-btn';
import IconicBtnGroup from '../iconic-btn-group';

import { DEFAULT_ALIGNS } from '../../global/constants';
import classNames from 'classnames';
import ResetBtn from '../reset-btn';

const ResAlignmentControl = ({ label, controlName, requiredProps, alignOptions, customClass = '' }) => {
    const { attributes, setAttributes, resMode } = requiredProps;

    const {
        [`${controlName}ZRPAlign`]: desktopAlignment,
        [`TAB${controlName}ZRPAlign`]: tabletAlignment,
        [`MOB${controlName}ZRPAlign`]: mobileAlignment,
    } = attributes;

    const defaultAlign = alignOptions && Array.isArray(alignOptions) ? alignOptions : DEFAULT_ALIGNS;
    return (
        <div className={classNames('zb-res-alignment-control-wrapper', customClass)}>
            {resMode == 'Desktop' && (
                <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName} noResetBtn={true}>
                    {desktopAlignment && (
                        <ResetBtn
                            customClass="zb-align-reset-btn"
                            onReset={() => {
                                setAttributes({
                                    [`${controlName}ZRPAlign`]: '',
                                });
                            }}
                        />
                    )}

                    <IconicBtnGroup
                        onChange={(newAlign) => {
                            setAttributes({
                                [`${controlName}ZRPAlign`]: newAlign,
                            });
                        }}
                        value={desktopAlignment}
                        options={defaultAlign}
                    />
                </WithResDeviceBtn>
            )}

            {resMode == 'Tablet' && (
                <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName} noResetBtn={true}>
                    {tabletAlignment && (
                        <ResetBtn
                            customClass="zb-align-reset-btn"
                            onReset={() => {
                                setAttributes({
                                    [`TAB${controlName}ZRPAlign`]: '',
                                });
                            }}
                        />
                    )}
                    <IconicBtnGroup
                        onChange={(newAlign) => {
                            setAttributes({
                                [`TAB${controlName}ZRPAlign`]: newAlign,
                            });
                        }}
                        value={tabletAlignment}
                        options={defaultAlign}
                    />
                </WithResDeviceBtn>
            )}

            {resMode == 'Mobile' && (
                <WithResDeviceBtn label={label} requiredProps={requiredProps} controlName={controlName} noResetBtn={true}>
                    {mobileAlignment && (
                        <ResetBtn
                            customClass="zb-align-reset-btn"
                            onReset={() => {
                                setAttributes({
                                    [`MOB${controlName}ZRPAlign`]: '',
                                });
                            }}
                        />
                    )}
                    <IconicBtnGroup
                        onChange={(newAlign) => {
                            setAttributes({
                                [`MOB${controlName}ZRPAlign`]: newAlign,
                            });
                        }}
                        value={mobileAlignment}
                        options={defaultAlign}
                    />
                </WithResDeviceBtn>
            )}
        </div>
    );
};
export default ResAlignmentControl;
