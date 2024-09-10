import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const { ExtensionIcons } = window?.zoloIcons;

const SingleExtension = ({ icon, title, value, onClick, demo = '', video = '', isPro = false, released = true, upcoming }) => {
    return (
        <div
            className={`zolo-single-block ${value ? 'active' : ''} ${released ? '' : 'upcoming'} ${isPro ? 'ispro' : ''} ${upcoming ? 'upcoming' : ''}`}
        >
            <div className="block-icon">{ExtensionIcons[icon]}</div>
            <div className="block-info">
                <span className="block-title" onClick={onClick}>
                    {title}
                </span>
                <div className="block-external-link">
                    {video && (
                        <a href={video} target="_blank" rel="noopener noreferrer">
                            <span>{__('Video Tutorial', 'zoloblocks')}</span>
                        </a>
                    )}
                    <span className="block-separator"></span>
                    {demo && (
                        <a href={demo} target="_blank" rel="noopener noreferrer">
                            <span>{__('Live Demo', 'zoloblocks')}</span>
                        </a>
                    )}
                </div>
            </div>
            <div className="block-badge-toggle-wrap">
                {isPro && (
                    <div className="block-pro">
                        <span>{__('Pro', 'zoloblocks')}</span>
                    </div>
                )}

                <div className="block-switcher">
                    {released ? (
                        <>
                            {isPro ? (
                                <>{zoloBlocks?.has_pro === '1' ? <ToggleControl checked={value} onChange={onClick} /> : <div></div>}</>
                            ) : (
                                <ToggleControl checked={value} onChange={onClick} />
                            )}
                        </>
                    ) : (
                        <span className="zolo-badge-upcoming">{__('Coming Soon', 'zoloblocks')}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SingleExtension;
