/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { handleUniqueId, classArrayToStr, SidebarOpener } = window.zoloModule;

import { BLOCK_PREFIX } from './constants';
import Inspector from './inspector';

// import style
import Style from './style';

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const { preview, uniqueId, parentClasses, source, options, hint } = attributes || {};

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    useEffect(() => {
        handleUniqueId({
            BLOCK_PREFIX,
            uniqueId,
            setAttributes,
            clientId,
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses)),
    });
    function extractSplineUrl(input) {
        // Regular expression to match a URL pattern starting with "https://prod.spline.design/"
        const match = input.match(/https:\/\/prod\.spline\.design\/[^"\s]+/);
        return match ? match[0] : null; // Return the URL if found, otherwise null
    }
    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview?.splineViewer} alt={__('Spline Viewer Preview', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps} key={JSON.stringify(source)}>
                {renderHookBefore && renderHookBefore}
                <SidebarOpener clientId={clientId} />
                <div className="zolo-spline-loader">
                    <spline-viewer
                        key={JSON.stringify(hint)}
                        url={extractSplineUrl(source)}
                        {...(hint && { hint: 'true' })}
                    ></spline-viewer>
                </div>
                {renderHookAfter && renderHookAfter}
            </div>
        </>
    );
}
