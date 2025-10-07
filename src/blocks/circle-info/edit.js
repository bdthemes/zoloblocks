/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
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
    const { uniqueId, parentClasses } = attributes;

    const blockProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <div class="wp-block-zolo-circle-info">
                    <div class="zolo-circle-inner">
                        <div class="zolo-circle-sub" data-circle-index="1">
                            <i class="fa fa-home"></i>
                        </div>
                        <div class="zolo-circle-sub" data-circle-index="2">
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="zolo-circle-sub" data-circle-index="3">
                            <i class="fa fa-user"></i>
                        </div>
                    </div>

                    <div class="zolo-circle-content">
                        <div class="zolo-circle-item icci1 active">Home Info</div>
                        <div class="zolo-circle-item icci2">Star Info</div>
                        <div class="zolo-circle-item icci3">User Info</div>
                    </div>
                </div>
            </div>
        </>
    );
}
