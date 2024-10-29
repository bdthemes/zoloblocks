import {__} from '@wordpress/i18n';

export default function RenderView({attributes}) {
  const {
    showCommentTitle,
    showCommentCount,
    showForm,
    commentFormTitle,
    cancelReply,
    loginAsText,
    logoutText,
    submitBtnText
  } = attributes;

  return (
    <>
      {showCommentTitle && (
        <div className="zolo-comment-count">{showCommentCount && <span>1</span>} {__('Comment', 'zoloblocks')}</div>
      )}

      <ul className="zolo-comment-list">
        <li className="comment byuser comment-author-admin bypostauthor even thread-even depth-1">
          <div className="comment-body">
            <footer className="comment-meta">
              <div className="comment-author vcard">
                <img alt="avatar" src="https://2.gravatar.com/avatar/20ec7e03797c09e0f5b952b6d8823d81?s=250&d=mm&r=g"
                     className="avatar avatar-200 photo" height="200" width="200" decoding="async"/>
                <b className="fn">
                  <a onClick={event => event.preventDefault()} href="http://null.test/author/admin/"
                     rel="external nofollow ugc" className="url">admin</a>
                </b>
                <span className="says">says:</span>
              </div>
              <div className="comment-metadata">
                <a onClick={event => event.preventDefault()} href="#">October 15, 2024 at 10:04 am</a>&nbsp;
                <a onClick={event => event.preventDefault()} className="comment-edit-link" href="#">Edit</a>
              </div>
            </footer>

            <div className="comment-content">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            <div className="reply">
              <a onClick={(event) => event.preventDefault()} className="comment-reply-link" href="#">Reply</a>
            </div>

          </div>
        </li>
      </ul>

      {showForm && (
        <div id="respond" className="comment-respond">
          <h3 id="reply-title" className="comment-reply-title">
            {commentFormTitle}
            <small>
              <a onClick={(event) => event.preventDefault()} id="cancel-comment-reply-link"
                 href="#">{cancelReply}</a>
            </small>
          </h3>

          <form action="#" method="post" id="commentform" className="zolo-comment-form">
            <p className="logged-in-as">
              {loginAsText}
              <a onClick={event => event.preventDefault()} href="#">{__(' admin.', 'zoloblocks')}</a>
              <a onClick={event => event.preventDefault()} href="#">{logoutText}</a>
            </p>

            <div className="zolo-form-group">
            <textarea id="comment" name="comment" cols="45" rows="6"
                      placeholder={__('Comment', 'zoloblocks')}></textarea>
            </div>

            <p className="form-submit wp-block-button">
              <input name="submit" type="submit" id="submit" className="submit wp-element-button"
                     value={submitBtnText}/>
            </p>

          </form>
        </div>
      )}
    </>
  )
    ;
}
