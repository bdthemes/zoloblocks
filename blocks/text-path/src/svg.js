const SvgComponent = ({ children, uniqueId, pathType }) => {
    // Ensure uniqueId is defined and unique for each instance
    // Generate random id if not provided
    let path, viewBox, height, width;
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
        viewBox = '0 0 250 42.4994';
        height = '42.4994';
        width = '250';
    } else if (pathType == 'arc') {
        path = <path d="M.25,125.25a125,125,0,0,1,250,0" id={`MyPath-${uniqueId}`} className="zolo-path" />;
        viewBox = '0 0 250.5 125.25';
        height = '125.25';
        width = '250.5';
    } else if (pathType == 'circle') {
        path = <path d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125" id={`MyPath-${uniqueId}`} className="zolo-path" />;
        viewBox = '0 0 250.5 250.5';
        height = '250.5';
        width = '250.5';
    } else if (pathType == 'line') {
        path = <path d="M 0 27 l 250 -22" id={`MyPath-${uniqueId}`} className="zolo-path" />;
        viewBox = '0 0 250 22';
        height = '22';
        width = '250';
    } else if (pathType == 'oval') {
        path = (
            <path
                d="M.25,62.875C.25,28.2882,56.2144.25,125.25.25s125,28.0382,125,62.625-55.9644,62.625-125,62.625S.25,97.4619.25,62.875"
                id={`MyPath-${uniqueId}`}
                className="zolo-path"
            />
        );
        viewBox = '0 0 250.5 125.75';
        height = '125.75';
        width = '250.5';
    } else if (pathType == 'spiral') {
        path = (
            <path
                d="M.1848,49.0219a149.3489,149.3489,0,0,1,210.9824-9.8266,119.479,119.479,0,0,1,7.8613,168.786A95.5831,95.5831,0,0,1,84,214.27a76.4666,76.4666,0,0,1-5.0312-108.023"
                id={`MyPath-${uniqueId}`}
                className="zolo-path"
            />
        );
        viewBox = '0 0 250.4348 239.4454';
        height = '239.4454';
        width = '250.4348';
    } else if (pathType == 'underCircle') {
        path = (
            <path
                id={`MyPath-${uniqueId}`}
                className="zolo-path"
                d="m185.61,22.44h-31.22c-44.32,0-85.26,23.64-107.42,62.02l-15.61,27.03c-22.16,38.38-22.16,85.66,0,124.04l15.61,27.03c22.16,38.38,63.11,62.02,107.42,62.02h31.22c44.32,0,85.26-23.64,107.42-62.02l15.61-27.03c22.16-38.38,22.16-85.66,0-124.04l-15.61-27.03c-22.16-38.38-63.11-62.02-107.42-62.02Z"
            />
        );
        viewBox = '0 0 342 352';
    }
    return (
        <svg viewBox={viewBox} height={height} width={width}>
            {/* First path with dynamic id */}
            {path}
            {/* Render children if any */}
            {children}
        </svg>
    );
};

export default SvgComponent;
