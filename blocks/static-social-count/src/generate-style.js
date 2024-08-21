// Function to generateStyle style object for a given profile
const generateStyle = (profile) => {
  const style = {};

  // Conditionally adding styles only if the profile properties are defined
  if (profile.bgColor) style['--zolo-ssc-bg'] = profile.bgColor;
  if (profile.bgHoverColor) style['--zolo-ssc-hbg'] = profile.bgHoverColor;
  if (profile.iconColor) style['--zolo-ssc-icon-color'] = profile.iconColor;
  if (profile.iconBgColor) style['--zolo-ssc-icon-bg'] = profile.iconBgColor;
  if (profile.iconBorderColor) style['--zolo-ssc-icon-border'] = profile.iconBorderColor;
  if (profile.iconHColor) style['--zolo-ssc-icon-hcolor'] = profile.iconHColor;
  if (profile.iconHBgColor) style['--zolo-ssc-icon-hbg'] = profile.iconHBgColor;
  if (profile.iconHBorderColor) style['--zolo-ssc-icon-hborder'] = profile.iconHBorderColor;
  if (profile.numberColor) style['--zolo-ssc-number-color'] = profile.numberColor;
  if (profile.numberHoverColor) style['--zolo-ssc-number-hcolor'] = profile.numberHoverColor;
  if (profile.metaSSHColor) style['--zolo-ssc-meta-color'] = profile.metaSSHColor;
  if (profile.metaSSHHoverColor) style['--zolo-ssc-meta-hcolor'] = profile.metaSSHHoverColor;

  return style;
};

export default generateStyle;
