import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
const { classArrayToStr } = window.zoloModule;

const Save = (props) => {
    const { attributes } = props;
    const {
        uniqueId,
        parentClasses,
        content,
        // text Gradient
        textGradientType,
        textGradientColorbackgroundType,
        // dropcap,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(
            uniqueId,
            classArrayToStr(parentClasses),
            textGradientColorbackgroundType !== 'classic' ? textGradientType : ''
            // dropcap ? 'has-dropcap' : ''
        ),
    });

    return (
        <p {...blockProps}>
            <RichText.Content value={content} />
        </p>
    );
};

export default Save;
