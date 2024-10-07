import { MediaUpload } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { Button, TextareaControl } from '@wordpress/components';

const { ImageAvatar, SimpleRangeControl, popoverHasAttrVal, RangeResetControl } = window.zoloModule;
const Inspector = ({ panelProps }) => {
    const { attributes, setAttributes } = panelProps;
    const { backgroundVideo = {}, advBtnBgbackgroundType } = attributes;
    const { id = '', url = '', falbackImageID='', falbackImageURL='' } = backgroundVideo;

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
            <MediaUpload
                onSelect={handleVideoSelect}
                allowedTypes={['video']}
                value={id}
                render={({ open }) => (
                    <Button className="components-button" label={__('Upload Video', 'zoloblocks')} icon="format-video" onClick={open}>
                        {__('Upload Video', 'zoloblocks')}
                    </Button>
                )}
            />
            <MediaUpload
                onSelect={handleImageSelect}
                type="image"
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
