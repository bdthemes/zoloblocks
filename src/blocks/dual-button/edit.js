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
        buttonOneIconAdd,
        buttonTwoIconAdd,
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
                    <a
                        className="zolo-btn zolo-btn-first"
                        href={buttonOneLink?.url ? buttonOneLink?.url : ''}
                        rel={buttonOneLink?.openInNewTab ? 'noreferrer noopener' : undefined}
                        target={buttonOneLink?.openInNewTab ? '_blank' : undefined}
                    >
                        <span className="zolo-btn-label">{buttonOneText}</span>
                        {buttonOneIconAdd && buttonOneIcon && <DisplayZoloIcon icon={buttonOneIcon} />}
                    </a>
                    {middleText && (
                        <div className="zolo-btn-separator">
                            <span className="zolo-btn-separator-text">Or</span>
                        </div>
                    )}
                    <a
                        className="zolo-btn zolo-btn-second"
                        href={buttonTwoLink?.url ? buttonTwoLink?.url : ''}
                        rel={buttonTwoLink?.openInNewTab ? 'noreferrer noopener' : undefined}
                        target={buttonTwoLink?.openInNewTab ? '_blank' : undefined}
                    >
                        <span className="zolo-btn-label">{buttonTwoText}</span>
                        {buttonTwoIconAdd && buttonTwoIcon && <DisplayZoloIcon icon={buttonTwoIcon} />}
                    </a>
                </div>
            </div>
        </>
    );
}
