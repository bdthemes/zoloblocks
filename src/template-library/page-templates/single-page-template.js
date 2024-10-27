import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import PagesPreview from './pages-preview';

const SinglePageTemplate = ({ template, handleImportTemplate, favIds, handleFavTemplate }) => {
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
            </div>
            {pagesPanel && (
                <PagesPreview
                    templates={pages}
                    pagesPanel={pagesPanel}
                    setPagesPanel={setPagesPanel}
                    handleImportTemplate={handleImportTemplate}
                    favIds={favIds}
                    handleFavTemplate={handleFavTemplate}
                />
            )}
        </>
    );
};

export default SinglePageTemplate;
