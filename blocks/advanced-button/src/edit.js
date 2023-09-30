/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const {
  classArrayToStr,
  DisplayIcon,
} = window.zoloModule;

import Inspector from './inspector';
import Style from './style';

export default function Edit(props) {
  const { attributes, setAttributes, className, clientId, isSelected } = props;
  const {
    uniqueId,
    preset,
    label,
    zoloStyles,
    parentClasses,
    iconType,
    icon,
    iconPosition,
  } = attributes;

  const blockProps = useBlockProps({
    className: classnames(className, classArrayToStr(parentClasses)),
  });

  return (
    <>
      {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
      <Style props={props} />
      <div {...blockProps}>
        <div className={`zolo-block-wrapper zolo-advanced-button ${uniqueId} ${preset}`}>
          <div className={`zolo-button ${iconPosition}`}>
            {iconType !== 'iconOnly' && (
              <RichText
                tagName="span"
                className={`zolo-button-content`}
                value={label}
                onChange={(text) => setAttributes({ label: text })}
                placeholder={__('Button Text', 'zolo-blocks')}
                allowedFormats={[]}
              />
            )}
            {iconType !== 'none' && <DisplayIcon icon={icon} />}
          </div>
        </div>
      </div>
    </>
  );
}
