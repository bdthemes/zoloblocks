import { RichText, useBlockProps } from '@wordpress/block-editor';
import { InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;

const Save = ({ attributes }) => {
    const { uniqueId, parentClasses, showTitle, title, titleTag, rating, titlePosition, zoloId } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, 'tab__content-item', classArrayToStr(parentClasses)),
    });

    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            {/* <div
                className="tab__content-item"
                id="tab-content-0"
                data-tab-id={0}
                role="tabpanel"
                aria-labelledby="tab-title-0"
                aria-hidden="false"
            >
            </div> */}
                <InnerBlocks.Content />
        </div>
    );
};

export default Save;
