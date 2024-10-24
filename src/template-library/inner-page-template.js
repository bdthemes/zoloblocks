import SinglePageTemplate from './single-page-template';

const InnerPageTemplate = ({ templates, handleImportTemplate }) => {
    // console.log(templates);

    return (
        <div className="zolo-demos-wrapper zolo-pages-templates">
            {templates &&
                templates?.length > 0 &&
                templates.map((template, index) => {
                    return <SinglePageTemplate key={index} template={template} handleImportTemplate={handleImportTemplate} />;
                })}
        </div>
    );
};

export default InnerPageTemplate;
