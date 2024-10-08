import { MediaUpload } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { Button, TextareaControl } from '@wordpress/components';

const { ImageAvatar, SimpleRangeControl, popoverHasAttrVal, RangeResetControl } = window.zoloModule;
const Inspector = ({ panelProps }) => {
    const { attributes, setAttributes } = panelProps;
    const { backgroundVideo = {}, advBtnBgbackgroundType } = attributes;
    const { id = '', url = '', falbackImageID = '', falbackImageURL = '' } = backgroundVideo;

    // Only display if background type is video
    // if (advBtnBgbackgroundType !== 'video') return null;

    // Handle video selection
    const handleVideoSelect = (media) => {
        if (media && media.url && media.id) {
            setAttributes({
                backgroundVideo: {
                    ...backgroundVideo,
                    id: media.id,
                    url: media.url,
                },
            });
        }
    };

    // Handle video URL change
    const handleImageSelect = (media) => {
        if (media && media.url && media.id) {
            setAttributes({
                backgroundVideo: {
                    ...backgroundVideo,
                    falbackImageURL: media.url,
                    falbackImageID: media.id,
                },
            });
        }
    };

    return (
        <>
            <h3>{__('Select Video', 'zoloblocks')}</h3>
            <MediaUpload
                onSelect={handleVideoSelect}
                allowedTypes={['video']}
                value={id}
                render={({ open }) => (
                    <Button className="components-button zolo-bg-video-placeholder" label={__('Upload Video', 'zoloblocks')} onClick={open}>
                        <>
                            {backgroundVideo?.url ? (
                                <video
                                    className="zolo-background-video"
                                    loop={true}
                                    muted={true}
                                    playsInline
                                    currentTime={2}
                                    preload="none"
                                    autoPlay={true}
                                    src={backgroundVideo?.url || ''}
                                ></video>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-video-plus"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
                                    <path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
                                    <path d="M7 12l4 0" />
                                    <path d="M9 10l0 4" />
                                </svg>
                            )}
                        </>
                    </Button>
                    // <Button className="components-button" label={__('Upload Video', 'zoloblocks')} icon="format-video" onClick={open}>
                    //     {__('Upload Video', 'zoloblocks')}
                    // </Button>
                )}
            />
            <h3>{__('Video Poster', 'zoloblocks')}</h3>
            <MediaUpload
                onSelect={handleImageSelect}
                allowedTypes={['image']}
                value={falbackImageID}
                render={({ open }) =>
                    !falbackImageURL && (
                        <>
                            <Button
                                className="zb-bg-control-img-btn components-button"
                                label={__('Upload Image', 'zoloblocks')}
                                icon="format-image"
                                onClick={open}
                            />
                            <span
                                style={{
                                    padding: '10px 0',
                                    display: 'block',
                                }}
                            ></span>
                        </>
                    )
                }
            />

            {falbackImageURL && (
                <>
                    <ImageAvatar
                        imageUrl={falbackImageURL}
                        imageId={falbackImageID}
                        onDeleteImage={() =>
                            setAttributes({
                                backgroundVideo: {
                                    ...backgroundVideo,
                                    falbackImageURL: '',
                                    falbackImageID: '',
                                },
                            })
                        }
                        onEditImage={({ id, url }) => {
                            setAttributes({
                                backgroundVideo: {
                                    ...backgroundVideo,
                                    falbackImageURL: url,
                                    falbackImageID: id,
                                },
                            });
                        }}
                    />
                </>
            )}
        </>
    );
};

export default Inspector;
