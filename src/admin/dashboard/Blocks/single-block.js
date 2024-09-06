import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const { BlockIcons } = window?.zoloIcons;

const SingleBlock = ({ icon, title, value, onClick, upcoming, demo = '', video = '', isPro = false }) => {
    return (
        <div className={`zolo-single-block ${value ? 'active' : ''} ${isPro ? 'ispro' : ''} ${upcoming ? 'upcoming' : ''}`}>
            <div className="block-icon">{BlockIcons[icon]}</div>
            <div className="block-info">
                <span className="block-title" onClick={onClick}>
                    {title}
                </span>
                <div className="block-external-link">
                    {video && (
                        <a href={video} target="_blank" rel="noopener noreferrer">
                            <span className="block-ex-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={14} viewBox="0 0 12 14" fill="none">
                                    <path
                                        d="M7.74414 1.45807V2.33307C7.74414 3.15802 7.74414 3.57051 8.0004 3.82679C8.25672 4.08307 8.66919 4.08307 9.49414 4.08307H10.3691"
                                        stroke="#2667FF"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M1.33008 9.33284V4.66617C1.33008 3.01625 1.33008 2.19129 1.84264 1.67873C2.3552 1.16617 3.18016 1.16617 4.83008 1.16617H7.26351C7.50192 1.16617 7.62115 1.16617 7.72837 1.21057C7.83553 1.25497 7.91988 1.33928 8.08846 1.50788L10.3217 3.74112C10.4903 3.90972 10.5746 3.99403 10.619 4.10123C10.6634 4.20843 10.6634 4.32765 10.6634 4.56609V9.33284C10.6634 10.9827 10.6634 11.8077 10.1508 12.3203C9.63826 12.8328 8.81331 12.8328 7.16341 12.8328H4.83008C3.18016 12.8328 2.3552 12.8328 1.84264 12.3203C1.33008 11.8077 1.33008 10.9827 1.33008 9.33284Z"
                                        stroke="#2667FF"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M3.66602 5.83307H8.33268M3.66602 7.87474H8.33268M3.66602 9.9164H6.09898"
                                        stroke="#2667FF"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            <span>{__('Video Tutorial', 'zoloblocks')}</span>
                        </a>
                    )}
                    {/* <span className="block-separator"></span> */}
                    {demo && (
                        <a href={demo} target="_blank" rel="noopener noreferrer">
                            <span className="block-ex-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                                    <path
                                        d="M4.83008 6.71742C4.91268 6.85269 5.01074 6.98073 5.12419 7.0988C5.82857 7.83187 6.90219 7.9465 7.72201 7.44262C7.87391 7.34922 8.01706 7.23466 8.14761 7.0988L10.0373 5.13215C10.8721 4.26324 10.8721 2.85444 10.0373 1.98552C9.20234 1.1166 7.84871 1.11661 7.01379 1.98552L6.59758 2.4187"
                                        stroke="#2667FF"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M5.39609 9.5824L4.9797 10.0157C4.14481 10.8846 2.79116 10.8846 1.95626 10.0157C1.12135 9.14676 1.12135 7.73801 1.95626 6.86908L3.84592 4.90243C4.68082 4.0335 6.03449 4.0335 6.86935 4.90243C6.98281 5.02044 7.08081 5.14848 7.16341 5.2837"
                                        stroke="#2667FF"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                            <span>{__('Live Demo', 'zoloblocks')}</span>
                        </a>
                    )}
                </div>
            </div>

            <div className="block-badge-toggle-wrap">
                {isPro && (
                    <div className="block-pro">
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
                )}
                <div className="block-switcher">
                    {upcoming ? (
                        <span className="zolo-badge-upcoming">{__('Coming Soon', 'zoloblocks')}</span>
                    ) : (
                        <ToggleControl checked={value} onChange={onClick} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SingleBlock;
