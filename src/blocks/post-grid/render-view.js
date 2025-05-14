import { RawHTML, useEffect, useState, useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';

const { DynamicTag, DisplayZoloIcon, ZoloSpinner } = window.zoloModule;

let postContentCache = new Map();

function RenderView({ attributes, setAttributes }) {
    const {
        postQuery,
        preset,
        postTitleAnimation,
        showThumbnail,
        showTitle,
        titleWords,
        titleTag,
        showExcerpt,
        excerptWords,
        excerptindicator,
        showReadMore,
        showReadmoreText,
        showReadmoreIcon,
        readMoreBtnText,
        readMoreIcon,
        showCategory,
        showAuthor,
        showMeta,
        showReadingTime,
        metaSeparator,
        authorPrefix,
        postTerms,
        showFilterTaxonomy,
        postTaxonomy,
    } = attributes;

    const defaultAuthorPrefix = preset === 'style-5' ? __('By', 'zoloblocks') : __('Posted By', 'zoloblocks');

    //for filter taxonomy.
    const filterAll = [{ value: 'all', label: 'All' }];
    const [filterArray, setFilterArray] = useState([]);
    const fetchFilterData = async () => {
        const formData = new FormData();
        formData.append('action', 'zolo_get_filter_terms');
        formData.append('zolo_nonce', zoloParams.zolo_nonce);
        formData.append('postTaxonomy', postTaxonomy);
        formData.append('filterTerms', JSON.stringify(postTerms));
        try {
            const response = await apiFetch({
                url: zoloParams?.ajaxurl,
                method: 'POST',
                body: formData,
            });
            const results = response?.data || [];
            return results.map((item) => ({
                value: item.term_id,
                label: item.name,
            }));
        } catch (error) {
            console.error('fetch data error', error);
            return [];
        }
    };
    useEffect(() => {
        fetchFilterData().then((filterLists) => {
            setFilterArray([...filterAll, ...filterLists]);
        });
    }, [postTerms]);

    //for post results.
    const [currentTab, setCurrentTab] = useState('all');
    const [isLoading, setIsLoading] = useState(false);
    const [postResults, setPostResults] = useState([]);
    const [dataSuccess, setDataSuccess] = useState(true);

    const dataFetch = async (termId = '') => {
        setIsLoading(true);
        const apiData = {
            zolo_nonce: zoloParams.zolo_nonce,
            attributes: attributes,
            postQuery: postQuery,
            postTermId: termId,
            postTaxonomy: postTaxonomy,
        };
        try {
            const response = await apiFetch({ path: '/zolo/v1/posts', method: 'POST', data: apiData });
            if (response.success) {
                setPostResults([...response.data.posts]);
                setDataSuccess(response.success);
                postContentCache.set(termId, [...response.data.posts]);
                setAttributes({ pageTotal: response.data.total_page });
            } else {
                setPostResults([]);
                setDataSuccess(response.success);
            }
        } catch (error) {
            console.error('Error:', error);
            setPostResults([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleFilterClick = async (filterTermId) => {
        setCurrentTab(filterTermId);
        if (postContentCache.has(filterTermId)) {
            setPostResults([...postContentCache.get(filterTermId)]);
            setIsLoading(false);
        } else {
            dataFetch(filterTermId);
        }
    };

    useEffect(() => {
        dataFetch();
    }, [JSON.stringify({ ...postQuery, showPagination: undefined })]);

    return (
        <>
            {filterArray.length > 0 && showFilterTaxonomy && (
                <div className="zolo-post-filter-taxonomy">
                    {filterArray.map((term, index) => (
                        <a
                            key={index}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                handleFilterClick(term.value);
                            }}
                            className={currentTab === term.value ? 'current' : ''}
                            data-id={term.value}
                        >
                            {term.label}
                        </a>
                    ))}
                </div>
            )}

            <div className="zolo-post-content-wrap">
                {isLoading && (
                    <div className="preloader">
                        <ZoloSpinner />
                    </div>
                )}
                {postResults.length > 0 &&
                    postResults.map((post) => {
                        const titleLimitWords = titleWords > 0 ? post.title.trim().split(' ', titleWords).join(' ') : post.title;
                        const excerptLimitWords = excerptWords > 0 ? post.excerpt.trim().split(' ', excerptWords).join(' ') : post.excerpt;
                        const uniqueKey = post.id || post.slug || Math.random().toString(36).slice(2);
                        const categoriesHtml =
                            post.categories.length > 0 ? (
                                <ul className="zolo-post-category">
                                    {post.categories.map((item, index) => (
                                        <li
                                            key={`${uniqueKey}-category-${index}`}
                                            dangerouslySetInnerHTML={{ __html: item }}
                                            onClick={(e) => e.preventDefault()}
                                        />
                                    ))}
                                </ul>
                            ) : (
                                ''
                            );

                        const avatar = <a dangerouslySetInnerHTML={{ __html: post.avatar }} />;
                        const author = (
                            <div className="zolo-post-author-name">
                                <span>{authorPrefix || defaultAuthorPrefix}</span>
                                <a
                                    href="#"
                                    className="zolo-post-author-link"
                                    dangerouslySetInnerHTML={{ __html: post.author }}
                                    onClick={(e) => e.preventDefault()}
                                ></a>
                            </div>
                        );
                        const date = <div className="zolo-post-date">{post.date}</div>;
                        const readingTime = (
                            <div className="zolo-post-estimate">
                                {post.reading_time} {__('Min Read', 'zoloblocks')}
                            </div>
                        );

                        const authorInfoHtml = (
                            <div className="zolo-post-meta-box">
                                {avatar}
                                {author}
                            </div>
                        );
                        const dateRTimeHtml = (
                            <div className="zolo-post-dateTime">
                                {date}
                                {showReadingTime && (
                                    <>
                                        <span className="meta-separator">{metaSeparator}</span>
                                        {readingTime}
                                    </>
                                )}
                            </div>
                        );

                        return (
                            <div className="zolo-post-item" key={uniqueKey}>
                                <div className="zolo-post-image">
                                    {showThumbnail && preset !== 'style-5' && (
                                        <>
                                            {post.thumbnail && (
                                                <a
                                                    href={post.permalink}
                                                    dangerouslySetInnerHTML={{ __html: post.thumbnail }}
                                                    onClick={(e) => e.preventDefault()}
                                                ></a>
                                            )}
                                            {!post.thumbnail && (
                                                <a href={post.permalink} onClick={(e) => e.preventDefault()}>
                                                    <img
                                                        src={zoloPlaceholders.placeholder}
                                                        alt={__('Thumbnail Placeholder', 'zoloblocks')}
                                                    />
                                                </a>
                                            )}
                                        </>
                                    )}

                                    {preset === 'style-5' && (
                                        <div className="zolo-post-img-category">
                                            {showThumbnail && (
                                                <>
                                                    {post.thumbnail && (
                                                        <a
                                                            href={post.permalink}
                                                            dangerouslySetInnerHTML={{ __html: post.thumbnail }}
                                                            onClick={(e) => e.preventDefault()}
                                                        ></a>
                                                    )}
                                                    {!post.thumbnail && (
                                                        <a href={post.permalink} onClick={(e) => e.preventDefault()}>
                                                            <img
                                                                src={zoloPlaceholders.placeholder}
                                                                alt={__('Thumbnail Placeholder', 'zoloblocks')}
                                                            />
                                                        </a>
                                                    )}
                                                </>
                                            )}
                                            {showCategory && categoriesHtml}
                                        </div>
                                    )}

                                    {showMeta && preset !== 'style-5' && preset !== 'style-6' && dateRTimeHtml}

                                    {showAuthor && preset !== 'style-5' && preset !== 'style-6' && authorInfoHtml}

                                    {preset === 'style-5' && (
                                        <div className="zolo-post-meta-wrap">
                                            {showMeta && preset == 'style-5' && dateRTimeHtml}
                                            {showAuthor && authorInfoHtml}
                                        </div>
                                    )}
                                </div>

                                <div className="zolo-post-content">
                                    <div className="zolo-post-inner-content">
                                        {showCategory && preset !== 'style-5' && categoriesHtml}
                                        {showTitle && (
                                            <DynamicTag tagName={titleTag} className="zolo-post-title">
                                                <a href={post.permalink} onClick={(e) => e.preventDefault()}>
                                                    <RawHTML>{titleLimitWords}</RawHTML>
                                                </a>
                                            </DynamicTag>
                                        )}
                                        {showExcerpt && (
                                            <div className="zolo-post-desc">
                                                <p>
                                                    <RawHTML>{excerptLimitWords}</RawHTML>
                                                    {excerptindicator}
                                                </p>
                                            </div>
                                        )}
                                        {showMeta && preset !== 'style-5' && preset !== 'style-6' && dateRTimeHtml}
                                    </div>

                                    {showReadMore && preset !== 'style-6' && (
                                        <div className="zolo-post-link-btn">
                                            <a href={post.permalink} onClick={(e) => e.preventDefault()}>
                                                {showReadmoreText && readMoreBtnText && <>{__(readMoreBtnText, 'zoloblocks')}</>}
                                                {showReadmoreIcon && readMoreIcon && <DisplayZoloIcon icon={readMoreIcon} />}
                                            </a>
                                        </div>
                                    )}
                                    {preset === 'style-6' && (
                                        <div className="zolo-post-bottom-content">
                                            {showMeta && dateRTimeHtml}
                                            {showReadMore && (
                                                <div className="zolo-post-link-btn">
                                                    <a href={post.permalink} onClick={(e) => e.preventDefault()}>
                                                        {showReadmoreText && readMoreBtnText && <>{__(readMoreBtnText, 'zoloblocks')}</>}
                                                        {showReadmoreIcon && readMoreIcon && <DisplayZoloIcon icon={readMoreIcon} />}
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                {!dataSuccess && <p>{__('No posts found.', 'zoloblocks')}</p>}
            </div>
        </>
    );
}

export default RenderView;
