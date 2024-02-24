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
                    <div
                        className="tab__content-item"
                        id="tab-content-0"
                        data-tab-id={0}
                        role="tabpanel"
                        aria-labelledby="tab-title-0"
                        aria-hidden="false"
                    >
                        <div className="tab zolo-nexted-tab">
                            <div className="tab__list zolo-tab_header-wrap">
                                <div
                                    className="tab__item zolo-tab_head-item"
                                    tabIndex={0}
                                    role="tab"
                                    aria-controls="tab-content-0-0"
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
                                        <span className="zolo-tab_number">01</span>
                                    </div>
                                    <div className="zolo-tab_head-content">
                                        <h2 className="zolo-tab_title">Unique Elements</h2>
                                        <p className="zolo-tab_desc">
                                            Forget about design limits! Build and customize your site visually. It’s fun, fast and
                                            super-easy!
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="tab__item zolo-tab_head-item"
                                    tabIndex={1}
                                    role="tab"
                                    aria-controls="tab-content-0-1"
                                    aria-selected="false"
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
                                        <span className="zolo-tab_number">01</span>
                                    </div>
                                    <div className="zolo-tab_head-content">
                                        <h2 className="zolo-tab_title">Unique Elements</h2>
                                        <p className="zolo-tab_desc">
                                            Forget about design limits! Build and customize your site visually. It’s fun, fast and
                                            super-easy!
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="tab__item zolo-tab_head-item"
                                    tabIndex={2}
                                    role="tab"
                                    aria-controls="tab-content-0-2"
                                    aria-selected="false"
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
                                        <span className="zolo-tab_number">01</span>
                                    </div>
                                    <div className="zolo-tab_head-content">
                                        <h2 className="zolo-tab_title">Unique Elements</h2>
                                        <p className="zolo-tab_desc">
                                            Forget about design limits! Build and customize your site visually. It’s fun, fast and
                                            super-easy!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab__content">
                                <div
                                    className="tab__content-item"
                                    id="tab-content-0-0"
                                    data-tab-id={0}
                                    role="tabpanel"
                                    aria-labelledby="tab-title-0-0"
                                    aria-hidden="false"
                                >
                                    <p>
                                        The word, brand, derives from its original and current meaning as a firebrand, a burning piece of
                                        wood. That word comes from the Old High German, brinnan and Old English byrnan, biernan, and brinnan
                                        via Middle English as birnan and brond.[11] Torches were used to indelibly mark items such as
                                        furniture and pottery, and to permanently burn identifying marks into the skin of slaves and
                                        livestock. Later the firebrands were replaced with branding irons.{' '}
                                    </p>
                                </div>
                                <div
                                    className="tab__content-item"
                                    id="tab-content-0-1"
                                    data-tab-id={1}
                                    role="tabpanel"
                                    aria-labelledby="tab-title-0-1"
                                    aria-hidden="true"
                                >
                                    <p>
                                        The marks themselves took on the term and came to be closely associated with craftsmen's products.
                                        Through that association, the term eventually acquired its current meaning.{' '}
                                    </p>
                                </div>
                                <div
                                    className="tab__content-item"
                                    id="tab-content-0-2"
                                    data-tab-id={2}
                                    role="tabpanel"
                                    aria-labelledby="tab-title-0-2"
                                    aria-hidden="true"
                                >
                                    <p>
                                        Branding and labeling have an ancient history. Branding probably began with the practice of branding
                                        livestock to deter theft. Images of the branding of cattle occur in ancient Egyptian tombs dating to
                                        around 2,700 BCE{' '}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <InnerBlocks.Content />
                </div>
            </div>
        </div>
    );
};

export default Save;
