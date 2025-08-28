const { DisplayZoloIcon, sanitizeText } = window.zoloModule;

export default function RenderView({ attributes }) {
    const { homeText, homeIcon, showSeparator, separatorIcon } = attributes;

    return (
        <ul className="breadcrumb-items">
            <li className="breadcrumb-item home">
                <a href="#" className="name">
                    {homeIcon && <DisplayZoloIcon icon={homeIcon} />} {sanitizeText(homeText)}
                </a>
                {showSeparator && (
                    <span className="separator">
                        <DisplayZoloIcon icon={separatorIcon} />
                    </span>
                )}
            </li>
            <li className="breadcrumb-item parent">
                <a href="#" className="name">
                    Item Parent
                </a>
                {showSeparator && (
                    <span className="separator">
                        <DisplayZoloIcon icon={separatorIcon} />
                    </span>
                )}
            </li>
            <li className="breadcrumb-item current">
                <span className="name">Item Current</span>
            </li>
        </ul>
    );
}
