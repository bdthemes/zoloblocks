import { RawHTML } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
const { DynamicTag, DisplayZoloIcon } = window.zoloModule;
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
    } = attributes;

    return [
        postResults.length > 0 &&
            postResults.map((post) => {
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

                const avatar = <a dangerouslySetInnerHTML={{ __html: post.avatar }} />;
                const author = (
                        <div className="zolo-post-author-name">
                            <span>{__('Posted by', 'zoloblocks')}</span>
                            <a href="#" className='zolo-post-author-link' dangerouslySetInnerHTML={{ __html: post.author }}></a>
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
                    <div className="zolo-post-item">
                        <div className="zolo-post-image">

                            {showThumbnail && preset !== 'style-5' &&(
                                <>
                                    {post.thumbnail && <a href={post.permalink} dangerouslySetInnerHTML={{ __html: post.thumbnail }}></a>}
                                    {!post.thumbnail && (
                                        <a href={post.permalink}>
                                            <img src={zoloPlaceholders.placeholder} alt={__('Thumbnail Placeholder', 'zoloblocks')} />
                                        </a>
                                    )}
                                </>
                            )}

                            {preset === 'style-5' && (
                                <div className="zolo-post-img-category">
                                    {showThumbnail && (
                                            <>
                                                {post.thumbnail && <a href={post.permalink} dangerouslySetInnerHTML={{ __html: post.thumbnail }}></a>}
                                                {!post.thumbnail && (
                                                    <a href={post.permalink}>
                                                        <img src={zoloPlaceholders.placeholder} alt={__('Thumbnail Placeholder', 'zoloblocks')} />
                                                    </a>
                                                )}
                                            </>
                                        )}
                                    {showCategory && categoriesHtml}
                                </div>
                            )}

                            
                            {showMeta && preset !== 'style-5' && dateRTimeHtml}

                            {showAuthor && preset !== 'style-5' && authorInfoHtml}

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
                                        <a href={post.permalink}>
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
                                {showMeta && preset != 'style-5' && dateRTimeHtml}
                            </div>
                            {showReadMore && (
                                <div className="zolo-post-link-btn">
                                    <a href={post.permalink}>
                                        {showReadmoreText && readMoreBtnText && <>{__(readMoreBtnText, 'zoloblocks')}</>}
                                        {showReadmoreIcon && readMoreIcon && <DisplayZoloIcon icon={readMoreIcon} />}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                );
            }),
    ];
}

export default RenderView;
