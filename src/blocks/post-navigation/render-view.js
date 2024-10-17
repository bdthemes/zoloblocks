import {__} from '@wordpress/i18n';

export default function RenderView({attributes}) {
  const {
    showRelatedPost,
    selectedTaxonomy
  } = attributes;

  return (
    <h1>Post navigation</h1>
  );
}
