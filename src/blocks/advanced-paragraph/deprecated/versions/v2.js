import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
const { classArrayToStr } = window.zoloModule;

// attributes.js
import attributes from '../../attributes';

const v2 = {
    attributes,
    save({ attributes }) {
        const { uniqueId, parentClasses, content, textGradientType, textGradientColorbackgroundType } = attributes;

        const blockProps = useBlockProps.save({
            className: classnames(
                uniqueId,
                classArrayToStr ? classArrayToStr(parentClasses) : '',
                textGradientColorbackgroundType !== 'classic' ? textGradientType : ''
            ),
        });

        return (
            <p {...blockProps}>
                <RichText.Content value={content} />
            </p>
        );
    },
};

export default v2;
