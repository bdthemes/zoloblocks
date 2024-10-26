import { Tooltip } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classNames from 'classnames';
import ProPopup from '../pro-popup';

const PagesPreview = ({ pages, pagesPanel, setPagesPanel, handleImportTemplate }) => {
    const [activePage, setActivePage] = useState(0);
    return (
        <>
            {pagesPanel && (
                <div className="zolo-pages-preview-container">
                    <div className="header">
                        <h2>{__('Pages', 'zoloblocks')}</h2>
                        <button className="close-btn" onClick={() => setPagesPanel(false)}>
                            Back
                        </button>
                    </div>
                    <div className="pages-list">
                        <div className="active-page-preview">
                            <img src={pages[activePage]?.demo_preview} alt={pages[activePage]?.title} loading="lazy" decoding="async" />
                        </div>
                        <div className="pages-list-and-action">
                            <div className="all-pages">
                                {
                                    // eslint-disable-next-line array-callback-return
                                    pages.map((page, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className={classNames('single-page', { active: index === activePage })}
                                                onClick={() => setActivePage(index)}
                                            >
                                                <img src={page?.demo_preview} alt={page?.title} loading="lazy" decoding="async" />
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            <div className="actions">
                                <Tooltip text={__('View Demo', 'zoloblocks')} placement="top">
                                    <a className="demo-btn view-btn" href={pages[activePage]?.demo_link} target="_blank">
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

                                {pages[activePage]?.status === 'pro' && (
                                    <>
                                        {zoloParams?.zolo_pro_status === 'inactive' ? (
                                            <ProPopup />
                                        ) : (
                                            <Tooltip text={__('Import Demo', 'zoloblocks')} placement="top">
                                                <button
                                                    className="demo-btn import-btn"
                                                    onClick={() => handleImportTemplate(pages[activePage]?.json_file)}
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
                                        )}
                                    </>
                                )}
                                {pages[activePage]?.status === 'free' && (
                                    <Tooltip text={__('Import Demo', 'zoloblocks')} placement="top">
                                        <button
                                            className="demo-btn import-btn"
                                            onClick={() => handleImportTemplate(pages[activePage]?.json_file)}
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
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PagesPreview;
