import { RawHTML } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
const { DynamicTag, DisplayZoloIcon, sanitizeUrl, sanitizeText } = window.zoloModule;

function RenderView({ attributes, postResults }) {
    const {
        preset,
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
    } = attributes;

    const defaultAuthorPrefix = preset === 'style-4' ? __('By', 'zoloblocks') : __('Posted By', 'zoloblocks');

    return (
        <>
            {postResults.length > 0 &&
                postResults.map((post) => {
                    // Ensure unique keys for posts
                    const uniqueKey = post.id || post.slug || Math.random().toString(36).slice(2);

                    const titleLimitWords = titleWords > 0 ? post.title.trim().split(' ', titleWords).join(' ') : post.title;
                    const excerptLimitWords = excerptWords > 0 ? post.excerpt.trim().split(' ', excerptWords).join(' ') : post.excerpt;

                    const categoriesHtml =
                        post.categories.length > 0 ? (
                            <ul className="zolo-post-category">
                                {post.categories.map((item, index) => (
                                    <li key={`${uniqueKey}-category-${index}`} dangerouslySetInnerHTML={{ __html: item }} />
                                ))}
                            </ul>
                        ) : null;

                    const avatar = <a dangerouslySetInnerHTML={{ __html: post.avatar }} />;
                    const author = (
                        <div className="zolo-post-author-name">
                            <span>{sanitizeText(authorPrefix) || defaultAuthorPrefix}</span>
                            <a href="#" className="zolo-post-author-link" dangerouslySetInnerHTML={{ __html: post.author }}></a>
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
                                    <span className="meta-separator">{sanitizeText(metaSeparator)}</span>
                                    {readingTime}
                                </>
                            )}
                        </div>
                    );

                    return (
                        <div className="zolo-post-item swiper-slide" key={uniqueKey}>
                            <div className="zolo-post-image">
                                {showThumbnail && preset !== 'style-4' && (
                                    <>
                                        {post.thumbnail && (
                                            <a href={'#'}>
                                                <RawHTML>{post.thumbnail}</RawHTML>
                                            </a>
                                        )}
                                        {!post.thumbnail && (
                                            <a href={'#'}>
                                                <img src={zoloPlaceholders.placeholder} alt={__('Thumbnail Placeholder', 'zoloblocks')} />
                                            </a>
                                        )}
                                    </>
                                )}

                                {preset === 'style-4' && (
                                    <div className="zolo-post-img-category">
                                        {showThumbnail && (
                                            <>
                                                {post.thumbnail && (
                                                    <a href={'#'}>
                                                        <RawHTML>{post.thumbnail}</RawHTML>
                                                    </a>
                                                )}
                                                {!post.thumbnail && (
                                                    <a href={'#'}>
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

                                {showMeta && preset !== 'style-4' && dateRTimeHtml}
                                {showAuthor && preset !== 'style-4' && authorInfoHtml}

                                {preset === 'style-4' && (
                                    <div className="zolo-post-meta-wrap">
                                        {showMeta && dateRTimeHtml}
                                        {showAuthor && authorInfoHtml}
                                    </div>
                                )}
                            </div>

                            <div className="zolo-post-content">
                                <div className="zolo-post-inner-content">
                                    {showCategory && preset !== 'style-4' && categoriesHtml}
                                    {showTitle && (
                                        <DynamicTag tagName={titleTag} className="zolo-post-title">
                                            <a href={'#'}>
                                                <RawHTML>{titleLimitWords}</RawHTML>
                                            </a>
                                        </DynamicTag>
                                    )}
                                    {showExcerpt && (
                                        <div className="zolo-post-desc">
                                            <p>
                                                <RawHTML>{excerptLimitWords}</RawHTML>  
                                                {sanitizeText(excerptindicator)}
                                            </p>
                                        </div>
                                    )}
                                    {showMeta && preset !== 'style-4' && dateRTimeHtml}
                                </div>
                                {showReadMore && (
                                    <div className="zolo-post-link-btn">
                                        <a href={'#'}>
                                            {showReadmoreText && readMoreBtnText && <>{sanitizeText(readMoreBtnText)}</>}
                                            {showReadmoreIcon && readMoreIcon && <DisplayZoloIcon icon={readMoreIcon} />}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
        </>
    );
}

export default RenderView;
