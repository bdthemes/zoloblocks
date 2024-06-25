import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { CardDivider } from '@wordpress/components';
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
            data-progressvalue={progressValue}
            data-progressDuration={progressDuration}
            data-progressTitle={progressTitle}
            data-toggleLabel={toggleLabel}
            data-progressFillColor={progressFillColor}
            data-circleColor={circleColor}
            data-uniqueid={uniqueId}
            data-progpiemulticolor={JSON.stringify(progPieMultiColor)}
            data-propieprefixpostfix={JSON.stringify(progPiePrefixPostfix)}
            data-propieperposttoggle={proPieperpostToggle}
        ></div>
    );
};

export default Save;
