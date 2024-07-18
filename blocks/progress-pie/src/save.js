import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;

const Save = ({ attributes }) => {
    const {
        uniqueId,
        parentClasses,
        zoloId,
        progressValue,
        progressDuration,
        progressTitle,
        toggleLabel,
        progressFillColor,
        circleColor,
        progPieMultiColor,
        progPiePrefixPostfix,
        proPieperpostToggle,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
            // data-progressvalue={progressValue}
            {...(progressValue && {
                'data-progressvalue': progressValue,
            })}
            // data-progressDuration={progressDuration}
            {...(progressDuration && {
                'data-progressDuration': progressDuration,
            })}
            // data-progressTitle={progressTitle}
            {...(progressTitle && {
                'data-progresstitle': progressTitle,
            })}
            // data-toggleLabel={toggleLabel}
            {...(toggleLabel && {
                'data-toggleLabel': toggleLabel,
            })}
            // data-progressFillColor={progressFillColor}
            {...(progressFillColor && {
                'data-progressFillColor': progressFillColor,
            })}
            // data-circleColor={circleColor}
            {...(circleColor && {
                'data-circleColor': circleColor,
            })}
            data-progpiemulticolor={JSON.stringify(progPieMultiColor)}
            {...(progPiePrefixPostfix && {
                'data-propieprefixpostfix': JSON.stringify(progPiePrefixPostfix),
            })}
            {...(proPieperpostToggle && {
                'data-propieperposttoggle': proPieperpostToggle,
            })}
        ></div>
    );
};

export default Save;
