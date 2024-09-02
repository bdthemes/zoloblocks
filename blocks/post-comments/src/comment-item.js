const {isEmpty} = window.zoloModule;

function CommentItem({comment, attributes}) {
  const {
    showTitle,
    showText,
    textLimit,
    showAuthor,
    authorMiddleText,
    showDate,
  } = attributes;
  const content = textLimit > 0 ? comment.content.trim().split(' ', textLimit).join(' ') : comment.content;
  return (
    <div className="zolo-item">
      <div className="zolo-meta">

        {showAuthor && (
          <div className="zolo-avatar" dangerouslySetInnerHTML={{__html: comment.avatar}}></div>
        )}

        <div className="zolo-author-info">
          {showAuthor && (
            <a className="zolo-author-name" href={comment.link} target="_blank">
              {comment.author} {showTitle && (
              authorMiddleText + ' ' + comment.title
            )}
            </a>
          )}

          {showDate && (
            <div className="zolo-date">{comment.date}</div>
          )}

        </div>

      </div>
      {showText && (
        <p className="zolo-text">{content}</p>
      )}
    </div>
  );
}

export default CommentItem;
