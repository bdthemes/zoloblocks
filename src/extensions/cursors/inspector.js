import { __ } from '@wordpress/i18n';
const { ZoloPanelBody} = window.zoloModule;


const Inspector = ({panelProps}) => {
    const {attributes, setAttributes} = panelProps;
    const {zoloCursors} = attributes;
    console.log(zoloCursors);

  return (
      <ZoloPanelBody
          title={__('Custom Cursor', 'zoloblocks')}
          panelProps={panelProps}
          firstOpen={true}
          extraPanel={true}
          isNew={true}
      ></ZoloPanelBody>
  );
}
export default Inspector