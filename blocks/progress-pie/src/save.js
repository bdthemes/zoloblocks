import { RichText, useBlockProps } from '@wordpress/block-editor';
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
            {...(progressValue && {
                'data-progressvalue': progressValue,
            })}
            {...(progressDuration && {
                'data-progressDuration': progressDuration,
            })}
            {...(progressTitle && {
                'data-progressTitle': progressTitle,
            })}
            {...(progressFillColor && {
                'data-progressFillColor': progressFillColor,
            })}
            {...(circleColor && {
                'data-circleColor': circleColor,
            })}
            {...(progPieMultiColor && {
                'data-progpiemulticolor': progPieMultiColor,
            })}
            {...(progPiePrefixPostfix && {
                'data-propieprefixpostfix': progPiePrefixPostfix,
            })}
            // data-progressvalue={progressValue}
            // data-progressDuration={progressDuration}
            // data-progressTitle={progressTitle}
            data-toggleLabel={toggleLabel}
            data-propieperposttoggle={proPieperpostToggle}
            // data-progressFillColor={progressFillColor}
            // data-circleColor={circleColor}
            // data-uniqueid={uniqueId}
            // data-progpiemulticolor={JSON.stringify(progPieMultiColor)}
            // data-propieprefixpostfix={JSON.stringify(progPiePrefixPostfix)}
        ></div>
    );
};

export default Save;
