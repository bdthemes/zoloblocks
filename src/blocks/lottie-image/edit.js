/**
 * WordPress dependencies
 */

import { useBlockProps, MediaPlaceholder, MediaUpload, BlockControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
/**
 * External dependencies
 */
import classnames from 'classnames';
import { useEffect, useRef } from '@wordpress/element';
import { useMergeRefs } from '@wordpress/compose';

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
    const { attributes, setAttributes, isSelected, clientId } = props;
    const { uniqueId, parentClasses, fileURL, trigger, loop, direction, speed } = attributes;
    const lottieRef = useRef(null);
    const isAnimationCompleteRef = useRef(true);

    const blockProps = useBlockProps({
        ref: useMergeRefs([lottieRef]),
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
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

    useEffect(() => {
        const lottiePlayer = lottieRef.current?.querySelector('lottie-player');

        const handleComplete = () => {
            isAnimationCompleteRef.current = true;
        };

        const handleClick = () => {
            if (lottiePlayer && (isAnimationCompleteRef.current || lottiePlayer.currentFrame === 0)) {
                lottiePlayer.stop();
                lottiePlayer.play();
                isAnimationCompleteRef.current = false;
            }
        };

        const checkLottieLoaded = () => {
            console.log('checkLottieLoaded');
            if (lottiePlayer?._lottie) {
                const { totalFrames, goToAndStop } = lottiePlayer._lottie;
                window.addEventListener('scroll', () => {
                    console.log('scroll');
                    const { top, bottom } = lottiePlayer.getBoundingClientRect();
                    const windowHeight = window.innerHeight;

                    const isInView = top < windowHeight && bottom > 0;
                    if (isInView) {
                        console.log('isInView');
                        const progress = Math.min(Math.max((window.scrollY + windowHeight - top) / (bottom - top + windowHeight), 0), 1);
                        let newFrame = Math.round(progress * totalFrames);
                        if (reverse) newFrame = totalFrames - newFrame;
                        if (newFrame < totalFrames) goToAndStop.call(lottiePlayer._lottie, newFrame, true);
                    }
                });
            } else {
                setTimeout(checkLottieLoaded, 100);
            }
        };
        const observer =
            trigger === 'viewport' &&
            new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        lottiePlayer.play();
                    } else {
                        lottiePlayer.pause();
                    }
                });
            });

        if (lottiePlayer) {
            if (trigger === 'click') {
                lottiePlayer.addEventListener('complete', handleComplete);
                lottieRef.current.addEventListener('click', handleClick);
            }

            if (trigger === 'viewport' && observer) {
                observer.observe(lottieRef.current);
            }
            // if (trigger === 'scroll') {
            //     checkLottieLoaded();
            // }
        }
    }, [trigger]);

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
