import { useBlockProps, RichText } from '@wordpress/block-editor';
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;
import classnames from 'classnames';

const Save = (props) => {
    const { attributes } = props;
    const { uniqueId, parentClasses, centerTitle, centerDescription, circleItems, showOrbitLine, circleMoving, movingTime, mouseEvent } =
        attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
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
    );
};

export default Save;
