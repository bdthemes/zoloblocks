import WithResDeviceBtn from '../with-res-device-btn';
import IconicBtnGroup from '../iconic-btn-group';

import { DEFAULT_ALIGNS } from '../../global/constants';

const ResAlignmentControl = ({ label, controlName, resRequiredProps, alignOptions }) => {
    const { attributes, setAttributes, resMode } = resRequiredProps;

    const {
        [`${controlName}ZRPAlign`]: desktopAlignment,
        [`TAB${controlName}ZRPAlign`]: tabletAlignment,
        [`MOB${controlName}ZRPAlign`]: mobileAlignment,
    } = attributes;

    const defaultAlign = alignOptions && Array.isArray(alignOptions) ? alignOptions : DEFAULT_ALIGNS;
    return (
        <div className="zb-res-alignment-control-wrapper">
            {resMode == 'Desktop' && (
                <WithResDeviceBtn label={label} resRequiredProps={resRequiredProps} controlName={controlName}>
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
                <WithResDeviceBtn label={label} resRequiredProps={resRequiredProps} controlName={controlName}>
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
                <WithResDeviceBtn label={label} resRequiredProps={resRequiredProps} controlName={controlName}>
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
