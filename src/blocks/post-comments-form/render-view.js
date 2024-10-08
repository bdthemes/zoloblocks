import {useEffect, useState} from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import {Spinner} from '@wordpress/components';
const {isEmpty} = window.zoloModule;
export default function RenderView({attributes}) {
  const {
    commentQuery,
    textLimit,
    avatarSize
  } = attributes;


  return (
    <>
      <div id="comments" className="comments-area">
        <ul className="comment-list">
          <li className="comment byuser comment-author-admin bypostauthor even thread-even depth-1">
            <div className="comment-body">
              <div className="comment-author vcard">
                <div>
                  <img alt="" src="http://0.gravatar.com/avatar/988b380df559b1f75b71fdaa28463873?s=200&amp;d=mm&amp;r=g"
                       srcSet="http://0.gravatar.com/avatar/988b380df559b1f75b71fdaa28463873?s=400&amp;d=mm&amp;r=g 2x"
                       className="avatar avatar-200 photo" height="200" width="200" decoding="async"/>
                </div>
                <cite className="fn">
                  <a href="http://null.test/author/admin/" rel="external nofollow ugc" className="url">admin</a>
                </cite>
                <span className="says">says:</span>
              </div>
              <div className="comment-meta commentmetadata">
                <a href="#">March 25, 2020 at 10:04 am</a>
                &nbsp;&nbsp;
                <a className="comment-edit-link" href="#">Edit</a>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div className="reply">
                <a rel="nofollow" className="comment-reply-link" href="#">Reply</a>
              </div>
            </div>
          </li>
        </ul>

        <div id="respond" className="comment-respond">
          <h3 id="reply-title" className="comment-reply-title">Leave Your Comment</h3>

          <form action="#" method="post" id="commentform" className="comment-form">
            <p className="logged-in-as">Logged in as <a href="#" title="Log out of this account">Log out?</a></p>

            <div className="zolo-row">
              <div className="zolo-col-md-12 zolo-col">
                <label>
                  <textarea id="comment" name="comment" cols="45" rows="6" placeholder="Comment"
                            aria-required="true"></textarea>
                </label>
              </div>
            </div>

            <p className="form-submit">
              <input name="submit" type="submit" id="submit" className="submit" value="Submit Now"/>
            </p>

          </form>
        </div>
      </div>

    </>
  );
}
