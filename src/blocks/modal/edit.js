/**
 * WordPress dependencies
 */
import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { classArrayToStr, DisplayZoloIcon, SidebarOpener, sanitizeText, sanitizeUrl } = window.zoloModule;

import Inspector from './inspector';
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, clientId, isSelected } = props;
    const { uniqueId, preview, preset, label, parentClasses, iconType, icon, iconPosition, iconAnimation } = attributes;

    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    const blockProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    const openModal = () => {
        setIsOpen(true);
        // Small delay to ensure display: block is applied before opacity transition
        setTimeout(() => setIsAnimating(true), 10);
    };

    const closeModal = () => {
        setIsAnimating(false);
        // Wait for CSS transition (0.3s) to finish before removing from DOM
        setTimeout(() => setIsOpen(false), 300);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isOpen) {
                closeModal();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    const buttonLinkProps = {
        className: classnames(
            'zolo-modal-button',
            iconAnimation === '' ||
                iconAnimation === null ||
                iconAnimation === undefined ||
                (iconAnimation !== '' && (preset === 'button-1' || preset === 'button-3'))
                ? iconPosition
                : ''
        ),
        href: 'javascript:void(0)',
        title: sanitizeText(label),
        onClick: (e) => {
            e.preventDefault();
        },

        onClickCapture: () => {
            openModal();
        }
    };

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.button} alt={__('Button Preview', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                {renderHookBefore && renderHookBefore}
                <SidebarOpener clientId={clientId} />
                <div
                    className={classnames(
                        'zolo-block-wrapper',
                        'zolo-modal',
                        uniqueId,
                        `${preset !== '' && preset !== undefined && preset !== null && preset !== 'undefined' ? preset : ''}`,
                        `${iconAnimation !== '' && iconAnimation !== undefined && iconAnimation !== 'undefined' && preset !== 'button-1' && preset !== 'button-3' ? iconAnimation : ''}`
                    )}
                >
                    <a {...buttonLinkProps}>
                        {iconType !== 'iconOnly' && (
                            <RichText
                                tagName="span"
                                className={`zolo-modal-button-content`}
                                value={label}
                                onChange={(text) => setAttributes({ label: text })}
                                placeholder={__('Button Text', 'zoloblocks')}
                                allowedFormats={['zolo/dynamic-content']}
                            />
                        )}
                        {iconType !== 'none' && <DisplayZoloIcon icon={icon} />}
                        {preset === 'button-9' && (
                            <>
                                <div className="zolo-star zolo-star-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlSpace="preserve"
                                        version="1.1"
                                        style={{
                                            shapeRendering: 'geometricPrecision',
                                            textRendering: 'geometricPrecision',
                                            imageRendering: 'optimizeQuality',
                                            fillRule: 'evenodd',
                                            clipRule: 'evenodd',
                                        }}
                                        viewBox="0 0 784.11 815.53"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <defs />
                                        <g id="Layer_x0020_1">
                                            <metadata id="CorelCorpID_0Corel-Layer" />
                                            <path
                                                className="zolo-star-icon"
                                                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <div className="zolo-star zolo-star-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlSpace="preserve"
                                        version="1.1"
                                        style={{
                                            shapeRendering: 'geometricPrecision',
                                            textRendering: 'geometricPrecision',
                                            imageRendering: 'optimizeQuality',
                                            fillRule: 'evenodd',
                                            clipRule: 'evenodd',
                                        }}
                                        viewBox="0 0 784.11 815.53"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <defs />
                                        <g id="Layer_x0020_1">
                                            <metadata id="CorelCorpID_0Corel-Layer" />
                                            <path
                                                className="zolo-star-icon"
                                                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <div className="zolo-star zolo-star-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlSpace="preserve"
                                        version="1.1"
                                        style={{
                                            shapeRendering: 'geometricPrecision',
                                            textRendering: 'geometricPrecision',
                                            imageRendering: 'optimizeQuality',
                                            fillRule: 'evenodd',
                                            clipRule: 'evenodd',
                                        }}
                                        viewBox="0 0 784.11 815.53"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <defs />
                                        <g id="Layer_x0020_1">
                                            <metadata id="CorelCorpID_0Corel-Layer" />
                                            <path
                                                className="zolo-star-icon"
                                                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <div className="zolo-star zolo-star-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlSpace="preserve"
                                        version="1.1"
                                        style={{
                                            shapeRendering: 'geometricPrecision',
                                            textRendering: 'geometricPrecision',
                                            imageRendering: 'optimizeQuality',
                                            fillRule: 'evenodd',
                                            clipRule: 'evenodd',
                                        }}
                                        viewBox="0 0 784.11 815.53"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <defs />
                                        <g id="Layer_x0020_1">
                                            <metadata id="CorelCorpID_0Corel-Layer" />
                                            <path
                                                className="zolo-star-icon"
                                                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <div className="zolo-star zolo-star-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlSpace="preserve"
                                        version="1.1"
                                        style={{
                                            shapeRendering: 'geometricPrecision',
                                            textRendering: 'geometricPrecision',
                                            imageRendering: 'optimizeQuality',
                                            fillRule: 'evenodd',
                                            clipRule: 'evenodd',
                                        }}
                                        viewBox="0 0 784.11 815.53"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <defs />
                                        <g id="Layer_x0020_1">
                                            <metadata id="CorelCorpID_0Corel-Layer" />
                                            <path
                                                className="zolo-star-icon"
                                                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <div className="zolo-star zolo-star-6">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlSpace="preserve"
                                        version="1.1"
                                        style={{
                                            shapeRendering: 'geometricPrecision',
                                            textRendering: 'geometricPrecision',
                                            imageRendering: 'optimizeQuality',
                                            fillRule: 'evenodd',
                                            clipRule: 'evenodd',
                                        }}
                                        viewBox="0 0 784.11 815.53"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <defs />
                                        <g id="Layer_x0020_1">
                                            <metadata id="CorelCorpID_0Corel-Layer" />
                                            <path
                                                className="zolo-star-icon"
                                                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                                            />
                                        </g>
                                    </svg>
                                </div>
                            </>
                        )}
                        {preset === 'button-11' && (
                            <>
                                <span className="zolo-circle zolo-circle1"></span>
                                <span className="zolo-circle zolo-circle2"></span>
                                <span className="zolo-circle zolo-circle3"></span>
                                <span className="zolo-circle zolo-circle4"></span>
                                <span className="zolo-circle zolo-circle5"></span>
                            </>
                        )}
                    </a>

                    {/* Modal Overlay and Content */}
                    {isOpen && (
                        <div
                            className={classnames('zolo-modal-overlay', { 'is-open': isAnimating })}
                            onClick={(e) => {
                                // Only close if clicking exactly on the overlay background, not the content
                                if (e.target === e.currentTarget) {
                                    closeModal();
                                }
                            }}
                        >
                            <div className="zolo-modal-content">
                                <button
                                    className="zolo-modal-close"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        closeModal();
                                    }}
                                    aria-label={__('Close modal', 'zoloblocks')}
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                        <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z" />
                                    </svg>
                                </button>
                                <div className="zolo-modal-inner">
                                    <InnerBlocks templateLock={false} />
                                </div>
                            </div>
                        </div>
                    )}

                </div>
                {renderHookAfter && renderHookAfter}
            </div>
        </>
    );
}
