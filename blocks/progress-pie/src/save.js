import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr,} = window.zoloModule;

const Save = ({ attributes }) => {
    const { uniqueId, parentClasses, zoloId,
        progressValue,
        progressDuration,
        progressTitle ,
        toggleLabel,
        progressFillColor,
        progressFillSize,
        circleColor
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
            data-progressFillSize={progressFillSize}
            data-circleColor={circleColor}
        >
             
        </div>
    );
};

export default Save;
