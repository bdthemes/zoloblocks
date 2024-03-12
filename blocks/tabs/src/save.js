import { RichText, useBlockProps } from '@wordpress/block-editor';
import { InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

const Save = ({ attributes }) => {
    const { uniqueId, parentClasses, zoloId, tabTitles } = attributes;

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
                    {tabTitles &&
                        tabTitles.map((tab, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`tab__item zolo-tab_head-item ${tab.id === 1 ? 'active' : ''}`}
                                    tabIndex={tab.id}
                                    role="tab"
                                    aria-controls={`tab-content-${tab.id}`}
                                    aria-selected={tab.id === 1 ? 'true' : 'false'}
                                >
                                    <div className="zolo-tab_icon-number-wrap">
                                        {tab.hasMedia && (
                                            <span className="zolo-tab_icon">
                                                <DisplayZoloIcon icon={tab.icon} />
                                            </span>
                                        )}
                                        {tab.hasNumber && (
                                            <span className="zolo-tab_number">{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                                        )}
                                    </div>
                                    <div className="zolo-tab_head-content">
                                        <RichText.Content tagName="h2" className={'zolo-tab_title'} value={tab.title} />
                                        {tab.hasDescription && <p className="zolo-tab_desc">{tab.description}</p>}
                                    </div>
                                </div>
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
