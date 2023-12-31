import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import GoogleMap from './render-maps';
const { classArrayToStr } = window.zoloModule;


const Save = ({ attributes }) => {
    console.log('attributes', attributes);
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
            <div className="zolo-google-map" data-language={attributes.language} data-zoom={attributes.zoom} data-apiKey={attributes.apiKey} data-latitude={attributes.latitude} data-longitude={attributes.longitude} data-height={attributes.height}></div>
            {/* <GoogleMap attributes={attributes} /> */}
        </div>
    );
};

export default Save;
