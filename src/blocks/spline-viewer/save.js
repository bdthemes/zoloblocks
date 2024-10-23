import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

const Save = (props) => {
    const { attributes } = props;
    const {
        uniqueId,
        parentClasses,
        showTitle,
        title,
        titleTag,
        rating,
        titlePosition,
        zoloId,
        showIcon,
        iconType,
        icon,
        iconTypeImage,
        imageRes,
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
                    width: '600px',
                    height: '400px',
                    display: 'block',
                    position: 'relative',
                    overflow: 'hidden',
                    margin: '0 auto',
                    padding: '0',
                }}
                url="https://prod.spline.design/UwLAGbIVFWtK7opf/scene.splinecode"
            ></spline-viewer>
            {renderHookAfter && renderHookAfter}
        </div>
    );
};

export default Save;
