import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;

const Save = ({ attributes }) => {
    const { uniqueId, parentClasses, initialOpen, allowMultiple, zoloId, preset } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, preset, 'zolo-accordion-wrap accordion-container', classArrayToStr(parentClasses)),
    });

    return (
        <div
            {...blockProps}
            {...(initialOpen && {
                'data-initial-open': initialOpen,
            })}
            {...(allowMultiple && {
                'data-multiple': allowMultiple,
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            <InnerBlocks.Content />
        </div>
    );
};

export default Save;
