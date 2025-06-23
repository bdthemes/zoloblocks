/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
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

// countdown timer
import CountdownTimer from './counter';

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, clientId, isSelected } = props;
    const {
        resMode,
        preview,
        uniqueId,
        parentClasses,
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

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    useEffect(() => {
        handleUniqueId({
            BLOCK_PREFIX,
            uniqueId,
            setAttributes,
            clientId,
        });
    }, []);

    // Initialize CountDate if not set
    useEffect(() => {
        if (!CountDate) {
            setAttributes({
                CountDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            });
        }
    }, []);

    const blockProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.countdown} alt={__('Count down Preview', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                {renderHookBefore && renderHookBefore}
                <SidebarOpener clientId={clientId} />
                <div
                    className={`zolo-countdown-wrap ${presets ? presets : `zolo-countdown-style-1`} ${layout == 'flex' ? 'flex' : `grid zolo-dgc-${zolo_countBoxGridRange} zolo-tbgc-${zolo_TABcountBoxGridRange} zolo-mbgc-${zolo_MOBcountBoxGridRange}`}`}
                >
                    <CountdownTimer
                        targetDate={CountDate}
                        itemsVisibility={itemsVisibility}
                        showLabels={toggleLabels}
                        labels={itemsLabels}
                    />
                </div>
                {renderHookAfter && renderHookAfter}
            </div>
        </>
    );
}
