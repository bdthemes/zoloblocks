
import {render,useRef,useEffect} from '@wordpress/element'
import CountUp from 'react-countup';

// render on page load
document.addEventListener('DOMContentLoaded', () => {
    const progress = document.querySelectorAll('.wp-block-zolo-progress-pie');

    if (progress.length > 0) {
        progress.forEach((item) => {
            const progressValue = Number(item.dataset.progressvalue);
            const progressDuration = Number(item.dataset.progressduration);
            const circleColor = item.dataset.circlecolor;
            const progressFillColor = item.dataset.progressfillcolor;
            const toggleLabel = item.dataset.togglelabel === 'true' ? true : false;
            const progressTitle = item.dataset.progresstitle;
            const progPieMultiColor = JSON.parse(item.dataset.progpiemulticolor);
            const progPiePrefixPostfix = JSON.parse(item.dataset.propieprefixpostfix);
            const proPieperpostToggle = item.dataset.propieperposttoggle === 'true' ? true : false;

            const CountupComponent = ({ progressValue, progressDuration, progressFillColor, toggleLabel, progressTitle }) => {
                const progress = useRef(null);
                const uniqueId = Array.from(item.classList).find((className) => className.startsWith('progress-'));
                useEffect(() => {
                    const progressPie = progress.current;
                    const progressVal = progressValue || 50;

                    startAnim();
                    function startAnim() {
                        setTimeout(function () {
                            progressPie.style.strokeDasharray = progressVal + ' ' + (100 - progressVal);
                        }, 20);
                    }
                    return () => clearTimeout();
                }, [progressValue]);

                return (
                    <CountUp
                        start={0}
                        end={progressValue || 50}
                        delay={0}
                        duration={progressDuration || 3}
                        prefix={proPieperpostToggle ? progPiePrefixPostfix?.Prefix : ''}
                        suffix={proPieperpostToggle ? progPiePrefixPostfix?.Postfix : ''}
                    >
                        {({ countUpRef }) => (
                            <>
                                <svg className="progress-pie" width="100%" height="100%" viewBox="0 0 42 42">
                                    {/*  optional background if need  */}
                                    <circle className="donut-hole progress-donut-hole" cx="21" cy="21" r="15.91549430918954"></circle>
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
                                        stroke-dasharray="0 100"
                                        stroke-dashoffset="25"
                                    ></circle>
                                    <defs>
                                        <linearGradient id={`gradient-${uniqueId}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                            {progPieMultiColor &&
                                                progPieMultiColor.map((color, index) => {
                                                    const averageOffset = 100 / (progPieMultiColor.length - 1);
                                                    let offset;
                                                    if (index === 0) {
                                                        offset = '0%';
                                                    } else if (index === progPieMultiColor.length - 1) {
                                                        offset = '100%';
                                                    } else {
                                                        offset = `${averageOffset * index}%`;
                                                    }
                                                    return (
                                                        <stop
                                                            offset={offset}
                                                            stopColor={color.color ? color.color : '#00bc9b'}
                                                            key={index}
                                                        />
                                                    );
                                                })}
                                        </linearGradient>
                                    </defs>
                                    {/* Progress number and text  */}
                                    <g className="progress-pie-text">
                                        <text x="50%" y="50%" className="progress-pie-number" ref={countUpRef}>
                                            {progressValue || 50}
                                        </text>
                                        {toggleLabel && (
                                            <text x="50%" y="50%" className="progress-pie-label">
                                                {progressTitle || __('Total', 'zoloblocks')}
                                            </text>
                                        )}
                                    </g>
                                </svg>
                            </>
                        )}
                    </CountUp>
                );
            };

            render(
                <CountupComponent
                    progressValue={progressValue}
                    circleColor={circleColor}
                    progressFillColor={progressFillColor}
                    toggleLabel={toggleLabel}
                    progressTitle={progressTitle}
                    progressDuration={progressDuration}
                />,
                item
            );
        });
    }
});
