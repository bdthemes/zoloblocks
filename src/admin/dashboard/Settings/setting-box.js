import { __ } from '@wordpress/i18n';
const SettingBox = ({ title = 'Option title', description = '', children, released = true, isPro = false }) => {
    return (
        <div className={`zolo-settings-option-item ${released ? '' : 'upcoming'}`}>
            <div className="zolo-settins-content">
                {title && <h2 className="zolo-settings-title">{title}</h2>}
                {description && <p className="zolo-settings-text">{description}</p>}
            </div>
            {isPro && (
                <div className="block-pro">
                    <div className="block-pro-badge">
                        <span className="block-pro-badge-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={11} height={11} viewBox="0 0 11 11" fill="none">
                                <path
                                    d="M1.25909 4.6529C1.06506 4.11588 0.968049 3.84738 1.00942 3.67532C1.05466 3.48713 1.1885 3.34042 1.35956 3.29148C1.51596 3.24673 1.75926 3.35486 2.24586 3.57113C2.67626 3.76243 2.89146 3.85807 3.09366 3.85275C3.31628 3.84689 3.53044 3.75762 3.7008 3.59965C3.85552 3.45618 3.9593 3.22756 4.16686 2.77032L4.62429 1.76262C5.00639 0.920875 5.19744 0.5 5.49999 0.5C5.80254 0.5 5.99359 0.920875 6.37569 1.76262L6.83314 2.77032C7.04069 3.22756 7.14449 3.45618 7.29919 3.59965C7.46954 3.75762 7.68369 3.84689 7.90634 3.85275C8.10854 3.85807 8.32374 3.76243 8.75414 3.57113C9.24074 3.35486 9.48404 3.24673 9.64044 3.29148C9.81149 3.34042 9.94534 3.48713 9.99059 3.67532C10.0319 3.84738 9.93494 4.11588 9.74089 4.65285L8.90689 6.96109C8.55009 7.94849 8.37174 8.44219 7.99839 8.72109C7.62509 8.99999 7.14269 8.99999 6.17789 8.99999H4.82209C3.85729 8.99999 3.37488 8.99999 3.00157 8.72109C2.62827 8.44219 2.44988 7.94849 2.09311 6.96109L1.25909 4.6529Z"
                                    stroke="#FFA826"
                                />
                                <path d="M5.5 6.5H5.505" stroke="#FFA826" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 10.5H7.99999" stroke="#FFA826" strokeLinecap="round" />
                            </svg>
                        </span>
                        <span>{__('Pro', 'zoloblocks')}</span>
                    </div>
                    {children}
                </div>
            )}
            {!isPro && children}
            {!released && <span className="zolo-badge-upcoming">{__('Coming Soon', 'zoloblocks')}</span>}
        </div>
    );
};

export default SettingBox;
