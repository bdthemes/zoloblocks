const SettingBox = ({ title = 'Option title', description = '', children }) => {
    return (
        <div className="zolo-settings-option-item">
            <div className="zolo-settins-content">
                {title && <h2 className="zolo-settings-title">{title}</h2>}
                {description && <p className="zolo-settings-text">{description}</p>}
            </div>
            {children}
        </div>
    );
};

export default SettingBox;
