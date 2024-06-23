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
    const { preview,  uniqueId, parentClasses,textpathContent,textPathType ,pathlink,textPathShow } = attributes;

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
           
                {/* style={{ width: '100%', height: 'auto' }} */}
                <svg  xmlns="http://www.w3.org/2000/svg" >
                    {/* to hide the path, it is usually wrapped in a <defs> element */}
                    {/* <defs> */}
                    <path
                        className='zolo-path'
                        id={`MyPath-${uniqueId}`}
                        fill="none"
                        // stroke="red"
                        d={textPathType && textPathType}
                    />
                    {/* </defs> */}
                    <text>
                        <textPath href={`#MyPath-${uniqueId}`} >
                        <a
                            className='zolo-textpath'
                                href={pathlink && pathlink.url}
                                rel={pathlink && pathlink.openInNewTab && 'noreferrer noopener'}
                                target={pathlink && pathlink.openInNewTab && '_blank'}  
                                title={textpathContent}                          
                            >
                            {textpathContent && textpathContent}
                            </a>
                        </textPath>
                    </text>
                  </svg>
               
            </div>
        </>
    );
}
