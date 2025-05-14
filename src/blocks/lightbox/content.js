import iframeUrl from './iframeUrl';
const LightboxContent = (props) => {
    const { attributes } = props;
    const { contentType, contentImage, imageSizeLightbox, uniqueId } = attributes;
    const VideoURL = iframeUrl(props);
    return (
        <>
            {contentType === 'image' && (
                <img
                    className={`${uniqueId} zolo-lightbox-image`}
                    src={
                        contentImage.sizes && contentImage.sizes[imageSizeLightbox]
                            ? contentImage.sizes[imageSizeLightbox].url
                            : contentImage.url
                    }
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
