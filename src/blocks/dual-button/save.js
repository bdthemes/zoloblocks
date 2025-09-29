import { RichText, useBlockProps } from '@wordpress/block-editor';
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;
import classnames from 'classnames';

const Save = (props) => {
    const { attributes } = props;
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

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
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
    );
};

export default Save;
