/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { classArrayToStr } = window.zoloModule;
import Inspector from './inspector';

// import style
import Style from './style';

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, isSelected } = props;
    const {
        uniqueId,
        parentClasses,
        content,
        // text Gradient
        textGradientType,
        textGradientColorbackgroundType,
    } = attributes;

    const blockProps = useBlockProps({
        className: classnames(
            uniqueId,
            classArrayToStr(parentClasses),
            textGradientColorbackgroundType !== 'classic' ? textGradientType : ''
        ),
    });

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
                <RichText
                    {...blockProps}
                    identifier="content"
                    tagName="p"
                    onChange={(content) => {
                        setAttributes({ content });
                    }}
                    value={content}
                    placeholder="Enter text..."
                />
        </>
    );
}
