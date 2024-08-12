import {Spinner} from "@wordpress/components";

const {isEmpty} = window.zoloModule;
import {__} from '@wordpress/i18n';
import {useSelect} from '@wordpress/data';

const SocialIcon = ({value}) => {
  switch (value) {
    case 'email':
      return (
        <svg className="zolo-icon-url" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
          <path d="M3 7l9 6l9 -6"></path>
        </svg>
      );
    case 'url':
      return (
        <svg className="zolo-icon-url" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M21 12a9 9 0 1 0 -9.968 8.948"></path>
          <path d="M3.6 9h16.8"></path>
          <path d="M3.6 15h6.4"></path>
          <path d="M11.5 3a17.001 17.001 0 0 0 -1.886 13.802"></path>
          <path d="M12.5 3a16.982 16.982 0 0 1 2.549 8.01"></path>
          <path
            d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"></path>
        </svg>
      );
    case 'facebook':
      return 'facebook';
    case 'twitter':
      return 'twitter';
    case 'linkedin':
      return 'linkeding';
    case 'github':
      return 'github';
    case 'wordpress':
      return 'wordpress';
    case 'dribbble':
      return 'dribble';
    default:
      return null; // or a default icon if you want
  }
}

function AuthorItem({author, attributes}) {
  const {
    showName,
    showAvatar,
    showDescription,
    showRole,
    showSocialLink,
    showPostCount,
    socialLinks
  } = attributes;

  // Get users.
  const user = useSelect(select => select('core').getUser(author.ID));

  return (
    <div className="zolo-item">

      {showAvatar && (
        <div className="zolo-image">
          <a href={author.link} dangerouslySetInnerHTML={{__html: author.avatar}}></a>
        </div>
      )}

      <div className="zolo-content">
        {showName && (
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

        {!user && (
          <div className="zolo-link">
            <div className="preloader">
              <Spinner/>
            </div>
          </div>
        )}

        {(showSocialLink && socialLinks.length > 0) && (
          <div className="zolo-link">
            {socialLinks.map(({value, label}) => {

              let link = '';
              if (value === 'email') {
                link = user?.email;
              } else if (value === 'url') {
                link = user?.url;
              } else {
                link = user?.meta[value];
              }

              if (!isEmpty(link)) {
                return (
                  <a href={link}>
                    <SocialIcon value={value}/>
                  </a>
                )
              }
              return null;
            })}
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
