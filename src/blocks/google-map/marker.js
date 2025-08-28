import { InfoWindow, Marker } from '@vis.gl/react-google-maps';
import { RawHTML, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { sanitizeHtml } from '../../helpers/helper';

const ZoloMarker = ({ position, info }) => {
    const [open, setOpen] = useState(false);

    const handleMarkerClick = () => {
        setOpen(true);
    };

    const handleInfoWindowClose = () => {
        setOpen(false);
    };

    return (
        <div className="zolo-gmap-marker">
            <Marker position={position} onClick={handleMarkerClick} />
            {open && (
                <InfoWindow position={position} onCloseClick={handleInfoWindowClose}>
                    <RawHTML className="zolo-gmap-marker-info">{sanitizeHtml(info)}</RawHTML>
                </InfoWindow>
            )}
        </div>
    );
};

export default ZoloMarker;
