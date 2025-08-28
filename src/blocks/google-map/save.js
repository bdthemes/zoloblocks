import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';

const { classArrayToStr, sanitizeHtml } = window.zoloModule;

const Save = ({ attributes }) => {
    const {
        uniqueId,
        parentClasses,
        zoloId,
        draggable,
        showUIControls,
        uiControls,
        language,
        zoom,
        latitude,
        longitude,
        infoWindow,
        mapType,
        mapStyleType,
        mapId,
        mapStyleCodes,
        markers,
    } = attributes;

    const options = {};

    draggable !== undefined && (options.draggable = draggable);
    showUIControls !== undefined && (options.showUIControls = showUIControls);
    uiControls && Object.keys(uiControls).length > 0 && (options.uiControls = uiControls);
    language && (options.language = language);
    zoom && (options.zoom = zoom);
    latitude && (options.latitude = latitude);
    longitude && (options.longitude = longitude);
    infoWindow && (options.infoWindow = infoWindow);
    mapType && (options.mapType = mapType);
    mapStyleType && (options.mapStyleType = mapStyleType);
    mapId && (options.mapId = mapId);
    mapStyleCodes && (options.mapStyleCodes = mapStyleCodes);
    markers && markers.length > 0 && (options.markers = markers);

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
            {...(options &&
                Object.keys(options).length > 0 && {
                    'data-options': JSON.stringify(options) || '',
                })}
        ></div>
    );
};

export default Save;
