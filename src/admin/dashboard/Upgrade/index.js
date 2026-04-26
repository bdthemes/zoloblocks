import { __ } from '@wordpress/i18n';

/**
 * Upgrade tab — dedicated marketing page for ZoloBlocks Pro features.
 *
 * Listed here are features available in the separate ZoloBlocks Pro
 * add-on plugin. There are no toggles, locked controls, or simulated
 * activation states. Each entry is purely descriptive.
 */

const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
            d="m12 2 2.95 6.18 6.8.6-5.13 4.49 1.55 6.66L12 16.77 5.83 19.93l1.55-6.66L2.25 8.78l6.8-.6L12 2z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
    </svg>
);

const PuzzleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
            d="M14 4a2 2 0 1 0-4 0v1H6a1 1 0 0 0-1 1v4H4a2 2 0 1 0 0 4h1v4a1 1 0 0 0 1 1h4v-1a2 2 0 1 1 4 0v1h4a1 1 0 0 0 1-1v-4h1a2 2 0 1 0 0-4h-1V6a1 1 0 0 0-1-1h-4V4z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
    </svg>
);

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const FeatureCard = ({ item }) => (
    <div className="zolo-upgrade-card">
        <div className="zolo-upgrade-card-body">
            <div className="zolo-upgrade-card-icon" aria-hidden="true">
                <CheckIcon />
            </div>
            <h4 className="zolo-upgrade-card-title">{item.title}</h4>
        </div>
        {item.demo ? (
            <a className="zolo-upgrade-card-link" href={item.demo} target="_blank" rel="noopener noreferrer">
                {__('Live demo', 'zoloblocks')}
                <ArrowIcon />
            </a>
        ) : null}
    </div>
);

const Upgrade = () => {
    const proExtensions = window?.zoloBlocks?.pro_features?.extensions || [];
    const proBlocks = window?.zoloBlocks?.pro_features?.blocks || [];

    const totalCount = proBlocks.length + proExtensions.length;

    return (
        <div className="zolo-upgrade-tab">
            <section className="zolo-upgrade-hero">
                <div className="zolo-upgrade-hero-inner">
                    <span className="zolo-upgrade-hero-badge">
                        <StarIcon />
                        {__('ZoloBlocks Pro', 'zoloblocks')}
                    </span>
                    <h2 className="zolo-upgrade-hero-title">
                        {__('Take ZoloBlocks further with the Pro add-on', 'zoloblocks')}
                    </h2>
                    <p className="zolo-upgrade-hero-desc">
                        {__(
                            'These features ship in the separate ZoloBlocks Pro plugin. Install it alongside this plugin to unlock additional blocks, animations, and editor extensions.',
                            'zoloblocks'
                        )}
                    </p>
                    <div className="zolo-upgrade-hero-actions">
                        <a
                            className="zolo-upgrade-cta zolo-upgrade-cta--primary"
                            href="https://zoloblocks.com/pricing/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {__('View Pricing', 'zoloblocks')}
                            <ArrowIcon />
                        </a>
                        <a
                            className="zolo-upgrade-cta zolo-upgrade-cta--ghost"
                            href="https://zoloblocks.com/demo/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {__('See live demos', 'zoloblocks')}
                        </a>
                    </div>

                    <ul className="zolo-upgrade-hero-stats">
                        <li>
                            <strong>{proBlocks.length}+</strong>
                            <span>{__('Pro Blocks', 'zoloblocks')}</span>
                        </li>
                        <li>
                            <strong>{proExtensions.length}+</strong>
                            <span>{__('Pro Extensions', 'zoloblocks')}</span>
                        </li>
                        <li>
                            <strong>{totalCount}+</strong>
                            <span>{__('Premium Features', 'zoloblocks')}</span>
                        </li>
                    </ul>
                </div>
            </section>

            {proBlocks.length > 0 && (
                <section className="zolo-upgrade-section">
                    <header className="zolo-upgrade-section-header">
                        <span className="zolo-upgrade-section-icon">
                            <PuzzleIcon />
                        </span>
                        <div>
                            <h3>{__('Pro Blocks', 'zoloblocks')}</h3>
                            <p>{__('Additional blocks available with ZoloBlocks Pro.', 'zoloblocks')}</p>
                        </div>
                        <span className="zolo-upgrade-section-count">{proBlocks.length}</span>
                    </header>
                    <div className="zolo-upgrade-grid">
                        {proBlocks.map((item) => (
                            <FeatureCard key={item.name} item={item} />
                        ))}
                    </div>
                </section>
            )}

            {proExtensions.length > 0 && (
                <section className="zolo-upgrade-section">
                    <header className="zolo-upgrade-section-header">
                        <span className="zolo-upgrade-section-icon">
                            <StarIcon />
                        </span>
                        <div>
                            <h3>{__('Pro Extensions', 'zoloblocks')}</h3>
                            <p>{__('Editor extensions for animations, effects, and dynamic content.', 'zoloblocks')}</p>
                        </div>
                        <span className="zolo-upgrade-section-count">{proExtensions.length}</span>
                    </header>
                    <div className="zolo-upgrade-grid">
                        {proExtensions.map((item) => (
                            <FeatureCard key={item.name} item={item} />
                        ))}
                    </div>
                </section>
            )}

            <section className="zolo-upgrade-footer-cta">
                <div>
                    <h3>{__('Ready to upgrade?', 'zoloblocks')}</h3>
                    <p>{__('Choose a plan that fits your project and start building today.', 'zoloblocks')}</p>
                </div>
                <a
                    className="zolo-upgrade-cta zolo-upgrade-cta--primary"
                    href="https://zoloblocks.com/pricing/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {__('Get ZoloBlocks Pro', 'zoloblocks')}
                    <ArrowIcon />
                </a>
            </section>
        </div>
    );
};

export default Upgrade;
