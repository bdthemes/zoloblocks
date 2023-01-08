import { dispatch } from "@wordpress/data";

export const onDesktopBtnClick = ({ setAttributes }) => {
  setAttributes({ resDevice: "Desktop" });
  dispatch("core/edit-post").__experimentalSetPreviewDeviceType("Desktop");
};

export const onTabletBtnClick = ({ setAttributes }) => {
  setAttributes({ resDevice: "Tablet" });
  dispatch("core/edit-post").__experimentalSetPreviewDeviceType("Tablet");
};

export const onMobileBtnClick = ({ setAttributes }) => {
  setAttributes({ resDevice: "Mobile" });
  dispatch("core/edit-post").__experimentalSetPreviewDeviceType("Mobile");
};
