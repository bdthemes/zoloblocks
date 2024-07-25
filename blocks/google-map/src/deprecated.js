import attributes from './attributes';
import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';

const { classArrayToStr } = window.zoloModule;

const deprecated = {
    attributes: {
        ...attributes,
        mapStyleType: {
            type: 'string',
            default: 'default',
        },
        zoom: {
            type: 'number',
            default: 16,
        },
        latitude: {
            type: 'number',
            default: 24.8233495,
        },
        longitude: {
            type: 'number',
            default: 89.3841374,
        },
        mapType: {
            type: 'string',
            default: 'roadmap',
        },
        language: {
            type: 'string',
            default: 'en',
        },
        showUIControls: {
            type: 'boolean',
            default: true,
        },
        uiControls: {
            type: 'object',
            default: {
                fullscreenControl: true,
                mapTypeControl: true,
                scaleControl: true,
                streetViewControl: true,
                zoomControl: true,
            },
        },
        draggable: {
            type: 'boolean',
            default: true,
        },
        infoWindow: {
            type: 'string',
            default:
                '<a href="https://bdthemes.com"><b>BdThemes</b></a> is the sole owner of market-leading addons for #1 Elementor such as Element Pack Pro, Prime Slider, Ultimate Post Kit, Ultimate Store Kit, Pixel Gallery, and more useful plugins.',
        },
    },
    save: ({ attributes }) => {
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
    },
};

export default deprecated;
