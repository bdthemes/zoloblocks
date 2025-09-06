import { render, useRef, useEffect } from '@wordpress/element';
import CountUp from 'react-countup';
import { __ } from '@wordpress/i18n';
import { sanitizeText } from '../../../src/helpers/helper';

// render on page load
document.addEventListener('DOMContentLoaded', () => {
    const progress = document.querySelectorAll('.wp-block-zolo-progress-pie');

    if (progress.length > 0) {
        progress.forEach((item) => {
            const settings = JSON.parse(item.dataset?.settings);
            const { progPieMultiColor, progressPie } = settings;
            const {
                value,
                duration,
                title,
                toggleLabel,
                size,
                round,
                prefix,
                suffix,
                toggleSuffixPrefix,
                fillColor,
                fillSize,
                numberColor,
                titleColor,
                circleColor,
            } = progressPie;

            const CountupComponent = ({ value, duration, fillColor, toggleLabel, title }) => {
                const progress = useRef(null);
                const uniqueId = Array.from(item.classList).find((className) => className.startsWith('progress-'));
                useEffect(() => {
                    const progressPie = progress.current;
                    const progressVal = value || 50;

                    startAnim();
                    function startAnim() {
                        setTimeout(function () {
                            progressPie.style.strokeDasharray = progressVal + ' ' + (100 - progressVal);
                        }, 20);
                    }
                    return () => clearTimeout();
                }, [value]);

                return (
                    <CountUp
                        start={0}
                        end={value || 50}
                        delay={0}
                        duration={duration || 3}
                        prefix={toggleSuffixPrefix && prefix !== '' ? `<span class="progress-prefix">${sanitizeText(prefix)}</span>` : ''}
                        suffix={toggleSuffixPrefix && suffix !== '' ? `<span class="progress-suffix">${sanitizeText(suffix)}</span>` : ''}
                    >
                        {({ countUpRef }) => (
                            <>
                                <svg className="progress-pie" width="100%" height="100%" viewBox="0 0 42 42">
                                    {/*  optional background if need  */}
                                    <circle
                                        className="donut-hole progress-donut-hole"
                                        cx="21"
                                        cy="21"
                                        r="15.91549430918954"
                                        strokeWidth="3"
                                    ></circle>
                                    <circle
                                        className="progress-pie-fill"
                                        cx="21"
                                        cy="21"
                                        r="15.91549430918954"
                                        fill="transparent"
                                        stroke={fillColor ? fillColor : '#e5e5e5'}
                                        strokeDasharray="100 0"
                                        strokeDashoffset="25"
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
                                        strokeWidth="3"
                                        strokeDasharray="0 100"
                                        strokeDashoffset="25"
                                    ></circle>
                                    <defs>
                                        <linearGradient id={`gradient-${uniqueId}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                            {progPieMultiColor &&
                                                progPieMultiColor.map((color, index) => {
                                                    const averageOffset = 100 / (progPieMultiColor.length - 1);
                                                    let offset;
                                                    if (index === 0) {
                                                        // First child, offset is 0%
                                                        offset = '0%';
                                                    } else if (index === progPieMultiColor.length - 1) {
                                                        // Last child, offset is 100%
                                                        offset = '100%';
                                                    } else {
                                                        // Intermediate children, calculate offset
                                                        offset = `${averageOffset * index}%`;
                                                    }

                                                    return <stop offset={offset} stopColor={color?.color || '#00bc9b'} key={index} />;
                                                })}
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="progress-content">
                                    <div className="progress-pie-number" ref={countUpRef}>
                                        <span className="progress-number"></span>
                                    </div>
                                    {(toggleLabel === undefined || toggleLabel) && <div className="progress-pie-label">{title}</div>}
                                </div>
                            </>
                        )}
                    </CountUp>
                );
            };
            // const root = createRoot(item);
            // root.render(
            //     <CountupComponent
            //         progressValue={value}
            //         circleColor={circleColor}
            //         fillColor={fillColor}
            //         toggleLabel={toggleLabel}
            //         progressTitle={title}
            //         progressDuration={duration}
            //     />
            // );
            render(
                <CountupComponent value={value} duration={duration} fillColor={fillColor} toggleLabel={toggleLabel} title={title} />,
                item
            );
        });
    }
});
