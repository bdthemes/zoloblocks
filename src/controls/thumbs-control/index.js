/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

const ThumbsControl = (props) => {
    const { label, value, options, onChange, itemsPerRow = 2 } = props;

    // Handler to open WordPress Media Uploader
    const handleMediaUpload = (option) => {
        if (option.value === 'custom') {
            const mediaUploader = wp.media({
                title: __('Select a custom shape', 'zoloblocks'),
                button: { text: __('Use this shape', 'zoloblocks') },
                multiple: false,
                library: { type: 'image/svg+xml' }, // Only allow SVG files
            });

            mediaUploader.on('select', () => {
                const selectedImage = mediaUploader.state().get('selection').first().toJSON();
                if (selectedImage.mime === 'image/svg+xml') {
                    onChange({
                        value: 'custom',
                        image: selectedImage.url ? selectedImage.url : null,
                    });
                } else {
                    alert('Only SVG images are allowed.');
                }
            });

            mediaUploader.open();
        } else {
            // Handle other options (non-custom)
            onChange({
                value: option.value,
                image: null,
            });
        }
    };

    return (
        <div id={label} label={label} className={`zolo-thumbs-control zolo-thumbs-control-${itemsPerRow}`}>
            {options.map((option) => (
                <button
                    key={`zolo-thumbs-picker-${option.value}`}
                    onClick={() => handleMediaUpload(option)}
                    className={`zolo-thumbs-control-item ${value === option.value ? 'zolo-thumbs-active' : ''}`}
                >
                    {option.image && typeof option.image === 'string' ? (
                        <img src={option.image} alt={option.label || option.value} />
                    ) : null}
                    {option.image && typeof option.image !== 'string' ? option.image : ''}
                    {option.label ? <span>{option.label}</span> : ''}
                </button>
            ))}
        </div>
    );
};

export default ThumbsControl;
