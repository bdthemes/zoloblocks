import { __ } from '@wordpress/i18n';
import { useState, RawHTML } from '@wordpress/element';
import { Modal } from '@wordpress/components';

const SettingPanel = ({ icon = null, title = '', description = '', docLink = '', children, onSave, released = true, note }) => {
    const [settingsPanel, setSettingsPanel] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    const closeSettingsPanel = () => {
        setSettingsPanel(false);
    };

    const handleSaveChanges = () => {
        setIsSaving(true);
        onSave();
        // Simulate a delay for better user experience (adjust as needed)
        setTimeout(() => {
            setIsSaving(false);
            setSettingsPanel(false);
        }, 1000);
    };

    return (
        <div className={`zolo-single-setting${released ? '' : ' upcoming'}`}>
            {!released && <div className={`zolo-badge-upcoming ${note ? 'warning' : ''}`}>
                {note ? __(note, 'zoloblocks') : __('Coming Soon', 'zoloblocks')}
                </div>}
            {icon && (
                <div className="zolo-setting-icon">
                    <img src={zoloBlocks[icon]} alt={title} />
                </div>
            )}
            {title && <h3 className="zolo-setting-title">{title}</h3>}
            {description && (
                <div className="zolo-setting-description">
                    <RawHTML>{description}</RawHTML>
                </div>
            )}
            <div className="help-docs">
                {docLink && (
                    <a href={docLink} target="_blank" rel="noopener noreferrer" title="View Documentation">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M33.8905 8.30219L26.3574 1.17547C25.5562 0.417422 24.5074 0 23.4045 0H9.0625C6.6932 0 4.76562 1.92758 4.76562 4.29688V35.7031C4.76562 38.0724 6.6932 40 9.0625 40H30.9375C33.3068 40 35.2344 38.0724 35.2344 35.7031V11.4236C35.2344 10.2479 34.7445 9.11016 33.8905 8.30219ZM31.6141 9.375H25.7812C25.5659 9.375 25.3906 9.19977 25.3906 8.98438V3.48719L31.6141 9.375ZM30.9375 37.6562H9.0625C7.98555 37.6562 7.10938 36.7801 7.10938 35.7031V4.29688C7.10938 3.21992 7.98555 2.34375 9.0625 2.34375H23.0469V8.98438C23.0469 10.4921 24.2735 11.7188 25.7812 11.7188H32.8906V35.7031C32.8906 36.7801 32.0145 37.6562 30.9375 37.6562Z"
                                fill="#2667FF"
                            />
                            <path
                                d="M28.3594 15.625H11.1719C10.5247 15.625 10 16.1497 10 16.7969C10 17.4441 10.5247 17.9688 11.1719 17.9688H28.3594C29.0066 17.9688 29.5312 17.4441 29.5312 16.7969C29.5312 16.1497 29.0066 15.625 28.3594 15.625Z"
                                fill="#2667FF"
                            />
                            <path
                                d="M28.3594 21.875H11.1719C10.5247 21.875 10 22.3997 10 23.0469C10 23.6941 10.5247 24.2188 11.1719 24.2188H28.3594C29.0066 24.2188 29.5312 23.6941 29.5312 23.0469C29.5312 22.3997 29.0066 21.875 28.3594 21.875Z"
                                fill="#2667FF"
                            />
                            <path
                                d="M16.8531 28.125H11.1719C10.5247 28.125 10 28.6497 10 29.2969C10 29.9441 10.5247 30.4688 11.1719 30.4688H16.8531C17.5003 30.4688 18.025 29.9441 18.025 29.2969C18.025 28.6497 17.5003 28.125 16.8531 28.125Z"
                                fill="#2667FF"
                            />
                        </svg>
                    </a>
                )}
                <button
                    className="zolo-setting-edit-btn"
                    title="Edit Settings"
                    onClick={() => {
                        setSettingsPanel(true);
                    }}
                >
                    <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_584_273)">
                            <path
                                d="M28.3334 40.0771H5C2.24335 40.0771 0 37.8337 0 35.0771V11.7437C0 8.987 2.24335 6.74365 5 6.74365H18.3334C19.2551 6.74365 20 7.49042 20 8.41052C20 9.33032 19.2551 10.0771 18.3334 10.0771H5C4.0799 10.0771 3.33344 10.8254 3.33344 11.7437V35.0771C3.33344 35.9954 4.0799 36.7437 5 36.7437H28.3334C29.2532 36.7437 30 35.9954 30 35.0771V21.7437C30 20.8239 30.7449 20.0771 31.6666 20.0771C32.5882 20.0771 33.3334 20.8239 33.3334 21.7437V35.0771C33.3334 37.8337 31.0901 40.0771 28.3334 40.0771Z"
                                fill="#2667FF"
                            />
                            <path
                                d="M28.8133 5.37207L15.6264 18.5587C15.5098 18.6753 15.4314 18.8236 15.3981 18.9835L14.2198 24.8771C14.1649 25.1502 14.2516 25.4319 14.4481 25.6302C14.6065 25.7886 14.8198 25.8735 15.0383 25.8735C15.0914 25.8735 15.1467 25.8686 15.2016 25.857L21.0933 24.6787C21.2566 24.6451 21.4049 24.567 21.5199 24.4501L34.7066 11.2635L28.8133 5.37207Z"
                                fill="#2667FF"
                            />
                            <path
                                d="M38.7798 1.29692C37.155 -0.32814 34.5116 -0.32814 32.8881 1.29692L30.5815 3.60344L36.4733 9.49516L38.7798 7.18834C39.5665 6.40343 39.9999 5.35667 39.9999 4.24339C39.9999 3.13011 39.5665 2.08336 38.7798 1.29692Z"
                                fill="#2667FF"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_584_273">
                                <rect width={40} height={40} fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>

            {settingsPanel && (
                <Modal onRequestClose={closeSettingsPanel}>
                    <div className="settings-popup">
                        <h4 className="modal-title">{title}</h4>
                        <div className="modal-description">
                            <RawHTML>{description}</RawHTML>
                        </div>
                        {children}
                        {released ? (
                            <button className="settings-save-btn" onClick={handleSaveChanges} disabled={isSaving}>
                                {isSaving ? __('Saving...', 'zoloblocks') : __('Save Changes', 'zoloblocks')}
                            </button>
                        ) : (
                            <button className="settings-save-btn" onClick={handleSaveChanges} disabled={true}>
                                {note ? __(note, 'zoloblocks') : __('Coming Soon', 'zoloblocks')}
                            </button>
                        )}
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default SettingPanel;
