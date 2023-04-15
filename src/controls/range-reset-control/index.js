import { RangeControl } from '@wordpress/components';
import ResetControl from '../reset-control';

const RangeResetControl = ({
  label, controlName, min, max, step, help,
  resRequiredProps
}) => {
  const dataAttributes = { min, max, step, help };
  const { attributes, setAttributes, objAttributes } = resRequiredProps;
  const {
    [controlName]: controlVal,
  } = attributes;
  return (
    <ResetControl
      onReset={() =>
        setAttributes({
          [controlName]: objAttributes[controlName].default,
        })
      }
    >
      <RangeControl
        label={label}
        value={controlVal}
        onChange={(val) => setAttributes({ [controlName]: val })}
        {...dataAttributes}
      />
    </ResetControl>
  )
}

export default RangeResetControl;


