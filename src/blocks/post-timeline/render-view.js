import {RawHTML} from '@wordpress/element';
import {__} from '@wordpress/i18n';

const {DynamicTag} = window.zoloModule;

function RenderView({attributes, postResults}) {
  const {
    preset,
    showThumbnail,
    showTitle,
    titleWords,
    titleTag,
    showExcerpt,
    showMeta,
    excerptWords,
    excerptindicator,
    showCategory,
    showReadingTime,
    showComment,
    showDate,
    metaSeparator,
  } = attributes;


  return (
    <>
      {
        postResults.length > 0 &&
        postResults.map((post) => {
          const titleLimitWords = titleWords > 0 ? post.title.trim().split(' ', titleWords).join(' ') : post.title;
          const excerptLimitWords = excerptWords > 0 ? post.excerpt.trim().split(' ', excerptWords).join(' ') : post.excerpt;
          const uniqueKey = post.id || post.slug || Math.random().toString(36).slice(2);
          const categoriesHtml =
            post.categories.length > 0 ? (
              <ul className="zolo-post-category">
                {post.categories.map((item, index) => (
                  <li key={`${uniqueKey}-category-${index}`} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            ) : (
              ''
            );

          const date = <div className="zolo-post-date">{post.date}</div>;

          const readingTime = (
            <div className="zolo-post-estimate">
              {post.reading_time} {__('Min Read', 'zoloblocks')}
            </div>
          );


          return (
            <div className="zolo-item" key={uniqueKey}>
              <div className="zolo-content-wrap">
                <div className="zolo-counter"></div>
                <div className="zolo-content">

                  {showThumbnail && (
                    <div className="zolo-post-image">
                      {post.thumbnail && <a href={post.permalink} dangerouslySetInnerHTML={{ __html: post.thumbnail }}></a>}
                      {!post.thumbnail && (
                        <a href={post.permalink}>
                          <img src={zoloPlaceholders.placeholder} alt={__('Thumbnail Placeholder', 'zoloblocks')} />
                        </a>
                      )}
                    </div>
                  )}

                  {showDate && date}

                  {showTitle && (
                    <DynamicTag tagName={titleTag} className="zolo-post-title">
                      <a href={post.permalink}>
                        <RawHTML>{titleLimitWords}</RawHTML>
                      </a>
                    </DynamicTag>
                  )}
                  {showExcerpt && (
                    <div className="zolo-post-desc">
                      <p><span>{excerptLimitWords}</span>{excerptindicator}</p>
                    </div>
                  )}
                  {showMeta && (
                    <div className="zolo-post-meta">
                      {showCategory && categoriesHtml}
                      {showComment && (
                        <div data-separator={metaSeparator || '|'}>
                          <div className="zolo-post-comment">{post?.comment_number + __(' Comments', 'zoloblocks')} </div>
                        </div>
                      )}
                      {showReadingTime && (
                        <div data-separator={metaSeparator || '|'}>
                          {readingTime}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })
      }
    </>
  )
}

export default RenderView;
