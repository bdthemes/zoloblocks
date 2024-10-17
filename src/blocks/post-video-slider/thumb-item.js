import {__} from '@wordpress/i18n';
import {getPostMetaFieldValue,videoLinkRender} from "./helpers";

function ThumbItem({postResults,attributes}) {
  const {postQuery: {postType}} = attributes;
  return [
    postResults.length > 0 &&
    postResults.map((post) => {
      const videoLink = getPostMetaFieldValue(post?.ID, 'zolo_post_video_link',postType);
      const videoSource = videoLink ? videoLinkRender(videoLink) : false;
      return (
        <div className="zolo-item swiper-slide">
          <div className="zolo-post-image-wrap">
            {post.thumbnail && <span dangerouslySetInnerHTML={{__html: post.thumbnail}}></span>}
            {!post.thumbnail && (
                <img src={zoloPlaceholders.placeholder} alt={__('Thumbnail Placeholder', 'zoloblocks')}/>
            )}
            {videoSource && (
              <div className="zolo-video-button">
                <a className="zolo-post-video-trigger" data-src={videoSource} href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       className="bi bi-play-fill" viewBox="0 0 16 16">
                    <path
                      d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
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

export default ThumbItem;
