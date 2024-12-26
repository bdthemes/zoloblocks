/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, MediaPlaceholder } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { handleUniqueId, classArrayToStr, LottiePreview } = window.zoloModule;

import { BLOCK_PREFIX } from './constants';
import Inspector from './inspector';

// import style
import Style from './style';

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, isSelected } = props;
    const {
        uniqueId,
        parentClasses,
        content,
        // text Gradient
        textGradientType,
        textGradientColorbackgroundType,
        fileURL,
        fileId,
        trigger,
        loop,
        direction,
        speed,
    } = attributes;


    const blockProps = useBlockProps({
        className: classnames(
            uniqueId,
            classArrayToStr(parentClasses),
            textGradientColorbackgroundType !== 'classic' ? textGradientType : ''
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
            <Style props={props} />
            <div {...blockProps}>
                {fileURL ? (
                    <LottiePreview
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
