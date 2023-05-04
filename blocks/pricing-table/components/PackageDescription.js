//WordPress dependencies
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const PackageDescription = (props) => {
  const { description, setAttributes } = props;
  return (
    description && (
      <RichText
        tagName="div"
        className="zolo-package-desc"
        value={description}
        onChange={(description) => setAttributes({ description })}
        placeholder={__('Description', 'zolo-blocks')}
        allowedFormats={["bold", "italic", "strikethrough"]}
      />
    )
  )
}

export default PackageDescription;
