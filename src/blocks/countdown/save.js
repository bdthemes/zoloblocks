import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';
const { classArrayToStr } = window.zoloModule;

const Save = (props) => {
    const { attributes } = props;
    const {
        uniqueId,
        parentClasses,
        zoloId,
        presets,
        CountDate,
        itemsLabels,
        itemsVisibility,
        toggleLabels,
        layout,
        zolo_countBoxGridRange,
        zolo_TABcountBoxGridRange,
        zolo_MOBcountBoxGridRange,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
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
        >
            {renderHookBefore && renderHookBefore}
            <div
                className={`zolo-countdown-wrap ${presets ? presets : `zolo-countdown-style-1`} ${layout == 'flex' ? 'flex' : `grid zolo-dgc-${zolo_countBoxGridRange} zolo-tbgc-${zolo_TABcountBoxGridRange} zolo-mbgc-${zolo_MOBcountBoxGridRange}`}`}
                data-countdate={CountDate}
                data-itemsVisibility={JSON.stringify(itemsVisibility)}
                data-itemsLabels={JSON.stringify(itemsLabels)}
                data-toggleLabels={toggleLabels}
            ></div>
            {renderHookAfter && renderHookAfter}
        </div>
    );
};

export default Save;
