import { Tooltip } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classNames from 'classnames';
import ProPopup from '../pro-popup';

import PagesPreview from './pages-preview';

const SinglePageTemplate = ({ template, handleImportTemplate }) => {
    const pages = template?.pages;
    const [pagesPanel, setPagesPanel] = useState(false);

    return (
        <>
            <div className="single-demo" onClick={() => setPagesPanel(!pagesPanel)}>
                <div className="demo-preview photos-group">
                    {pages && pages.length > 0 && (
                        <>
                            {pages &&
                                pages.map((page, index) => {
                                    return (
                                        <div className="single-page-photo" key={index}>
                                            <img src={page?.demo_preview} alt={page?.title} loading="lazy" decoding="async" />
                                        </div>
                                    );
                                })}
                        </>
                    )}
                    <>
                        {template?.status === 'pro' && zoloParams?.zolo_pro_status === 'inactive' && (
                            <div className="demo-actions-btn-wrap">
                                {template?.demo_link && (
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
                                )}
                                <ProPopup />
                            </div>
                        )}
                    </>
                </div>
                <div className="demo-footer">
                    <div className="footer-left">
                        <h2 className="demo-title">{template.title}</h2>
                    </div>
                    <div className="footer-right">
                        <span className="total-pages">
                            {pages && pages.length > 0 ? `${pages.length} ${__('Pages', 'zoloblocks')}` : __('1 Page', 'zoloblocks')}
                        </span>
                    </div>
                </div>
                <span className={classNames('demo-badge', `${template?.status === 'pro' ? 'pro' : 'free'}-badge`)}>
                    {template?.status === 'pro' ? __('Pro', 'zoloblocks') : __('Free', 'zoloblocks')}
                </span>
            </div>
            {pagesPanel && (
                <PagesPreview
                    pages={pages}
                    pagesPanel={pagesPanel}
                    setPagesPanel={setPagesPanel}
                    handleImportTemplate={handleImportTemplate}
                />
            )}
        </>
    );
};

export default SinglePageTemplate;
