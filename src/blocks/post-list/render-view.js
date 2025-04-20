import { RawHTML } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
const { DynamicTag } = window.zoloModule;
function RenderView({ attributes, postResults }) {
    const {
        titleWords,
        titleTag,
        showfeatureimg,
        showExcerpt,
        excerptWords,
        excerptindicator,
        showCategory,

        showMeta,
        showCount,
        showReadingTime,
        metaSeparator,
        authorPrefix,
    } = attributes;

    const defaultAuthorPrefix = __('Posted By', 'zoloblocks');
    return (
        <>
            {postResults.length > 0 &&
                postResults.map((post, index) => {
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

                    const author = (
                        <div className="zolo-post-author-name">
                            <span>{authorPrefix || defaultAuthorPrefix}</span>
                            <a
                                href="#"
                                className="zolo-post-author-link"
                                dangerouslySetInnerHTML={{ __html: post.author }}
                                onClick={(e) => e.preventDefault()}
                            />
                        </div>
                    );
                    const date = <div className="zolo-post-date">{post.date}</div>;
                    const readingTime = <div className="zolo-post-estimate">{post.reading_time}</div>;

                    const readingTimeHtml = (
                        <div className="zolo-post-reading-time">
                            {readingTime}
                            {__('Min Read', 'zoloblocks')}
                        </div>
                    );

                    return (
                        <div className={`zolo-post-item ${index === 0 ? showfeatureimg && 'featured-post' : ''}`} key={uniqueKey}>
                            <div className="zolo-post-image">
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
                                            <img src={zoloPlaceholders.placeholder} alt={__('Thumbnail Placeholder', 'zoloblocks')} />
                                        </a>
                                    )}
                                </>
                            </div>

                            <div className="zolo-post-content">
                                {showCount && <div className="zolo-post-count-number"></div>}

                                <div className="zolo-post-inner-content">
                                    {showCategory && categoriesHtml}

                                    <DynamicTag tagName={titleTag} className="zolo-post-title">
                                        <a href={post.permalink} onClick={(e) => e.preventDefault()}>
                                            <RawHTML>{titleLimitWords}</RawHTML>
                                        </a>
                                    </DynamicTag>
                                    {showExcerpt && (
                                        <div className="zolo-post-desc">
                                            <p>
                                                <RawHTML>{excerptLimitWords}</RawHTML>
                                                {excerptindicator}
                                            </p>
                                        </div>
                                    )}
                                    {showMeta && (
                                        <div className="zolo-post-meta">
                                            {author}
                                            <span className="meta-separator">{metaSeparator}</span>
                                            {date}
                                            {showReadingTime && (
                                                <>
                                                    <span className="meta-separator">{metaSeparator}</span>
                                                    {readingTimeHtml}
                                                </>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
        </>
    );
}

export default RenderView;
