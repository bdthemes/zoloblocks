/**
 * WordPress dependencies
 */
import { useBlockProps, BlockControls, MediaUpload, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
/**
 * Internal depencencies
 */
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, isSelected } = props;
    const {
        uniqueId,
        parentClasses,
        middleText,
        buttonOneText,
        buttonTwoText,
        buttonOneIcon,
        buttonTwoIcon,
        buttonOneLink,
        buttonTwoLink,
    } = attributes;

    const blockProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <div className="zolo-btn-group">
                    <button className="zolo-btn zolo-facebook">
                        <a
                            href={buttonOneLink?.url ? buttonOneLink?.url : ''}
                            rel={buttonOneLink?.openInNewTab ? 'noreferrer noopener' : undefined}
                            target={buttonOneLink?.openInNewTab ? '_blank' : undefined}
                        >
                            <span className="zolo-btn-label">{buttonOneText}</span>
                            <DisplayZoloIcon icon={buttonOneIcon} />
                        </a>
                    </button>
                    {middleText && (
                        <div className="zolo-btn-separator">
                            <span>Or</span>
                        </div>
                    )}
                    <button className="zolo-btn zolo-tiktok">
                        <a
                            href={buttonTwoLink?.url ? buttonTwoLink?.url : ''}
                            rel={buttonTwoLink?.openInNewTab ? 'noreferrer noopener' : undefined}
                            target={buttonTwoLink?.openInNewTab ? '_blank' : undefined}
                        >
                            <span className="zolo-btn-label">{buttonTwoText}</span>
                            <DisplayZoloIcon icon={buttonTwoIcon} />
                        </a>
                    </button>
                </div>
            </div>
        </>
    );
}
