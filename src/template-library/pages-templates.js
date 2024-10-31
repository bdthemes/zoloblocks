import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const PagesWrapper = ({ pages, title }) => {
    const [panel, setPanel] = useState(false);
    return (
        <>
            <div className="template-pages">
                <button
                    className="template-pages-title"
                    onClick={() => {
                        setPanel(!panel);
                    }}
                >
                    {title}
                </button>
            </div>
            {panel && (
                <div className="zolo-inner-pages-wrapper">
                    <button
                        className="zolo-back-btn"
                        onClick={() => {
                            setPanel(!panel);

                            console.log(panel);
                        }}
                    >
                        {__('Back', 'zolo-blocks')}
                    </button>
                    <div className="zolo-inner-pages">
                        {pages &&
                            pages?.length > 0 &&
                            pages.map((page, index) => {
                                return (
                                    <div className="zolo-single-page" key={index}>
                                        <h4>{page?.title}</h4>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            )}
        </>
    );
};

const PagesTemplates = ({ templates }) => {
    return (
        <div className="zolo-pages-templates-wrapper">
            <div
                className="zolo-pages-templates-grid"
                style={{
                    display: 'flex',
                    gap: '20px',
                }}
            >
                {templates &&
                    templates.length > 0 &&
                    templates.map((template, index) => {
                        return (
                            <div
                                className="zolo-single-template-wrapper"
                                key={index}
                                style={{
                                    border: '1px solid #ccc',
                                    padding: '20px',
                                    background: '#fff',
                                }}
                            >
                                <PagesWrapper pages={template?.pages} title={template?.title} />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};
export default PagesTemplates;
