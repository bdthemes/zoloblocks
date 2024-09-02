const {DisplayZoloIcon} = window.zoloModule;
export default function RenderView({attributes}) {
  const {
    homeText,
    homeIcon,
    showSeparator,
    separatorIcon,
  } = attributes;

  return (
    <ul className="breadcrumb-items">
      <li className="breadcrumb-item home">
        <a href="#" className="name">{homeIcon && <DisplayZoloIcon icon={homeIcon}/>} {homeText}</a>
        {showSeparator && (
          <span className="separator">
            <DisplayZoloIcon icon={separatorIcon}/>
            </span>
        )}
      </li>
      <li className="breadcrumb-item parent">
        <a href="#" className="name">Demo Parent</a>
        {showSeparator && (
          <span className="separator">
            <DisplayZoloIcon icon={separatorIcon}/>
            </span>
        )}
      </li>
      <li className="breadcrumb-item current">
        <span className="name">Demo Current</span>
      </li>
    </ul>
  );
}
