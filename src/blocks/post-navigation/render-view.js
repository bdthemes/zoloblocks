import {__} from '@wordpress/i18n';

const {DisplayZoloIcon} = window.zoloModule;
export default function RenderView({attributes}) {
  const {
    showImage,
    showTitle,
    showBtn,
    previousPost,
    previousPostIcon,
    nextPost,
    nextPostIcon,
  } = attributes;

  return (
    <>
      <a onClick={event => event.preventDefault()} href="#" className="zolo-item zolo-post-prev">
        {showImage && (
          <div className="zolo-image-wrap">
            <img
              src={zoloPlaceholders.placeholder}
              alt={__('image Placeholder', 'zoloblocks')}
            />
          </div>
        )}
        <div className="zolo-content-wrap">
          {showBtn && (
            <span className="zolo-nav-text">
               <span>{previousPost}</span>
              {previousPostIcon && <DisplayZoloIcon icon={previousPostIcon}/>}
              {!previousPostIcon && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M5 12l14 0"/>
                  <path d="M5 12l6 6"/>
                  <path d="M5 12l6 -6"/>
                </svg>
              )}
            </span>
          )}
          {showTitle && (<h2 className="zolo-pos-nav-title">Demo Post One</h2>)}
        </div>
      </a>

      <a href="#" className="zolo-item zolo-post-next">
        {showImage && (
          <div className="zolo-image-wrap">
            <img
              src={zoloPlaceholders.placeholder}
              alt={__('image Placeholder', 'zoloblocks')}
            />
          </div>
        )}

        <div className="zolo-content-wrap">
          {showBtn && (
            <span className="zolo-nav-text">
              <span>{nextPost}</span>
              {nextPostIcon && <DisplayZoloIcon icon={nextPostIcon}/>}
              {!nextPostIcon && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M5 12l14 0"/>
                  <path d="M13 18l6 -6"/>
                  <path d="M13 6l6 6"/>
                </svg>
              )}
           </span>
          )}
          {showTitle && (<h2 className="zolo-pos-nav-title">Demo Post Two</h2>)}
        </div>
      </a>
    </>
  );
}
