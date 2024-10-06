import { MediaUpload } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { Button, TextareaControl } from '@wordpress/components';

const Inspector = ({ panelProps }) => {
    const { attributes, setAttributes } = panelProps;
    const { backgroundVideo = {}, advBtnBgbackgroundType } = attributes;
    const { id = '', url = '' } = backgroundVideo;

    // Only display if background type is video
    // if (advBtnBgbackgroundType !== 'video') return null;

    // Handle video selection
    const handleVideoSelect = (media) => {
        if (media && media.url && media.id) {
            setAttributes({
                backgroundVideo: {
                    id: media.id,
                    url: media.url,
                },
            });
        }
    };

    // Handle video URL change
    const handleVideoUrlChange = (newUrl) => {
        setAttributes({
            backgroundVideo: {
                ...backgroundVideo,
                url: newUrl.trim(),
            },
        });
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
            {url && <TextareaControl label={__('Video URL', 'zoloblocks')} value={url} onChange={handleVideoUrlChange} />}
            <p>{__('This is the video settings inspector', 'zoloblocks')}</p>
        </>
    );
};

export default Inspector;
