import UnitBtn from "../unit-btn";
import WithResDeviceBtn from "../with-res-device-btn";

const ResRangeController = ({
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
    <div className="res-range-controller-wrapper">
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
              <h1>Range</h1>
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
              Range
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
              Rnage
            </WithResDeviceBtn>
          </>
        )}
      </>
    </div>
  );
};
export default ResRangeController;
