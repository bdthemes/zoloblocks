import {__, sprintf} from '@wordpress/i18n';
import {useSelect} from '@wordpress/data';
import {contentReadingTime} from "./constants";

const AuthorMeta = ({post, meta}) => {
  const authorId = post?.author;
  const author = useSelect(
    (select) => authorId ? select('core').getUser(authorId) : null,
    [authorId]
  );
  const authorName = author?.name || __('Author Name', 'zoloblocks');
  const authorLink = author?.link || '#';

  const content = (
    <>
      {meta?.showIcon !== 'none' && (
        <span className="zolo-icon" dangerouslySetInnerHTML={{__html: meta?.icon}}/>
      )}
      <span className="zolo-text">{authorName}</span>
    </>
  );

  return meta?.link ? (
    <a href={authorLink} onClick={event => event.preventDefault()}>
      {content}
    </a>
  ) : content;
};

const DateMeta = ({post, meta}) => {
  const postDate = meta?.dateType==='post_modified'? (post?.modified ? new Date(post.modified) : null):(post?.date ? new Date(post.date) : null);
  const formattedDate = postDate ? postDate.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : __('Date');
  const dateLink = postDate ? post.link : '#';

  const content = (
    <>
      {meta?.showIcon !== 'none' && (
        <span className="zolo-icon" dangerouslySetInnerHTML={{__html: meta?.icon}}/>
      )}
      <span className="zolo-text">{formattedDate}</span>
    </>
  );

  return meta.link ? (
    <a href={dateLink} onClick={(event) => event.preventDefault()}>
      {content}
    </a>
  ) : content;
};

const TimeMeta = ({post, meta}) => {
  const postDate = post?.date ? new Date(post.date) : null;
  const formattedTime = postDate
    ? postDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true})
    : __('Time', 'zoloblocks');
  return (<>
    {meta?.showIcon !== 'none' && (
      <span className="zolo-icon" dangerouslySetInnerHTML={{__html: meta?.icon}}/>
    )}
    <span className="zolo-text">{formattedTime}</span>
  </>);
};

const TermsMeta = ({post, meta}) => {
  const categories = useSelect((select) => {
    const {getEntityRecords} = select('core');
    return post?.id ? getEntityRecords('taxonomy', meta?.taxonomy || 'category', {post: post?.id}) || []:[];
  }, [post?.id, meta?.taxonomy]);

  const termsDisplay = categories.length
    ? categories.map((term, index) => {
      const separator = index < categories.length - 1 ? ', ' : '';
      if (meta?.link) {
        return (
          <>
              <a className="term-name" href={term.link} onClick={(event) => event.preventDefault()}>
                {term.name}
              </a>
            <span className="separator">{separator}</span>
          </>
        );
      }
      return (
        <>
          <span className="term-name">{term.name}</span>
          <span className="separator">{separator}</span>
        </>
      );
    })
    : __('Categories', 'zoloblocks');

  return (
    <>
      {meta?.showIcon !== 'none' && (
        <span className="zolo-icon" dangerouslySetInnerHTML={{__html: meta?.icon}}/>
      )}
      <span className="zolo-text">{termsDisplay}</span>
    </>
  );
};

const CommentsMeta = ({post, meta}) => {
  const commentCount = post?.comment_count || 0;
  const commentsLabel = sprintf(__('%d Comments', 'zoloblocks'), commentCount);
  const commentsLink = post?.link ? `${post.link}#comments` : '#';

  const content = (
    <>
      {meta?.showIcon !== 'none' && (
        <span className="zolo-icon" dangerouslySetInnerHTML={{__html: meta?.icon}}/>
      )}
      <span className="zolo-text">{commentsLabel}</span>
    </>
  );

  return meta?.link ? (
    <a href={commentsLink} onClick={event => event.preventDefault()}>
      {content}
    </a>
  ) : content;
};

const ReadingTimeMeta = ({post, meta}) => {
  const rawContent = useSelect(
    (select) => post?.content ? select('core/editor').getEditedPostContent() : '',
    [post?.content]
  );
  const readingTime = rawContent ? contentReadingTime(rawContent) : 0;
  const readingTimeLabel = sprintf(__('%d Min Read', 'zoloblocks'), readingTime);

  return  (
    <>
      {meta?.showIcon !== 'none' && (
        <span className="zolo-icon" dangerouslySetInnerHTML={{__html: meta?.icon}}/>
      )}
      <span className="zolo-text">{readingTimeLabel}</span>
    </>
  );
};

const MetaItem = ({meta, post}) => {
  const getMetaComponent = (type) => {
    switch (type) {
      case 'author':
        return <AuthorMeta post={post} meta={meta}/>;
      case 'date':
        return <DateMeta post={post} meta={meta}/>;
      case 'time':
        return <TimeMeta post={post} meta={meta}/>;
      case 'comments':
        return <CommentsMeta post={post} meta={meta}/>;
      case 'terms':
        return <TermsMeta post={post} meta={meta}/>;
      case 'reading time':
        return <ReadingTimeMeta post={post} meta={meta}/>
      default:
        return null;
    }
  };

  return (<div className={`zolo-meta-info ${meta.type}`}>
    {getMetaComponent(meta.type)}
  </div>);
};

export default MetaItem;
