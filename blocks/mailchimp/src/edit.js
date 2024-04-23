/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { handleUniqueId, StarRating, classArrayToStr, DisplayZoloIcon } = window.zoloModule;

import { BLOCK_PREFIX } from './constants';
import Inspector from './inspector';

// import style
import Style from './style';

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const { preview, uniqueId, parentClasses} = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    useEffect(() => {
        handleUniqueId({
            BLOCK_PREFIX,
            uniqueId,
            setAttributes,
            clientId,
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses)),

    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.starRating} alt={__('Star Rating Preview', 'zoloblocks')} />;
    }

    return (
      <>
        {isSelected && (
          <Inspector attributes={attributes} setAttributes={setAttributes} />
        )}
        <Style props={props} />
        <div {...blockProps}>
          <div
            class="zolo-block-mailchimp"
            data-success={attributes.success_message}
            data-error={attributes.error_message}
            data-submit={attributes.submit_message}
            data-duplicate={attributes.duplicate_message}
          >
            <input
              type="text"
              class="zolo-input-name"
              name="name"
              value=""
              placeholder={attributes.name_field_label}
            />
            <input
              type="email"
              class="zolo-input-email"
              name="email"
              value=""
              placeholder={attributes.email_field_label}
            />
            <input
              type="submit"
              class="zolo-input-submit"
              name="submit"
              value={attributes.submit_field_label}
            />
          </div>
        </div>
      </>
    );
}
