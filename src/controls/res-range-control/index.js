import { RangeControl } from "@wordpress/components";
import UnitBtn from "../unit-btn";
import WithResDeviceBtn from "./res-device-btn";

const ResRangeControl = ({
  label,
  controlName,
  units,
  resRequiredProps,
  min,
  max,
  step,
  noUnits,
}) => {
  const { attributes, setAttributes, resDevice } = resRequiredProps;
  const {
    [`${controlName}ZRPRange`]: desktopRange,
    [`TAB${controlName}ZRPRange`]: tabRange,
    [`MOB${controlName}ZRPRange`]: mobRange,
  } = attributes;
  let sizeUnit;
  let TABsizeUnit;
  let MOBsizeUnit;
  let defaultUnits;

  if (!noUnits) {
    sizeUnit = attributes[`${controlName}Unit`];
    TABsizeUnit = attributes[`TAB${controlName}Unit`];
    MOBsizeUnit = attributes[`MOB${controlName}Unit`];
    defaultUnits = [
      { label: "px", value: "px" },
      { label: "em", value: "em" },
      { label: "%", value: "%" },
    ];
  }

  return (
    <div className="zb-res-range-control-wrapper">
      {noUnits ? (
        <>
          {resDevice == "Desktop" && (
            <WithResDeviceBtn
              label={label}
              resRequiredProps={resRequiredProps}
              controlName={controlName}
            >
              <RangeControl
                value={desktopRange}
                onChange={(val) =>
                  setAttributes({ [`${controlName}ZRPRange`]: val })
                }
                min={min || 0}
                max={max || 100}
                step={step || 1}
              />
            </WithResDeviceBtn>
          )}

          {resDevice == "Tablet" && (
            <WithResDeviceBtn
              label={label}
              resRequiredProps={resRequiredProps}
              controlName={controlName}
            >
              <RangeControl
                value={tabRange}
                onChange={(val) =>
                  setAttributes({ [`TAB${controlName}ZRPRange`]: val })
                }
                min={min || 0}
                max={max || 100}
                step={step || 1}
              />
            </WithResDeviceBtn>
          )}

          {resDevice == "Mobile" && (
            <WithResDeviceBtn
              label={label}
              resRequiredProps={resRequiredProps}
              controlName={controlName}
            >
              <RangeControl
                value={mobRange}
                onChange={(val) =>
                  setAttributes({ [`MOB${controlName}ZRPRange`]: val })
                }
                min={min || 0}
                max={max || 100}
                step={step || 1}
              />
            </WithResDeviceBtn>
          )}
        </>
      ) : (
        <>
          {resDevice == "Desktop" && (
            <>
              <UnitBtn
                selectedUnit={sizeUnit}
                unitTypes={units || defaultUnits}
                onClick={(sizeUnit) =>
                  setAttributes({
                    [`${controlName}Unit`]: sizeUnit,
                  })
                }
              />

              <WithResDeviceBtn
                label={label}
                resRequiredProps={resRequiredProps}
                controlName={controlName}
              >
                <RangeControl
                  value={desktopRange}
                  onChange={(val) =>
                    setAttributes({ [`${controlName}ZRPRange`]: val })
                  }
                  min={min || 0}
                  max={max || 100}
                  step={step || 1}
                />
              </WithResDeviceBtn>
            </>
          )}

          {resDevice == "Tablet" && (
            <>
              <UnitBtn
                selectedUnit={TABsizeUnit}
                unitTypes={units || defaultUnits}
                onClick={(TABsizeUnit) =>
                  setAttributes({
                    [`TAB${controlName}Unit`]: TABsizeUnit,
                  })
                }
              />
              <WithResDeviceBtn
                label={label}
                resRequiredProps={resRequiredProps}
                controlName={controlName}
              >
                <RangeControl
                  value={tabRange}
                  onChange={(val) =>
                    setAttributes({ [`TAB${controlName}ZRPRange`]: val })
                  }
                  min={min || 0}
                  max={max || 100}
                  step={step || 1}
                />
              </WithResDeviceBtn>
            </>
          )}

          {resDevice == "Mobile" && (
            <>
              <UnitBtn
                selectedUnit={MOBsizeUnit}
                unitTypes={units || defaultUnits}
                onClick={(MOBsizeUnit) =>
                  setAttributes({
                    [`MOB${controlName}Unit`]: MOBsizeUnit,
                  })
                }
              />
              <WithResDeviceBtn
                label={label}
                resRequiredProps={resRequiredProps}
                controlName={controlName}
              >
                <RangeControl
                  value={mobRange}
                  onChange={(val) =>
                    setAttributes({ [`MOB${controlName}ZRPRange`]: val })
                  }
                  min={min || 0}
                  max={max || 100}
                  step={step || 1}
                />
              </WithResDeviceBtn>
            </>
          )}
        </>
      )}
    </div>
  );
};
export default ResRangeControl;
