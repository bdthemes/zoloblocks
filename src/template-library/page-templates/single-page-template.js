import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classNames from 'classnames';
import PagesPreview from './pages-preview';

const SinglePageTemplate = ({ template, handleImportTemplate, favIds, handleFavTemplate, isPro }) => {
    const pages = template?.pages;
    const categoryImage = template?.image;
    const [pagesPanel, setPagesPanel] = useState(false);

    return (
        <>
            <div className="single-demo" onClick={() => setPagesPanel(!pagesPanel)}>
                <div className="demo-preview photos-group">
                    {categoryImage && categoryImage !== '' ? (
                        <div className="single-page-photo">
                            <img src={categoryImage} alt={template?.title} loading="lazy" decoding="async" />
                        </div>
                    ) : (
                        pages &&
                        pages.length > 0 &&
                        pages.map((page, index) => (
                            <div className="single-page-photo" key={index}>
                                <img src={page?.demo_preview} alt={page?.title} loading="lazy" decoding="async" />
                            </div>
                        ))
                    )}
                </div>
                <div className="demo-footer">
                    <div className="footer-left">
                        <h2 className="demo-title" dangerouslySetInnerHTML={{ __html: template.title }}></h2>
                    </div>
                    <div className="footer-right">
                        <span className="total-pages">
                            {pages && pages.length > 0 ? `${pages.length} ${__('Pages', 'zoloblocks')}` : __('1 Page', 'zoloblocks')}
                        </span>
                    </div>
                </div>

                <span className={classNames('demo-badge', `${isPro ? 'pro' : 'free'}-badge`)}>
                    {isPro ? __('Pro', 'zoloblocks') : __('Free', 'zoloblocks')}
                </span>
            </div>
            {pagesPanel && (
                <PagesPreview
                    templates={pages}
                    pagesPanel={pagesPanel}
                    setPagesPanel={setPagesPanel}
                    handleImportTemplate={handleImportTemplate}
                    favIds={favIds}
                    handleFavTemplate={handleFavTemplate}
                    templateName={template?.title}
                />
            )}
        </>
    );
};

export default SinglePageTemplate;
