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
import { use } from 'react';

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected, context } = props;
    const { preview, uniqueId, parentClasses, preset, progressH, barTitleToggle, barpercentToggle, progressText, progressTextTag } =
        attributes;
    const childContextData = {
        preset: context['zolo/preset'],
        barTitleToggle: context['zolo/titleToggle'],
        barpercentToggle: context['zolo/percentToggle'],
        progressTextTag: context['zolo/progressTextTag'],
    }
    const childContextAttributes = {
        preset: attributes.preset,
        barTitleToggle: attributes.barTitleToggle,
        barpercentToggle: attributes.barpercentToggle,
        progressTextTag: attributes.progressTextTag,
    }

    useEffect(() => {
        if (!context) return;
        if (JSON.stringify(childContextData) !== JSON.stringify(childContextAttributes)) {
            setAttributes(childContextData);
        }
    }, [childContextData]);

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, `${preset ? preset : 'style-1'}`, classArrayToStr(parentClasses)),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.starRating} alt={__('Star Rating Preview', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                {barpercentToggle && preset === 'style-5' && (
                    <div className="zolo-progress-bar_counter">
                        <span className="zolo-progress-bar_value" data-value={progressH}>
                            {progressH}
                        </span>
                        <span className="zolo-progress-bar_percent">%</span>
                    </div>
                )}

                <div className="zolo-progress-bar_content">
                    {barTitleToggle && (
                        <RichText
                            tagName={progressTextTag}
                            className="zolo-progress-bar__title"
                            value={progressText}
                            onChange={(content) => setAttributes({ progressText: content })}
                            placeholder={__('Bar title..', 'zoloblocks')}
                        />
                    )}

                    {barpercentToggle && preset !== 'style-5' && (
                        <div className="zolo-progress-bar_counter">
                            <span className="zolo-progress-bar_value" data-value={progressH}>
                                {progressH}
                            </span>
                            <span className="zolo-progress-bar_percent">%</span>
                        </div>
                    )}

                    {preset === 'style-5' && (
                        <div className="zolo-progress-bar__progress">
                            <div className="zolo-progress-bar__progress-bar active" />
                        </div>
                    )}
                </div>
                {preset !== 'style-5' && (
                    <div className="zolo-progress-bar__progress">
                        <div className="zolo-progress-bar__progress-bar active" />
                    </div>
                )}
            </div>
        </>
    );
}
