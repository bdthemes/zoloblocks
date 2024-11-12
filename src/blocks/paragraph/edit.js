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
    const { attributes, setAttributes, className, clientId, isSelected, context } = props;
    const { preview, preset, uniqueId, parentClasses, showLabel, label, placeholder, showIcon, icon, isRequired, showRequiredSymbol } = attributes;
    console.log('qni', uniqueId);
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
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });
    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.textarea} alt={__('Message Preview', 'zoloblocks')} />;
    }


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
                value={props.attributes.content}
                formatingcontrols={['bold', 'italic']}
                placeholder="Enter text..."
                multiline="p"
            />
            </div>
        </>
    );
}
