import { InfoWindow, Marker } from '@vis.gl/react-google-maps';
import { RawHTML, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import sanitizeInfoHtml from './sanitize-info';

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
                    {/* info is HTML saved on the block by the post's editor and RawHTML
                        writes it with innerHTML, so it is sanitized first. */}
                    <RawHTML className="zolo-gmap-marker-info">{sanitizeInfoHtml(info)}</RawHTML>
                </InfoWindow>
            )}
        </div>
    );
};

export default ZoloMarker;
