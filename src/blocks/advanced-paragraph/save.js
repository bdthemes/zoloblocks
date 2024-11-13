import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
const { classArrayToStr} = window.zoloModule;

const Save = (props) => {
    const { attributes } = props;
    const { uniqueId, parentClasses, content } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <RichText.Content
            {...blockProps}
            tagName="div"
            value={content}
        />
    );
};

export default Save;
