import { BaseControl, SelectControl, Tooltip } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import classNames from 'classnames';
import InnerTemplate from '../../inner-template';
const Content = ({ props }) => {
    const { number, setNumber, handleImportTemplate, favIds, handleFavTemplate, itemSortBy, handleItemSortBy, loading, itemText } = props;
    const dispatch = useDispatch('zolo/templates/library');
    const { items, tags, activeTag } = useSelect(
        (select) => {
            const { getDemos, getDemosActiveCat, getActiveTab, getPatterns, getReset, getPackageType, getDemosTags, getDemosActiveTag } =
                select('zolo/templates/library');
            const activeTab = getActiveTab();
            const queryParams = {
                categories: getDemosActiveCat(),
                reset: getReset(),
                packageType: getPackageType(),
                tags: getDemosActiveTag(),
            };
            return {
                items: activeTab === 'demos' ? getDemos(queryParams) : activeTab === 'patterns' ? getPatterns(queryParams) : [],
                tags: getDemosTags(),
                activeTag: getDemosActiveTag(),
            };
        },
        [dispatch]
    );

    return (
        <>
            {items && items.length > 0 && (
                <div className="zolo-secondary-head">
                    <div className="secondary-header-item">
                        <div className="secondary-item">
                            <SelectControl
                                label={__('Sort By :', 'zoloblocks')}
                                options={[
                                    { label: __('Newest', 'zoloblocks'), value: 'newest' },
                                    { label: __('Oldest', 'zoloblocks'), value: 'oldest' },
                                ]}
                                onChange={(v) => {
                                    handleItemSortBy(v);
                                }}
                                value={itemSortBy}
                            />
                        </div>

                        <div className="secondary-item zolo-tp-tags-item">
                            <BaseControl label={__('Popular Tags :', 'zoloblocks')} className="zolo-tags">
                                <div className="tags-wrap">
                                    <div className="tags-btn-wrap">
                                        {tags &&
                                            tags.length > 0 &&
                                            tags.map((tag) => (
                                                <button
                                                    key={tag.slug}
                                                    className={classNames('single-tag', `${activeTag === tag.slug ? 'active' : ''}`)}
                                                    onClick={() => {
                                                        dispatch.setReset(false);
                                                        dispatch.setActiveCat('');
                                                        dispatch.setActiveTag(tag.slug);
                                                    }}
                                                >
                                                    {tag.label}
                                                </button>
                                            ))}
                                    </div>
                                    <button
                                        className={classNames('clear-tag', `${activeTag !== '' ? 'active' : ''}`)}
                                        onClick={() => {
                                            dispatch.setReset(true);
                                            dispatch.setActiveTag('');
                                            dispatch.getDemos();
                                        }}
                                    >
                                        <svg
                                            width="64px"
                                            height="64px"
                                            viewBox="0 0 21 21"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#2483ff"
                                            stroke="#2483ff"
                                        >
                                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                            <g id="SVGRepo_iconCarrier">
                                                <g
                                                    fill="none"
                                                    fillRule="evenodd"
                                                    stroke="#000000"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    transform="matrix(0 1 1 0 2.5 2.5)"
                                                >
                                                    <path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8" />
                                                    <path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)" />
                                                </g>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                            </BaseControl>
                        </div>
                    </div>
                </div>
            )}

            {items && items.length > 0 && (
                <InnerTemplate
                    templates={items.length > number ? items.slice(0, number) : items}
                    handleImportTemplate={handleImportTemplate}
                    favIds={favIds}
                    handleFavTemplate={handleFavTemplate}
                />
            )}

            {items && items?.length > number && (
                <div className="load-more-btn-wrapper">
                    <button
                        className="load-more-btn"
                        onClick={() => {
                            setNumber(number + 20);
                        }}
                    >
                        {__('Load More', 'zoloblocks')}
                    </button>
                </div>
            )}
            {items?.length === 0 && !loading && (itemText === 'Pages' || itemText === 'Templates' || itemText === 'Favorites Items') && (
                <div className="no-found-item">
                    <h2>{__(`No ${itemText} found`, 'zoloblocks')}</h2>
                </div>
            )}
        </>
    );
};

export default Content;
