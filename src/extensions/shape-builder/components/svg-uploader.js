import { __ } from "@wordpress/i18n";
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { RawHTML } from '@wordpress/element';
import { trash } from '@wordpress/icons';
import classnames from "classnames";
const ShapeBuilderSvgUploader = ({ value, onChange }) => {
    const { ZoloButton } = window.zoloModule;
    const handleSVGUpload = (media) => {
        if (media?.url) {
            fetch(media?.url)
                .then((response) => response.text())
                .then((data) => {
                    onChange({
                        id: media?.id,
                        svg: data,
                    })
                })
                .catch((error) => {
                    console.error('Error fetching SVG data:', error);
                });
        }
    };
    return (
        <MediaUploadCheck>
            <MediaUpload
                onSelect={handleSVGUpload}
                allowedTypes={['image/svg+xml']}
                value={value?.id}
                render={({ open }) => (
                    <ZoloButton
                        className={classnames("zolo-image-upload-btn", {
                            "zolo-image-upload-btn--has-image": value?.svg,
                        })}
                        onClick={open}
                    >
                        {value?.svg ? (
                            <>
                                <span
                                    className="zolo-image-upload-btn__remove"
                                    role="button"
                                    aria-label={__('Remove SVG', 'zoloblocks')}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onChange({ id: null, svg: null })
                                    }}
                                >{trash}</span>
                                <RawHTML className="zolo-image-upload-btn__image">{value?.svg}</RawHTML>
                            </>
                        ) : (
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                                <path
                                    fill="#fff"
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
                                />
                            </svg>
                        )}
                    </ZoloButton>
                )}
            />
        </MediaUploadCheck>
    )
};

export default ShapeBuilderSvgUploader;