import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';

const { classArrayToStr } = window.zoloModule;

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

    const options = {
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
    };

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
            data-options={
                JSON.stringify({
                    ...options,
                }) || ''
            }
        ></div>
    );
};

export default Save;
