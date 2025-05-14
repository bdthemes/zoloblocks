import { MediaUpload } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { Button, TextareaControl } from '@wordpress/components';

import { BaseControl } from '../../components/Core';

const { ImageAvatar} = window.zoloModule;
const Inspector = ({ panelProps }) => {
    const { attributes, setAttributes } = panelProps;
    const { backgroundVideo = {} } = attributes;
    const { id = '', url = '', falbackImageID = '', falbackImageURL = '' } = backgroundVideo;

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
            <BaseControl label={__('Select Video', 'zoloblocks')} className="zolo-flex-col-control">
                {id ? (
                    <ImageAvatar
                        imageUrl={backgroundVideo && backgroundVideo.url}
                        onDeleteImage={() =>
                            setAttributes({
                                backgroundVideo: {
                                    ...backgroundVideo,
                                    id: '',
                                    url: '',
                                },
                            })
                        }
                        allowedTypes={['video']}
                        imageId={backgroundVideo && backgroundVideo.id}
                        onEditImage={(media) => {
                            setAttributes({
                                backgroundVideo: {
                                    ...backgroundVideo,
                                    id: media.id,
                                    url: media.url,
                                },
                            });
                        }}
                    />
                ) : (
                    <MediaUpload
                        onSelect={handleVideoSelect}
                        allowedTypes={['video']}
                        value={id}
                        render={({ open }) => (
                            <Button className="zolo-image-upload-btn" onClick={open}>
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                                    <path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408" />
                                </svg>
                                {__(' Upload Video', 'zoloblocks')}
                            </Button>
                        )}
                    />
                )}
            </BaseControl>

            <BaseControl label={__('Poster (optional)', 'zoloblocks')} className="zolo-flex-col-control">
                {falbackImageURL ? (
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
                ) : (
                    <MediaUpload
                        onSelect={handleImageSelect}
                        allowedTypes={['image']}
                        value={falbackImageID}
                        render={({ open }) => (
                            <Button className="zolo-image-upload-btn" onClick={open}>
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                                    <path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408" />
                                </svg>
                                {__(' Upload Image', 'zoloblocks')}
                            </Button>
                        )}
                    />
                )}
            </BaseControl>
        </>
    );
};

export default Inspector;
