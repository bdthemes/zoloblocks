import {RawHTML, useEffect, useState,useMemo} from '@wordpress/element';
import {__} from '@wordpress/i18n';
import {Spinner} from "@wordpress/components";
import apiFetch from '@wordpress/api-fetch';
const {DynamicTag, DisplayZoloIcon} = window.zoloModule;

let postContentCache = new Map();

function RenderView({attributes, setAttributes}) {
  const {
    postQuery,
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
    postCategory,
    showFilterTaxonomy,
    postTaxonomy,
  } = attributes;


  const defaultAuthorPrefix = preset === 'style-5' ? __('By', 'zoloblocks') : __('Posted By', 'zoloblocks');

  //for filter taxonomy.
  const tabArrayDefault = [{value: '*', label: 'All'}];
  const [catIdArray, setCatIdArray] = useState([]);
  const fetchCatData = async () => {
    let catIdLists = [];

    // Populate catIdLists with values from postCategory
    if (postCategory.length > 0) {
      catIdLists = postCategory.map(item => item.value);
      setAttributes({tabCatId: catIdLists});
    }
    const formData = new FormData();
    formData.append('action', 'zolo_get_cat_terms');
    formData.append('zolo_nonce', zoloParams.zolo_nonce);
    formData.append('postTaxonomy', postTaxonomy);
    formData.append('catId', JSON.stringify(catIdLists));
    try {
      const data = await apiFetch({
        url: zoloParams?.ajaxurl,
        method: 'POST',
        body: formData,
      })
      const results = data?.results || [];
      return results.map((item) => ({
        value: item.term_id,
        label: item.name
      }));
    } catch (error) {
      console.error('fetch data error', error);
      return [];
    }
  }
  useEffect(() => {
    fetchCatData().then((tabLists) => {
      setCatIdArray([...tabArrayDefault, ...tabLists]);
    });
  }, [postCategory]);

  //for post results.
  const [currentTab, setCurrentTab] = useState('*');
  const [isLoading, setIsLoading] = useState(false);
  const [postResults, setPostResults] = useState([]);
  const [dataSuccess, setDataSuccess] = useState(true);

  const dataFetch = async (catId = '') => {
    setIsLoading(true);
    const apiData = {
      zolo_nonce: zoloParams.zolo_nonce,
      attributes: attributes,
      postQuery: postQuery,
      postCategory: catId,
      postTaxonomy: postTaxonomy
    };
    try {
      const response = await apiFetch({path: '/zolo/v1/posts', method: 'POST', data: apiData,});
      if (response.success) {
        setPostResults([...response.data.posts]);
        setDataSuccess(response.success);
        postContentCache.set(catId, [...response.data.posts]);
        setAttributes({pageTotal:response.data.total_page});
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
  }

  const handleTabClick = async (catId) => {
    setCurrentTab(catId);
    if (postContentCache.has(catId)) {
      setPostResults([...postContentCache.get(catId)]);
      setIsLoading(false);
    } else {
      dataFetch(catId);
    }
  }

  useEffect(() => {
    dataFetch();
  }, [JSON.stringify({ ...postQuery, showPagination: undefined })]);

  return (
    <>

      {catIdArray.length > 0 && showFilterTaxonomy && (
        <div className="zolo-post-filter-taxonomy">
          {catIdArray.map((cat) => (
            <a href="#"
               onClick={(e) => {
                 e.preventDefault();
                 handleTabClick(cat.value);
               }}
               className={currentTab === cat.value ? 'current' : ''}
               data-id={cat.value}>
              {cat.label}
            </a>
          ))}
        </div>
      )}


      <div className="zolo-post-content-wrap">

        {isLoading &&
          (<div className="preloader"><Spinner/></div>)
        }

        {postResults.length > 0 &&
          postResults.map((post) => {
            const titleLimitWords = titleWords > 0 ? post.title.trim().split(' ', titleWords).join(' ') : post.title;
            const excerptLimitWords = excerptWords > 0 ? post.excerpt.trim().split(' ', excerptWords).join(' ') : post.excerpt;

            const categoriesHtml =
              post.categories.length > 0 ? (
                <ul className="zolo-post-category">
                  {post.categories.map((item) => (
                    <li dangerouslySetInnerHTML={{__html: item}}/>
                  ))}
                </ul>
              ) : (
                ''
              );

            const avatar = <a dangerouslySetInnerHTML={{__html: post.avatar}}/>;
            const author = (
              <div className="zolo-post-author-name"><span>{authorPrefix || defaultAuthorPrefix}</span>
                <a href="#" className='zolo-post-author-link' dangerouslySetInnerHTML={{__html: post.author}}></a>
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

                  {showThumbnail && preset !== 'style-5' && (
                    <>
                      {post.thumbnail &&
                        <a href={post.permalink} dangerouslySetInnerHTML={{__html: post.thumbnail}}></a>}
                      {!post.thumbnail && (
                        <a href={post.permalink}>
                          <img src={zoloPlaceholders.placeholder} alt={__('Thumbnail Placeholder', 'zoloblocks')}/>
                        </a>
                      )}
                    </>
                  )}

                  {preset === 'style-5' && (
                    <div className="zolo-post-img-category">
                      {showThumbnail && (
                        <>
                          {post.thumbnail &&
                            <a href={post.permalink} dangerouslySetInnerHTML={{__html: post.thumbnail}}></a>}
                          {!post.thumbnail && (
                            <a href={post.permalink}>
                              <img src={zoloPlaceholders.placeholder}
                                   alt={__('Thumbnail Placeholder', 'zoloblocks')}/>
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
                        {showReadmoreIcon && readMoreIcon && <DisplayZoloIcon icon={readMoreIcon}/>}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        }

        {!dataSuccess && (
          <p>{__('No posts found.', 'zoloblocks')}</p>
        )}
      </div>
    </>
  );
}

export default RenderView;
