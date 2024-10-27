import SinglePageTemplate from './single-page-template';

const InnerPageTemplate = ({ templates, handleImportTemplate, favIds, handleFavTemplate }) => {
    return (
        <div className="zolo-demos-wrapper zolo-pages-templates">
            {templates &&
                templates?.length > 0 &&
                templates.map((template, index) => {
                    return (
                        <SinglePageTemplate
                            key={index}
                            template={template}
                            handleImportTemplate={handleImportTemplate}
                            favIds={favIds}
                            handleFavTemplate={handleFavTemplate}
                        />
                    );
                })}
        </div>
    );
};

export default InnerPageTemplate;
