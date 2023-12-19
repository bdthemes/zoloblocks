import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;

const Save = ({ attributes }) => {
    const { uniqueId, parentClasses, keepFirstOpen, allowMultiple } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, 'zolo-accordion-wrap accordion-container', classArrayToStr(parentClasses)),
    });

    return (
        <div {...blockProps} data-firstItem={keepFirstOpen} data-multiple={allowMultiple}>
            <InnerBlocks.Content />
        </div>
    );
};

export default Save;
