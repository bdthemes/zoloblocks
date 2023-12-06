import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
const { DisplayIcon, classArrayToStr } = window.zoloModule;
import classnames from 'classnames';

const Save = ({ attributes }) => {
    const {
        uniqueId,
        preset,
        parentClasses,
        image,
        headingTag,
        fancyTitle,
        fancyListText,
        fancyIcon,
        imageToggle,
        titleToggle,
        textToggle,
        iconToggle,
        mediaType,
        mediaText,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses), preset),
    });

    return (
        <div {...blockProps}>
            <div className="zolo-fancy-list-container">
                <InnerBlocks.Content />
            </div>
        </div>
    );
};

export default Save;
