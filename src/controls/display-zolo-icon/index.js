import { RawHTML } from '@wordpress/element';

const DisplayZoloIcon = ({ icon }) => {
    return <RawHTML children={icon} className="zolo__display-icon" />;
};

export default DisplayZoloIcon;
