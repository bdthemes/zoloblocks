import { RichText, useBlockProps } from '@wordpress/block-editor';
import { InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;

const Save = ({ attributes }) => {
    const { uniqueId, parentClasses, zoloId, tabs } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            <div className="tab zolo-tab_style-1 zolo-tab_content-style-1 zolo-tab_animation-style-1" role="tablist" tabIndex={0}>
                <div className="tab__list zolo-tab_header-wrap">
                    {tabs.map((singleTab, key) => {
                        return (
                            <>
                                <div
                                    className="tab__item zolo-tab_head-item"
                                    tabIndex={key}
                                    role="tab"
                                    aria-controls={`tab-content-${key}`}
                                    aria-selected="true"
                                >
                                    <div className="zolo-tab_icon-number-wrap">
                                        <span className="zolo-tab_icon">
                                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
                                                />
                                            </svg>
                                        </span>
                                        <span className="zolo-tab_number">{key}</span>
                                    </div>
                                    <div className="zolo-tab_head-content">
                                        <h2 className="zolo-tab_title">{singleTab.title}</h2>
                                        <p className="zolo-tab_desc">{singleTab.content}</p>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
                <div className="tab__content">
                    <InnerBlocks.Content />
                </div>
            </div>
        </div>
    );
};

export default Save;
