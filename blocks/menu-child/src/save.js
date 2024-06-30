import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;

const Save = ({ attributes }) => {
    const {
        uniqueId,
        parentClasses,
        brandPhoto,
        zoloId,
    } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(`zb-brand-item ${brandPhoto ? 'has-photo' : ''} ${uniqueId}`, classArrayToStr(parentClasses)),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            menu child save
        </div>
    );
};

export default Save;
