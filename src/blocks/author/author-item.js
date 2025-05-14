const { isEmpty, ZoloSpinner } = window.zoloModule;
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';

const SocialIcon = ({ value }) => {
    switch (value) {
        case 'email':
            return (
                <svg
                    className="zolo-icon-url"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                    <path d="M3 7l9 6l9 -6"></path>
                </svg>
            );
        case 'url':
            return (
                <svg
                    className="zolo-icon-email"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M21 12a9 9 0 1 0 -9.968 8.948"></path>
                    <path d="M3.6 9h16.8"></path>
                    <path d="M3.6 15h6.4"></path>
                    <path d="M11.5 3a17.001 17.001 0 0 0 -1.886 13.802"></path>
                    <path d="M12.5 3a16.982 16.982 0 0 1 2.549 8.01"></path>
                    <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"></path>
                </svg>
            );
        case 'facebook':
            return (
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
                    className="zolo-icon-facebook"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
            );
        case 'twitter':
            return (
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
                    className="zolo-icon-twitter"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
            );
        case 'linkedin':
            return (
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
                    className="zolo-icon-linkedin"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M8 11l0 5" />
                    <path d="M8 8l0 .01" />
                    <path d="M12 16l0 -5" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                </svg>
            );
        case 'github':
            return (
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
                    className="zolo-icon-url"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
            );
        case 'wordpress':
            return (
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
                    className="zolo-icon-wordpress"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9.5 9h3" />
                    <path d="M4 9h2.5" />
                    <path d="M11 9l3 11l4 -9" />
                    <path d="M5.5 9l3.5 11l3 -7" />
                    <path d="M18 11c.177 -.528 1 -1.364 1 -2.5c0 -1.78 -.776 -2.5 -1.875 -2.5c-.898 0 -1.125 .812 -1.125 1.429c0 1.83 2 2.058 2 3.571z" />
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                </svg>
            );
        case 'dribbble':
            return (
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
                    className="zolo-icon-dribbble"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M9 3.6c5 6 7 10.5 7.5 16.2" />
                    <path d="M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4" />
                    <path d="M3.1 10.75c5 0 9.814 -.38 15.314 -5" />
                </svg>
            );
        default:
            return null; // or a default icon if you want
    }
};

function AuthorItem({ author, attributes }) {
    const { showName, showAvatar, showDescription, showRole, showSocialLink, showPostCount, socialLinks } = attributes;

    // Get users.
    const user = useSelect((select) => select('core').getUser(author.ID));

    return (
        <div className="zolo-item">
            {showAvatar && (
                <div className="zolo-image">
                    <a href={author.link} dangerouslySetInnerHTML={{ __html: author.avatar }} onClick={(e) => e.preventDefault()}></a>
                </div>
            )}

            <div className="zolo-content">
                {showName && (
                    <div className="zolo-name">
                        <a href={author.link} onClick={(e) => e.preventDefault()}>
                            {author.name}
                        </a>
                    </div>
                )}

                {showRole && <div className="zolo-role">{author.role}</div>}

                {showDescription && <div className="zolo-description">{author.description}</div>}

                {!user && (
                    <div className="zolo-link">
                        <div className="preloader">
                            <ZoloSpinner />
                        </div>
                    </div>
                )}

                {showSocialLink && socialLinks.length > 0 && (
                    <div className="zolo-link">
                        {socialLinks.map(({ value, label }) => {
                            let link = '';
                            if (value === 'email') {
                                link = user?.email;
                            } else if (value === 'url') {
                                link = user?.url;
                            } else {
                                link = user?.meta[value];
                            }

                            if (!isEmpty(link)) {
                                return (
                                    <a href={link} onClick={(e) => e.preventDefault()}>
                                        <SocialIcon value={value} />
                                    </a>
                                );
                            }
                            return null;
                        })}
                    </div>
                )}
            </div>
            {showPostCount && (
                <div className="zolo-post-count">
                    {__('Posts:', 'zoloblocks')} {author.postCount}
                </div>
            )}
        </div>
    );
}

export default AuthorItem;
