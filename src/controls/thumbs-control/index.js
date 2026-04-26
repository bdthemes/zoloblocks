/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
const ThumbsControl = (props) => {
    const { label, value, options, onChange, itemsPerRow = 2 } = props;

    const handleMediaUpload = (option) => {
        if (option.value === 'custom') {
            const mediaUploader = wp.media({
                title: __('Select a custom shape', 'zoloblocks'),
                button: { text: __('Use this shape', 'zoloblocks') },
                multiple: false,
                library: { type: 'image/svg+xml' },
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
                    className={`zolo-thumbs-control-item ${value === option.value ? 'zolo-thumbs-active' : ''} ${option.pro ? 'zolo-thumbs-pro' : ''}`}
                >
                    {option.image && typeof option.image === 'string' ? (
                        <img src={option.image} alt={option.label || option.value} />
                    ) : null}
                    {option.image && typeof option.image !== 'string' ? option.image : ''}
                    {option.label ? <span>{option.label}</span> : ''}
                    {option.pro ? <span className="zolo-pro-badge">{__('Pro', 'zoloblocks')}</span> : ''}
                </button>
            ))}
        </div>
    );
};

export default ThumbsControl;
