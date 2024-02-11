import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;

// Save function
const Save = ({ attributes }) => {
    const { uniqueId, parentClasses, preset, zoloId } = attributes;
    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses), preset),
    });
    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            <InnerBlocks.Content />
        </div>
    );
};

export default Save;
