import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';
const { classArrayToStr } = window.zoloModule;
import classnames from 'classnames';


const Save = (props) => {
    const { attributes } = props;
    const { uniqueId, preset, parentClasses, zoloId } = attributes;

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);
    return (
        <div
            {...useBlockProps.save({
                className: classnames(uniqueId, classArrayToStr(parentClasses), preset),
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
