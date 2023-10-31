import { __ } from '@wordpress/i18n';
const { DynamicTag } = window.zoloModule;
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
        readMoreBtnText,
        showCategory,
        showAuthor,
        showMeta,
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
                    <div
                        className="zolo-post-meta-content"
                        dangerouslySetInnerHTML={{ __html: __('<span>posted by</span>') + post.author_link }}
                    />
                );
                const date = <div className="zolo-post-date">{post.date}</div>;
                const readingTime = <div className="zolo-post-estimate">{post.reading_time}</div>;

                const authorInfoHtml = (
                    <div className="zolo-post-meta-box">
                        {avatar}
                        {author}
                    </div>
                );
                const dateRTimeHtml = (
                    <div className="zolo-post-dateTime">
                        {date}
                        <span>,</span>
                        {readingTime}
                        {__('Min Read', 'zolo-blocks')}
                    </div>
                );

                return (
                    <div className="zolo-post-item">
                        <div className="zolo-post-image">
                            {showThumbnail && (
                                <>
                                    {post.thumbnail && <a href={post.permalink} dangerouslySetInnerHTML={{ __html: post.thumbnail }}></a>}
                                    {!post.thumbnail && (
                                        <a href={post.permalink}>
                                            <img src="https://via.placeholder.com/380x440.png" alt="No Image Available" />
                                        </a>
                                    )}
                                </>
                            )}

                            {showMeta && preset == 'style-5' && dateRTimeHtml}

                            {showAuthor && authorInfoHtml}
                        </div>

                        <div className="zolo-post-content">
                            <div className="zolo-post-inner-content">
                                {showCategory && categoriesHtml}
                                {showTitle && (
                                    <DynamicTag tagName={titleTag} className="zolo-post-title">
                                        <a href={post.permalink}>{titleLimitWords}</a>
                                    </DynamicTag>
                                )}
                                {showExcerpt && (
                                    <div className="zolo-post-desc">
                                        <p>
                                            {excerptLimitWords}
                                            {excerptindicator}
                                        </p>
                                    </div>
                                )}
                                {showMeta && preset != 'style-5' && dateRTimeHtml}
                            </div>
                            {showReadMore && (
                                <div className="zolo-post-link-btn">
                                    <a href={post.permalink}>
                                        {__(readMoreBtnText)}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-arrow-right"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                            ></path>
                                        </svg>
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
