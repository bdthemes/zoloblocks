import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr, DisplayIcon } = window.zoloModule;

const Save = ({ attributes }) => {
    const { uniqueId, title, titleTag, parentClasses, collapseIcon, expandIcon } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <div {...blockProps}>
            <div
                className="accordion-head"
                role="button"
                aria-expanded="false"
                aria-controls={title && title.replace(/\s+/g, '-').toLowerCase()}
            >
                <RichText.Content tagName={titleTag} value={title} className="accordion-title" />
                <button className="accordion-toggle" aria-label="Toggle">
                    <div className="collapsed-mode">{collapseIcon && <DisplayIcon icon={collapseIcon} />}</div>
                    <div className="expanded-mode">{expandIcon && <DisplayIcon icon={expandIcon} />}</div>
                </button>
            </div>
            <div id={title && title.replace(/\s+/g, '-').toLowerCase()} class="accordion-body" aria-hidden="false">
                <div className="accordion-body-inner">
                    <InnerBlocks.Content />
                </div>
            </div>
        </div>
    );
};

export default Save;
