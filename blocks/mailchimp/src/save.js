import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

const Save = ({ attributes }) => {
    const { uniqueId, parentClasses, zoloId,} = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
      <div
        {...blockProps}
        {...(zoloId && {
          id: zoloId,
        })}
      >
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
    );
};

export default Save;
