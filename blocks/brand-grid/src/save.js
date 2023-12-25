import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
const { classArrayToStr } = window.zoloModule;
import classnames from 'classnames';

const Save = ({ attributes }) => {
    const { uniqueId, preset, parentClasses, zoloId } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(`zb-brand-grid-wrap ${uniqueId} ${preset}`, classArrayToStr(parentClasses)),
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
