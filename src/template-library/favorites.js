import { __ } from '@wordpress/i18n';
import classNames from 'classnames';
import { Button, Modal, Tooltip } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';

const FavoriteTemplates = ({ templates, handleImportTemplate, allTemplates, handleFavTemplates }) => {
    const [saveFavTemplates, setSaveFavTemplates] = useState([]);
    const [allFavTemplates, setAllFavTemplates] = useState([]);
    const [number, setNumber] = useState(20);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (!templates) {
            return;
        }

        const favTemplates = templates.map((templateId) => {
            // find templates from all templates
            const template = allTemplates.find((temp) => temp.id === templateId);

            return template;
        });

        // remove undefined values from array
        const filteredFavTemplates = favTemplates.filter((template) => template);
        setAllFavTemplates(filteredFavTemplates);
        setTotal(filteredFavTemplates.length);
    }, [templates, allTemplates]);

    useEffect(() => {
        if (allFavTemplates.length > 0) {
            setSaveFavTemplates(allFavTemplates.slice(0, number));
        }
    }, [allFavTemplates, number]);

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
                                    <Tooltip text={__('Remove from Favorite', 'zoloblocks')} placement="top">
                                        <button
                                            onClick={() => {
                                                handleFavTemplates(template.id);
                                            }}
                                            className="fav-btn"
                                        >
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z" />
                                            </svg>
                                        </button>
                                    </Tooltip>
                                </div>
                                <div className="demo-footer">
                                    <div className="footer-left">
                                        <h2 className="demo-title">{template.title}</h2>
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
