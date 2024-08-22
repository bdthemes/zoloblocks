import iframeUrl from "./iframeUrl";
    const LightboxContent = (props) => {
    const { attributes} = props;
        const {uniqueId, contentType, contentImage, imageSize } = attributes;
        const VideoURL = iframeUrl(props);
        console.log('VideoURL', VideoURL);
        return (
            <div id={`${uniqueId}`} className="zolo-lightbox-content">
                {contentType === 'image' && (
                    <img
                        src={contentImage.sizes && contentImage.sizes[imageSize] ? contentImage.sizes[imageSize].url : contentImage.url}
                        alt={contentImage.alt}
                    />
                )}
                {contentType !== 'image' && (
                    <iframe src={VideoURL} width="450" height="450" allowFullScreen={true} allow="autoplay; fullscreen" />
                )}
            </div>
        );
    };
export default LightboxContent;