import iframeUrl from './iframeUrl';
const LightboxContent = (props) => {
    const { attributes } = props;
    const { contentType, contentImage, imageSize, uniqueId } = attributes;
    const VideoURL = iframeUrl(props);
    return (
        <>
            {contentType === 'image' && (
                <img
                    src={contentImage.sizes && contentImage.sizes[imageSize] ? contentImage.sizes[imageSize].url : contentImage.url}
                    alt={contentImage.alt}
                />
            )}
            {contentType !== 'image' && (
                <iframe className={`${uniqueId} zolo-content-iframe`} src={VideoURL} allowFullScreen={true} allow="autoplay; fullscreen" />
            )}
        </>
    );
};
export default LightboxContent;
