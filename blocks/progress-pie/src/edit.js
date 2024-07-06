/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import classnames from 'classnames';
import CountUp from 'react-countup';

/**
 * Internal depencencies
 */
const { handleUniqueId, classArrayToStr } = window.zoloModule;

import { BLOCK_PREFIX } from './constants';
import Inspector from './inspector';

// import style
import Style from './style';

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const {
        preview,
        uniqueId,
        parentClasses,
        progressValue,
        progressDuration,
        progressTitle,
        toggleLabel,
        progressFillColor,
        progressTopColor,
        progressBottomColor,
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

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses)),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.progresspie} alt={__('Progress Preview', 'zoloblocks')} />;
    }

    const progress = useRef(null);

    useEffect(() => {
        const progressPie = progress.current;
        const progressVal = progressValue;

        startAnim();
        function startAnim() {
            setTimeout(function () {
                progressPie.style.strokeDasharray = progressVal + ' ' + (100 - progressVal);
            }, 20);
        }
        return () => clearTimeout();
    }, [progressValue]);


    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <CountUp start={0} end={progressValue} delay={0} duration={progressDuration ? progressDuration : 3} suffix="%">
                    {({ countUpRef }) => (
                        <>
                            <svg className="progress-pie" width="100%" height="100%" viewBox="0 0 42 42">
                                {/*  optional background if need  */}
                                <circle
                                    className="donut-hole progress-donut-hole"
                                    cx="21"
                                    cy="21"
                                    r="15.91549430918954"
                                    stroke-width="3"
                                ></circle>
                                <circle
                                    className="progress-pie-fill"
                                    cx="21"
                                    cy="21"
                                    r="15.91549430918954"
                                    fill="transparent"
                                    stroke={progressFillColor ? progressFillColor : '#e5e5e5'}
                                    stroke-dasharray="100 0"
                                    stroke-dashoffset="25"
                                ></circle>
                                <circle
                                    id="progress1"
                                    className="progress-pie-progress"
                                    ref={progress}
                                    cx="21"
                                    cy="21"
                                    r="15.91549430918954"
                                    fill="transparent"
                                    stroke={`url(#gradient-${uniqueId})`}
                                    stroke-width="3"
                                    stroke-dasharray="0 100"
                                    stroke-dashoffset="25"
                                ></circle>

                                {/* optional for gradient color  */}
                                {(progressTopColor || progressBottomColor) && (
                                    <defs>
                                        <linearGradient id={`gradient-${uniqueId}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stop-color={progressTopColor ? progressTopColor : '#00bc9b'} />
                                            <stop offset="100%" stop-color={progressBottomColor ? progressBottomColor : '#5eaefd'} />
                                        </linearGradient>
                                    </defs>
                                )}

                                {/* Progress number and text  */}
                                <g className="progress-pie-text">
                                    <text x="50%" y="50%" className="progress-pie-number" ref={countUpRef}>
                                        {progressValue && progressValue}
                                    </text>
                                    {toggleLabel && (
                                        <text x="50%" y="50%" className="progress-pie-label">
                                            {progressTitle && progressTitle}
                                        </text>
                                    )}
                                </g>
                            </svg>
                        </>
                    )}
                </CountUp>
            </div>
        </>
    );
}
