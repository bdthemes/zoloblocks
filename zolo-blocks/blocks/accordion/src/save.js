import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;

const Save = ({ attributes }) => {
    const { uniqueId, parentClasses } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <div {...blockProps}>
            <InnerBlocks.Content />
        </div>
    );
};

export default Save;
