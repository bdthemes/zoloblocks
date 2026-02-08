import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button, BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { DeleteIcon, ReplaceIcon } from './icons';

const ZoloMediaUpload = ({
    label = '',
    value = null,
    onSelect,
}) => {
    const hasMedia = value && (value.url || value.source_url || value.id);
    const mediaUrl = value?.url || value?.source_url || '';
    const mediaId = value?.id || 0;

    const handleSelect = (media) => {
        onSelect(media);
    };

    return (
        <div className="zb-control__media">
            <BaseControl label={label}>
                <MediaUploadCheck>
                    <MediaUpload
                        onSelect={handleSelect}
                        allowedTypes={['image']}
                        value={mediaId}
                        render={({ open }) => (
                            <div className="zb-control__media-body">
                                {hasMedia ? (
                                    <div className="zb-control__media-preview">
                                        <img src={mediaUrl} alt="" />
                                        <Button
                                            className="zb-control__media-delete"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleSelect(null);
                                            }}
                                        >
                                            <DeleteIcon />
                                        </Button>
                                        <Button
                                            className="zb-control__media-replace"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                open();
                                            }}
                                        >
                                            <ReplaceIcon />
                                            {__('Replace', 'zoloblocks')}
                                        </Button>
                                    </div>
                                ) : (
                                    <Button
                                        className="zb-control__media-add"
                                        onClick={open}
                                    >
                                        <span className="dashicons dashicons-format-image" />
                                    </Button>
                                )}
                            </div>
                        )}
                    />
                </MediaUploadCheck>
            </BaseControl>
        </div>
    );
};

export default ZoloMediaUpload;
