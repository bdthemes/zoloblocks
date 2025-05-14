const { classArrayToStr } = window.zoloModule;
import classnames from 'classnames';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
const Save = (props) => {
    const { attributes, className } = props;
    const { uniqueId, parentClasses, preset, zoloId } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(className, `${uniqueId} zolo-${preset}`, classArrayToStr(parentClasses)),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            <InnerBlocks.Content />
        </div>
    );
};

export default Save;
