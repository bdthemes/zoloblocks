import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;

const Save = ({ attributes }) => {
    const { uniqueId, parentClasses, zoloId } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(uniqueId, 'swiper-slide', classArrayToStr(parentClasses)),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            <div className="swiper-content-outer">
                <InnerBlocks.Content />
            </div>
        </div>
    );
};

export default Save;
