import { ToggleControl } from '@wordpress/components';
import { RawHTML } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const SingleBlock = ({ icon, title, value, onClick, demo = '', video = '' }) => {
    return (
        <div className={`zolo-single-block ${value ? 'active' : ''}`}>
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
                            <span>{__('Video Tutorial', 'zolo-blocks')}</span>
                        </a>
                    )}
                    <span className="block-separator"></span>
                    {demo && (
                        <a href={demo} target="_blank" rel="noopener noreferrer">
                            <span>{__('Live Demo', 'zolo-blocks')}</span>
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
