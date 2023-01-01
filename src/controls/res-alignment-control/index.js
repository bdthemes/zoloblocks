import { Button, ButtonGroup } from "@wordpress/components";
import WithResDeviceBtn from "../with-res-device-btn";

const ResAlignmentControl = ({
  label,
  controlName,
  resRequiredProps,
  alignOptions,
  alignText,
}) => {
  const { attributes, setAttributes, resDevice } = resRequiredProps;

  const {
    [`${controlName}Align`]: desktopAlignment,
    [`TAB${controlName}Align`]: tabletAlignment,
    [`MOB${controlName}Align`]: mobileAlignment,
  } = attributes;

  const defaultAlign =
    alignOptions && Array.isArray(alignOptions)
      ? alignOptions
      : [
          { label: "Left", value: "left" },
          { label: "Center", value: "center" },
          { label: "Right", value: "right" },
        ];
  return (
    <div className="res-alignment-control-wrapper">
      {resDevice == "Desktop" && (
        <WithResDeviceBtn
          label={label}
          resRequiredProps={resRequiredProps}
          controlName={controlName}
        >
          <ButtonGroup className="zb-align-control-btn-group">
            {defaultAlign.map((alignItem, index) => {
              return (
                <Button
                  onClick={() =>
                    setAttributes({ [`${controlName}Align`]: alignItem.value })
                  }
                  className={`rb-button ${
                    desktopAlignment == alignItem.value ? "active" : ""
                  }`}
                  variant={
                    desktopAlignment === alignItem.value
                      ? "primary"
                      : "secondary"
                  }
                >
                  {alignText ? (
                    <span>{alignItem.label}</span>
                  ) : (
                    <span
                      className={`dashicon dashicons dashicons-editor-${
                        alignItem.value == "justify"
                          ? alignItem.value
                          : "align" + alignItem.value
                      }`}
                    ></span>
                  )}
                </Button>
              );
            })}
          </ButtonGroup>
        </WithResDeviceBtn>
      )}

      {resDevice == "Tablet" && (
        <WithResDeviceBtn
          label={label}
          resRequiredProps={resRequiredProps}
          controlName={controlName}
        >
          <ButtonGroup className="zb-align-control-btn-group">
            {defaultAlign.map((alignItem, index) => {
              return (
                <Button
                  onClick={() =>
                    setAttributes({
                      [`TAB${controlName}Align`]: alignItem.value,
                    })
                  }
                  className={`rb-button ${
                    tabletAlignment == alignItem.value ? "active" : ""
                  }`}
                  variant={
                    tabletAlignment === alignItem.value
                      ? "primary"
                      : "secondary"
                  }
                >
                  {alignText ? (
                    <span>{alignItem.label}</span>
                  ) : (
                    <span
                      className={`dashicon dashicons dashicons-editor-${
                        alignItem.value == "justify"
                          ? alignItem.value
                          : "align" + alignItem.value
                      }`}
                    ></span>
                  )}
                </Button>
              );
            })}
          </ButtonGroup>
        </WithResDeviceBtn>
      )}

      {resDevice == "Mobile" && (
        <WithResDeviceBtn
          label={label}
          resRequiredProps={resRequiredProps}
          controlName={controlName}
        >
          <ButtonGroup className="zb-align-control-btn-group">
            {defaultAlign.map((alignItem, index) => {
              return (
                <Button
                  onClick={() =>
                    setAttributes({
                      [`MOB${controlName}Align`]: alignItem.value,
                    })
                  }
                  className={`rb-button ${
                    mobileAlignment == alignItem.value ? "active" : ""
                  }`}
                  variant={
                    mobileAlignment === alignItem.value
                      ? "primary"
                      : "secondary"
                  }
                >
                  {alignText ? (
                    <span className="align-text">{alignItem.label}</span>
                  ) : (
                    <span
                      className={`align-icon dashicon dashicons dashicons-editor-${
                        alignItem.value == "justify"
                          ? alignItem.value
                          : "align" + alignItem.value
                      }`}
                    ></span>
                  )}
                </Button>
              );
            })}
          </ButtonGroup>
        </WithResDeviceBtn>
      )}
    </div>
  );
};
export default ResAlignmentControl;
