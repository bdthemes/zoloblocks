/**
 * WordPress dependencies
 */

import { useBlockProps, MediaPlaceholder, MediaUpload, BlockControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { classArrayToStr, LottiePreview } = window.zoloModule;

import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import Inspector from './inspector';

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, isSelected } = props;
    const {
        uniqueId,
        parentClasses,
        fileURL,
        trigger,
        loop,
        direction,
        speed,
    } = attributes;

    const blockProps = useBlockProps({
        className: classnames(
            uniqueId,
            classArrayToStr(parentClasses),
        ),
    });
    const handleFileSelect = (file) => {
        setAttributes({
            fileId: file.id,
            fileURL: file.url,
        });
    };

    const handleURLSelect = (url) => {
        setAttributes({
            fileId: undefined,
            fileURL: url,
        });
    };

    const handleError = () => {
        setAttributes({
            fileId: undefined,
            fileURL: undefined,
        });
    };

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}

            {fileURL && (
                <BlockControls>
                    <ToolbarGroup>
                        <MediaUpload
                            icon="format-image"
                            labels={{
                                title: __('Lottie JSON', 'zoloblocks'),
                                name: __('lottie', 'zoloblocks'),
                                instructions: __('Upload a JSON file or pick one from your media library.', 'zoloblocks'),
                            }}
                            onSelect={handleFileSelect}
                            onSelectURL={handleURLSelect}
                            accept={['application/json']}
                            allowedTypes={['application/json']}
                            onError={handleError}
                            render={({ open }) => (
                                <ToolbarButton
                                    className="components-toolbar__control"
                                    label={__('Replace Lottie Files', 'zoloblocks')}
                                    icon="edit"
                                    onClick={open}
                                />
                            )}
                        />
                    </ToolbarGroup>
                </BlockControls>
            )}
            <div {...blockProps}>
                {fileURL ? (
                    <LottiePreview
                        key={JSON.stringify(`${fileURL}-${loop}-${direction}-${speed}-${trigger}`)}
                        url={fileURL}
                        trigger={trigger}
                        speed={speed}
                        loop={loop}
                        direction={direction}
                        isSelected={isSelected}
                    />
                ) : (
                    <MediaPlaceholder
                        icon="format-image"
                        labels={{
                            title: __('Lottie JSON', 'zoloblocks'),
                            name: __('lottie', 'zoloblocks'),
                            instructions: __('Upload a JSON file or pick one from your media library.', 'zoloblocks'),
                        }}
                        onSelect={handleFileSelect}
                        onSelectURL={handleURLSelect}
                        accept={['application/json']}
                        allowedTypes={['application/json']}
                        onError={handleError}
                    />
                )}
            </div>
        </>
    );
}
