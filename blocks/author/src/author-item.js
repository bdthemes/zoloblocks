const {isEmpty} = window.zoloModule;
import {__} from '@wordpress/i18n';

function AuthorItem({author, attributes}) {
  const {
    showName,
    showDescription,
    showRole,
    showSocialLink,
    showPostCount
  } = attributes;

  return (
    <div className="zolo-item">
      <div className="zolo-image">
        <a href={author.link} dangerouslySetInnerHTML={{__html: author.avatar}}></a>
      </div>
      <div className="zolo-content">
        {(showName && !isEmpty(author.name)) && (
          <div className="zolo-name">
            <a href={author.link}>{author.name}</a>
          </div>
        )}
        {showRole && (
          <div className="zolo-role">{author.role}</div>
        )}

        {showDescription && (
          <div className="zolo-description">{author.description}</div>
        )}

        {showSocialLink && (
          <div className="zolo-link">

          </div>
        )}

      </div>
      {showPostCount && (
        <div className="zolo-post-count">{__('Posts:', 'zoloblocks')} {author.postCount}</div>
      )}

    </div>
  );
}

export default AuthorItem;
