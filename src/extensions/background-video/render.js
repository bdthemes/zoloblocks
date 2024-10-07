/**
 * WordPress dependencies
 */

export default function Render({ panelProps }) {
    const { attributes } = panelProps;
    const { backgroundVideo, uniqueId } = attributes;
    // Only display if background type is video

    return (
        <>
            <div
                className={`zolo-bgv-container zolo-bgv-${uniqueId}`}
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                }}
            >
                {/* <div className="zolo-bgv-embed"></div> */}
                <video
                    className="zolo-bgv-hosted zolo-html5-video"
                    loop={true}
                    muted={true}
                    playsInline
                    preload="none"
                    autoPlay={true} // This is the only attribute that is not in the attributes object
                    poster={backgroundVideo?.falbackImageURL || ''}
                    src={backgroundVideo?.url || ''}
                ></video>
            </div>
        </>
    );
}
