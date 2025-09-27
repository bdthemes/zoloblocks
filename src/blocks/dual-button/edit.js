/**
 * WordPress dependencies
 */
import { useBlockProps, BlockControls, MediaUpload, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
/**
 * Internal depencencies
 */
const { classArrayToStr } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, isSelected } = props;
    const { uniqueId, parentClasses } = attributes;

    const blockProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <div className="zb-btn-group">
                    <button className="zb-btn zb-facebook">
                        <span className="zb-btn-label">Facebook</span>
                        <span className="zb-btn-count">5</span>
                    </button>
                    <div className="zb-btn-separator">
                        <span>Or</span>
                    </div>
                    <button className="zb-btn zb-tiktok">
                        <span className="zb-btn-label">Tiktok</span>
                    </button>
                </div>
            </div>
        </>
    );
}
