import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
const { classArrayToStr, LottiePreview } = window.zoloModule;

const Save = (props) => {
    const { attributes } = props;
    const { uniqueId, parentClasses, fileURL, trigger, loop, direction, speed, isSelected } = attributes;
    const settings = {
       trigger,
    }
    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
        'data-settings': JSON.stringify(settings),
    });

    return (
        <div {...blockProps}>
            {fileURL && (
                <LottiePreview url={fileURL} trigger={trigger} speed={speed} loop={loop} direction={direction} isSelected={true} />
            )}
        </div>
    );
};

export default Save;
