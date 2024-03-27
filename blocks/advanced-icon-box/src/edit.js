/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, BlockControls, MediaUpload, MediaPlaceholder } from '@wordpress/block-editor';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
/**
 * Internal depencencies
 */
const { DisplayZoloIcon, classArrayToStr, DynamicTag } = window.zoloModule;

import Inspector from './inspector';
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, isSelected } = props;
    const {
        uniqueId,
        preview,
        preset,
        parentClasses,
        titleTag,
        showButtonIcon,
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
    } = attributes;
    // this useEffect is for creating a unique id for each block's unique className by a random unique number

    const blockProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses), 'zolo-block-advanced-icon-box', preset, iconBoxDirection),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.iconBox} alt={__('Icon Box Preview', 'zolo-blocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <BlockControls>
                {iconTypeImage && (
                    <Fragment>
                        <ToolbarGroup>
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
                                        <ToolbarButton
                                            className="components-toolbar__control"
                                            label={__('Replace Photo', 'zolo-blocks')}
                                            icon="edit"
                                            onClick={open}
                                        />
                                    )}
                                />
                            )}
                        </ToolbarGroup>
                    </Fragment>
                )}
            </BlockControls>
            <div {...blockProps}>
                <div className="zolo-block-item">
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
                                        title: __('Add Photo', 'zolo-blocks'),
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
                                placeholder={__('The Title Goes Here', 'zolo-blocks')}
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
                                placeholder={__('The Description Goes Here..', 'zolo-blocks')}
                            />
                        )}
                        {showButton && (
                            <div className={`zolo-block-link-btn`}>
                                <DynamicTag
                                    tagName={globalLink === true ? 'div' : 'a'}
                                    className="zolo-box-button"
                                    {...(globalLink !== true && {
                                        href: buttonLink && buttonLink.url,
                                        target: buttonLink && buttonLink.openInNewTab && '_blank',
                                        rel: buttonLink && buttonLink.openInNewTab && 'noopener noreferrer',
                                        title: buttonText,
                                    })}
                                >
                                    <RichText
                                        value={buttonText}
                                        tagName="span"
                                        onChange={(text) =>
                                            setAttributes({
                                                buttonText: text,
                                            })
                                        }
                                        placeholder={__('Read More', 'zolo-blocks')}
                                        allowedFormats={['core/bold', 'core/italic']}
                                    />
                                    {showButtonIcon && <DisplayZoloIcon icon={buttonIcon} />}
                                </DynamicTag>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
