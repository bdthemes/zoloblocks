import { ToggleControl } from '@wordpress/components';
import { RawHTML } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const SingleBlock = ({ icon, title, value, onClick, demo = '', video = '', isPro = false }) => {
    return (
        <div className={`zolo-single-block ${value ? 'active' : ''}`}>
            {isPro && (
                <div className="block-pro">
                    <span>{__('Pro', 'zoloblocks')}</span>
                </div>
            )}
            <div className="block-icon">
                <RawHTML>{icon}</RawHTML>
            </div>
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
            <div className="block-switcher">
                <ToggleControl checked={value} onChange={onClick} />
            </div>
        </div>
    );
};

export default SingleBlock;
