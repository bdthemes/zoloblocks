/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { handleUniqueId, StarRating, classArrayToStr } = window.zoloModule;

import { BLOCK_PREFIX } from './constants';
import Inspector from './inspector';

// import style
import Style from './style';

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected, context } = props;
    const { preview, uniqueId, parentClasses, preset, progressH, barTitleToggle, barpercentToggle, progressText, progressTextTag } =
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

    useEffect(
        () =>
            setAttributes({
                preset: context['zolo/preset'],
                barTitleToggle: context['zolo/titleToggle'],
                barpercentToggle: context['zolo/percentToggle'],
                progressTextTag: context['zolo/progressTextTag'],
            }),
        [context]
    );

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, `${preset ? preset : 'style-1'}`, classArrayToStr(parentClasses)),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.starRating} alt={__('Star Rating Preview', 'zolo-blocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <div className="zolo-progress-bar_content">
                    {barTitleToggle && (
                        <RichText
                            tagName={progressTextTag}
                            className="zolo-progress-bar__title"
                            value={progressText}
                            onChange={(content) => setAttributes({ progressText: content })}
                            placeholder={__('bar title..', 'zolo-blocks')}
                        />
                    )}
                    {barpercentToggle && <div className="zolo-progress-bar_percent">{progressH && `${progressH}%`}</div>}
                </div>
                <div className="zolo-progress-bar__progress">
                    <div className="zolo-progress-bar__progress-bar active" />
                </div>
            </div>
        </>
    );
}
