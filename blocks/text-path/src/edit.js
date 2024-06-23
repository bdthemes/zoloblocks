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
const { handleUniqueId, classArrayToStr, } = window.zoloModule;

import { BLOCK_PREFIX } from './constants';
import Inspector from './inspector';

// import style
import Style from './style';

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected, } = props;
    const { preview,  uniqueId, parentClasses,textpathContent,textPathType  } = attributes;

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
        className: classnames(
            className,
            `${uniqueId}`,
            classArrayToStr(parentClasses),

        ),
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
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
           
                    {/* to hide the path, it is usually wrapped in a <defs> element */}
                    {/* <defs> */}
                    <path
                        id="MyPath"
                        fill="none"
                        stroke="red"
                        d={textPathType && textPathType}
                    />
                    {/* </defs> */}
                    <text>
                        <textPath href="#MyPath" startOffset="5%">
                            {textpathContent && textpathContent}
                        </textPath>
                    </text>
                </svg>
          
            </div>
        </>
    );
}
