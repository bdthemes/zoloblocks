import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr,} = window.zoloModule;

const Save = ({ attributes }) => {
    const { 
        uniqueId, 
        parentClasses, 
        zoloId,
        progressValue,
        progressDuration,
        progressTitle ,
        toggleLabel,
        progressFillColor,
        circleColor,
        progressTopColor,
        progressBottomColor,
        progPiePrefixPostfix,
        proPieperpostToggle
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
            data-progressDuration ={progressDuration}
            data-progressTitle={progressTitle}
            data-toggleLabel={toggleLabel}
            data-progressFillColor={progressFillColor}
            data-circleColor={circleColor}
            data-uniqueid={uniqueId}
            data-progressTopColor={progressTopColor}
            data-progressBottomColor={progressBottomColor}
            data-propieprefixpostfix={JSON.stringify(progPiePrefixPostfix)}
            data-propieperposttoggle={proPieperpostToggle}
        >
             
        </div>
    );
};

export default Save;
