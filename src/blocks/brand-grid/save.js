import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
const { classArrayToStr } = window.zoloModule;
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';

const Save = (props) => {
    const { attributes } = props;
    const { uniqueId, preset, parentClasses, zoloId } = attributes;
    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    return (
        <div
            {...useBlockProps.save({
                className: classnames(`zb-brand-grid-wrap ${uniqueId} ${preset}`, classArrayToStr(parentClasses)),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            {renderHookBefore && renderHookBefore}
            <InnerBlocks.Content />
            {renderHookAfter && renderHookAfter}
        </div>
    );
};

export default Save;
