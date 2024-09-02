import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
const { DisplayIcon, classArrayToStr } = window.zoloModule;
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';

const Save = (props) => {
    const { attributes } = props;
    const {
        uniqueId,
        preset,
        parentClasses,
        zoloId,
        progressOffset,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses), preset),
    });

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
            {...(progressOffset && {
                'data-progressoffset': progressOffset,
            })}
        >
            {renderHookBefore && renderHookBefore}
            <div className="zolo-progress-bars-wrap">
                <InnerBlocks.Content />
            </div>
            {renderHookAfter && renderHookAfter}
        </div>
    );
};

export default Save;
