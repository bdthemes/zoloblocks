import {
  __experimentalBorderBoxControl as BorderBoxControl
} from '@wordpress/components';
import ResDeviceBtn from '../res-device-btn';

const BorderControl = ({
  label,
  controlName,
  resRequiredProps
}) => {

  const { attributes, setAttributes, resMode } = resRequiredProps;
  const borderAttr = `${resMode === 'Desktop' ? '' : resMode.slice(0, 3).toUpperCase()}${controlName}Border`;
  const borderVal = attributes[borderAttr];

  const setSettings = (val) => {
    setAttributes({ [borderAttr]: val });
  };

  return (
    <div className="border-control-wrapper">

      <ResDeviceBtn
        resRequiredProps={resRequiredProps}
        label={label}>

        <BorderBoxControl
          value={borderVal}
          onChange={(newBorder) => { setSettings(newBorder) }}
        />

      </ResDeviceBtn>
    </div>
  )

}

export default BorderControl;
