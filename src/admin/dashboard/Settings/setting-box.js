const SettingBox = ({ title = 'Option title', description = '', children, released = true }) => {
    return (
        <div className={`zolo-settings-option-item ${released ? '' : 'upcoming'}`}>
            <div className="zolo-settins-content">
                {title && <h2 className="zolo-settings-title">{title}</h2>}
                {description && <p className="zolo-settings-text">{description}</p>}
            </div>
            {children}
            {!released && <span className="zolo-badge-upcoming">{__('Coming Soon', 'zoloblocks')}</span>}
        </div>
    );
};

export default SettingBox;
