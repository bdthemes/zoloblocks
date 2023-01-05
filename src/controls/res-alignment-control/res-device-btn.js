import { dispatch } from "@wordpress/data";

const WithResDeviceBtn = ({
  label,
  resRequiredProps,
  children,
  controlName,
}) => {
  const { resDevice, objAttributes, setAttributes } = resRequiredProps;

  const onReset = () => {
    resDevice == "Desktop"
      ? setAttributes({
          [`${controlName}ZRPAlign`]:
            objAttributes[`${controlName}ZRPAlign`].default,
        })
      : "";

    resDevice == "Tablet"
      ? setAttributes({
          [`TAB${controlName}ZRPAlign`]:
            objAttributes[`TAB${controlName}ZRPAlign`].default,
        })
      : "";

    resDevice == "Mobile"
      ? setAttributes({
          [`MOB${controlName}ZRPAlign`]:
            objAttributes[`MOB${controlName}ZRPAlign`].default,
        })
      : "";
  };

  const onDesktopBtnClick = ({ setAttributes }) => {
    setAttributes({ resDevice: "Desktop" });
    dispatch("core/edit-post").__experimentalSetPreviewDeviceType("Desktop");
  };

  const onTabletBtnClick = ({ setAttributes }) => {
    setAttributes({ resDevice: "Tablet" });
    dispatch("core/edit-post").__experimentalSetPreviewDeviceType("Tablet");
  };

  const onMobileBtnClick = ({ setAttributes }) => {
    setAttributes({ resDevice: "Mobile" });
    dispatch("core/edit-post").__experimentalSetPreviewDeviceType("Mobile");
  };

  return (
    <div className="zb-res-device-btn-wrapper">
      <div className="res-btns">
        <span className="res-btn-label">{label}</span>

        <span
          className={`res-btn dashicons dashicons-desktop ${
            resDevice === "Desktop" ? "active" : " "
          }`}
          onClick={() => onDesktopBtnClick({ setAttributes })}
        ></span>

        <span
          className={`res-btn dashicons dashicons-tablet ${
            resDevice === "Tablet" ? "active" : " "
          }`}
          onClick={() => onTabletBtnClick({ setAttributes })}
        ></span>

        <span
          className={`res-btn dashicons dashicons-smartphone ${
            resDevice === "Mobile" ? "active" : " "
          }`}
          onClick={() => onMobileBtnClick({ setAttributes })}
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
