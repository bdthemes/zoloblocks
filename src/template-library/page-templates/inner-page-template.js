import SinglePageTemplate from './single-page-template';

const InnerPageTemplate = ({ templates, handleImportTemplate, favIds, handleFavTemplate }) => {
    return (
        <div className="zolo-demos-wrapper zolo-pages-templates">
            {templates &&
                templates?.length > 0 &&
                templates.map((template, index) => {
                    const pages = template?.pages;

                    return (
                        <SinglePageTemplate
                            key={index}
                            template={template}
                            handleImportTemplate={handleImportTemplate}
                            favIds={favIds}
                            handleFavTemplate={handleFavTemplate}
                            isPro={pages && pages.length > 0 && pages.some((page) => page?.status === 'pro')}
                        />
                    );
                })}
        </div>
    );
};

export default InnerPageTemplate;
