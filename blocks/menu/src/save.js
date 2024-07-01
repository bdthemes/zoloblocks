import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
const { classArrayToStr } = window.zoloModule;
import classnames from 'classnames';

const Save = ({ attributes }) => {
    const { uniqueId, preset, parentClasses, zoloId } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(`zolo-menu ${uniqueId} ${preset}`, classArrayToStr(parentClasses)),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            <ul className="zolo-menu-inner-blocks">
                <InnerBlocks.Content />
            </ul>
        </div>
    );
};

export default Save;
