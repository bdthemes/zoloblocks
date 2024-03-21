import { RichText, useBlockProps } from '@wordpress/block-editor';
import { InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

const Save = ({ attributes }) => {
    const {
        uniqueId,
        parentClasses,
        zoloId,
        tabTitles,
        tabsLayout,
        showIcon,
        showTitle,
        showDesc,
        tabIndicatorStyle,
        tabContentStyle,
        tabActiveItemNo,
        verticalLayoutDirection,
        contentDirection,
        tabItemWidth,
    } = attributes;

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
            <div
                className={classnames(
                    'zolo-tabs',
                    `${tabsLayout === 'horizontal' ? `zolo-tab_${tabsLayout}` : `zolo-tab_${verticalLayoutDirection}`}`,
                    `${tabContentStyle === 'content-style-1' ? `zolo-tab_${tabContentStyle}` : `zolo-tab_${contentDirection}`}`,
                    `zolo-tab_${tabIndicatorStyle}`
                )}
                role="tablist"
                tabIndex={0}
                data-activeIndex={tabActiveItemNo - 1}
            >
                <div className={`tab__list zolo-tab_header-wrap ${tabItemWidth}`}>
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
                                        {tab.hasMedia && showIcon && (
                                            <span className="zolo-tab_icon">
                                                <DisplayZoloIcon icon={tab.icon} />
                                            </span>
                                        )}
                                    </div>
                                    <div className="zolo-tab_head-content">
                                        {showTitle && <RichText.Content tagName="h2" className={'zolo-tab_title'} value={tab.title} />}
                                        {tab.hasDescription && showDesc && (
                                            <RichText.Content tagName="p" className={'zolo-tab_desc'} value={tab.description} />
                                        )}
                                        {/* {tab.hasDescription && showDesc && <p className="zolo-tab_desc">{tab.description}</p>} */}
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
