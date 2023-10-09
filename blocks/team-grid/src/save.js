import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const { classArrayToStr } = window.zoloModule;
import classnames from 'classnames';

const Save = ({ attributes }) => {
    const { uniqueId, parentClasses } = attributes;
    return (
        <div
            {...useBlockProps.save({
                className: classnames(uniqueId, classArrayToStr(parentClasses)),
            })}
        >
            <InnerBlocks.Content />
        </div>
    );
};

export default Save;
