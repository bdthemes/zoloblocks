/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, useRef, useCallback } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { handleUniqueId, classArrayToStr } = window.zoloModule;
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
    const { resMode, preview, uniqueId, parentClasses, presets, CountDate, itemsLabels, itemsVisibility, toggleLabels, layout } =
        attributes;

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
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.countdown} alt={__('Count down Preview', 'zolo-blocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <div
                    className={`zolo-countdown-wrap ${presets ? presets : `zolo-countdown-style-1`} ${layout == 'flex' ? 'flex' : 'grid'}`}
                >
                    <CountdownTimer
                        targetDate={CountDate ? CountDate : new Date()}
                        itemsVisibility={itemsVisibility}
                        showLabels={toggleLabels}
                        labels={itemsLabels}
                    />
                </div>
            </div>
        </>
    );
}
