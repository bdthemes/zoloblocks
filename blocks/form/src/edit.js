/**
 * WordPress dependencies
 */
import { useBlockProps, BlockControls, InnerBlocks, RichText } from '@wordpress/block-editor';

import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
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
    const { attributes, setAttributes, className, isSelected } = props;
    const { preview, uniqueId, parentClasses, preset, btnLabel, showBtnIcon, icon, iconPosition } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses), preset),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.reviewGrid} alt={__('Review Grid Preview', 'zolo-blocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <form className="zolo-contact-form zolo-contact-form-style-1 zolo-field-icon-style-1">
                    <InnerBlocks
                        allowedBlocks={(['zolo/text-field'], ['zolo/email'], ['zolo/textarea'])}
                        template={[['zolo/text-field'], ['zolo/email'], ['zolo/textarea']]}
                    />
                    <div className="zolo-field-item zolo-field-icon zolo-field-icon-style-1">
                        <div className="zolo-submit-btn">
                            <button type="submit" className={iconPosition}>
                                {btnLabel || __('Submit Now', 'zolo-blocks')}
                                {showBtnIcon && <DisplayZoloIcon icon={icon} />}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
