import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

const Save = (props) => {
    const { attributes } = props;
    const { uniqueId, parentClasses } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        // <div
        //     {...blockProps}
        //     {...(zoloId && {
        //         id: zoloId,
        //     })}
        // >
        <RichText.Content
            {...blockProps}
            tagName="div"
            value={props.attributes.content}
            formatingcontrols={['bold', 'italic']}
            placeholder="Enter text..."
            multiline="p"
        />
        // </div>
    );
};

export default Save;
