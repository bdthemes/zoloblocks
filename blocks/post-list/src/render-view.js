import { RawHTML } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
const { DynamicTag } = window.zoloModule;
function RenderView({ attributes, postResults }) {
    const {
        preset,
        showThumbnail,
        showTitle,
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
    } = attributes;

    return [
        postResults.length > 0 &&
            postResults.map((post, index) => {
                const titleLimitWords = titleWords > 0 ? post.title.trim().split(' ', titleWords).join(' ') : post.title;
                const excerptLimitWords = excerptWords > 0 ? post.excerpt.trim().split(' ', excerptWords).join(' ') : post.excerpt;

                const categoriesHtml =
                    post.categories.length > 0 ? (
                        <ul className="zolo-post-category">
                            {post.categories.map((item) => (
                                <li dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                        </ul>
                    ) : (
                        ''
                    );

                 const author = (
                     <div className="zolo-post-author-name">
                         <span>{__('Posted by', 'zoloblocks')}</span>
                         <a href="#" className="zolo-post-author-link" dangerouslySetInnerHTML={{ __html: post.author }}></a>
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
                    <div className={`zolo-post-item ${index === 0 ? showfeatureimg && 'featured-post' : ''}`}>
                        <div className="zolo-post-image">
                            { showThumbnail && (
                                <>
                                    {post.thumbnail && <a href={post.permalink} dangerouslySetInnerHTML={{ __html: post.thumbnail }}></a>}
                                    {!post.thumbnail && (
                                        <a href={post.permalink}>
                                            <img src={zoloPlaceholders.placeholder} alt="Thumbnail Placeholder" />
                                        </a>
                                    )}
                                </>
                            )}
                        </div>

                        <div className="zolo-post-content">
                            {showCount && <div className="zolo-post-count-number"></div>}

                            <div className="zolo-post-inner-content">
                                {showCategory && categoriesHtml}

                                    <DynamicTag tagName={titleTag} className="zolo-post-title">
                                        <a href={post.permalink}>
                                            <RawHTML>{titleLimitWords}</RawHTML>
                                        </a>
                                    </DynamicTag>

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
                                {showExcerpt && (
                                    <div className="zolo-post-desc">
                                        <p>
                                            <RawHTML>{excerptLimitWords}</RawHTML>
                                            {excerptindicator}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                );
            }),
    ];
}

export default RenderView;
