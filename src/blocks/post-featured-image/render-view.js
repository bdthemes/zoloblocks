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
      <h1>Post featured image</h1>
    </>
  );
}
