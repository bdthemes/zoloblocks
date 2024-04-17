import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const ImageSizes = ({ label = '', value, onChange }) => {
    const Dimensions = wp.data.select('core/editor').getEditorSettings().imageDimensions || {
        thumbnail: { width: 150, height: 150 },
        medium: { width: 300, height: 300 },
        large: { width: 1024, height: 1024 },
        full: { width: null, height: null },
    };

    // create an array of sizes from the object
    const SIZES = Object.keys(Dimensions).map((key) => {
        return {
            name: key.charAt(0).toUpperCase() + key.slice(1),
            slug: key,
            width: Dimensions[key].width,
            height: Dimensions[key].height,
        };
    });

    // check if { name: 'Full Size', slug: 'full' } exists in the array, if not add it
    const fullSize = SIZES.find((size) => size.slug === 'full');
    if (!fullSize) {
        SIZES.push({ name: 'Full Size', slug: 'full' });
    }

    return (
        <div className="zolo-control-container zolo-image-resolutions">
            <SelectControl
                label={label || __('Resolutions', 'zoloblocks')}
                value={value}
                options={
                    SIZES &&
                    SIZES.map((size) => {
                        return {
                            label: size.name + (size.width && size.height ? ` (${size.width}x${size.height})` : ''),

                            value: size.slug,
                        };
                    })
                }
                onChange={(v) => onChange(v)}
            />
        </div>
    );
};

export default ImageSizes;
