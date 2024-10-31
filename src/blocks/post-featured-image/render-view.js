import {__} from '@wordpress/i18n';
import {store as coreStore, useEntityProp} from '@wordpress/core-data';
import {useMemo} from '@wordpress/element';
import {useSelect} from '@wordpress/data';
import {Spinner} from '@wordpress/components';

function getMediaSourceUrlBySizeSlug(media, slug) {
  return media?.media_details?.sizes?.[slug]?.source_url || media?.source_url;
}

export default function RenderView({props}) {
  const {
    attributes,
    context: {postId, postType: postTypeSlug}
  } = props;

  const {
    useFirstImageFromPost,
    thumbnailSize,
    isLink,
    linkTarget,
    linkRel
  } = attributes;

  const [storedFeaturedImage] = useEntityProp('postType', postTypeSlug, 'featured_media', postId);
  const [postContent] = useEntityProp('postType', postTypeSlug, 'content', postId);  // This will trigger re-render when content changes

  const rawContent = useSelect(
    (select) => {
      const {getEntityRecord} = select(coreStore);
      const post = getEntityRecord('postType', postTypeSlug, postId);
      return post?.content?.raw || '';
    },
    [postId, postTypeSlug, postContent, useFirstImageFromPost]
  );

  const featuredImage = useMemo(() => {
    if (storedFeaturedImage) {
      return storedFeaturedImage;
    }
    if (!useFirstImageFromPost) {
      return null;
    }
    const imageOpener = /<!--\s+wp:(?:core\/)?image\s+(?<attrs>{(?:(?:[^}]+|}+(?=})|(?!}\s+\/?-->).)*)?}\s+)?-->/.exec(rawContent);
    return imageOpener?.groups?.attrs && JSON.parse(imageOpener.groups.attrs)?.id;
  }, [storedFeaturedImage, useFirstImageFromPost, postContent]);

  // Select media and post permalink data
  const {media, postPermalink} = useSelect(
    (select) => {
      const {getMedia, getEditedEntityRecord} = select(coreStore);
      return {
        media: featuredImage && getMedia(featuredImage, {context: 'view'}),
        postPermalink: getEditedEntityRecord('postType', postTypeSlug, postId)?.link,
      };
    },
    [featuredImage, postTypeSlug, postId]
  );

  const mediaUrl = getMediaSourceUrlBySizeSlug(media, thumbnailSize);

  // Render the featured image or a placeholder
  let image;
  if (!featuredImage) {
    image = (
      <img
        className="zolo-placeholder-img"
        src={zoloPlaceholders.placeholder}
        alt={__('image Placeholder', 'zoloblocks')}
      />
    );
  } else {
    image = !media ? (
      <div className="preloader">
        <Spinner/>
      </div>
    ) : (
      <img
        className="zolo-featured-img"
        src={mediaUrl}
        alt={media?.alt_text
          ? sprintf(__('Featured image: %s', 'zoloblocks'), media.alt_text)
          : __('Featured image', 'zoloblocks')}
      />
    );
  }

  return (
    <>
      {isLink && postPermalink ? (
        <a href={postPermalink} target={linkTarget} rel={linkRel}>
          {image}
        </a>
      ) : (
        image
      )}
    </>
  );
}
