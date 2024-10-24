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
        options,
        hint,
    } = attributes || {};

    const {loading, loadingAnimType } = options || {};
    console.log(options);

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
            {/* <spline-viewer className="zolo-spline-loader zolo-loadnow" url={source} {...(hint && { hint: 'true' })}></spline-viewer> */}
            <div className="zolo-spline-loader zolo-loadnow">
                <spline-viewer url={source}
                {...(hint && { hint: 'true' })}
                {
                    ...options && {
                        ...loading && {
                            'loading-anim': "true",
                            'loading-anim-type': loadingAnimType,
                        },
                    }
                }
                ></spline-viewer>
            </div>
            {renderHookAfter && renderHookAfter}
        </div>
    );
};

export default Save;

