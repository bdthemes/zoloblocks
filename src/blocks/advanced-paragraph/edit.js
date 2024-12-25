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
const { handleUniqueId, classArrayToStr, DisplayZoloIcon } = window.zoloModule;

import { BLOCK_PREFIX } from './constants';
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
            <div {...blockProps}>
                <RichText
                    identifier="content"
                    tagName="div"
                    onChange={(content) => {
                        props.setAttributes({ content });
                    }}
                    value={content}
                    formatingControls={['bold', 'italic']}
                    placeholder="Enter text..."
                    // multiline="p"
                />
            </div>
        </>
    );
}
