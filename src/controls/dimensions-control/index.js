import UnitBtn from "../unit-btn";
import DimensionControl from "./dimension";

const ResDimensionsControl = ({
  label,
  controlName,
  resRequiredProps,
  forBorderRadius,
  units,
}) => {
  const { attributes, setAttributes, resDevice } = resRequiredProps;

  const {
    [`${controlName}ZRPUnit`]: dimensionUnit,
    [`${controlName}ZRPTop`]: dimensionTop,
    [`${controlName}ZRPRight`]: dimensionRight,
    [`${controlName}ZRPBottom`]: dimensionBottom,
    [`${controlName}ZRPLeft`]: dimensionLeft,

    [`TAB${controlName}ZRPUnit`]: TABdimensionUnit,
    [`TAB${controlName}ZRPTop`]: TABdimensionTop,
    [`TAB${controlName}ZRPRight`]: TABdimensionRight,
    [`TAB${controlName}ZRPBottom`]: TABdimensionBottom,
    [`TAB${controlName}ZRPLeft`]: TABdimensionLeft,

    [`MOB${controlName}ZRPUnit`]: MOBdimensionUnit,
    [`MOB${controlName}ZRPTop`]: MOBdimensionTop,
    [`MOB${controlName}ZRPRight`]: MOBdimensionRight,
    [`MOB${controlName}ZRPBottom`]: MOBdimensionBottom,
    [`MOB${controlName}ZRPLeft`]: MOBdimensionLeft,

    [`${controlName}ZRPisLinked`]: dimensionIsLinked,
  } = attributes;

  const defaultUnits = [
    { label: "px", value: "px" },
    { label: "em", value: "em" },
    { label: "%", value: "%" },
  ];

  const neededProps = {
    label,
    controlName,
    setAttributes,
    resDevice,
    dimensionIsLinked,
    forBorderRadius,
    controlName,
  };

  return (
    <div className="dimensions-control-wraper">
      {resDevice == "Desktop" && (
        <>
          <UnitBtn
            selectedUnit={dimensionUnit}
            unitTypes={units || defaultUnits}
            onClick={(dimensionUnit) =>
              setAttributes({ [`${controlName}ZRPUnit`]: dimensionUnit })
            }
          />
          <DimensionControl
            top={dimensionTop}
            right={dimensionRight}
            bottom={dimensionBottom}
            left={dimensionLeft}
            neededProps={neededProps}
            onChange={({ top, right, bottom, left }) => {
              setAttributes({
                [`${controlName}ZRPTop`]: top,
                [`${controlName}ZRPRight`]: right,
                [`${controlName}ZRPBottom`]: bottom,
                [`${controlName}ZRPLeft`]: left,
              });
            }}
          />
        </>
      )}

      {resDevice == "Tablet" && <></>}

      {resDevice == "Mobile" && <></>}
    </div>
  );
};

export default ResDimensionsControl;
