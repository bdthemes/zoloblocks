import { __ } from '@wordpress/i18n';
import classNames from 'classnames';
import { Tooltip } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';

const FavoriteTemplates = ({ templates, handleImportTemplate, handleFavTemplates }) => {
    const [saveFavTemplates, setSaveFavTemplates] = useState([]);
    const [number, setNumber] = useState(20);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        if (templates.length > 0) {
            setTotal(templates.length);
            setSaveFavTemplates(templates.slice(0, number));
        }
    }, [templates, number]);

    return (
        <>
            <div className="zolo-demos-wrapper">
                {saveFavTemplates && saveFavTemplates.length > 0 ? (
                    saveFavTemplates.map((template) => {
                        return (
                            <div className="single-demo">
                                <div className="demo-preview">
                                    <img src={template.demo_preview} alt={template.title} loading="lazy" decoding="async" />
                                    {template?.pro === '1' && (
                                        <div className="image-overlay-content">
                                            <p>{__('Needs ZoloBlocks Pro', 'zoloblocks')}</p>
                                        </div>
                                    )}

                                    <div className="demo-actions-btn-wrap">
                                        <Tooltip text={__('View Demo', 'zoloblocks')} placement="top">
                                            <a className="demo-btn view-btn" href={template?.demo_link} target="_blank">
                                                {__('Demo', 'zoloblocks')}
                                                <svg
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                                                    />
                                                    <path stroke="currentColor" strokeWidth={2} d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>
                                            </a>
                                        </Tooltip>
                                        <Tooltip text={__('Import Demo', 'zoloblocks')} placement="top">
                                            <button
                                                className="demo-btn import-btn"
                                                onClick={() => handleImportTemplate(template?.json_file)}
                                            >
                                                {__('Import', 'zoloblocks')}
                                                <svg
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
                                                    />
                                                </svg>
                                            </button>
                                        </Tooltip>
                                    </div>
                                </div>
                                <div className="demo-footer">
                                    <div className="footer-left">
                                        <h2 className="demo-title">{template.title}</h2>
                                        <Tooltip text={__('Remove from Favorite', 'zoloblocks')} placement="top">
                                        <button
                                            onClick={() => {
                                                handleFavTemplates(template.id);
                                            }}
                                            className='fav-btn active'
                                        >
                                            <svg viewBox="0 0 24 24" fill="currentColor" className='fav'>
                                                <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z" />
                                            </svg>
                                            <svg viewBox="0 0 24 24" fill="currentColor" className='not-fav'>
                                                <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z" />
                                            </svg>
                                            
                                        </button>
                                        </Tooltip>
                                    </div>
                                </div>
                                <span className={classNames('demo-badge', `${template?.pro === '1' ? 'pro' : 'free'}-badge`)}>
                                    {template?.pro === '1' ? __('Pro', 'zoloblocks') : __('Free', 'zoloblocks')}
                                </span>
                            </div>
                        );
                    })
                ) : (
                    <div className="single-demo no-found-item">
                        <h2>{__('You have no favorite patterns', 'zoloblocks')}</h2>
                    </div>
                )}
            </div>
            {total > number && (
                <div className="load-more-btn-wrapper">
                    <button
                        className="load-more-btn"
                        onClick={() => {
                            setNumber(number + 20);
                        }}
                    >
                        {__('Load More', 'zoloblocks')}
                    </button>
                </div>
            )}
        </>
    );
};

export default FavoriteTemplates;
