import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

const Save = (props) => {
    const { attributes } = props;
    const {
        uniqueId,
        parentClasses,
        zoloId,
        source,
        styles
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
            <spline-viewer
            className="zolo-spline-loader zolo-loadnow"
                style={{
                    width: styles?.width || '100%',
                    height: styles?.height || '100%',
                    margin: styles?.margin || '0 auto',
                    display: 'block',
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '0',
                }}
                url={source}
            ></spline-viewer>
            {renderHookAfter && renderHookAfter}
        </div>
    );
};

export default Save;
