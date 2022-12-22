const WithResDeviceBtn = ({
  label,
  resRequiredProps,
  children,
  noUnits,
  controlName,
}) => {
  const { resDevice, objAttributes, setAttributes } = resRequiredProps;

  const onReset = () => {
    if (noUnits) {
    } else {
      resDevice == "Desktop"
        ? setAttributes({
            [`${controlName}Range`]:
              objAttributes[`${controlName}Range`].default,
            [`${controlName}Unit`]:
              objAttributes[`${controlName}Unit`].default || "px",
          })
        : "";
    }
  };

  return (
    <div className="zb-res-device-btn-wrapper">
      <div className="res-btns">
        <span className="res-btn-label">{label}</span>
        <span
          className={`res-btn dashicons dashicons-desktop ${
            resDevice === "Desktop" ? "active" : " "
          }`}
        ></span>

        <span
          className={`res-btn dashicons dashicons-tablet ${
            resDevice === "Tablet" ? "active" : " "
          }`}
        ></span>

        <span
          className={`res-btn dashicons dashicons-smartphone ${
            resDevice === "Mobile" ? "active" : " "
          }`}
        ></span>
      </div>

      <div className="zb-component-wrapper">
        {children}

        <button className="zb-reset-button" onClick={onReset}>
          <span className="dashicon dashicons dashicons-image-rotate"></span>
        </button>
      </div>
    </div>
  );
};

export default WithResDeviceBtn;
