import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import GoogleMap from './render-maps';
const { classArrayToStr } = window.zoloModule;


const Save = ({ attributes }) => {
    const { uniqueId, parentClasses, apiKey, language, position, zoom, titlePosition, zoloId } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            {/* <GoogleMap attributes={attributes} /> */}
        </div>
    );
};

export default Save;
