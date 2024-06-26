import { RawHTML } from '@wordpress/element';
const SvgComponent = ({ children, uniqueId, pathType }) => {
    // Ensure uniqueId is defined and unique for each instance
    // Generate random id if not provided
    let path;
    if (pathType == 'wave') {
        path = (
            <>
                <path
                    d="M0,42.2494C62.5,42.2494,62.5,0.25,125,0.25s62.5,41.9994,125,41.9994"
                    id={`MyPath-${uniqueId}`}
                    className="zolo-path"
                />
                <path d="M-41.6693,49.25" />
                <path d="M-208.3307,-6.75" />
            </>
        );
    } else if (pathType == 'arc') {
        path = <path d="M.25,125.25a125,125,0,0,1,250,0" id={`MyPath-${uniqueId}`} className="zolo-path" />;
    } else if (pathType == 'circle') {
        path = <path d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125" id={`MyPath-${uniqueId}`} className="zolo-path" />;
    } else if (pathType == 'line') {
        path = <path d="M 0 27 l 250 -22" id={`MyPath-${uniqueId}`} className="zolo-path" />;
    } else if (pathType == 'oval') {
        path = (
            <path
                d="M.25,62.875C.25,28.2882,56.2144.25,125.25.25s125,28.0382,125,62.625-55.9644,62.625-125,62.625S.25,97.4619.25,62.875"
                id={`MyPath-${uniqueId}`}
                className="zolo-path"
            />
        );
    } else if (pathType == 'spiral') {
        path = (
            <path
                d="M.1848,49.0219a149.3489,149.3489,0,0,1,210.9824-9.8266,119.479,119.479,0,0,1,7.8613,168.786A95.5831,95.5831,0,0,1,84,214.27a76.4666,76.4666,0,0,1-5.0312-108.023"
                id={`MyPath-${uniqueId}`}
                className="zolo-path"
            />
        );
    }
    return (
        <svg width="250.5" height="250.5" viewBox="0 0 250.5 250.5" xmlns="http://www.w3.org/2000/svg">
            {/* First path with dynamic id */}
            {path}
            {/* Render children if any */}
            {children}
        </svg>
    );
};

export default SvgComponent;
