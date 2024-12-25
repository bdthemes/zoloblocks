import { RichText, useBlockProps } from '@wordpress/block-editor';
import { InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

const Save = (props) => {
    const { attributes } = props;
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
        verticalPreset,
        horizontalTabItemWidth,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    const headerTabsContent = (
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
                            {tab.hasMedia && showIcon && (
                                <div className="zolo-tab_icon-number-wrap">
                                    <span className="zolo-tab_icon">
                                        <DisplayZoloIcon icon={tab.icon} />
                                    </span>
                                </div>
                            )}
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
    );

    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            {renderHookBefore && renderHookBefore}
            <div
                className={classnames(
                    'zolo-tabs zolo-indicator-position-bottom',
                    tabsLayout === 'horizontal'
                        ? `zolo-tab_${tabsLayout} ${horizontalTabItemWidth}`
                        : `zolo-tab_${verticalLayoutDirection}`,
                    tabContentStyle === 'content-style-2' ? `zolo-tab_${tabContentStyle}` : `zolo-tab_${contentDirection}`,
                    `zolo-tab_${tabIndicatorStyle}`,
                    verticalPreset === 'vpreset-2' ? verticalPreset : ''
                )}
                role="tablist"
                tabIndex={0}
                {...(tabActiveItemNo && {
                    'data-activeIndex': tabActiveItemNo - 1,
                })}
                // data-activeIndex={tabActiveItemNo - 1}
            >
                {horizontalTabItemWidth && tabsLayout !== 'vertical' ? (
                    <div className="zolo-horizontal-head-tabswrap">{headerTabsContent}</div>
                ) : (
                    headerTabsContent
                )}
                <div className="tab__content">
                    <InnerBlocks.Content />
                </div>
            </div>
            {renderHookAfter && renderHookAfter}
        </div>
    );
};

export default Save;
