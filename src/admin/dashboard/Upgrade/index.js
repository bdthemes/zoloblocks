import { __ } from '@wordpress/i18n';

/**
 * Upgrade tab — Pro feature lists and CTA. Rows match Blocks (zolo-single-block) pattern.
 * Pro Blocks use `BlockIcons`; Pro Extensions use `ExtensionIcons` (keys match pro-extensions.php `name`).
 */
const { BlockIcons, ExtensionIcons } = window?.zoloIcons || {};

const FallbackBlockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);

const ProFeatureRow = ({ item, useExtensionIcon = false }) => {
    let icon = null;
    if (item?.name) {
        if (useExtensionIcon && ExtensionIcons && ExtensionIcons[item.name]) {
            icon = ExtensionIcons[item.name];
        } else if (!useExtensionIcon && BlockIcons && BlockIcons[item.name]) {
            icon = BlockIcons[item.name];
        }
    }

    return (
    <div className="zolo-single-block ispro zolo-upgrade-pro-row" role="listitem">
        <div className="block-icon">
            {icon || <FallbackBlockIcon />}
        </div>
        <div className="block-info">
            <span className="block-title zolo-upgrade-block-title">
                {item.title}
            </span>
            <div className="block-external-link">
                {item.demo && (
                    <a href={item.demo} target="_blank" rel="noopener noreferrer">
                        <span className="block-ex-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 15l6 -6" />
                                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                            </svg>
                        </span>
                        <span>{__('Live Demo', 'zoloblocks')}</span>
                    </a>
                )}
            </div>
        </div>
        <div className="block-badge-toggle-wrap" aria-hidden="true">
            <div className="block-pro">
                <span className="block-pro-badge-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={11} height={11} viewBox="0 0 11 11" fill="none">
                        <path
                            d="M1.25909 4.6529C1.06506 4.11588 0.968049 3.84738 1.00942 3.67532C1.05466 3.48713 1.1885 3.34042 1.35956 3.29148C1.51596 3.24673 1.75926 3.35486 2.24586 3.57113C2.67626 3.76243 2.89146 3.85807 3.09366 3.85275C3.31628 3.84689 3.53044 3.75762 3.7008 3.59965C3.85552 3.45618 3.9593 3.22756 4.16686 2.77032L4.62429 1.76262C5.00639 0.920875 5.19744 0.5 5.49999 0.5C5.80254 0.5 5.99359 0.920875 6.37569 1.76262L6.83314 2.77032C7.04069 3.22756 7.14449 3.45618 7.29919 3.59965C7.46954 3.75762 7.68369 3.84689 7.90634 3.85275C8.10854 3.85807 8.32374 3.76243 8.75414 3.57113C9.24074 3.35486 9.48404 3.24673 9.64044 3.29148C9.81149 3.34042 9.94534 3.48713 9.99059 3.67532C10.0319 3.84738 9.93494 4.11588 9.74089 4.65285L8.90689 6.96109C8.55009 7.94849 8.37174 8.44219 7.99839 8.72109C7.62509 8.99999 7.14269 8.99999 6.17789 8.99999H4.82209C3.85729 8.99999 3.37488 8.99999 3.00157 8.72109C2.62827 8.44219 2.44988 7.94849 2.09311 6.96109L1.25909 4.6529Z"
                            stroke="#FFA826"
                        />
                        <path
                            d="M5.5 6.5H5.505"
                            stroke="#FFA826"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path d="M3 10.5H7.99999" stroke="#FFA826" strokeLinecap="round" />
                    </svg>
                </span>
                <span>{__('Pro', 'zoloblocks')}</span>
            </div>
        </div>
    </div>
    );
};

const Upgrade = () => {
    const proExtensions = window?.zoloBlocks?.pro_features?.extensions || [];
    const proBlocks = window?.zoloBlocks?.pro_features?.blocks || [];

    return (
        <div className="zolo-welcome-page-wrap zolo-upgrade-tab">
            {proBlocks.length > 0 && (
                <div className="zolo-welcome-s-k-item zolo-upgrade-block-section" aria-labelledby="zolo-upgrade-pro-blocks-heading">
                    <h2 className="zolo-welcome-s-k-title" id="zolo-upgrade-pro-blocks-heading">
                        {__('Pro Blocks', 'zoloblocks')}
                    </h2>
                    <p className="zolo-welcome-s-k-text zolo-upgrade-section-hint">
                        {__('Additional blocks available with ZoloBlocks Pro.', 'zoloblocks')}
                    </p>
                    <div className="zoloblocks-grid">
                        <div className="zoloblocks-inner-grid" role="list">
                            {proBlocks.map((item) => (
                                <ProFeatureRow key={item.name} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {proExtensions.length > 0 && (
                <div
                    className="zolo-welcome-s-k-item zolo-upgrade-block-section zolo-upgrade-extension-section"
                    aria-labelledby="zolo-upgrade-pro-ext-heading"
                >
                    <h2 className="zolo-welcome-s-k-title" id="zolo-upgrade-pro-ext-heading">
                        {__('Pro Extensions', 'zoloblocks')}
                    </h2>
                    <p className="zolo-welcome-s-k-text zolo-upgrade-section-hint">
                        {__('Editor extensions for animations, effects, and dynamic content.', 'zoloblocks')}
                    </p>
                    <div className="zoloblocks-grid">
                        <div className="zoloblocks-inner-grid" role="list">
                            {proExtensions.map((item) => (
                                <ProFeatureRow key={item.name} item={item} useExtensionIcon />
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="zolo-welcome-s-k-item support zolo-upgrade-footer-cta" aria-label={__('Call to action', 'zoloblocks')}>
                <div className="zolo-welcome-s-k-inner-item zolo-upgrade-footer-inner">
                    <div className="zolo-welcome-s-k-content">
                        <h2 className="zolo-welcome-s-k-title zolo-upgrade-footer-h">{__('Ready to upgrade?', 'zoloblocks')}</h2>
                        <p className="zolo-welcome-s-k-text">
                            {__('Choose a plan that fits your project and start building today.', 'zoloblocks')}
                        </p>
                    </div>
                </div>
                <div className="zolo-welcome-s-k-btns zolo-upgrade-footer-btns">
                    <a
                        className="zolo-welcome-page-btn zolo-secondary-btn support"
                        href="https://zoloblocks.com/pricing/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {__('Get ZoloBlocks Pro', 'zoloblocks')}
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Upgrade;
