import { useState } from 'react';

/**
 * WordPress dependencies
 */

const ThumbsControl = (props) => {
    console.log(props);
    const { label, value, options, onChange, itemsPerRow = 2 } = props;
    const [customImage, setCustomImage] = useState('');

    // Handler to open WordPress Media Uploader
const handleMediaUpload = (option) => {
    if (option.value === 'custom') {
        const mediaUploader = wp.media({
            title: 'Choose an SVG Shape',
            button: { text: 'Use this shape' },
            multiple: false, // Allow only a single image to be selected
            library: { type: 'image/svg+xml' }, // Only allow SVG files
        });

        mediaUploader.on('select', () => {
            const selectedImage = mediaUploader.state().get('selection').first().toJSON();

            if (selectedImage.mime === 'image/svg+xml') {
                // setCustomImage(selectedImage.url); // Store the selected image URL
                onChange(selectedImage.url); // Update the parent with the selected image URL
            } else {
                alert('Only SVG images are allowed.');
            }
        });

        mediaUploader.open();
    } else {
        onChange(option.value); // Handle other options
    }
};



    return (
        <div id={label} label={label} className={`zolo-thumbs-control zolo-thumbs-control-${itemsPerRow}`}>
            {options.map((option) => (
                <button
                    key={`zolo-thumbs-picker-${option.value}`}
                    onClick={() => handleMediaUpload(option)} // Trigger media uploader on custom option
                    className={`zolo-thumbs-control-item ${value === option.value ? 'zolo-thumbs-active' : ''}`}
                >
                    {option.image && typeof option.image === 'string' ? (
                        <img src={option.image} alt={option.label || option.value} />
                    ) : null}
                    {option.image && typeof option.image !== 'string' ? option.image : ''}
                    {option.label ? <span>{option.label}</span> : ''}
                </button>
            ))}
            {customImage && <img src={customImage} alt="Custom preview" className="zolo-custom-image-preview" />}
        </div>
    );
};

export default ThumbsControl;
