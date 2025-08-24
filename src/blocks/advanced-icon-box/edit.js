/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, BlockControls, MediaUpload, MediaPlaceholder } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';
/**
 * Internal depencencies
 */
const { DisplayZoloIcon, classArrayToStr, DynamicTag, SidebarOpener, ZoloToolbarButton, ZoloToolbarGroup, sanitizeUrl } = window.zoloModule;

import Inspector from './inspector';
import Style from './style';
import classNames from 'classnames';

export default function Edit(props) {
    const { attributes, setAttributes, isSelected, clientId } = props;
    const {
        uniqueId,
        preview,
        preset,
        parentClasses,
        titleTag,
        showButtonIcon,
        showButtonText,
        mainIcon,
        buttonIcon,
        showMainIcon,
        showHeading,
        showDesc,
        showButton,
        iconType,
        iconTypeImage,
        iconBoxTitle,
        iconBoxDescription,
        buttonText,
        buttonLink,
        globalLink,
        imageRes,
        //ribbon
        showRibbon,
        ribbonTitle,
        ribbonPosition,
        iconBoxDirection,
        iconBoxPresetThreeDirection,

        // animation
        animationType,
        animationPositionOne,
        animationPositionTwo,
    } = attributes;

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);
    // this useEffect is for creating a unique id for each block's unique className by a random unique number

    const blockProps = useBlockProps({
        className: classnames(
            uniqueId,
            classArrayToStr(parentClasses),
            'zolo-block-advanced-icon-box',
            preset,
            `${preset === 'style-2' ? iconBoxDirection : ''}`,
            `${preset === 'style-3' && iconType === 'image' ? iconBoxPresetThreeDirection : ''}`,
            `${(preset === 'style-1' || preset === 'style-2') && animationType ? `animation-${animationType}` : ''}`
        ),
    });

    const iconBoxLink = {
        tagName: globalLink === true ? 'div' : 'a',
        className: 'zolo-box-button',
        ...(globalLink !== true && {
            href: sanitizeUrl(buttonLink?.url) || sanitizeUrl('#'),
            target: buttonLink?.openInNewTab ? '_blank' : undefined,
            rel: buttonLink?.openInNewTab ? 'noopener noreferrer' : undefined,
            title: buttonText,
            onClick: (e) => e.preventDefault(),
        }),
    };

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.iconBox} alt={__('Icon Box Preview', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <BlockControls>
                {iconTypeImage && (
                    <>
                        <ZoloToolbarGroup>
                            {iconType === 'image' && (
                                <MediaUpload
                                    onSelect={(media) => {
                                        setAttributes({
                                            iconTypeImage: media,
                                        });
                                    }}
                                    allowedTypes={['image']}
                                    value={iconTypeImage && iconTypeImage.id}
                                    render={({ open }) => (
                                        <ZoloToolbarButton
                                            className="components-toolbar__control"
                                            label={__('Replace Photo', 'zoloblocks')}
                                            icon="edit"
                                            onClick={open}
                                        />
                                    )}
                                />
                            )}
                        </ZoloToolbarGroup>
                    </>
                )}
            </BlockControls>
            <div {...blockProps}>
                {renderHookBefore && renderHookBefore}
                <SidebarOpener clientId={clientId} />
                <div
                    className={classNames(
                        'zolo-block-item',
                        `${(preset === 'style-1' || preset === 'style-2') && animationType === 'style-1' ? `animation-${animationPositionOne}` : ''}`,
                        `${(preset === 'style-1' || preset === 'style-2') && animationType === 'style-2' ? `animation-${animationPositionTwo}` : ''}`
                    )}
                >
                    {showRibbon && ribbonTitle && (
                        <div className={`zolo-ribbon-btn ${ribbonPosition}`}>
                            <RichText tagName="span" value={ribbonTitle} onChange={(v) => setAttributes({ ribbonTitle: v })} />
                        </div>
                    )}
                    {showMainIcon && (
                        <div className={`zolo-block-icon-wrap`}>
                            {iconType == 'icon' ? (
                                <DisplayZoloIcon icon={mainIcon} />
                            ) : iconTypeImage ? (
                                <>
                                    <img
                                        src={
                                            iconTypeImage.sizes && iconTypeImage.sizes[imageRes]
                                                ? iconTypeImage.sizes[imageRes].url
                                                : iconTypeImage.url
                                        }
                                        alt={iconTypeImage.alt || 'Team Member'}
                                    />
                                </>
                            ) : (
                                <MediaPlaceholder
                                    icon="format-image"
                                    labels={{
                                        title: __('Add Photo', 'zoloblocks'),
                                        instructions: '',
                                    }}
                                    onSelect={(media) => {
                                        setAttributes({
                                            iconTypeImage: media,
                                        });
                                    }}
                                    accept="image/*"
                                    allowedTypes={['image']}
                                />
                            )}
                        </div>
                    )}
                    <div className="zolo-block-body-content">
                        {showHeading && (
                            <RichText
                                className={`zolo-block-title`}
                                tagName={titleTag}
                                value={iconBoxTitle}
                                onChange={(text) =>
                                    setAttributes({
                                        iconBoxTitle: text,
                                    })
                                }
                                placeholder={__('The Title Goes Here', 'zoloblocks')}
                            />
                        )}
                        {showDesc && (
                            <RichText
                                className={`zolo-block-desc`}
                                tagName="div"
                                value={iconBoxDescription}
                                onChange={(text) =>
                                    setAttributes({
                                        iconBoxDescription: text,
                                    })
                                }
                                placeholder={__('The Description Goes Here', 'zoloblocks')}
                            />
                        )}
                        {showButton && (
                            <div className={`zolo-block-link-btn`}>
                                <DynamicTag {...iconBoxLink}>
                                    {showButtonText && (
                                        <RichText
                                            value={buttonText}
                                            tagName="span"
                                            onChange={(text) =>
                                                setAttributes({
                                                    buttonText: text,
                                                })
                                            }
                                            placeholder={__('Read More', 'zoloblocks')}
                                            allowedFormats={['core/bold', 'core/italic', 'zolo/dynamic-content']}
                                        />
                                    )}
                                    {showButtonIcon && <DisplayZoloIcon icon={buttonIcon} />}
                                </DynamicTag>
                            </div>
                        )}
                    </div>
                </div>
                {renderHookAfter && renderHookAfter}
            </div>
        </>
    );
}
