import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';
const { classArrayToStr } = window.zoloModule;

const Save = (props) => {
    const { attributes } = props;
    const { uniqueId, parentClasses, zoloId, source, options, hint } = attributes || {};

    const { loading, loadingAnimType } = options || {};
    function extractSplineUrl(input) {
        // Regular expression to match a URL pattern starting with "https://prod.spline.design/"
        const match = input.match(/https:\/\/prod\.spline\.design\/[^"\s]+/);
        return match ? match[0] : null; // Return the URL if found, otherwise null
    }
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
            <div className="zolo-spline-loader zolo-loadnow">
                <spline-viewer
                    url={extractSplineUrl(source)}
                    {...(hint && { hint: 'true' })}
                    {...(options && {
                        ...(loading && {
                            'loading-anim': 'true',
                            'loading-anim-type': loadingAnimType,
                        }),
                    })}
                ></spline-viewer>
            </div>
            {renderHookAfter && renderHookAfter}
        </div>
    );
};

export default Save;
