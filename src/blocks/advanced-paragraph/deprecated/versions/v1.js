import { RichText, useBlockProps, Inner } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr, DynamicTag, DisplayZoloIcon } = window.zoloModule;

// attributes.js
import attributes from '../../attributes';

const v1 = {
    attributes: {
        ...attributes,
        content: {
            type: 'string',
            source: 'html',
            selector: 'div',
            default: '',
        },
    },
    save({ attributes }) {
        const {
            uniqueId,
            parentClasses,
            content,
            // text Gradient
            textGradientType,
            textGradientColorbackgroundType,
        } = attributes;

        const blockProps = useBlockProps.save({
            className: classnames(
                uniqueId,
                classArrayToStr(parentClasses),
                textGradientColorbackgroundType !== 'classic' ? textGradientType : ''
            ),
        });

        return <RichText.Content {...blockProps} tagName="div" value={content} />;
    },
};

export default v1;
