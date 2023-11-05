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
          className="zolo-post-author-name"
          dangerouslySetInnerHTML={{ __html: __('<span>by</span> ') + post.author_link }}
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
          </div>

          <div className="zolo-post-content">
            <div className="zolo-post-count-number"></div>
            <div className='zolo-post-inner-content'>

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

              {showMeta && (
                <div className="zolo-post-meta">
                  {author}
                  {date}
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
